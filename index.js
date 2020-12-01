const si = require('systeminformation');

const CPU = {
  temperature: () => si.cpuTemperature().then((temperature) => temperature),
  details: () => si.cpu().then((details) => details)
}

setInterval(async () => {
  try {
    const temperature = await CPU.temperature();
    const details = await CPU.details();

    const payload = {
      cpu: {
        temperature: temperature.main,
        ...details
      }
    }

    console.log(payload)
  } catch(error) {
    console.error(error)
  }
}, 1000);