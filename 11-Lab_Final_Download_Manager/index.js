const electron = require("electron");
const path = require("path");
const  helper = require("./tools.js") // fixed, easy

let s;

function createWindow(ev)
{
    const window = new electron.BrowserWindow({
        height:350,
        width: 600,
        maximizable: false,
        minimizable: true,
        title: "Piyas's Window",
        
        webPreferences:{
            preload: path.join(__dirname, "preload.js")
        }
    })

    window.loadFile("./helper-htmls/download-manager.html") //my task is download manager
    // so I load only download-manager.html
}

function handleStartSignal(eve, url)
{
    let path = ""
   const dir = electron.dialog.showOpenDialogSync({
        properties:["openDirectory"]
    }); 
    
        // As soon as this line runs, a Open popup will appear, and
        // whatever you select, will be inside dir[0].
    if (dir)
       path  = dir[0];

    console.log(url, path)

    s =  helper.createAndStartDownload(url, path)

    return s
}

electron.ipcMain.handle("start", handleStartSignal)

function handleProgress(eve, signal)
{
    if (!s)
    {
        return {
            downloaded: 0,
            destination: null,
            total: 0,
            percentage: 0,
            speed: 0
        };
    } // these lines are from chatGPT, but not just copy and paste
      // I understand these lines of code
      // It prevent error when the downloads is not started yet and variable s is undefined
      // Error details in Answerme.txt (Error 2)
    return s.getProgress();
}

electron.ipcMain.handle("progress", handleProgress)

electron.app.on("ready", createWindow);
