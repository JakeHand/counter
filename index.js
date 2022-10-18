let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let counter = document.getElementById('counter')
let count = 0;

minus.onclick = function() {
    count--;
    counter.innerHTML = count;
}

plus.onclick = function() {
    count++;
    counter.innerHTML = count;
}
