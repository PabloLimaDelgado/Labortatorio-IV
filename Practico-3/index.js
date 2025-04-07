import dotenv from "dotenv";
//const math = require("./math");
import {sumar} from "./math.js"
dotenv.config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log(`La suma entre 2 y 5: ${sumar(2, 5)}`);
