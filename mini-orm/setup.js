const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Supervisor 
    (
    id INTEGER PRIMARY KEY AUTO INCREMENT,
    name VARCHAR(255), email VARCHAR(255)
    )`,() => {
        console.log('Create Table User Supervisor')
    })

    db.run(`CREATE TABLE IF NOT EXISTS Projects
    (
        id INTEGER PRIMARY KEY AUTO INCREMENT,
        name_of_projects VARCHAR(255), status VARCHAR(255)
    )`,() => {
        console.log('Create table projects success')
    })

    db.run(`INSERT INTO Projects(name_of_projects, status) 
    VALUES("spooky", "planning")`, () => {
        console.log("populate berhasil")
    })

    db.run(`INSERT INTO Supervisor(name, email) 
    VALUES("halo", "halo@mail.com")`, () => {
        console.log("populate berhasil")
    })
})