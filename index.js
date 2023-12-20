const express = require('express');
const bodyParser = require('body-parser');
// Встановимо порт
 const PORT = 5000;
 const app = express();
// napcutw 3anutn tHny content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// napcwtn aanurn tany content-type - application/json
app.use (bodyParser.json())
// Wa6noun ctopivok y dopmari hbs
/*app.set("view engine", "hbs");*/
 // Обробка веї запиту - епароїпі
// вхід
//Вареса за якою він буде працювати
// Функція, що буде виконуватися по запиту на цій endpoint
// параметри функції
// req- запит
// геs - відповідь
app.get('/', (req, res) => {
    // Bказуємо 200 - yспішний статус
    // json - тіло відповіді - повідомленняn
    res.status(200).json("Сервер працює");
})
 // Створимо екземпляр застосунку
 //вхід
 //порт
 //функція, яка відпрацює лишу у випадку успішного запуску серверу
 app.listen(PORT, () => console.log("SERVER START!!!"))
 //Require employee routes
 const departamentRoutes = require('./router/departament.routes')
 app.use('/api/departament', departamentRoutes);
/*const { use } = require('express/lib/application');
var connection = require('./../config/config.bd');*/