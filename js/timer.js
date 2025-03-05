var number = 0;
var numberdisplay = document.getElementById('count');
var mainblock = document.getElementById('mainblock');
function dec(){
    if (number <= 0) {
        numberdisplay.textContent = 0;
    } else {
        number--;
        numberdisplay.textContent = number;
        mainblock.classList.add('blockmoveleft');
        setTimeout(function() {
            mainblock.classList.remove('blockmoveleft');
        }, 500);
    }
}


function inc() {
    number++;
    numberdisplay.textContent = number;
    mainblock.classList.add('blockmoveright');
    setTimeout(function() {
        mainblock.classList.remove('blockmoveright');
    }, 500);
}