/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("sehirler").truncate();
  await knex("merkezler").truncate();
  await knex("personeller").truncate();
  await knex("telefonlar").truncate();
  await knex("araclar").truncate();
  await knex("kurumlar").truncate();
  await knex("ulasilanlar").truncate();
  await knex("users").insert([{ email: "qwe@qwe.com", password: "12345" }]);
};
