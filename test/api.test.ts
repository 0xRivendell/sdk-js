const { Intents } = require('../dist/index.js')

const intents = new Intents('test-api-key')

let command = 'I want to send 10 usdc to vitalik.eth'
let signer = `0x03f142529a7B70305C07a50fAA44f6EBDADB4624`

const main = async () => {
    const res = await intents.getTransaction('1', command, signer)
    console.log(res)
}

main()