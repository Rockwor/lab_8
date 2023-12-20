//Підключення до БД
var connection = require('./../config/config.bd');
//Функція для створення об'экту деv
var Departament = function(deparatament) {
    this.id_turu = departament.Id_turu;
    this.naz_turu = departament.Naz_turu;
}

Departament.create = function (newDep, result) {
    connection.query("INSERT INTO dovid_turiv set?", newDep, function (err, res){
        if(err) {
            console.log("error", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};
//Пошук у табліці за айди
//id-значення  id туру
//result- результат запиту з пошуку
Departament.findById= function(id,result) {
    connection.query("Select * from dovid_turiv where id_turu = ?", id,
    function(err,res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
//Виведення усіх департаментів що є у таблиці
//ресалт - результат запиту
Departament.findALL = function (result) {
    connection.query ("Select * from dovid_turiv",
    function (err, res) {
            if (err) {
                console. log ("error: ", err); result (null, err);
        }
         else {
            console. log('Departament: ', res);
            result (null, res);
        }
  });
} 
//Зміна запису з певним id у БД
//id- значення  id відділу 
//dep- значення що змінюється включає назву туру
//result-результат запиту
  Departament.update = function(id,dep, result) {
    connection.query("UPDATE dovid_turiv SET Naz_turu=? Where id_turu =?",
    [dep.naz_turu, id],
    function(err,res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
  };
  //Видалення запису
  //Значення айди туру 
  //результат запиту
   Departament.delete = function(id, result) {
    connection.query("DELETE FROM dovid_turiv WHERE id_turu = ?",[id],
    function(err,res) {
        if(err) {
            console.log("error: ",err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
   };
//Вказуємо що експортуемо з модулю департамент
module.exports = Departament;
  