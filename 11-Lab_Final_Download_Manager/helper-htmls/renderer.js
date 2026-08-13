async function keepUpdatingClock(){
    setInterval(function (){
        document.getElementById("clock").innerText = new Date().toLocaleTimeString("en-GB")
    }, 1000);
}

async function main(){
    keepUpdatingClock();

    const bt = document.getElementById("choose-location")
    const url = document.getElementById("download-link")

    async function act()
    {
        const link = await invoke("start", url.value)
    }

    bt.onclick = act;

    const prog = document.getElementById("progress")

    setInterval(async function (){  //স্যার, এইখানে async ব্যবহার করছিলাম না
        const val = await invoke("progress")
        loadProgress(val)
    }, 1000);

 }



main()
