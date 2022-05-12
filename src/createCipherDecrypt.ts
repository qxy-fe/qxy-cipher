import CryptoJS from 'crypto-js'
import { format } from './format'
import { type CipherDecrypt } from './types'

export const createCipherDecrypt = (key: string): CipherDecrypt => data => {
  const bytes = CryptoJS.AES.decrypt(data, key, { format })
  const stringifiedMessage = bytes.toString(CryptoJS.enc.Utf8)
  const decryptedMessage = JSON.parse(stringifiedMessage)
  return decryptedMessage
}
