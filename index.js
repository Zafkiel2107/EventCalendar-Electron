const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
  })
  mainWindow.loadFile('Event calendar/index.html')
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);
