async function main()
{
    const target = document.getElementById("target")
    const data = document.getElementById("data")

    const bt1 = document.getElementsByTagName("button")[0]
    const bt2 = document.getElementsByTagName("button")[1]
    const bt3 = document.getElementsByTagName("button")[2]

    const invoke = rhpiyas.getInvoke()

    async function play()
    {
        const message = await invoke ("play", data.value)
        target.innerHTML = data.value + message
    }
    bt1.onclick = play

    async function study()
    {
        const message = await invoke ("study")
        target.innerText = data.value + message
    }
    bt2.onclick = study

    async function sleep()
    {
        const message = await invoke ("sleep")
        target.innerText = data.value + message
    }
    bt3.onclick = sleep
}

main()