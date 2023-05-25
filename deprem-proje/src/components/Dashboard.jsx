import { useState, useEffect } from "react";
import tarde from "../images/tarde2.jpg";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9000/api/personel`).then((response) => {
      setData(response.data);
    });
  }, []);

  // Düzenleme durumunu tutmak için state
  const [editingRowId, setEditingRowId] = useState(null);

  // Yeni satır verilerini tutmak için state
  const [newRowData, setNewRowData] = useState({
    id: "",
    isim: "",
    soyisim: "",
    telefon1: null,
    telefon2: null,
    TC: null,
    kan_grubu: "",
    ikamet_adresi: "",
    calisma_durumu: "",
    projedeki_saha_adresi: "",
    ADAK_adi_soyadi: "",
    ADAK_telefon: null,
    ADAK_bagi: "",
  });

  // Satır düzenlemesini başlatan fonksiyon
  const startEditing = (rowId) => {
    console.log(rowId);
    setEditingRowId(rowId);
  };

  // Satır düzenlemesini bitiren fonksiyon
  const stopEditing = () => {
    setEditingRowId(null);
  };

  // Satırı güncelleyen fonksiyon
  const updateRow = async (rowId, newData) => {
    console.log(rowId, editingRowId);
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

  // Satırı silen fonksiyon
  const deleteRow = (rowId) => {
    setData((prevData) => prevData.filter((row) => row.id !== rowId));
  };

  // Yeni satır ekleme fonksiyonu
  const addRow = () => {
    const newRow = { ...newRowData, id: data.length + 1 };
    setData((prevData) => [...prevData, newRow]);
    setNewRowData({
      id: "",
      isim: "",
      soyisim: "",
      telefon1: null,
      telefon2: null,
      TC: null,
      kan_grubu: "",
      ikamet_adresi: "",
      calisma_durumu: "",
      projedeki_saha_adresi: "",
      ADAK_adi_soyadi: "",
      ADAK_telefon: null,
      ADAK_bagi: "",
    });
  };

  return (
    <div className="pt-[5vh]">
      <div className="flex justify-between items-center flex-col mb-10 xl:flex-row">
        <div className="w-[9vw]">
          <img src={tarde} />
        </div>
        <div className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] text-center my-10">
          YÖNETİCİ PANELİ
        </div>
        <button className="text-[20px] font-bold py-2 px-6 rounded-2xl border-[#019ec9] border-4 hover:bg-[#019ec9] hover:text-white">
          Çıkış Yap
        </button>
      </div>
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Personel ID</th>
              <th className="px-4 py-2 border-b">İsim</th>
              <th className="px-4 py-2 border-b">Soyisim</th>
              <th className="px-4 py-2 border-b">Telefon1</th>
              <th className="px-4 py-2 border-b">Telefon2</th>
              <th className="px-4 py-2 border-b">TC</th>
              <th className="px-4 py-2 border-b">Kan Grubu</th>
              <th className="px-4 py-2 border-b">İkamet Adresi</th>
              <th className="px-4 py-2 border-b">Çalışma Durumu</th>
              <th className="px-4 py-2 border-b">Projedeki Saha Adresi</th>
              <th className="px-4 py-2 border-b">Acil Durumda Aranacak Kişi</th>
              <th className="px-4 py-2 border-b">
                Acil Durumda Aranacak Kişi Telefon
              </th>
              <th className="px-4 py-2 border-b">
                Acil Durumda Aranacak Kişi Bağı
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((row) => (
              <tr key={row.personel_id}>
                <td className="px-4 py-2 border-b">{row.personel_id}</td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.isim}
                      onChange={(e) =>
                        updateRow(row.personel_id, { isim: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.isim
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.soyisim}
                      onChange={(e) =>
                        updateRow(row.personel_id, { soyisim: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.soyisim
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="tel"
                      value={row.telefon1}
                      onChange={(e) =>
                        updateRow(row.personel_id, { telefon1: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.telefon1
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="tel"
                      value={row.telefon2}
                      onChange={(e) =>
                        updateRow(row.personel_id, { telefon2: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.telefon2
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="number"
                      value={row.TC}
                      onChange={(e) =>
                        updateRow(row.personel_id, { TC: e.target.value })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.TC
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.kan_grubu}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          kan_grubu: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.kan_grubu
                  )}
                </td>
                <td className="px-4 py-2 border-b whitespace-pre-wrap">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ikamet_adresi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ikamet_adresi: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.ikamet_adresi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.calisma_durumu}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          calisma_durumu: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.calisma_durumu
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.projedeki_saha_adresi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          projedeki_saha_adresi: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.projedeki_saha_adresi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ADAK_adi_soyadi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_adi_soyadi: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.ADAK_adi_soyadi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="tel"
                      value={row.ADAK_telefon}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_telefon: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.ADAK_telefon
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <input
                      type="text"
                      value={row.ADAK_bagi}
                      onChange={(e) =>
                        updateRow(row.personel_id, {
                          ADAK_bagi: e.target.value,
                        })
                      }
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    row.ADAK_bagi
                  )}
                </td>
                <td className="px-4 py-2 border-b">
                  {editingRowId === row.personel_id ? (
                    <button
                      onClick={() => stopEditing()}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      Kaydet
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(row.personel_id)}
                      className="bg-[#019ec9] hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      Düzenle
                    </button>
                  )}
                  <button
                    onClick={() => deleteRow(row.personel_id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Yeni satır ekleme formu */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="İsim"
            value={newRowData.isim}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                isim: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="text"
            placeholder="Soyisim"
            value={newRowData.soyisim}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                soyisim: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="tel"
            placeholder="Telefon1"
            value={newRowData.telefon1}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                telefon1: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="tel"
            placeholder="Telefon2"
            value={newRowData.telefon2}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                telefon2: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="number"
            placeholder="TC"
            value={newRowData.TC}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                TC: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="text"
            placeholder="Kan Grubu"
            value={newRowData.kan_grubu}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                kan_grubu: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="text"
            placeholder="İkamet Adresi"
            value={newRowData.ikamet_adresi}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                ikamet_adresi: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="text"
            placeholder="Çalışma Durumu"
            value={newRowData.calisma_durumu}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                calisma_durumu: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[6vw]"
          />
          <input
            type="text"
            placeholder="Saha Adresi"
            value={newRowData.projedeki_saha_adresi}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                projedeki_saha_adresi: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[6vw]"
          />
          <input
            type="text"
            placeholder="Aranacak Kişi Adı Soyadı"
            value={newRowData.ADAK_adi_soyadi}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                ADAK_adi_soyadi: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="tel"
            placeholder="Aranacak Kişi Telefon"
            value={newRowData.ADAK_telefon}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                ADAK_telefon: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <input
            type="text"
            placeholder="Aranacak Kişi Bağı"
            value={newRowData.ADAK_bagi}
            onChange={(e) =>
              setNewRowData((prevData) => ({
                ...prevData,
                ADAK_bagi: e.target.value,
              }))
            }
            className="border rounded px-2 py-1 mr-2 w-[5vw]"
          />
          <button
            onClick={addRow}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
