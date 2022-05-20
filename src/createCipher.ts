import { createCipherEncrypt } from './createCipherEncrypt'
import { createCipherDecrypt } from './createCipherDecrypt'
import type { Cipher, CipherOptions } from './types'

export const createCipher = ({ key }: CipherOptions): Cipher => {
  if (typeof key !== `string` || !key.length) {
    throw new Error(`Key must be a non-empty string`)
  }
  const encrypt = createCipherEncrypt(key)
  const decrypt = createCipherDecrypt(key)
  return {
    key,
    encrypt,
    decrypt,
  }
}
