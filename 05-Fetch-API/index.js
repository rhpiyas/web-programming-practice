let bt = document.getElementsByTagName("button")[0]
let error = document.getElementsByTagName("p")[0]
let target = document.getElementsByTagName("ul")[0]

let flag = true;

async function act()
{
    try
    {
        const rawData = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!rawData.ok)
        {
            throw new Error()
        }

        const data = await rawData.json()
        console.log(data)

        if(flag)
        {
            for(let i=0; i<data.length; i++)
            {
                target.innerHTML += "<li>" + data[i].name + "</li>"
            }
            flag = false;
        }
        
    }
    catch(x)
    {
        error.innerHTML = "Sorry, can't fetch data <br><br> Something went wrong"
    }
}

bt.onclick = act