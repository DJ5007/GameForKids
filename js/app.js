let words = [
    "ЯБЛУКО",
    "ПОЛУНИЦЯ",
    "СЛИВА",
    "БАНАН",
    "АНАНАС",
    "ПОРІЧКИ",
    "АБРИКОС",
    "МАЛИНА",
    "ОЖИНА",
    "ПЕРСИК",
    "ГРАНАТ",
    "ГРЕЙПФРУКТ",
    "КІВІ",
    "ІНЖИР",
    "КОКОС",
    "ВИНОГРАД",
    "МАРАКУЯ",
    "ХУРМА",
    "ВИШНЯ",
    "ЧЕРЕШНЯ",
    "АГРУС",
    "ГРУША",
    "ДИНЯ",
    "ЛИМОН",
    "МАНДАРИН",
    "АПЕЛЬСИН",
    "КАВУН",
    "ФІНІК",
    "ІМБИР"
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = word[i];
}
document.querySelector('.field').innerHTML = answerArray.join("");

let elem =  document.getElementsByClassName('field')[0]; // берем див
let str = elem.innerText; // берем его текст
let symbols = str.split(""); // разбиваем на массив символов
let div = document.getElementsByClassName('wrap')[0]; // берем элемент body

symbols.forEach(function(item, i, arr) { // в цикле по всем
    let span = document.createElement('span'); // создаем span
    let newDiv = document.createElement('div'); // создаем span
    span.innerHTML = item; // задаем содержимое span
    newDiv.innerHTML = item; // задаем содержимое span
    div.appendChild(span); // прикрепляем к body
    div.appendChild(newDiv); // прикрепляем к body
    newDiv.className = 'new';
});

elem.remove(); // удалить наш див
elem.innerHTML = ''; // или убрать из дива текст


let clickedLetter = 0;
let endArr = 0;
function findLetter(letterObj) {
    clickedLetter = letterObj.innerHTML;
    let allLetters = document.getElementById("wrap");
    let childs = allLetters.children;
    for (let i = 0; i < childs.length; i++) {
        if (childs[i].innerHTML === clickedLetter) {
            childs[i].style.transform = 'rotateY(45deg)';
            endArr += 1/2;
        }
        else {
            letterObj.style.opacity = '0';
        }
        if (endArr === answerArray.length) {
            setTimeout(function() {
            let winnerText = document.querySelector('#winner-text');
            winnerText.style.display = 'block';
            }, 1200);
        }
    }
}

document.querySelector('#btn').onclick = function (e) {
    setTimeout(function() {
    let winnerText = document.querySelector('#winner-text');
        winnerText.style.display = 'none';
    }, 300);
};