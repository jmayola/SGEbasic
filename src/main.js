const path = require('path')
const { BrowserWindow } = require("electron");
function main(){
 app = new BrowserWindow({
    width: 800,
    height: 640,
    webPreferences: {
        nodeIntegration: true,
        devTools: true,
        javascript: true,
        preload: path.join(__dirname, "preload.js")
    }
})
app.loadFile("./src/interface/index.html")
app.menuBarVisible= true
}
module.exports = {
    main
}