import { describe, it, expect } from 'vitest'
import { createCipher } from '@qxy/cipher'

describe(`createCipher`, () => {
  it(`should has key attr in createCipher`, () => {
    const key = Math.random().toString(16).slice(5, 10)
    const cipher = createCipher({ key })
    expect(cipher.key).toBe(key)
  })
})
