import ref from 'ref-napi'
import ffi from 'ffi-napi'
import { string } from './wchar'
import pc from 'picocolors'
import { fold } from './utils'
import { MCP2221Errors, MCP2221Error, MCP2221ErrorCode } from './errors'

const DEFAULT_VID = 0x04D8
const DEFAULT_PID = 0x00DD
const START_MARKER = '<'
const END_MARKER = '>'

const MCP2221 = ffi.Library('./bin/mcp2221_dll_um_x64', {
  "Mcp2221_GetLibraryVersion": ['int', [ref.refType(string)]],
  "Mcp2221_GetConnectedDevices": ['int', ['int', 'int', ref.refType(ref.types.int)]],
  "Mcp2221_OpenByIndex": [ref.refType(ref.types.void), ['int', 'int', 'int']],
  "Mcp2221_GetLastError": ['int', []],
  "Mcp2221_SetSpeed": ['int', [ref.refType(ref.types.void), 'int']],
  "Mcp2221_I2cWrite": ['int', [ref.refType(ref.types.void), 'int', 'char', 'char', ref.refType(ref.types.char)]],
})

export function getErrorFromCode(code: number): MCP2221Error | null {
  return MCP2221Errors.find(e => e.code === code) || null
}

export function getLibraryVersion(): [string | null, MCP2221Error | null] {
  const version = ref.alloc(ref.refType(string))
  const result = MCP2221.Mcp2221_GetLibraryVersion(version)

  if (result !== MCP2221ErrorCode.E_NO_ERR)
    throw result

  return [version as unknown as string, null]
}

export function getConnectedDevices(): number {
  const connected = ref.alloc(ref.refType(ref.types.int))
  const result = MCP2221.Mcp2221_GetConnectedDevices(DEFAULT_VID, DEFAULT_PID, connected)

  if (result !== MCP2221ErrorCode.E_NO_ERR)
    throw result

  return connected.readUint8()
}

export function connectToDevice(index: number): any {
  const handle = MCP2221.Mcp2221_OpenByIndex(DEFAULT_VID, DEFAULT_PID, index)
  const result = MCP2221.Mcp2221_GetLastError()

  if (result !== MCP2221ErrorCode.E_NO_ERR)
    throw result

  return handle
}

export function setSpeed(handle: any, speed: number): any {
  const result = MCP2221.Mcp2221_SetSpeed(handle, speed)

  if (result !== MCP2221ErrorCode.E_NO_ERR)
    throw result
}

export function i2CWrite(handle: any, address: number, message: string) {
  message = START_MARKER + message + END_MARKER

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()
  const byteMessage = encoder.encode(message)

  for (let i = 0; i < byteMessage.length; i += 8) {
    const currentMessage = byteMessage.subarray(i, i + 8)
    const i2cTxData = ref.alloc(ref.refType(ref.types.char))
    i2cTxData.write(decoder.decode(currentMessage))
    console.log(i2cTxData.toString())
    const result = MCP2221.Mcp2221_I2cWrite(handle, i2cTxData.byteLength, address, 1, i2cTxData)

    if (result !== MCP2221ErrorCode.E_NO_ERR)
      throw result
  }
}

export function displayErrorInConsole(error: MCP2221Error) {
  // @ts-expect-error
  console.log(pc.underline(pc.red(`${MCP2221ErrorCode[error.code]}(${error.code})`)))
  console.log(pc.dim(`${fold(error.description, 80, true).map((x) => x.trim()).join('\n')}`))
}