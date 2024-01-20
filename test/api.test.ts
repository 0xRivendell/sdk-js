const { Riv } = require('../dist/index.js')
const riv = new Riv('test-api-key')

const main = async () => {
    const res = await riv.stake({ chainId: '1', amount: '0.001' })
    console.log(res)
}

main()