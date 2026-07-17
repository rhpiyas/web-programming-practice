document

let a = document.getElementsByClassName("cl3")[0]

let b = document.getElementsByClassName("pic")[0]

function picx()
{
    b.height = "500px"
}

function hide()
{
    b.src = "#"
}

function loadPic()
{
    b.src = "Piyas.jpeg"
    b.style.height = "500px"

}


a.onclick = loadPic

let c = document.getElementsByClassName("cll")[0]

c.onclick = hide