const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;
function createWindow () {
  //创建一个 800x600 的浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1000, 
    height: 700,
    webPreferences:{
      nodeIntegration:true
     }
  });

  //加载应用的界面文件
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  //打开开发者工具，方便调试
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

 
}


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
   }
 });

