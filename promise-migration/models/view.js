const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');
let model_view = require('./view.js')


class view {
    constructor(raw) {
      this.attribute1 = raw.attribute1
      this.attribute2 = raw.attribute2
    }
  
    static findAll() {
        return new Promise((resolve,reject) => {
            db.all(`SELECT * FROM siswa`, (err,view) => {
                if(!err) {
                    let view = view.map(m => new view(m))
                    resolve(view);
                } else {
                    reject(err);
                }
            })
        })
    }
    // static findAll() {
    //     let results = model_view.map(m => new view(m))
    //     return results
    //   }
  }

  module.exports = view