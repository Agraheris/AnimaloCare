const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, firstName, lastName, email, phoneNumber, location from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select id, firstName, lastName, email, phoneNumber, location from ${this.table}`);
    return rows;
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} ( firstName, lastName, email, hashedPassword, phoneNumber, location) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.email,
        user.hashedPassword,
        user.phoneNumber,
        user.location,
      ]
    );
    return result.insertId;
  }

  async delete(user) {
    // Supprimer dans les tables associées où l'id user est utilisé
    await this.database.query(`DELETE FROM pet WHERE user_id = ?`, [user.id]);

    await this.database.query(`DELETE FROM annoncement WHERE user_id = ?`, [
      user.id,
    ]);

    // Ensuite, supprimer l'utilisateur dans la table principale
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [user.id]
    );

    return result.affectedRows;
  }

  async updateUserInfo(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
       SET firstName = ?, lastName = ?, phoneNumber = ?, location = ?
       WHERE id = ?`,
      [
        user.firstName,
        user.lastName,
        user.phoneNumber,
        user.location,
        user.id,
      ]
    );
    return result.affectedRows;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = UserRepository;
