const { constants } = require("buffer")
const electron = require("electron")
const path = require("path")

function createWindow()
{
    const window = new electron.BrowserWindow({
        height: 350,
        width: 600,
        minimizable: false,
        maximizable: false,
        movable: true,
        title: "Your device is HACKED!",
        fullscreen: false,
        resizable: false,

        webPreferences : {
            preload: path.join(__dirname, "preloader.js")
        }
    })

    electron.dialog.showMessageBox({
        title: "Welcome",
        message: "Welcome to QUIZ 3 !"
    })

    const contextMenu = electron.Menu.buildFromTemplate([
        {
            role: "copy"
        },
        {
            label: "REFRESH",
            role: "reload"
        },
        {
            role: "about"
        }
    ])

    window.webContents.on("context-menu", ()=>{
        contextMenu.popup()
    })
    window.loadFile("index.html")
}

function handlePlaySignal(signal, value)
{
    electron.dialog.showMessageBox({
        title: "PLAY",
        message: "Really want to play?"
    })
    console.log(signal)
    console.log(value)
    return " is Playing now!"
}
electron.ipcMain.handle("play", handlePlaySignal)

function handleStudySignal()
{
    electron.dialog.showMessageBox({
        title: "STUDY",
        message: "Good boy, time to study"
    })

    return " is now studying!"
}
electron.ipcMain.handle("study", handleStudySignal)

function handleSleepSignal()
{
    electron.dialog.showMessageBox({
        title: "STUDY",
        message: "Okay, let's sleep togather!"
    })
    return " is sleeping now, do not disturb!"
}
electron.ipcMain.handle("sleep", handleSleepSignal);


electron.app.on("ready", createWindow)