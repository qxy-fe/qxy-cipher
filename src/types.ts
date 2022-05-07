export interface CipherOptions {
  key: string
}

export type CipherEncrypt = (data: string) => string
export type CipherDecrypt = (data: string) => string

export interface Cipher {
  key: string
  encrypt: CipherEncrypt
  decrypt: CipherDecrypt
}
