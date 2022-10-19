import dotenv from 'dotenv';
import pkg  from 'pg';
dotenv.config();

const { Pool } = pkg;
 
const connection = new Pool({
  user: 'postgres',
  password: 'gege8102',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
});



 
export default connection