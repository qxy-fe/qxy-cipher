import { describe, it, expect } from 'vitest'
import { createCipher } from '@qxy/cipher'

const getRandomString = () => Math.random().toString(16).slice(5, 10)

describe(`createCipher`, () => {
  it(`should has key properties in createCipher`, () => {
    const key = getRandomString()
    const cipher = createCipher({ key })
    expect(cipher.key).toBe(key)
    expect(cipher).toHaveProperty(`key`)
    expect(cipher).toHaveProperty(`encrypt`)
    expect(cipher).toHaveProperty(`decrypt`)
  })

  it(`should pass encrypt validator`, () => {
    const key = getRandomString()
    const originMessage = getRandomString()
    const { encrypt } = createCipher({ key })
    const encryptedMessage = encrypt(originMessage)
    const cipherParams = JSON.parse(encryptedMessage)
    expect(cipherParams).toHaveProperty(`ct`)
    expect(cipherParams).toHaveProperty(`iv`)
    expect(cipherParams).toHaveProperty(`s`)
  })

  it(`should decrypt originMessage to original`, () => {
    const key = getRandomString()
    const originMessage = getRandomString()
    const { encrypt, decrypt } = createCipher({ key })
    const encryptedMessage = encrypt(originMessage)
    const decryptedMessage = decrypt(encryptedMessage)
    expect(decryptedMessage).toBe(originMessage)
  })
})
