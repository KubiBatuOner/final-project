import { useState, useEffect } from "react";
import "../../App.css";
import MaterialTable from "@material-table/core";

export default function PersonelTablo() {
  const url = "http://localhost:9000/api/personel";
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
      type: "boolean",
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
        title="Personel Tablosu"
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
              let a = {
                personel_id: newData.personel_id,
                isim: newData.isim,
                soyisim: newData.soyisim,
                telefon1: newData.telefon1,
                telefon2: newData.telefon2,
                TC: newData.TC,
                kan_grubu: newData.kan_grubu,
                ikamet_adresi: newData.ikamet_adresi,
                calisma_durumu: newData.calisma_durumu,
                projedeki_saha_adresi: newData.projedeki_saha_adresi,
                ADAK_adi_soyadi: newData.ADAK_adi_soyadi,
                ADAK_telefon: newData.ADAK_telefon,
                ADAK_bagi: newData.ADAK_bagi,
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
                personel_id: newData.personel_id,
                isim: newData.isim,
                soyisim: newData.soyisim,
                telefon1: newData.telefon1,
                telefon2: newData.telefon2,
                TC: newData.TC,
                kan_grubu: newData.kan_grubu,
                ikamet_adresi: newData.ikamet_adresi,
                calisma_durumu: newData.calisma_durumu,
                projedeki_saha_adresi: newData.projedeki_saha_adresi,
                ADAK_adi_soyadi: newData.ADAK_adi_soyadi,
                ADAK_telefon: newData.ADAK_telefon,
                ADAK_bagi: newData.ADAK_bagi,
                merkez_isim:
                  merkezName == "" ? oldData.merkez_isim : merkezName,
                merkez_id: merkezID == 0 ? oldData.merkez_id : merkezID,
              };
              console.log(a);
              //Backend call
              fetch(url + "/" + oldData.personel_id, {
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
