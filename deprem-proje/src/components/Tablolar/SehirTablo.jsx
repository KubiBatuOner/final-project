import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function SehirTablo() {
  const url = "http://localhost:9000/api/sehir";
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
      title: "Şehir İsim",
      field: "sehir_isim",
      validate: (rowData) =>
        rowData.sehir_isim === undefined || rowData.sehir_isim === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Şehir Açıklama",
      field: "sehir_aciklama",
    },
    {
      title: "Şehir Merkezi X Koordinatı",
      field: "sehir_merkezi_koordinati_x",
      validate: (rowData) =>
        rowData.sehir_merkezi_koordinati_x === undefined ||
        rowData.sehir_merkezi_koordinati_x === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Şehir Merkezi Y Koordinatı",
      field: "sehir_merkezi_koordinati_y",
      validate: (rowData) =>
        rowData.sehir_merkezi_koordinati_y === undefined ||
        rowData.sehir_merkezi_koordinati_y === ""
          ? "Zorunlu"
          : true,
    },
  ];
  return (
    <div className="App2">
      <MaterialTable
        title="Şehir Tablosu"
        columns={columns}
        data={data}
        options={{
          addRowPosition: "first",
          headerStyle: {
            backgroundColor: "#000C5C",
            color: "#FFF",
          },
        }}
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
                sehir_id: newData.sehir_id,
                sehir_isim: newData.sehir_isim,
                sehir_aciklama: newData.sehir_aciklama,
                sehir_merkezi_koordinati_x: newData.sehir_merkezi_koordinati_x,
                sehir_merkezi_koordinati_y: newData.sehir_merkezi_koordinati_y,
              };
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.sehir_id, {
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
              fetch(url + "/" + oldData.sehir_id, {
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
