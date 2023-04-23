import CryptoJS from 'crypto-js'

export const format = {
  stringify(cipherParams: CryptoJS.lib.CipherParams) {
    const j = {
      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
      iv: cipherParams.iv.toString(),
      s: cipherParams.salt.toString(),
    }
    return JSON.stringify(j).replace(/\s/g, '')
  },

  parse(jsonString: string) {
    const j = JSON.parse(jsonString)
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(j.ct),
      iv: CryptoJS.enc.Hex.parse(j.iv),
      salt: CryptoJS.enc.Hex.parse(j.s),
    })
    return cipherParams
  },
}
