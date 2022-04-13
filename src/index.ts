import { displayErrorInConsole, getConnectedDevices, connectToDevice, i2CWrite, setSpeed, getErrorFromCode } from './library'
import pc from 'picocolors'

const ADDRESS = 0x08

try {
  const devices = getConnectedDevices()

  if (devices > 0) {
    console.log(pc.green(`${devices} Device(s) connected!`))

    const handle = connectToDevice(0)
    setSpeed(handle, 400000)
    i2CWrite(handle, ADDRESS, 'Hello World')

    console.log('Wrote to device: ', ADDRESS)
  } else {
    console.log('No connected devices.')
  }
} catch (error) {
  if (typeof error === 'number') {
    const err = getErrorFromCode(error)
    if (err) {
      displayErrorInConsole(err)
    }
  }
}
