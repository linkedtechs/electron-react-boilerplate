import {app, BrowserWindow} from 'electron';
import * as url from 'url';
// import * as path from 'path';
import * as  fs from 'fs';

var isDev = (process.env.NODE_ENV=="development") ? true : false;

let mainWindow: Electron.BrowserWindow;
/* console.log(url.format({
	pathname: path.join(__dirname, "./dist/index.html"),
	protocol: "file",
	slashes: true

	})
   ); */


   const path = 'index.html'
   
   fs.readFile(path, 'utf8', (err, data) => {
	 if (err) {
	   console.error(err)
	   return
	 }
	});

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	if (isDev)
		mainWindow.webContents.openDevTools();

	if (isDev)
	{	mainWindow.loadURL('http://localhost:8080')
}else
{		mainWindow.loadFile('index.html');
console.log('created');
}
	mainWindow.on("closed", () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		console.log('closed');
		mainWindow = null;
	  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	console.log('all-closed');

	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	console.log('activated');
	if (mainWindow === null) {
		createWindow();
	}
});
