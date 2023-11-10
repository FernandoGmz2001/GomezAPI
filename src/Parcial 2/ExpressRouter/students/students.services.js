import { promisePool } from "../connection.js"
export async function getAllStudents(){
    const result = await promisePool.query("SELECT * FROM Alumno");
    return result
}