const temp_с = prompt('Введите температуру в градусах по Цельсию');
var temp_f = (9 / 5) * temp_с + 32;
alert('Соответствующая температура в градусах по Фаренгейту: ' + temp_f);

var admin;
var name = 'Василий';
admin = name;
alert(admin);

alert(1000 + '108');
/* число + строка будет равно строка, поскольку строка может содержать не только числовые символы,
зато число всегда содержит символы, которые можно интерпретировать в строку */

/*
Без тегов страница прогружается и отображается вплоть до выполнения скрипта,
после чего ожидает его отработки и грузится дальше
async позволяет странице грузиться независимо от выполнения скрипта
defer же наоборот — не отображается содержимое страницы, пока не будет выполнен скрипт
*/