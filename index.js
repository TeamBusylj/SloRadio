const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 1090,
    height: 800,
    resizable: true,
  });
  win.loadFile("index.html");
}

