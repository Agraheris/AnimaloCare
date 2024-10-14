const AbstractRepository = require("./AbstractRepository");

class AnnoncementRepository extends AbstractRepository {
  constructor() {
    super({ table: "annoncement" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.*, pet_type.name AS typeName, user.firstName, user.lastName
      FROM ${this.table} 
      JOIN pet_type ON ${this.table}.pet_type = pet_type.id 
      JOIN user ON ${this.table}.user_id = user.id
      WHERE ${this.table}.id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT ${this.table}.*, pet_type.name AS typeName, user.firstName, user.lastName
      FROM ${this.table}
      JOIN pet_type ON ${this.table}.pet_type = pet_type.id
      JOIN user ON ${this.table}.user_id = user.id
    `);
    return rows;
  }

  async create(annoncement) {
    const [result] = await this.database.query(
      `insert into ${this.table} ( title, content, pet_type, location, price, startDate, endDate, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        annoncement.title,
        annoncement.content,
        annoncement.petType,
        annoncement.location,
        annoncement.price,
        annoncement.startDate,
        annoncement.endDate,
        annoncement.user_id,
      ]
    );
    return result.insertId;
  }

  async delete(annoncement) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [annoncement.id, annoncement.userId]
    );

    return result.affectedRows;
  }
}

module.exports = AnnoncementRepository;
