const electron = require("electron")

function createWindow()
{
    const window = new electron.BrowserWindow({
        height: 400,
        width: 700,
        title: "PiyasTube",
        minimizable: false,
        maximizable: false,
        resizable: false,
        fullscreen: false,
        titleBarOverlay: true,
    })

    window.loadURL("http://youtube.com")
}

electron.app.on("ready", createWindow)