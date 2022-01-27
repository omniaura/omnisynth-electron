import { handleActions } from 'redux-actions';
import actions from '../actions/user';

export default handleActions(
  {
    // [actions.login]: (state, action) => {
    //   return { ...state, ...action.payload };
    // },
    // [actions.logout]: (state, action) => {
    //   return { ...state, ...action.payload };
    // },
  },
  {},
);

// const path = require('path')
// const OSC = require('osc-js')

// const { app, BrowserWindow } = require('electron')

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   win.loadFile('index.html')
// }

// const startOscServer = () => {
//   const osc = new OSC({
//     plugin: new OSC.DatagramPlugin({ send: { port: 57120, host: '127.0.0.1' } })
//   });

//   // osc.on('open', () => {
//   //   console.log('osc opened')
//   // })

//   osc.open();

//   return osc;
// }

// const attachOscEventListeners = (osc) => {
//   osc.on('/control', () => {

//   })
// }

// app.whenReady().then(() => {
//   createWindow();
//   const osc = startOscServer();
//   attachOscEventListeners(osc);
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })
