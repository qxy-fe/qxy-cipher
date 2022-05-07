# qxy-cipher

[![CI](https://github.com/qxy-fe/qxy-cipher/workflows/CI/badge.svg)](https://github.com/qxy-fe/qxy-cipher/actions)
[![NPM VERSION](https://img.shields.io/npm/v/@qxy/cipher.svg)](https://www.npmjs.com/package/@qxy/cipher)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/qxy-cipher.svg)](https://github.com/qxy-fe/qxy-cipher/blob/main/LICENSE)

:lock: QXY-FE cipher utils for OA projects.

## Install

```bash
$ npm -i @qxy/cipher -S
# or
$ yarn add @qxy/cipher
```

## Usage

```ts
import { createCipher } from '@qxy/cipher'

const password = `foobar`
const { hash: key } = await getHash()
const { encrypt, decrypt } = createCipher({ key })

const encryptedPassword = encrypt(password)
console.log(encryptedPassword) // => encryptedMessage

const decryptedPassword = decrypt(encryptedPassword)
console.log(decryptedPassword) // => `foobar`
```

## License

[MIT](./LICENSE) License © 2022 [ntnyq](https://github.com/ntnyq)
