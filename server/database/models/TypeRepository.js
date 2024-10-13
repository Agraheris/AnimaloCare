const AbstractRepository = require("./AbstractRepository");

class TypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "pet_type" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = TypeRepository;
