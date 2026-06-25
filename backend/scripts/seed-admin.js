import { getConfig } from "../src/config.js";
import { getPool } from "../src/database.js";
import { hashIdNumber, lastFour } from "../src/id-number.js";

const adminPhone = "0821234567";

const config = getConfig();
const pool = getPool();

const [result] = await pool.execute(
  `INSERT INTO users
   (id_number_hash,id_number_last4,first_name,last_name,email,status)
   VALUES (?, ?, ?, ?, ?, 'active')`,
  [
    hashIdNumber(adminPhone, config.idPepper),
    lastFour(adminPhone),
    "System",
    "Admin",
    "admin@inkolo.co.za",
  ]
);

const userId = result.insertId;

await pool.execute(
  `INSERT INTO user_roles (user_id, role_code)
   VALUES (?, ?)`,
  [userId, "Admin User"]
);

console.log("Admin created");
await pool.end();