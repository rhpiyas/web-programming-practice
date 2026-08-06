const electron = require("electron")

function createWindow()
{
    const window = new electron.BrowserWindow({
        height: 350,
        width: 600,
        maximizable: false,
        minimizable: false,
        movable: true,
        fullscreenable: false,
        resizable: false,
    })

    electron.dialog.showMessageBox({
        title: "Hello",
        message: "Welcome to Piyas's Window"
    })

    window.loadFile("index.html")
}

electron.app.on("ready", createWindow)