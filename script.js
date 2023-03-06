let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let alarmWrapper = document.querySelector('.alarm-container');
let citiesWrapper = document.querySelector('.cities-container');

let cities = [];

function addCity(city) {
    let newCity = document.createElement('p');
    newCity.innerHTML = city;
    citiesWrapper.append(newCity);
}

function checkInCities(city) {

    if (cities.includes(city)) {
        let alarm = document.createElement('div');
        alarm.innerHTML = 'Этот город уже был!';
        message.innerHTML = '';
        alarmWrapper.append(alarm);
        /* cities.pop(); */
        
    } else {
        addCity(city);
    }
}



function checkLetter(city) {
    let lastCity = cities[cities.length - 1].toUpperCase();
    let lastLetter = '';

    if (lastCity.endsWith('Ь') || lastCity.endsWith('Ъ') || lastCity.endsWith('Ы')) {
        lastLetter = lastCity[lastCity.length - 2];
     
    } else {
        lastLetter = lastCity[lastCity.length - 1];
    }
    /* message.innerHTML = 'Введите город на букву ' + lastLetter; */

    if (lastLetter == city.slice(0,1)) {
        cities.push(city);
        field.value = '';
        /* addCity(nameBig); */
        console.log(cities);
        message.innerHTML = '';
        
    } else {
        field.value = '';
        message.innerHTML = 'Неверно, введите город на букву ' + lastLetter;
    }
}




field.addEventListener('keyup', function(e) {

    if (e.keyCode === 13) {
        if (!cities[0]) {
            let nameBig = field.value.toUpperCase();
            cities.push(nameBig);
            field.value = '';
            addCity(nameBig);
            console.log(cities);
        } else {
            nameBig = field.value.toUpperCase();

            checkInCities(nameBig);
            checkLetter(nameBig);
        }
        
    }
})









/* 
1. Первый пользователь вводит название города
2. Оно записывается в массив
3. Находим последнюю букву введенного города
4. Проверяем чтобы это были не ь, ъ, ы
5. Если это они, проверяем следующую букву с конца
6. Если не они - Выдаем второму пользователю букву с которой он должен начинать свой город
7. Новый город записывается в массив
8. Проверяем, нет ли этого города в массиве
9. Если есть, выводим сообщение 
10. Если нет, игра продолжается
*/