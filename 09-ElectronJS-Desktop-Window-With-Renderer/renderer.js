const target = document.getElementsByTagName("h1")[0]

const bt = document.getElementsByTagName("button")[0]
const bt2 = document.getElementsByTagName("button")[1]


bt.onclick = act

function act()
{
    target.innerText = "Hello, My name is Rakib Hasan Piyas"
}

bt2.addEventListener("click", act2)

function act2()
{
    target.innerText = "No name"

}