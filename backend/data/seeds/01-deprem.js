/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("sehir").truncate();
  await knex("merkez").truncate();
  await knex("personel").truncate();
  await knex("kurum").truncate();
  await knex("envanter").truncate();
  await knex("hizmet").truncate();
  await knex("users").insert([
    {
      name: "Admin",
      email: "qwe@qwe.com",
      password: "$2a$08$8tCfMo7uWGGUKNzXoXdi9u9e/pSVUqtWyCBS7oiwVHX/7OXyqTasa", //12345
    },
  ]);

  await knex("sehir").insert([
    {
      sehir_isim: "Gaziantep",
      sehir_merkezi_koordinati_x: 37.065925,
      sehir_merkezi_koordinati_y: 37.378097,
    },
    {
      sehir_isim: "Adana",
      sehir_merkezi_koordinati_x: 36.991407,
      sehir_merkezi_koordinati_y: 35.330828,
    },
    {
      sehir_isim: "Malatya",
      sehir_merkezi_koordinati_x: 38.355351,
      sehir_merkezi_koordinati_y: 38.333525,
    },
    {
      sehir_isim: "Adıyaman",
      sehir_merkezi_koordinati_x: 37.763639,
      sehir_merkezi_koordinati_y: 38.277259,
    },
    {
      sehir_isim: "Osmaniye",
      sehir_merkezi_koordinati_x: 37.074617,
      sehir_merkezi_koordinati_y: 36.246401,
    },
    {
      sehir_isim: "Kilis",
      sehir_merkezi_koordinati_x: 36.716469,
      sehir_merkezi_koordinati_y: 37.114661,
    },
    {
      sehir_isim: "Hatay",
      sehir_merkezi_koordinati_x: 36.202591,
      sehir_merkezi_koordinati_y: 36.160403,
    },
    {
      sehir_isim: "Şanlıurfa",
      sehir_merkezi_koordinati_x: 37.167395,
      sehir_merkezi_koordinati_y: 38.795517,
    },
    {
      sehir_isim: "Kahramanmaraş",
      sehir_merkezi_koordinati_x: 37.575263,
      sehir_merkezi_koordinati_y: 36.922816,
    },
    {
      sehir_isim: "Diyarbakır",
      sehir_merkezi_koordinati_x: 37.924966,
      sehir_merkezi_koordinati_y: 40.210992,
    },
  ]);
  await knex("merkez").insert([
    {
      merkez_isim: "İbb afet kordinasyon merkezi",
      merkez_telefon1: "25332890061",
      merkez_adres: "İskenderun",
      merkez_koordinati_x: 36.540673,
      merkez_koordinati_y: 36.540673,
      hizmet_baslangic_tarihi: "08-03-2023",
      sehir_id: 7,
      sehir_isim: "Hatay",
    },
  ]);
  await knex("personel").insert([
    {
      isim: "ali",
      soyisim: "yılmaz",
      telefon1: "05333333333",
      TC: "33333333333",
      kan_grubu: "A+",
      ikamet_adresi: "zart mahallesi zort sokak zırt ap no:23 d:4",
      calisma_durumu: true,
      projedeki_saha_adresi: "zort mahallesi zart sokak konteyner no:2",
      ADAK_adi_soyadi: "Mahmut Tuncer",
      ADAK_telefon: "05444444444",
      ADAK_bagi: "Anne",
      merkez_id: 1,
    },
  ]);

  await knex("kurum").insert([
    { kurum_adi: "İzmit Belediyesi", kurum_adi_kisaltma: "İB", merkez_id: 1 },
  ]);

  await knex("envanter").insert([
    { envanter_adi: "Araba", envanter_tur: "Araç", merkez_id: 1 },
  ]);
  await knex("hizmet").insert([
    {
      donem: "05-2023",
      hizmet_tipi: "Psikolojik Destek",
      erisilen_kisi_sayisi: 20,
      merkez_id: 1,
    },
    {
      donem: "05-2023",
      hizmet_tipi: "Sağlık Tedavi Desteği",
      erisilen_kisi_sayisi: 10,
      merkez_id: 1,
    },
  ]);
};
