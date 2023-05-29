import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function MerkezTablo() {
  const url = "http://localhost:9000/api/merkez";
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
      title: "Merkez İsmi",
      field: "merkez_isim",
      validate: (rowData) =>
        rowData.merkez_isim === undefined || rowData.merkez_isim === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Telefon1",
      field: "telefon1",
      validate: (rowData) =>
        rowData.telefon1 === undefined || rowData.telefon1 === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Telefon2",
      field: "telefon2",
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
      validate: (rowData) =>
        rowData.hizmet_baslangic_tarihi === undefined ||
        rowData.hizmet_baslangic_tarihi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Şehir ID",
      field: "sehir_id",
      editComponent: ({ value, onChange, rowData }) => (
        <Select
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {data.map((s) => (
            <MenuItem key={s.sehir_id} value={s.sehir_adi}>
              {s.name}
            </MenuItem>
          ))}
        </Select>
      ),
      validate: (rowData) =>
        rowData.sehir_id === undefined || rowData.sehir_id === ""
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
                merkez_id: newData.merkez_id,
                merkez_isim: newData.merkez_isim,
                telefon1: newData.telefon1,
                telefon2: newData.telefon2,
                merkez_adres: newData.merkez_adres,
                merkez_koordinati_x: newData.merkez_koordinati_x,
                merkez_koordinati_y: newData.merkez_koordinati_y,
                hizmet_baslangic_tarihi: newData.hizmet_baslangic_tarihi,
                sehir_id: newData.sehir_id,
              };
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
