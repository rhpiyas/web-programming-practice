async function main()
{
    const target = document.getElementsByTagName("h1")[0]
    const bt = document.getElementsByTagName("button")[0]
    const bt2 = document.getElementsByTagName("button")[1]

    const input = document.getElementsByTagName("input")[0]

    const invoke = rhpiyas.getInvoke()

    async function act()
    {
        const data = await invoke("wow", input.value)
        target.innerText = data
    }

    async function act2()
    {
        const data2 = await invoke("hi", input.value)
        target.innerText = data2
    }

    bt.onclick = act
    bt2.onclick = act2

}

main();