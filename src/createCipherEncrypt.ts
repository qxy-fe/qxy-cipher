import CryptoJS from 'crypto-js'
import { format } from './format'
import { type CipherEncrypt } from './types'

/**
 * create `encrypt`
 * @param key hash
 * @returns encrypt
 */
export const createCipherEncrypt = (key: string): CipherEncrypt => data => {
  const message = JSON.stringify(data)
  const cipherParams = CryptoJS.AES.encrypt(message, key, { format })
  const encryptedMessage = cipherParams.toString()
  return encryptedMessage
}
