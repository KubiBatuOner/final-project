const db = require("../../data/db-config");

const getAll = async () => {
  let personel = await db("personel as p")
    .leftJoin("merkez as m", "p.merkez_id", "m.merkez_id")
    .select(
      "p.personel_id",
      "p.isim",
      "p.soyisim",
      "p.telefon1",
      "p.telefon2",
      "p.TC",
      "p.kan_grubu",
      "p.ikamet_adresi",
      "p.calisma_durumu",
      "p.projedeki_saha_adresi",
      "p.ADAK_adi_soyadi",
      "p.ADAK_telefon",
      "p.ADAK_bagi",
      "p.merkez_id"
    );
  return personel;
};
const getById = async (personel_id) => {
  const personel = await db("personel as p");
  return db("personel as p").where("p.personel_id", personel_id).first();
};
const getBy = (filter) => {
  return db("personel as p").where(filter).first();
};
const add = async (personel) => {
  const newPersonelId = await db("personel").insert(personel);
  const newPersonel = await getBy({ personel_id: newPersonelId[0] });
  return newPersonel;
};

const change = async (updateInfos, id) => {
  await db("personel").where("personel_id", id).first().update(updateInfos);
  const updatedPersonel = await getBy({ personel_id: id });
  return updatedPersonel;
};

const remove = (personel_id) => {
  return db("personel").where("personel_id", personel_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
