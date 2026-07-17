let bt1 = document.getElementsByTagName("button")[0]
let bt2 = document.getElementsByTagName("button")[1]

let target = document.getElementsByTagName("img")[0]

let img = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png"]
let count = 1

function next()
{
    target.src = img[count++]

    if(count >= img.length)
    {
        count = 0;
    }
}

function prev()
{
    --count;

    if(count < 0)
    {
        count = img.length - 1;
    }

    target.src = img[count]
}

bt1.onclick = next
bt2.onclick = prev