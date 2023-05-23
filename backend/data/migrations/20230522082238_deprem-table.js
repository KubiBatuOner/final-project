/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 32).notNullable();
    })
    .createTable("sehirler", (tbl) => {
      tbl.increments("sehir_id");
      tbl.string("isim", 128).notNullable().unique();
    })
    .createTable("merkezler", (tbl) => {
      tbl.increments("merkez_id");
      tbl.string("isim", 128).notNullable();
      tbl
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehirler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("personeller", (tbl) => {
      tbl.increments("personel_id");
      tbl.string("isim", 128).notNullable();
      tbl.string("soyisim", 128).notNullable();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkezler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("telefonlar", (tbl) => {
      tbl.increments("telefon_id");
      tbl.string("telefon_no", 14).notNullable().unique();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkezler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("araclar", (tbl) => {
      tbl.increments("arac_id");
      tbl.string("arac_sayisi", 128).notNullable();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkezler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("kurumlar", (tbl) => {
      tbl.increments("kurum_id");
      tbl.string("kurum_isim", 128).notNullable();
      tbl
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehirler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ulasilanlar", (tbl) => {
      tbl.increments("ulasilan_id");
      tbl.string("ulasilan_sayi", 128).notNullable();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkezler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ulasilanlar")
    .dropTableIfExists("kurumlar")
    .dropTableIfExists("araclar")
    .dropTableIfExists("telefonlar")
    .dropTableIfExists("personeller")
    .dropTableIfExists("merkezler")
    .dropTableIfExists("sehirler")
    .dropTableIfExists("users");
};
