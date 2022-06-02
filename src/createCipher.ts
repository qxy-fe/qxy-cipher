import { createCipherEncrypt } from './createCipherEncrypt'
import { createCipherDecrypt } from './createCipherDecrypt'
import type { Cipher, CipherOptions } from './types'

/**
 * Create a Cipher Object
 * @param options createCipher Options
 * @returns Cipher object
 */
export const createCipher = (options: CipherOptions): Cipher => {
  const { key } = options

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
