const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');



class Project {
    constructor(raw) {
      this.attribute1 = raw.attribute1
      this.attribute2 = raw.attribute2
    }
  
    static findAll() {
        return new Promise((resolve,reject) => {
            db.all(`SELECT * FROM Project`, (err,project) => {
                if(!err) {
                    let project = project.map(m => new Project(m))
                    resolve(err);
                } else {
                    reject(err);
                }
            })
        })

    }
  
    static findById() {}
  
    static findWhere() {}
  
    static create() {}
  
    static update() {}
  
    static destroy() {}
  
  }