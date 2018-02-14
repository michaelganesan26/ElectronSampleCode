
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

require('dotenv').config();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

let windowHeight = 1000, windowWidth = 1000;
let minWindowHeight = 200, minWindowWidth = 400;

let applicationWindows = {};




function createWindow() {
    // Create the browser window.
    applicationWindows.main = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        minHeight: minWindowHeight,
        minWidth: minWindowWidth,
        center: true,
        fullscreen: false,
        title: "Main Multiple Windows(F11 to reset)",
        closable: true,
        frame: process.env.FRAME === 'false' ? false : true,
        show: false //do not show the windows until the browser has loaded
    });

    //only show this window when the browser has loaded the code
    applicationWindows.main.on("ready-to-show", () => {
        applicationWindows.main.show();
        console.log("launched the multiplewindows code!!");
    });

    // and load the index.html
    applicationWindows.main.loadURL(url.format({
        pathname: path.join(__dirname, 'dist', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    console.log(`debug ${process.env.DEBUG}`);
    if (process.env.DEBUG === 'true') {
        applicationWindows.main.webContents.openDevTools()
    }


    // Emitted when the window is closed.
    applicationWindows.main.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        applicationWindows.main = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applicationWindowss and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (applicationWindows === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
