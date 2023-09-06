const { app,BrowserWindow, ipcMain } = require("electron");
const {main} = require("./main");
const { QUERY, INSERT, UPDATE, DELETE } = require("./database/db");

app.whenReady().then(()=>{
    ipcMain.handle('insert', async (event, val1,val2)=>{
        return await INSERT(val1,val2)
    })
    ipcMain.handle('update', async (event, val1,val2,val3)=>{
        return await UPDATE(val1,val2,val3)
    })
    ipcMain.handle('delete', async (event, val1)=>{
        return await DELETE(val1)
    })
    ipcMain.handle('query', () => QUERY("cursos"))
    main()
})
app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0) main

})



