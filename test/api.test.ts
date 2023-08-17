const { Intents } = require('../dist/index.js')

const intents = new Intents('test-api-key')

let command = 'Transfer 0.001 eth to shlok28.eth'
let signer = `0x7e8eb4FbA4e412d39d95618Ad6d735495baf6e9a`

const main = async () => {
    const res = await intents.getTransaction('80001', command, signer)
    console.log(res)
}

main()