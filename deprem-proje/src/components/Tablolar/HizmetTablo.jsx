import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function HizmetTablo() {
  const url = "http://localhost:9000/api/hizmet";
  const url2 = "http://localhost:9000/api/merkez";

  const [data, setData] = useState([]);
  const [merkez, setMerkez] = useState([]);

  useEffect(() => {
    getData();
    getMerkezler();
  }, []);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };

  const getMerkezler = () => {
    fetch(url2)
      .then((resp) => resp.json())
      .then((resp) => setMerkez(resp));
  };

  let merkezID = 0;

  let merkezName = "";

  const columns = [
    {
      title: "Sisteme Giriş Tarihi",
      field: "hizmet_created_at",
      editable: false,
    },
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
      title: "Merkez İsim",
      field: "merkez_isim",
      editComponent: ({ value, onChange }) => (
        <select
          onChange={(e) => {
            merkezName = e.target.value;
            merkezID = e.target.selectedIndex;
            console.log(e.target);
            onChange(e.target.value);
          }}
        >
          <option selected value={value}>
            {value}
          </option>
          {merkez.map(
            (item) =>
              item !== value && (
                <option key={item.merkez_id} value={item.merkez_isim}>
                  {item.merkez_isim}
                </option>
              )
          )}
        </select>
      ),
      validate: (rowData) =>
        rowData.merkez_isim === undefined || rowData.merkez_isim === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez ID",
      field: "merkez_id",
      editable: false,
      hidden: true,
      editComponent: ({ value, onChange }) => (
        <select
          onChange={(e) => {
            merkezID = e.target.value;
            onChange(e.target.value);
          }}
        >
          <option selected value={value}>
            {value}
          </option>
          {merkez.map(
            (item) =>
              item !== value && (
                <option key={item.merkez_isim} value={item.merkez_id}>
                  {item.merkez_isim}
                </option>
              )
          )}
        </select>
      ),
      validate: (rowData) =>
        rowData.merkez_isim === undefined || rowData.merkez_isim === ""
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
        options={{
          addRowPosition: "first",
          headerStyle: {
            backgroundColor: "#019ec9",
            color: "#FFF",
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              let a = {
                hizmet_id: newData.hizmet_id,
                hizmet_created_at: newData.hizmet_created_at,
                donem: newData.donem,
                hizmet_tipi: newData.hizmet_tipi,
                erisilen_kisi_sayisi: newData.erisilen_kisi_sayisi,
                merkez_isim: merkezName,
                merkez_id: merkezID,
              };
              //Backend call
              fetch(url, {
                method: "POST",
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
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              let a = {
                hizmet_id: newData.hizmet_id,
                hizmet_created_at: newData.hizmet_created_at,
                donem: newData.donem,
                hizmet_tipi: newData.hizmet_tipi,
                erisilen_kisi_sayisi: newData.erisilen_kisi_sayisi,
                merkez_isim:
                  merkezName == "" ? oldData.merkez_isim : merkezName,
                merkez_id: merkezID == 0 ? oldData.merkez_id : merkezID,
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
