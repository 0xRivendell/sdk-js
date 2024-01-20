## Intents - Bytekode Labs

Enable intents on your dapp/smart contract wallet/eoa with this
easy to use sdk.

Follow the below steps:

1. Install the sdk via npm/yarn/pnpm

```
pnpm install @rivendell/defi
```

2. Import & Initialize the Intents class in your node.js file
```
import { Riv } from '@bytekode/intents'

const riv = new Riv('test-api-key')
```

3. To enable staking in your dapp, past the below code

```
const stakeTx = await riv.stake({ chainId, amount })
```

This stakeTx contains the following:

```
{
    to: "",
    value: "",
    data: "calldata of the ethereum transaction"
}
```

The above transaction object can be signed by eoa's, aa's, etc 
to execute staking eth via lido.

We support all evm based chains (kinda sorta)

*We're still in beta. For any queries/integrations, reach out to me: shlok@0xrivendell.xyz*