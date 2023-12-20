//Імпортуємо департмент
const Departament = require('../model/departament.model');
//Виведення всієї інформації з таблиці
exports.findALL = function(req, res) {
    Departament.findALL(function(err, departament) {
        console.log('controller')
        if(err)
          res.send(err);
        res.send(departament);
    });
};
//Створення нового запису
exports.create = function(req,res) {
    const new_departament = new Departament(req.body);
    //handless null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field' });
    } else {
        Departament.create(new_departament, function(err, departament) {
            if(err)
            res.send(err);
        res.json({error: false, message: "departament added successfully!", data: departament });
        });
    }
};
//Пошук за id
exports.findById = function (req, res) {
    Departament.findById(req.params.id, function (err, departament) {
        if (err)
        res.send(err);
    res.json(departament);
    });
};
//Редагування інформації
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all require field' });
    } else {
        Departament.update(req.params.id, new Departament(req.body), function (err, deparatament) {
            if (err)
            res.send(err);
        res.json({error: false, message: 'departament successfully updated' });
        });
    }
};
//Видалення інформації
exports.delete = function (req, res) {
    Departament.delete(req.params.id, function (err, departament) {
        console.log("HI" + req.params.id);
        if (err)
        res.send(err);
    res.json({ error: false, message: 'departament succesfully deleted'});
    });
};