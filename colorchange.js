
function bodyColorChanger() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;


}

document.getElementById('themeBtn').onclick = bodyColorChanger;
