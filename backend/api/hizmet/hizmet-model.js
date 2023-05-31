const db = require("../../data/db-config");

const getAll = async () => {
  let hizmet = await db("hizmet as h")
    .leftJoin("merkez as m", "h.merkez_id", "m.merkez_id")
    .select(
      "h.hizmet_id",
      "h.hizmet_created_at",
      "h.donem",
      "h.hizmet_tipi",
      "h.erisilen_kisi_sayisi",
      "h.merkez_id",
      "m.merkez_isim"
    );
  return hizmet;
};
const getById = async (hizmet_id) => {
  const kurum = await db("hizmet as h");
  return db("hizmet as h").where("h.hizmet_id", hizmet_id).first();
};
const getBy = (filter) => {
  return db("hizmet as h").where(filter).first();
};
const add = async (hizmet) => {
  const newHizmetID = await db("hizmet").insert(hizmet);
  const newHizmet = await db("hizmet").where("hizmet_id", newHizmetID[0]);
  return newHizmet;
};

const change = async (updateInfos, id) => {
  await db("hizmet").where("hizmet_id", id).first().update(updateInfos);
  const updatedHizmet = await getBy({ hizmet_id: id });
  return updatedHizmet;
};

const remove = (hizmet_id) => {
  return db("hizmet").where("hizmet_id", hizmet_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
