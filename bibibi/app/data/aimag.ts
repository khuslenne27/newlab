import * as sqlite from 'expo-sqlite';

export const db =sqlite. openDatabaseSync('ayalagch.db');

export const aimagDb = 9 => {
    db.execSync(`
    CREATE TABLE IF NOT EXISTS aimag(
    aid INTEGER PRIMARY KEY NOT NULL,
    aname TEXT NOT NULL,
    ochson INTEGER,
    zurag TEXT, 
    url TEXT) 

    INSERT OR IGNORE INTO aimag (aid, aname, ochson, zurag, url)
    VALUES
    (0, 'Архангай', 0, '0.jpg', 'https://mn.wikipedia.org/wiki/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B0%D0%B9_%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3', 
    0, 'arkhangai.jpg'), 
    (1, 'Баян-Өлгий', 0, '1.jpg', 'https://mn.wikipedia.org/wiki/%D0%91%D0%B0%D1%8F%D0%BD-%D3%A8%D0%BB%D0%B3%D0%B8%D0%B9_%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3', 
    0, 'baynulgii.jpg')
    `);
    
}