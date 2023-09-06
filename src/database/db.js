const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "horarios",
});
const poolAsync = pool.promise();
const QUERY = async (curso) => {
  let res = (await poolAsync.query(`SELECT * FROM ${curso}`))[0];
  console.log(res)
  return res;
};
const INSERT = async (val, val2) => {
  return(await poolAsync.execute(`INSERT INTO cursos (id, curso, division) VALUES (null, ${val}, ${val2})`))
}
const UPDATE = async (val1, val2, val3) => {
  //UPDATE `cursos` SET `curso` = '8', `division` = '8' WHERE `cursos`.`id` = 4; 
  return (await poolAsync.execute(`UPDATE cursos SET curso = ${val2}, division = ${val3} WHERE cursos.id = ${val1}`))
}
const DELETE = async (val) => {
  //DELETE FROM cursos WHERE `cursos`.`id` = 1"
  return (await poolAsync.execute(`DELETE FROM cursos WHERE cursos.id = ${val}`))
  
}
module.exports = {
  QUERY,
  INSERT,
  UPDATE,
  DELETE
};
