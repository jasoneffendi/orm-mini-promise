const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');
let models = require('./project.js')


class Project {
    constructor(raw) {
      this.attribute1 = raw.attribute1
      this.attribute2 = raw.attribute2
    }
  
    static findAll() {
        return new Promise((resolve,reject) => {
            db.all(`SELECT * FROM Projects`, (err,project) => {
                if(!err) {
                    let project = project.map(m => new Project(m))
                    resolve(project);
                } else {
                    reject(err);
                }
            })
        })

    }
    // static findAll() {
    //     let results = models.map(m => new Project(m))
    //     return results
    //   }
  
    static findById() {}
  
    static findWhere() {}
  
    static create() {}
  
    static update() {}
  
    static destroy() {}
  
  }

  module.exports = Project