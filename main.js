document.write ('1. Вивести на сторінку в один рядок через кому числа від 10 до 20.<br>')
for(i = 10; i < 21; i++) {
    if (i < 20) {
    document.write(i + ', ');
    } else {
        document.write(i + '<br>');
    }
}

document.write('<br> 2. Вивести квадрати чисел від 10 до 20. <br>');
for(i = 10; i < 21; i++) {
    let result = i ** 2;
    document.write(result + '&nbsp;&nbsp;&nbsp;');
}
document.write('<br>');

document.write('<br> 3. Вивести таблицю множення на 7. <br>');
for(i = 1; i <= 10; i++) {
    document.write(i + ' * ' + 7 + ' = ' + i * 7 + '<br>');
}

document.write('<br> 4. Знайти суму всіх цілих чисел від 1 до 15. <br>');
let sum = 0;

for(i = 1; i <= 15; i++){
    sum +=i;
}
document.write(sum + '<br>');

document.write('<br> 5. Знайти добуток усіх цілих чисел від 15 до 35. <br>');
let mult = 1;

for(i = 15; i <= 35; i++) {
    mult *=i;
}
document.write(mult + '<br>');

document.write('<br> 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500. <br>');
let sum2 = 0;
for(i = 1; i <= 500; i++) {
    sum2 +=i;
}
document.write(sum2 / 500 + '<br>');

document.write('<br> 7. Вивести суму лише парних чисел в діапазоні від 30 до 80. <br>');
let sum3 = 0;

for(let i = 30; i <= 80; i++) {
    if(i % 2 !== 0) continue;
    sum3 += i;
}
document.write(sum3 + '<br>');


document.write('<br> 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3. <br>');
for(let i = 100; i <= 200; i++) {
    if(i % 3 !== 0) continue;
    document.write(i + '&nbsp;');
}
document.write('<br>');

document.write('<br> 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. <br> Число - 35354 <br>');
let numb1 = 35354;

for(let i = 1; i < numb1; i++) {
    if (numb1 % i == 0) {
    document.write(i + '&nbsp;&nbsp;&nbsp;');
    }
}
document.write('<br>');

document.write('<br> 10. Визначити кількість його парних дільників. <br>');
for(let i = 1; i < numb1; i++) {
    if (numb1 % i == 0) {
        if(i % 2 !== 0) continue;
    document.write(i + '&nbsp;&nbsp;&nbsp;');
    }
}
document.write('<br>');

document.write('<br> 11. Знайти суму його парних дільників. <br>');
let numbSum = 0;
for(let i = 1; i < numb1; i++) {
    if (numb1 % i == 0) {
        if(i % 2 == 0) {
        numbSum += i;
        }
    }
}
document.write(numbSum + '<br>');

document.write('<br> 12. Надрукувати повну таблицю множення від 1 до 10. <br>');
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        document.write(i + ' * ' + j + ' = ' + i * j);
        document.write('<br>');
    }
    document.write('<br>');
}

document.write('13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….) <br>');
for(let i = 20; i <= 30; i+= 0.5) {
    document.write(i + '&nbsp;&nbsp;&nbsp;');
}
document.write('<br>');

document.write('<br> 14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.<br>');
let dollar = 27;
for(let i = 10; i <= 100; i+= 10) {
    document.write(i * dollar + '&nbsp;&nbsp;&nbsp;');
}
document.write('<br>');

document.write('<br> 15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.<br> Число - 970 <br>');
let n = 970;
for(let i = 1; i <= 100; i++) {
    if((i ** 2) < n) {
        document.write(i + '&nbsp;&nbsp;&nbsp;');
    }
}
document.write('<br>');

document.write('<br> 16. Дане ціле число. З`ясувати, чи є воно простим.<br> Число - 257 <br>');
let numb = 257;
for(let i = 2; i <= numb; i++) {
    if(numb % i == 0) {
        document.write('Це не просте число');
        break;
    } else {
        document.write('Це просте число');
        break;
    }
}
document.write('<br>');

document.write('<br> 17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.<br> Число - 811 <br>');
let num3 = 811;
let result = num3;

for(let i = 2; result > 1; i++) {
        result /= 3;
}

if (result === 1) {
    document.write('Це число можна одержати шляхом зведення числа 3 у деякий ступінь.');
} else {
    document.write('Це число не можна одержати шляхом зведення числа 3 у деякий ступінь.');

}