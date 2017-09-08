const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');



class Seupervisor {
    constructor(raw) {
      this.attribute1 = raw.attribute1
      this.attribute2 = raw.attribute2
    }
  
    static findAll() {
      let results = models.map(m => new Supervisor(m))
      return results
    }
  
    static findById() {}
  
    static findWhere() {}
  
    static create() {}
  
    static update() {}
  
    static destroy() {}
  
  }