import { useState, useEffect } from "react";
import "../App.css";
import MaterialTable from "@material-table/core";

function App() {
  const url = "http://localhost:9000/api/personel";
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
      title: "İsim",
      field: "isim",
      validate: (rowData) =>
        rowData.isim === undefined || rowData.isim === "" ? "Zorunlu" : true,
    },
    {
      title: "Soyisim",
      field: "soyisim",
      validate: (rowData) =>
        rowData.soyisim === undefined || rowData.soyisim === ""
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
      title: "TC",
      field: "TC",
      validate: (rowData) =>
        rowData.TC === undefined || rowData.TC === "" ? "Zorunlu" : true,
    },
    {
      title: "Kan Grubu",
      field: "kan_grubu",
      validate: (rowData) =>
        rowData.kan_grubu === undefined || rowData.kan_grubu === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "İkamet Adresi",
      field: "ikamet_adresi",
      validate: (rowData) =>
        rowData.ikamet_adresi === undefined || rowData.ikamet_adresi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Çalışma Durumu",
      field: "calisma_durumu",
      validate: (rowData) =>
        rowData.calisma_durumu === undefined || rowData.calisma_durumu === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Projedeki Saha Adresi",
      field: "projedeki_saha_adresi",
      validate: (rowData) =>
        rowData.projedeki_saha_adresi === undefined ||
        rowData.projedeki_saha_adresi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Acil Durumda Aranacak Kişi",
      field: "ADAK_adi_soyadi",
      validate: (rowData) =>
        rowData.ADAK_adi_soyadi === undefined || rowData.ADAK_adi_soyadi === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Acil Durumda Aranacak Kişi Telefon",
      field: "ADAK_telefon",
      validate: (rowData) =>
        rowData.ADAK_telefon === undefined || rowData.ADAK_telefon === ""
          ? "Zorunlu"
          : true,
    },
    {
      title: "Acil Durumda Aranacak Kişinin Yakınlık Derecesi",
      field: "ADAK_bagi",
      validate: (rowData) =>
        rowData.ADAK_bagi === undefined || rowData.ADAK_bagi === ""
          ? "Zorunlu"
          : true,
    },
  ];
  return (
    <div className="App">
      <h1 className="text-center">TARDE</h1>
      <h4 className="text-center">Personel Tablosu</h4>
      <MaterialTable
        title="Personel Tablosu"
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
              console.log(oldData);
              //Backend call
              fetch(url + "/" + oldData.personel_id, {
                method: "PUT",
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
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              //Backend call
              fetch(url + "/" + oldData.personel_id, {
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

export default App;
