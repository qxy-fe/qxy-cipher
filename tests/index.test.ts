import { describe, expect, it } from 'vitest'
import { createCipher } from '@qxy/cipher'

const getRandomString = () => Math.random().toString(16).slice(5, 10)

describe(`createCipher`, () => {
  it(`should throw when key is an empty string`, () => {
    expect(() => createCipher({ key: `` })).toThrow(`Key must be a non-empty string`)
  })

  it(`should has exported properties after createCipher`, () => {
    const key = getRandomString()
    const cipher = createCipher({ key })
    expect(cipher.key).toBe(key)
    expect(Object.keys(cipher)).toMatchInlineSnapshot(`
      [
        "key",
        "encrypt",
        "decrypt",
      ]
    `)
  })

  it(`should pass encrypt validator`, () => {
    const key = getRandomString()
    const originMessage = getRandomString()
    const { encrypt } = createCipher({ key })
    const encryptedMessage = encrypt(originMessage)
    const cipherParams = JSON.parse(encryptedMessage)
    expect(Object.keys(cipherParams)).toMatchInlineSnapshot(`
      [
        "ct",
        "iv",
        "s",
      ]
    `)
  })

  it(`should decrypt encryptedMessage to original`, () => {
    const key = getRandomString()
    const originMessage = getRandomString()
    const { encrypt, decrypt } = createCipher({ key })
    const encryptedMessage = encrypt(originMessage)
    const decryptedMessage = decrypt(encryptedMessage)
    expect(decryptedMessage).toBe(originMessage)
  })
})
