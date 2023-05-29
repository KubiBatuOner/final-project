import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function EnvanterTablo() {
  const url = "http://localhost:9000/api/envanter";
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
      title: "Envanter Adı",
      field: "envanter_adi",
      validate: (rowData) =>
        rowData.envanter_adi === undefined || rowData.envanter_adi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Envanter Türü",
      field: "envanter_tur",
      validate: (rowData) =>
        rowData.envanter_tur === undefined || rowData.envanter_tur === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Envanter Açıklama",
      field: "envanter_aciklama",
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
        title="Envanter Tablosu"
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
                envanter_id: newData.envanter_id,
                envanter_adi: newData.envanter_adi,
                envanter_tur: newData.envanter_tur,
                envanter_aciklama: newData.envanter_aciklama,
                merkez_id: newData.merkez_id,
              };
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.envanter_id, {
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
              fetch(url + "/" + oldData.envanter_id, {
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
