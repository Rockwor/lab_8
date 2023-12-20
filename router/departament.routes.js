// import express from 'express';
//import export from "../controler/departament.conrtoller";
const express = require('express')
//Створюємо новий маршрутизатор
const router = express.Router()
const departamentController = require('../controller/departament.controller');
//Перегляд всіх відділів
router.get ('/', departamentController.findALL);
//Створення нового відділу
router.post('/', departamentController.create);
//Пошук відділу за id
router.get('/:id', departamentController.findById);
//Редагування відділу за id
router.put('/:id', departamentController.update);
//Видаалення відділу за id
router.delete('/:id', departamentController.delete);
//Експортуємо за замовченням router
module.exports = router
