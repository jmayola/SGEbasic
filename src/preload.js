const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('db',{
    query: ()=> ipcRenderer.invoke('query'),
    insert: (val1,val2)=> ipcRenderer.invoke('insert', val1,val2),
    update: (val1,val2,val3)=> ipcRenderer.invoke('update', val1,val2,val3),
    delete: (val)=>ipcRenderer.invoke('delete', val)
})