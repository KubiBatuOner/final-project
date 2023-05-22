/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("kullanicilar", (tbl) => {
      tbl.increments("kullanici_id");
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 32).notNullable();
    })
    .createTable("sehirler", (tbl) => {
      tbl.increments("sehir_id");
      tbl.string("isim", 128).notNullable().unique();
    })
    .createTable("personeller", (tbl) => {
      tbl.increments("personel_id");
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
    .createTable("telefonlar", (tbl) => {
      tbl.increments("telefon_id");
      tbl.string("telefon_no", 14).notNullable().unique();
      tbl
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehirler")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("araclar", (tbl) => {
      tbl.increments("arac_id");
      tbl.string("arac_sayisi", 128).notNullable();
      tbl
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehirler")
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
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehirler")
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
    .dropTableIfExists("merkezler")
    .dropTableIfExists("personeller")
    .dropTableIfExists("sehirler")
    .dropTableIfExists("kullanicilar");
};
