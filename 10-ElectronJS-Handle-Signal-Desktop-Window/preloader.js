const electron = require("electron")

function getInvoke()
{
    return electron.ipcRenderer.invoke;
}

electron.contextBridge.exposeInMainWorld("rhpiyas",{
    getInvoke
})