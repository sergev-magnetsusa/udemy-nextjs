import sql from 'better-sqlite3';

const db = new sql('messages.db');

const initDb = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY,
        text TEXT    
    )  
  `)
}

initDb();

export const addMessage = (msg) => {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(msg);
}

const getMessages = () => {
  return db.prepare('SELECT * FROM messages').all();
}
