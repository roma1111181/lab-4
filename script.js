// returns random color
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

// changes color for the first element using getElementById
function changeColorFirst() {
    var elem = document.getElementById("first");
    elem.style.color = getRandomColor();
    elem.style.background = getRandomColor();
};

// changes color for the second element using querySelector
function changeColorSecond() {
    var elem = document.querySelector(".second");
    elem.style.color = getRandomColor();
    elem.style.background = getRandomColor();
};

// element that contains image and hyperlink
const image = document.getElementById('image');
// picture element itself
const picture = document.getElementById('picture');

//adding event listeners to corresponding buttons
document.getElementById('add').addEventListener("click", () => add());
document.getElementById('increase').addEventListener("click", () => increase());
document.getElementById('reduce').addEventListener("click", () => reduce());
document.getElementById('remove').addEventListener("click", () => remove());

// adding image
function add() {
    if (image.classList.contains('visible')) {
        alert("Немає сенсу додавати картинку, вона вже існує")
    }
    else {
        image.setAttribute("class", "");
        picture.height = 400;
        image.classList.add('visible');
    }
}

// removing image
function remove() {
    image.setAttribute("class", "");
    image.classList.add('invisible');
}

// increasing image
function increase() {
    if (picture.height < 700) {
        picture.height += 100;
    }
    else if (image.classList.contains('visible')) {
        alert('Досягнуто максимального розміру зображення')
    }
}

// decreasing image
function reduce() {
    if (picture.height > 100) {
        picture.height -= 100;
    }
    else if (image.classList.contains('visible')) {
        alert('Досягнуто мінімального розміру зображення')
    }
}