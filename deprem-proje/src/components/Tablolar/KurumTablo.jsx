import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function KurumTablo() {
  const url = "http://localhost:9000/api/kurum";
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
      title: "Kurum Adı",
      field: "kurum_adi",
      validate: (rowData) =>
        rowData.kurum_adi === undefined || rowData.kurum_adi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Kurum Adı Kısaltma",
      field: "kurum_adi_kisaltma",
      validate: (rowData) =>
        rowData.kurum_adi_kisaltma === undefined ||
        rowData.kurum_adi_kisaltma === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Kurum Açıklaması",
      field: "kurum_aciklama",
    },
    {
      title: "Kurum Linki",
      field: "kurum_link",
    },
    {
      title: "Kurum Logo Linki",
      field: "kurum_logo_link",
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
        title="Kurum Tablosu"
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
                kurum_id: newData.kurum_id,
                kurum_adi: newData.kurum_adi,
                kurum_adi_kisaltma: newData.kurum_adi_kisaltma,
                kurum_aciklama: newData.kurum_aciklama,
                kurum_link: newData.kurum_link,
                kurum_logo_link: newData.kurum_logo_link,
                merkez_id: newData.merkez_id,
              };
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.kurum_id, {
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
              fetch(url + "/" + oldData.kurum_id, {
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
