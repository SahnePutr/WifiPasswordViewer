const wifi = require('wifi-password');

wifi.getWifiInfo().then(info => {
  console.log('Wi-Fi Networks:');
  info.forEach(network => {
    console.log(`SSID: ${network.ssid}`);
    console.log(`Password: ${network.password}\n`);
  });
}).catch(error => {
  console.error('Error:', error);
});
