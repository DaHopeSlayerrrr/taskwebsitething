var listNum = 0
var numbering = 1

function addlist(){
    var inputtext = document.getElementById('listinput');
    var newlist = document.createElement('p');
    var listcontainer = document.createElement('div');
    listcontainer.classList.add('addlist');
    newlist.innerHTML = numbering + '. ' + inputtext.value;
    document.getElementById('mainpage').appendChild(listcontainer);
    document.getElementsByClassName('addlist')[listNum].appendChild(newlist);
    listNum++;
    numbering++;
    inputtext.value = " ";
}

function clearall(){
    var container = document.querySelectorAll('.addlist');
    container.forEach(function(item) {
        item.remove()
    });
    listNum = 0
    numbering = 1
}