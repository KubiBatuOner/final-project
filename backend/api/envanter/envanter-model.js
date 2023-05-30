const db = require("../../data/db-config");

const getAll = async () => {
  let envanter = await db("envanter as e")
    .leftJoin("merkez as m", "e.merkez_id", "m.merkez_id")
    .select(
      "e.envanter_id",
      "e.envanter_adi",
      "e.envanter_tur",
      "e.merkez_id",
      "m.merkez_isim"
    );
  return envanter;
};
const getById = async (envanter_id) => {
  const envanter = await db("envanter as e");
  return db("envanter as e").where("e.envanter_id", envanter_id).first();
};
const getBy = (filter) => {
  return db("envanter as e").where(filter).first();
};
const add = async (envanter) => {
  const newEnvanterID = await db("envanter").insert(envanter);
  const newEnvanter = await db("envanter").where(
    "envanter_id",
    newEnvanterID[0]
  );
  return newEnvanter;
};

const change = async (updateInfos, id) => {
  await db("envanter").where("envanter_id", id).first().update(updateInfos);
  const updatedEnvanter = await getBy({ envanter_id: id });
  return updatedEnvanter;
};

const remove = (envanter_id) => {
  return db("envanter").where("envanter_id", envanter_id).delete();
};

module.exports = {
  getAll,
  getBy,
  add,
  change,
  remove,
  getById,
};
