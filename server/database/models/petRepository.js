const AbstractRepository = require("./AbstractRepository");

class PetRepository extends AbstractRepository {
  constructor() {
    super({ table: "pet" });
  }

  async readAll(userId) {
    const [rows] = await this.database.query(
      `select pet.id, petName, pet_type.name as typeName, breed, age, information from ${this.table} join pet_type on type_id= pet_type.id where user_id=?`,
      [userId]
    );
    return rows;
  }

  async create(pet) {
    const [result] = await this.database.query(
      `insert into ${this.table} ( petName, type_id, breed, age, information, user_id) values (?, ?, ?, ?, ?, ?)`,
      [
        pet.petName,
        pet.type_id,
        pet.breed,
        pet.age,
        pet.information,
        pet.user_id,
      ]
    );
    return result.insertId;
  }

  async delete(pet) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [pet.id, pet.userId]
    );

    return result.affectedRows;
  }
}

module.exports = PetRepository;
