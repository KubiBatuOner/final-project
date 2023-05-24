/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("name", 128).notNullable().unique();
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("sehir", (tbl) => {
      tbl.increments("sehir_id");
      tbl.string("sehir_isim", 128).notNullable().unique();
      tbl.string("sehir_aciklama", 500);
      tbl.decimal("sehir_merkezi_koordinati_x", 9).notNullable().unique();
      tbl.decimal("sehir_merkezi_koordinati_y", 9).notNullable().unique();
    })
    .createTable("merkez", (tbl) => {
      tbl.increments("merkez_id");
      tbl.string("merkez_isim", 128).notNullable();
      tbl.integer("telefon1", 11).notNullable().unique();
      tbl.integer("telefon2", 11).unique();
      tbl.string("merkez_adres", 128).notNullable();
      tbl.decimal("merkez_koordinati_x", 9).notNullable().unique();
      tbl.decimal("merkez_koordinati_y", 9).notNullable().unique();
      tbl.dateTime("hizmet_baslangic_tarihi").notNullable();
      tbl
        .integer("sehir_id")
        .unsigned()
        .notNullable()
        .references("sehir_id")
        .inTable("sehir")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("personel", (tbl) => {
      tbl.increments("personel_id");
      tbl.string("isim", 128).notNullable();
      tbl.string("soyisim", 128).notNullable();
      tbl.integer("telefon1", 11).notNullable().unique();
      tbl.integer("telefon2", 11).unique();
      tbl.integer("TC", 11).notNullable().unique();
      tbl.string("kan_grubu", 10).notNullable();
      tbl.string("ikamet_adresi", 256).notNullable();
      tbl.boolean("calisma_durumu").notNullable();
      tbl.string("projedeki_saha_adresi", 256).notNullable();
      tbl.string("ADAK_adi_soyadi", 64).notNullable();
      tbl.integer("ADAK_telefon", 11).notNullable().unique();
      tbl.string("ADAK_bagi", 30).notNullable();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("kurum", (tbl) => {
      tbl.increments("kurum_id");
      tbl.string("kurum_adi", 128).notNullable();
      tbl.string("kurum_adi_kisaltma", 20).notNullable();
      tbl.string("kurum_aciklama", 500);
      tbl.string("kurum_link", 128);
      tbl.string("kurum_logo_link", 128);
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("envanter", (tbl) => {
      tbl.increments("envanter_id");
      tbl.string("envanter_adi", 64).notNullable();
      tbl.string("envanter_tur", 64).notNullable();
      tbl.string("envanter_aciklama", 500);
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("hizmet", (tbl) => {
      tbl.increments("hizmet_id");
      tbl.timestamp("hizmet_created_at").defaultTo(knex.fn.now());
      tbl.dateTime("donem", { precision: 3 }).defaultTo(knex.fn.now());
      tbl.string("hizmet_tipi", 64).notNullable();
      tbl.integer("erisilen_kisi_sayisi", 5).notNullable();
      tbl
        .integer("merkez_id")
        .unsigned()
        .notNullable()
        .references("merkez_id")
        .inTable("merkez")
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
    .dropTableIfExists("hizmet")
    .dropTableIfExists("envanter")
    .dropTableIfExists("kurum")
    .dropTableIfExists("personel")
    .dropTableIfExists("merkez")
    .dropTableIfExists("sehir")
    .dropTableIfExists("users");
};
