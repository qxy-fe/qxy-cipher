
/**
 * createCipher Options
 */
export interface CipherOptions {
  /**
   * hash string
   */
  key: string
}

/**
 * encrypt originData to encryptedData
 */
export type CipherEncrypt = (data: string) => string

/**
 * decrypt encryptedData to originData
 */
export type CipherDecrypt = (data: string) => string

/**
 * Cipher Object
 */
export interface Cipher {
  /**
   * hash string
   */
  key: string

  /**
   * encrypt originData to encryptedData
   */
  encrypt: CipherEncrypt

  /**
   * decrypt encryptedData to originData
   */
  decrypt: CipherDecrypt
}
