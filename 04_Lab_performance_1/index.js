let src = document.getElementById("text")
let string = src.textContent

let questions = document.getElementsByClassName("question")

for(let i=0; i<string.length; i++)
{
    const target = questions[i].getElementsByTagName("input")
    target[string[i]].checked = true
}