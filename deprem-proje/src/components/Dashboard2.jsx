import { useState, useEffect } from "react";
import "../App.css";
import MaterialTable from "@material-table/core";
import axios from "axios";

function Dashboard2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9000/api/personel`).then((response) => {
      setData(response.data);
    });
  }, []);
  const putRow = async (rowId, newData) => {
    console.log(rowId);
    await axios.put(`http://localhost:9000/api/personel/${rowId}`, newData);
    setData((prevData) =>
      prevData.map((row) => {
        if (row.personel_id === rowId) {
          return { ...row, ...newData };
        }
        return row;
      })
    );
  };
  const columns = [
    {
      field: "personel_id",
      title: "Personel ID",
      editable: false,
    },
    { field: "isim", title: "İsim" },
    { field: "soyisim", title: "Soyisim" },
    {
      field: "telefon1",
      title: "Telefon 1",
      type: "number",
    },
    {
      field: "telefon2",
      title: "Telefon 2",
      type: "number",
    },
    {
      field: "TC",
      title: "TC",
      type: "number",
    },
    { field: "kan_grubu", title: "Kan Grubu" },
    {
      field: "ikamet_adresi",
      title: "İkamet Adresi",
    },
    {
      field: "calisma_durumu",
      title: "Çalışma Durumu",
    },
    {
      field: "projedeki_saha_adresi",
      title: "Projedeki Saha Adresi",
    },
    {
      field: "ADAK_adi_soyadi",
      title: "Acil Durumda Aranacak Kişi",
    },
    {
      field: "ADAK_telefon",
      title: "Acil Durumda Aranacak Kişi Telefon",
      type: "number",
    },
    {
      field: "ADAK_bagi",
      title: "Acil Durumda Aranacak Kişinin Yakınlık Derecesi",
    },
  ];
  return (
    <div className="App2">
      <h1 className="text-center">TARDE</h1>
      <h4 className="text-center">Personel Yönetim Tablosu</h4>
      <MaterialTable
        title="Personel Tablosu"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
                console.log(updatedRow);
                console.log(oldRow);
                putRow(updatedRow.personel_id, updatedRow);
              }, 2000);
            }),
        }}
      />
    </div>
  );
}
export default Dashboard2;
