import {Sequelize} from 'sequelize';
const db_url = process.env.DATABASE_URL;
console.log({db_url})

const sequelize = new Sequelize(db_url, {
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
export default sequelize;