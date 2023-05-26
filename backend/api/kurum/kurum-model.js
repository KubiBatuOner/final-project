const db = require("../../data/db-config");

const getAll = async () => {
  let kurum = await db("kurum as k")
    .leftJoin("merkez as m", "k.merkez_id", "m.merkez_id")
    .select("k.kurum_id", "k.kurum_adi", "k.kurum_adi_kisaltma", "k.merkez_id");
  return kurum;
};
const getById = async (personel_id) => {
  const kurum = await db("kurum as k");
  return db("kurum as k").where("k.kurum_id", kurum_id).first();
};
const getBy = (filter) => {
  return db("kurum as k").where(filter).first();
};
const add = async (kurum) => {
  const newKurumID = await db("kurum").insert(kurum);
  const newKurum = await db("kurum").where("kurum_id", newKurumID[0]);
  return newKurum;
};

const change = async (updateInfos, id) => {
  await db("kurum").where("kurum_id", id).first().update(updateInfos);
  const updatedKurum = await getBy({ kurum_id: id });
  return updatedKurum;
};

const remove = (kurum_id) => {
  return db("kurum").where("kurum_id", kurum_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
