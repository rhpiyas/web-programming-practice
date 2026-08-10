const electron = require("electron")
const path = require("path")

function createWindow()
{
    const window = new electron.BrowserWindow({
        height: 350,
        width: 600,
        resizable: false,
        minimizable: false,

        webPreferences: {
            preload: path.join(__dirname, "preloader.js")
        }
    })

    electron.dialog.showMessageBox({
        title: "Welcome",
        message: "Welcome to my app"
    })

    window.loadFile("index.html")
}

function handleWowSignal(eve, data)
{
    electron.dialog.showMessageBox({
        title: "NASA's WOW Signal",
        message: "NASA's WOW Signal DETECTED by " + data + " !"
    })

    return "Wow, " + data + ".\nYou have handled NASA's WOW Signal Successfully! What a Genious!"
}
electron.ipcMain.handle("wow", handleWowSignal)

function handleHiSignal(eve, data)
{
    electron.dialog.showMessageBox({
        title: "Hi Signal",
        message: "HI Signal is DETECTED from " + data + " !"
    })

    return "Good Morning " + data + ".\nI hope everything is going well!"
}
electron.ipcMain.handle("hi", handleHiSignal)

electron.app.on("ready", createWindow);