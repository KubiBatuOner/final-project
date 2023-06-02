import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";
import { tr } from "date-fns/locale";

export default function MerkezTablo() {
  const url = "http://localhost:9000/api/merkez";
  const url2 = "http://localhost:9000/api/sehir";

  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    getData();
    getSehirler();
  }, []);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };

  const getSehirler = () => {
    fetch(url2)
      .then((resp) => resp.json())
      .then((resp) => setCity(resp));
  };

  let sehirID = 0;

  let sehirName = "";

  const columns = [
    {
      title: "Merkez İsmi",
      field: "merkez_isim",
      validate: (rowData) =>
        rowData.merkez_isim === undefined || rowData.merkez_isim === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez Telefon1",
      field: "merkez_telefon1",
      validate: (rowData) =>
        rowData.merkez_telefon1 === undefined || rowData.merkez_telefon1 === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez Telefon2",
      field: "merkez_telefon2",
    },
    {
      title: "Merkez Adres",
      field: "merkez_adres",
      validate: (rowData) =>
        rowData.merkez_adres === undefined || rowData.merkez_adres === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez Koordinatı X",
      field: "merkez_koordinati_x",
      validate: (rowData) =>
        rowData.merkez_koordinati_x === undefined ||
        rowData.merkez_koordinati_x === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Merkez Koordinatı Y",
      field: "merkez_koordinati_y",
      validate: (rowData) =>
        rowData.merkez_koordinati_y === undefined ||
        rowData.merkez_koordinati_y === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Hizmet Başlangıç Tarihi",
      field: "hizmet_baslangic_tarihi",
      type: "date",
      dateSetting: { locale: tr },
      validate: (rowData) =>
        rowData.hizmet_baslangic_tarihi === undefined ||
        rowData.hizmet_baslangic_tarihi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Şehir İsim",
      field: "sehir_isim",
      editComponent: ({ value, onChange }) => (
        <select
          onChange={(e) => {
            sehirName = e.target.value;
            sehirID = e.target.selectedIndex;
            console.log(sehirID);
            onChange(e.target.value);
          }}
        >
          <option selected value={value}>
            {value}
          </option>
          {city.map(
            (item) =>
              item !== value && (
                <option key={item.sehir_id} value={item.sehir_isim}>
                  {item.sehir_isim}
                </option>
              )
          )}
        </select>
      ),
      validate: (rowData) =>
        rowData.sehir_isim === undefined || rowData.sehir_isim === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Şehir ID",
      field: "sehir_id",
      editable: false,
      hidden: true,
      editComponent: ({ value, onChange }) => (
        <select
          onChange={(e) => {
            sehirID = e.target.value;
            onChange(e.target.value);
          }}
        >
          <option selected value={value}>
            {value}
          </option>
          {city.map(
            (item) =>
              item !== value && (
                <option key={item.sehir_isim} value={item.sehir_id}>
                  {item.sehir_isim}
                </option>
              )
          )}
        </select>
      ),
      validate: (rowData) =>
        rowData.sehir_isim === undefined || rowData.sehir_isim === ""
          ? "Zorunlu"
          : true,
    },
  ];
  return (
    <div className="App2">
      <MaterialTable
        title="Merkez Tablosu"
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
                merkez_id: newData.merkez_id,
                merkez_isim: newData.merkez_isim,
                merkez_telefon1: newData.merkez_telefon1,
                merkez_telefon2: newData.merkez_telefon2,
                merkez_adres: newData.merkez_adres,
                merkez_koordinati_x: newData.merkez_koordinati_x,
                merkez_koordinati_y: newData.merkez_koordinati_y,
                hizmet_baslangic_tarihi: newData.hizmet_baslangic_tarihi,
                sehir_isim: sehirName,
                sehir_id: sehirID,
              };
              console.log(sehirName);
              console.log(sehirID);
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
                merkez_id: newData.merkez_id,
                merkez_isim: newData.merkez_isim,
                merkez_telefon1: newData.merkez_telefon1,
                merkez_telefon2: newData.merkez_telefon2,
                merkez_adres: newData.merkez_adres,
                merkez_koordinati_x: newData.merkez_koordinati_x,
                merkez_koordinati_y: newData.merkez_koordinati_y,
                hizmet_baslangic_tarihi: newData.hizmet_baslangic_tarihi,
                sehir_isim: sehirName == "" ? oldData.sehir_isim : sehirName,
                sehir_id: sehirID == 0 ? oldData.sehir_id : sehirID,
              };
              console.log(sehirID);
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.merkez_id, {
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
              fetch(url + "/" + oldData.merkez_id, {
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
