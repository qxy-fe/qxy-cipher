import { assertType, describe, expectTypeOf, it } from 'vitest'
import { createCipher, createCipherDecrypt, createCipherEncrypt } from '@qxy/cipher'
import type { Cipher, CipherDecrypt, CipherEncrypt, CipherOptions } from '@qxy/cipher'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(createCipher).returns.toMatchTypeOf<Cipher>()
    expectTypeOf(createCipherEncrypt).returns.toMatchTypeOf<CipherEncrypt>()
    expectTypeOf(createCipherDecrypt).returns.toMatchTypeOf<CipherDecrypt>()
  })

  it('should params type match', () => {
    assertType<(options: CipherOptions) => Cipher>(createCipher)
    assertType<(key: string) => CipherEncrypt>(createCipherEncrypt)
    assertType<(key: string) => CipherDecrypt>(createCipherDecrypt)
  })
})
