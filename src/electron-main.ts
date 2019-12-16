import { BrowserWindow } from 'electron';

import isDev from 'electron-is-dev';
import * as url from 'url';
import * as path from 'path';

// const isDev = true;
export default class Main {
	static mainWindow: Electron.BrowserWindow;
	static application: Electron.App;
	static BrowserWindow: any;
	private static onWindowAllClosed() {
		if (process.platform !== 'darwin') {
			Main.application.quit();
		}
	}

	private static onClose() {
		// Dereference the window object. 
		Main.mainWindow = null;
	}

	private static onReady() {
		Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 });
		//Main.mainWindow.loadURL(`file://${__dirname}/inxdex.html`);
		//console.log(`file://${__dirname}/inxdex.html`);
		// const index_path = Main.application.getAppPath() + '/dist/assets/index.html';
		const index_path = path.resolve(__dirname, 'index.html')
		
		Main.mainWindow.loadURL(url.format({
			pathname: index_path,
			protocol: 'file:',
			slashes: true
		}));

		if (isDev)
			Main.mainWindow.webContents.openDevTools()
		
		Main.mainWindow.on('closed', Main.onClose);
	}

	static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
		// we pass the Electron.App object and the  
		// Electron.BrowserWindow into this function 
		// so this class has no dependencies. This 
		// makes the code easier to write tests for 

		if (isDev) {
			console.log('Running in development');
		} else {
			console.log('Running in production');
		}
	Main.BrowserWindow = browserWindow;
		Main.application = app;
		Main.application.on('window-all-closed', Main.onWindowAllClosed);
		Main.application.on('ready', Main.onReady);
	}
}
