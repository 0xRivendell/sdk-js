## Intents - Bytekode Labs

Enable intents on your dapp/smart contract wallet/eoa with this
easy to use sdk.

Follow the below steps:

1. Install the sdk via npm/yarn/pnpm

```
pnpm install @bytekode/intents
```

2. Import & Initialize the Intents class in your node.js file
```
import { Intents } from '@bytekode/intents'

const intents = new Intents('test-api-key')
```

3. Pass in the following parameters, to receive a transaction object

```
<!-- command: `I want to send 10 usdc to shlok28.eth` -->
const txObject = await intents.getTransaction(chainId, command, address_of_signer)
```
We support all evm based chains.

*We're still in beta. For any queries/integrations, reach out to me: shlok@bytekode.xyz*