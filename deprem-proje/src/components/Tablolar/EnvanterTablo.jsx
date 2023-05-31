import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function EnvanterTablo() {
  const url = "http://localhost:9000/api/envanter";
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
      title: "Envanter Adedi",
      field: "envanter_adet",
      validate: (rowData) =>
        rowData.envanter_adet === undefined || rowData.envanter_adet === ""
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
        title="Envanter Tablosu"
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
                envanter_id: newData.envanter_id,
                envanter_adi: newData.envanter_adi,
                envanter_tur: newData.envanter_tur,
                envanter_aciklama: newData.envanter_aciklama,
                envanter_adet: newData.envanter_adet,
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
                envanter_id: newData.envanter_id,
                envanter_adi: newData.envanter_adi,
                envanter_tur: newData.envanter_tur,
                envanter_aciklama: newData.envanter_aciklama,
                envanter_adet: newData.envanter_adet,
                merkez_isim:
                  merkezName == "" ? oldData.merkez_isim : merkezName,
                merkez_id: merkezID == 0 ? oldData.merkez_id : merkezID,
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
