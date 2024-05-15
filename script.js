let modal = document.getElementById('myModal');
let modal2 = document.getElementById('myModal2');
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let close1 = document.getElementById("btnClose1");
let close2 = document.getElementById("btnClose2");
let save1 = document.getElementById("btnSave1");
let save2 = document.getElementById("btnSave2");
let minimum = document.getElementById("inMin");
let maximum = document.getElementById("inMax");
let inputMin = minimum.value;
let inputMax = maximum.value;
let minValue;
let maxValue;
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 0;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

btn.addEventListener('click', stepOne);
function stepOne () {
    modal.style.display = "block"
}

save1.addEventListener('click', saveOne);
function saveOne () {
    inputMin = minimum.value;
    minValue = parseInt((inputMin < -999) ? -999 : inputMin);
    console.log(minValue);
}

close1.addEventListener('click', closeOne);
function closeOne () {
    modal.style.display = "none"
}

btn2.addEventListener('click', stepTwo);
function stepTwo () {
    modal2.style.display = "block"
}

save2.addEventListener('click', saveTwo);
function saveTwo () {
    inputMax = maximum.value;
    maxValue = parseInt((inputMax > 999) ? 999 : inputMax); 
    console.log(maxValue);
}

close2.addEventListener('click', closeTwo);
function closeTwo () {
    modal2.style.display = "none";
    if (Number.isNaN(minValue) || Number.isNaN(maxValue)){
        alert('Введено неверное значение Min или Max.\nА ну повторил ШАГ 1 и ШАГ 2!!!')
    };
    if (Number.isInteger(minValue) && Number.isInteger(maxValue)){
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        
        btn.disabled = true;
        btn.textContent = 'Неактивная кнопка.\nНажать Заново для активации.';

        btn2.disabled = true;
        btn2.textContent = 'Неактивная кнопка.\nНажать Заново для активации.';

        const orderNumberField = document.getElementById('orderNumberField');
        const answerField = document.getElementById('answerField');

        orderNumberField.innerText = orderNumber;

        let changedNumToText = useNumInWords(answerNumber);
        answerField.innerText = `Вы загадали число ${changedNumToText }?`
        console.log(minValue + maxValue)};
        
    };
    
    let gameRun = true;

document.getElementById('btnRetry').addEventListener('click', gameRestart);
document.getElementById('btnOver').addEventListener('click', btnUp);
document.getElementById('btnLess').addEventListener('click', btnDown);
document.getElementById('btnEqual').addEventListener('click', btnVictory);

function gameRestart () {
modal = document.getElementById('myModal');
modal2 = document.getElementById('myModal2');
btn = document.getElementById("myBtn");
btn2 = document.getElementById("myBtn2");
close1 = document.getElementById("btnClose1");
close2 = document.getElementById("btnClose2");
save1 = document.getElementById("btnSave1");
save2 = document.getElementById("btnSave2");
minimum = document.getElementById("inMin");
maximum = document.getElementById("inMax");
inputMin = minimum.value;
inputMax = maximum.value;
minValue;
maxValue;
answerNumber = Math.floor((minValue + maxValue) / 2);
orderNumber = 0;

btn.disabled = false;
btn.textContent = 'ШАГ 1. Нажать для ввода MIN';

btn2.disabled = false;
btn2.textContent = 'ШАГ 2. Нажать для ввода MAX';

minimum.value = "";
maximum.value = "";

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
answerField.innerText = 'Вы ничего не загадали!\nПовторите ШАГ 1 и ШАГ 2!';

orderNumberField.innerText = orderNumber;

btn.addEventListener('click', stepOne);

save1.addEventListener('click', saveOne);

close1.addEventListener('click', closeOne);

btn2.addEventListener('click', stepTwo);

save2.addEventListener('click', saveTwo);

close2.addEventListener('click', closeTwo);

gameRun = true;
}


