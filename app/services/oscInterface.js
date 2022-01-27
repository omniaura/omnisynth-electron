const OSC = require('osc-js');

const startOscServer = () => {
  const osc = new OSC({
    plugin: new OSC.DatagramPlugin({ send: { port: 57120, host: '127.0.0.1' } })
  });

  osc.on('open', () => {
    console.log('osc opened')
  })

  osc.open();

  return osc;
}


