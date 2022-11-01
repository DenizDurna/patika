let list = []
let task = "";

// imput taki değeri yakalama
var chng = (e) => {
    task = e.target.value
}

// Local de yer alan görevlerin listelenmesi
let lcltsks = JSON.parse(localStorage.getItem("tsk"))
lcltsks.forEach(element => {
    let crtli = document.createElement("li");
    crtli.innerHTML = element;
    document.querySelector("#list").appendChild(crtli)
    let dltbtn = document.createElement("span")
    dltbtn.innerHTML = `<img src="images/delete.png" height="25px alt="" onClick="dlt(this)">`;
    dltbtn.className = "close";
    crtli.appendChild(dltbtn)
    list.push(element);
    document.querySelector("#task").value = task;
});


// tıklanılan öğenin işaretlenmesi
var a = document.querySelector('ul');
a.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

//Yeni görev ekleme
function newElement() {
    if (!task == "" && !list.includes(task)) {
        let crtli = document.createElement("li");
        crtli.innerHTML = task;
        document.querySelector("#list").appendChild(crtli)
        let dltbtn = document.createElement("span")
        dltbtn.innerHTML = `<img src="images/delete.png" height="25px alt="" onClick="dlt(this)">`;
        dltbtn.className = "close"
        crtli.appendChild(dltbtn)
        list.push(task);
        task = "";
        document.querySelector("#task").value = task;
        $('.success').toast('show');
        localStorage.setItem("tsk", JSON.stringify(list))
    } else if (list.includes(task)) {
        task = "";
        document.querySelector("#task").value = task;
        $('.dooble').toast('show')
    } else {
        $('.error').toast('show')
    }

    aldlt()
}

// Görev silme
function dlt(e) {
    let i = e.parentNode.parentNode.innerText
    let b = list.indexOf(i);
    list.splice(b, 1);
    e.parentNode.parentNode.remove()
    $('.del').toast('show')
    localStorage.setItem("tsk", JSON.stringify(list))
    aldlt()
}



// tümünü sil butonu
function aldlt() {
    let dsply = document.querySelector("#aldlt");
    if (list.length > 1) {
        console.log(dsply)
        dsply.style.display = "block";
    } else {
        dsply.style.display = "none"
    }
}
aldlt()


// Tümünü silme 
function alldlt() {
    localStorage.clear();
    list = []
    task = "";
    let object = document.querySelectorAll("li");
    for (const iterator of object) {
        iterator.remove()
    }
    aldlt()
}