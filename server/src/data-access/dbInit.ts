import { db, seeds } from './dbConnect'

export const dbInit = async () => {
    try {

        await db.authenticate();
        await db.sync({ force: true, alter: false });
        await db.query(seeds);
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}