function btnUp () {
        if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase = ''; 
            if (phraseRandom === 1) {
                answerPhrase = 'Вы загадали неправильное число!\nЗаново, 2pizza!\n\u{1F624}';
            } else if (phraseRandom === 2) {
                answerPhrase = 'Я сдаюсь..\nЖми Заново!\n\u{2620}';
            } else {
                answerPhrase = 'Давай заново, бесишь!\n\u{1F92C}';
            }
            
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandomQuestion = Math.round( Math.random() * 3);
            changedNumToText = useNumInWords(answerNumber);
            let questionPhrase = '';
            if (phraseRandomQuestion === 1) {
                questionPhrase = `Вы загадали число ${changedNumToText }?\n\u{1F64A}`;
            } else if (phraseRandomQuestion === 2) {
                questionPhrase = `Чую, что ваше число ${changedNumToText }\n\u{1F649}`;
            } else {
                questionPhrase = `Зуб даю, что ${changedNumToText }\n\u{1F648}`;
            }
            answerField.innerText = questionPhrase;
        }
    }
}


function btnDown () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandomLess = Math.round( Math.random() * 3);
            let answerPhraseLess = ''; 
            if (phraseRandomLess === 1) {
                answerPhraseLess = 'Вы загадали неправильное число!\nЗаново, 2pizza!\n\u{1F624}';
            } else if (phraseRandomLess === 2) {
                answerPhraseLess = 'Я сдаюсь...\nЖми Заново!\n\u{2620}';
            } else {
                answerPhraseLess = 'Давай заново, бесишь!\n\u{1F92C}';
            }
            
            answerField.innerText = answerPhraseLess;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandomQuestionLess = Math.round( Math.random() * 3);
            changedNumToText = useNumInWords(answerNumber);
            let questionPhraseLess = '';
            if (phraseRandomQuestionLess === 1) {
                questionPhraseLess = `Вы загадали число ${changedNumToText }?\n\u{1F64A}`;
            } else if (phraseRandomQuestionLess === 2) {
                questionPhraseLess = `Чую, что ваше число ${changedNumToText }\n\u{1F649}`;
            } else {
                questionPhraseLess = `Зуб даю, что ${changedNumToText }\n\u{1F648}`;
            }
            answerField.innerText = questionPhraseLess;
        }
    }
} 

function btnVictory () {
    if (gameRun){
        const phraseVictory = Math.round( Math.random() * 3);
        let victoryPhrase = '';
        if (phraseVictory === 1) {
            victoryPhrase = 'Я всегда угадываю!\n\u{1F60E}';
        } else if (phraseVictory === 2) {
            victoryPhrase = 'Пффф! Ваще изи!\n💪';
        } else {
            victoryPhrase = 'Давай что-нибудь посложнее, а???\n🥳';
        }
        answerField.innerText = victoryPhrase;

    gameRun = false;
}
}


function useNumInWords(answerNumber){
    if (changeNumToWords(answerNumber).length <= 20){
        return changeNumToWords(answerNumber)
    }
        else {return answerNumber}
        }


function changeNumToWords(answerNumber){
    if (typeof answerNumber === 'number' && answerNumber >= -999 && answerNumber <= 999){
        if (answerNumber === 0){
            return 'ноль';
        }
        if (answerNumber){
            const ones = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь' ,'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать' ,'восемнадцать', 'девятнадцать'];
            const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
            const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
            let otvet = '';
            if (answerNumber < 0){
                otvet += 'минус '
                answerNumber = Math.abs(answerNumber)
            }
            if (answerNumber >= 100){
                otvet += hundreds[Math.floor(answerNumber/100)] + ' ';
                answerNumber %= 100;
            }
            if (answerNumber >= 20){
                otvet += tens[Math.floor(answerNumber/10)] + ' ';
                answerNumber %= 10;
            }
            if (answerNumber > 0){
                if (answerNumber < 20){
                    otvet += ones[answerNumber] + ' ';
                } else {otvet += ones[Math.floor(answerNumber % 10)] + ' ';}
            } return otvet.trim();
        } else {return answerNumber;}
    } 
}  
    
    
    
