document.querySelector('.minus').addEventListener('click', clickMinus);
document.querySelector('.plus').addEventListener('click', clickPlus);
const counter = document.querySelector('.counter');
document.querySelector('.btn__cancel').addEventListener('click', cancel);

function clickMinus() {
    if (parseInt(counter.innerHTML) > 1) {
       counter.innerHTML--;
    };
}
function clickPlus() {
    if (counter.innerHTML < 5) {
        counter.innerHTML++;
    } else {
        alert('Всё, кончились');
    };
}
function cancel() {
    document.querySelector('.btn__cancel').classList.toggle('btn__cancel_toggle');
    counter.innerHTML = 0;
    let btnText = document.querySelector('.btn__cancel');
    if (btnText.getAttribute('value')==='cancel') {
        btnText.setAttribute('value','отмена');
    } else {
        btnText.setAttribute('value','cancel');
    };
}