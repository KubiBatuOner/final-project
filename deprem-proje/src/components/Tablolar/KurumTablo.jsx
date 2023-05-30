import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function KurumTablo() {
  const url = "http://localhost:9000/api/kurum";
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
        title="Kurum Tablosu"
        columns={columns}
        data={data}
        options={{ addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              let a = {
                kurum_id: newData.kurum_id,
                kurum_adi: newData.kurum_adi,
                kurum_adi_kisaltma: newData.kurum_adi_kisaltma,
                kurum_aciklama: newData.kurum_aciklama,
                kurum_link: newData.kurum_link,
                kurum_logo_link: newData.kurum_logo_link,
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
                kurum_id: newData.kurum_id,
                kurum_adi: newData.kurum_adi,
                kurum_adi_kisaltma: newData.kurum_adi_kisaltma,
                kurum_aciklama: newData.kurum_aciklama,
                kurum_link: newData.kurum_link,
                kurum_logo_link: newData.kurum_logo_link,
                merkez_isim:
                  merkezName == "" ? oldData.merkez_isim : merkezName,
                merkez_id: merkezID == 0 ? oldData.merkez_id : merkezID,
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
