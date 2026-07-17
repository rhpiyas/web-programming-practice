let bt1 = document.getElementsByTagName("button")[0]
let bt2 = document.getElementsByTagName("button")[1]

let x = document.getElementsByTagName("h1")[0]


function addCss()
{
    x.classList.add("text")
}

function removeCss()
{
    x.classList.remove("text")
}

bt1.onclick = addCss
bt2.onclick = removeCss

let value = 1;

let bt3 = document.getElementsByTagName("button")[2]
let y = document.getElementsByClassName("count")[0]

function increse()
{
    y.innerHTML = value++;

    if(value > 10)
    {
        value = 0
    }
}

bt3.onclick = increse
