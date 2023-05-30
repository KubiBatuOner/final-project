const db = require("../../data/db-config");

const getAll = async () => {
  let merkez = await db("merkez as m")
    .leftJoin("sehir as s", "m.sehir_id", "s.sehir_id")
    .select(
      "m.merkez_id",
      "m.merkez_isim",
      "m.merkez_telefon1",
      "m.merkez_telefon2",
      "m.merkez_adres",
      "m.merkez_koordinati_x",
      "m.merkez_koordinati_y",
      "m.hizmet_baslangic_tarihi",
      "m.sehir_id",
      "s.sehir_isim"
    );
  return merkez;
};
const getById = async (merkez_id) => {
  const merkez = await db("merkez as m");
  return db("merkez as m").where("m.merkez_id", merkez_id).first();
};
const getBy = (filter) => {
  return db("merkez as m").where(filter).first();
};
const add = async (merkez) => {
  const newMerkezID = await db("merkez").insert(merkez);
  const newMerkez = await db("merkez").where("merkez_id", newMerkezID[0]);
  return newMerkez;
};

const change = async (updateInfos, id) => {
  await db("merkez").where("merkez_id", id).first().update(updateInfos);
  const updatedMerkez = await getBy({ merkez_id: id });
  return updatedMerkez;
};

const remove = (merkez_id) => {
  return db("merkez").where("merkez_id", merkez_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
