import { format } from './format'
import { type CipherDecrypt } from './types'

export const createCipherDecrypt = (key: string): CipherDecrypt => data => {
  const bytes = CryptoJS.AES.decrypt(data, key, { format })
  const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedMessage
}
