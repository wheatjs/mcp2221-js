export const enum MCP2221ErrorCode {
  E_NO_ERR = 0,
  E_ERR_UNKOWN_ERROR = -1,
  E_ERR_CMD_FAILED = -2,
  E_ERR_INVALID_HANDLE = -3,
  E_ERR_INVALID_PARAMETER = -4,
  E_ERR_INVALID_PASS = -5,
  E_ERR_PASSWORD_LIMIT_REACHED = -6,
  E_ERR_FLASH_WRITE_PROTECTED = -7,
  E_ERR_NULL = -10,
  E_ERR_DESTINATION_TOO_SMALL = -11,
  E_ERR_INPUT_TOO_LARGE = -12,
  E_ERR_FLASH_WRITE_FAILED = -13,
  E_ERR_MALLOC = -14,
  E_ERR_NO_SUCH_INDEX = -101,
  E_ERR_DEVICE_NOT_FOUND = -103,
  E_ERR_INTERNAL_BUFFER_TOO_SMALL = -104,
  E_ERR_OPEN_DEVICE_ERROR = -105,
  E_ERR_CONNECTION_ALREADY_OPENED = -106,
  E_ERR_CLOSE_FAILED = -107,
  E_ERR_RAW_TX_TOO_LARGE = -301,
  E_ERR_RAW_TX_COPYFAILED = -302,
  E_ERR_RAW_RX_COPYFAILED = -303,
  E_ERR_INVALID_SPEED = -401,
  E_ERR_SPEED_NOT_SET = -402,
  E_ERR_INVALID_BYTE_NUMBER = -403,
  E_ERR_INVALID_ADDRESS = -404,
  E_ERR_I2C_BUSY = -405,
  E_ERR_I2C_READ_ERROR = -406,
  E_ERR_ADDRESS_NACK = -407,
  E_ERR_TIMEOUT = -408,
  E_ERR_TOO_MANY_RX_BYTES = -409,
  E_ERR_COPY_RX_DATA_FAILED = -410,
  E_ERR_NO_EFFECT = -411,
  E_ERR_COPY_TX_DATA_FAILED = -412,
  E_ERR_INVALID_PEC = -413,
  E_ERR_BLOCK_SIZE_MISMATCH = -414,
}

export interface MCP2221Error {
  code: number
  description: string
  suggestion: string
}

export const MCP2221Errors: MCP2221Error[] = [
  {
    code: MCP2221ErrorCode.E_NO_ERR,
    description: 'Operation was successful',
    suggestion: '',
  },
  {
    code: MCP2221ErrorCode.E_ERR_UNKOWN_ERROR,
    description: 'Unknown error. This can happen in the getconnecteddevices, openbyindex or openbysn if searching through the connected hid devices fails.',
    suggestion: 'Try again'
  },
  {
    code: MCP2221ErrorCode.E_ERR_CMD_FAILED,
    description: 'The library indicates an unexpected device reply after being given a command: neither successful operation nor specific error code.',
    suggestion: 'This is a command failure indication. Depending on the application strategy, the next step can be a device status check followed by command retry.'
  },

  {
    code: MCP2221ErrorCode.E_ERR_INVALID_HANDLE,
    description: 'Invalid device handle usage attempt. The device is already closed or there is an issue with the device handles management in the application',
    suggestion: 'Re-open the device, or exit the application.'
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_PARAMETER,
    description: 'At least one api parameter is not valid.',
    suggestion: 'Check the parameter validity and try again.'
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_PASS,
    description: 'Invalid password string (length < 8)',
    suggestion: 'Check the password string and try again.'
  },
  {
    code: MCP2221ErrorCode.E_ERR_PASSWORD_LIMIT_REACHED,
    description: 'An incorrect password was sent 3 times.',
    suggestion: 'Reset the device, check the password and try again'
  },
  {
    code: MCP2221ErrorCode.E_ERR_FLASH_WRITE_PROTECTED,
    description: 'The command cannot be executed because the device is password protected or locked.',
    suggestion: 'Check the security settings (GetSecuritySetting) and if the device is not permanently locked, send the current password before retrying the operation'
  },
  {
    code: MCP2221ErrorCode.E_ERR_NULL,
    description: 'Null pointer received',
    suggestion: 'Validate the input parameters'
  },
  {
    code: MCP2221ErrorCode.E_ERR_DESTINATION_TOO_SMALL,
    description: 'Destination too small',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INPUT_TOO_LARGE,
    description: 'The input string exceeds the maximum allowed size',
    suggestion: 'Check that the string length is within the range provided in the function documentation.'
  },
  {
    code: MCP2221ErrorCode.E_ERR_FLASH_WRITE_FAILED,
    description: 'Flash write failed due to unknown cause',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_MALLOC,
    description: 'Memory allocation error',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_NO_SUCH_INDEX,
    description: 'An attempt was made to open a connection to a non existing index (usually >= the number of connected devices)',
    suggestion: 'Check the number of connected devices (with getconnecteddevices); the index must be smaller'
  },
  {
    code: MCP2221ErrorCode.E_ERR_DEVICE_NOT_FOUND,
    description: 'No device with the provided vid/pid or SN has been found. This error can also occur during i2c/smbus operations if the device is disconnected from the usb before the operation is complete. The OpenBySn method will also return this code if a connection to a matching device is already open.',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INTERNAL_BUFFER_TOO_SMALL,
    description: 'One of the internal buffers of the function was too small',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_OPEN_DEVICE_ERROR,
    description: 'An error occurred when trying to get the device handle',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_CONNECTION_ALREADY_OPENED,
    description: 'Connection already opened',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_CLOSE_FAILED,
    description: 'Close failed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_RAW_TX_TOO_LARGE,
    description: 'Raw tx too large',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_RAW_TX_COPYFAILED,
    description: 'Raw tx copy failed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_RAW_RX_COPYFAILED,
    description: 'Raw rx copy failed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_SPEED,
    description: 'Invalid speed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_SPEED_NOT_SET,
    description: 'Speed not set',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_BYTE_NUMBER,
    description: 'Invalid byte number',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_ADDRESS,
    description: 'Invalid address',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_I2C_BUSY,
    description: 'I2C busy',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_I2C_READ_ERROR,
    description: 'I2C read error',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_ADDRESS_NACK,
    description: 'Address nack',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_TIMEOUT,
    description: 'Timeout',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_TOO_MANY_RX_BYTES,
    description: 'Too many rx bytes',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_COPY_RX_DATA_FAILED,
    description: 'Copy rx data failed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_NO_EFFECT,
    description: 'No effect',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_COPY_TX_DATA_FAILED,
    description: 'Copy tx data failed',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_INVALID_PEC,
    description: 'Invalid pec',
    suggestion: ''
  },
  {
    code: MCP2221ErrorCode.E_ERR_BLOCK_SIZE_MISMATCH,
    description: 'Block size mismatch',
    suggestion: ''
  },
]
