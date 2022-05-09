import CryptoJS from 'crypto-js'
import { format } from './format'
import { type CipherEncrypt } from './types'

export const createCipherEncrypt = (key: string): CipherEncrypt => data => {
  const message = JSON.stringify(data)

  const encryptedMessage = CryptoJS.AES.encrypt(message, key, { format }).toString()
  return encryptedMessage
}
