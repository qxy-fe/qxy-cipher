import { createCipherEncrypt } from './createCipherEncrypt'
import { createCipherDecrypt } from './createCipherDecrypt'
import type { Cipher, CipherOptions } from './types'

export const createCipher = ({ key }: CipherOptions): Cipher => {
  const encrypt = createCipherEncrypt(key)
  const decrypt = createCipherDecrypt(key)
  return {
    key,
    encrypt,
    decrypt,
  }
}
