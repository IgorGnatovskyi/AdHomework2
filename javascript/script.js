const battery = 15.678;
const charger = 123.965;
const inverter = 90.2345;


// Максимальна ціна //

console.log("Max price :", Math.max(battery ,charger ,inverter));

// Мінімальна ціна //

console.log("Min price :", Math.min(battery ,charger ,inverter));

// Сума всіх товарів //

const totalPrice = battery + charger + inverter;
console.log("Sum price :", totalPrice);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
//між собою. Округлення використовувати в МЕНЬШУ сторону.//

const coinPraice = Math.floor(battery) + Math.floor(charger) + Math.floor(inverter);
console.log("Without coin :" ,coinPraice);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)//

const roundedHundreds = Math.round (totalPrice / 100) * 100;
console.log("Rounded :" ,roundedHundreds);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?//

const boolianSum = coinPraice % 2 == 0;
console.log("Pair number :" ,boolianSum);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.//

const restSum = 500 - totalPrice;
console.log("Rest : ",restSum);

//Виведіть середнє значення цін, округлене до другого знаку після коми//

const mediumPrice =((battery + charger + inverter)/3).toFixed(2);
console.log("Price medium :" ,mediumPrice);

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).//

const discount =(Math.random() * 100).toFixed(0);
console.log("Rendom discount :" ,discount);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.//

console.log("Discount price :" ,(totalPrice - discount).toFixed(2));

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?//

const netProfit = ((totalPrice - discount) / 2).toFixed(0);
console.log("Net profit :" ,netProfit);

console.log(`
Максимальна ціна: ${ Math.max(battery ,charger ,inverter)}
Мінільна ціна: ${Math.min(battery ,charger ,inverter)}
Сума товарів: ${totalPrice}
Сума товарів округлена в меншу сторону: ${coinPraice}
Сума товарів округлена до сотні: ${roundedHundreds}
Сума товарів парне число? ${boolianSum}
Решта з 500 грн: ${restSum}
Середнє значенння: ${mediumPrice}
Випадкова знижка: ${discount}
Округлена випадкова знижка: ${(totalPrice - discount).toFixed(2)}
Прибуток: ${netProfit}
`)
