import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function HizmetTablo() {
  const url = "http://localhost:9000/api/hizmet";
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "Hizmet Dönemi",
      field: "donem",
      validate: (rowData) =>
        rowData.donem === undefined || rowData.donem === "" ? "Zorunlu" : true,
    },
    {
      title: "Hizmet Tipi",
      field: "hizmet_tipi",
      validate: (rowData) =>
        rowData.hizmet_tipi === undefined || rowData.hizmet_tipi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Erişilen Kişi Sayısı",
      field: "erisilen_kisi_sayisi",
      validate: (rowData) =>
        rowData.erisilen_kisi_sayisi === undefined ||
        rowData.erisilen_kisi_sayisi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez ID",
      field: "merkez_id",
      validate: (rowData) =>
        rowData.merkez_id === undefined || rowData.merkez_id === ""
          ? "Zorunlu"
          : true,
    },
  ];
  return (
    <div className="App2">
      <MaterialTable
        title="Hizmet Tablosu"
        columns={columns}
        data={data}
        options={{ addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url, {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(newData),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              let a = {
                hizmet_id: newData.hizmet_id,
                donem: newData.donem,
                hizmet_tipi: newData.hizmet_tipi,
                erisilen_kisi_sayisi: newData.erisilen_kisi_sayisi,
                merkez_id: newData.merkez_id,
              };
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.hizmet_id, {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(a),
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url + "/" + oldData.hizmet_id, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((resp) => resp.json())
                .then((resp) => {
                  getData();
                  resolve();
                });
            }),
        }}
      />
    </div>
  );
}
