import { IBridge, IStake, ITransferERC20 } from './interfaces'

class Riv {
	
	private apiKey: string
	public apiUrl: string

	constructor(apiKey: string) {
		this.apiKey = apiKey
		console.log(this.apiKey)
		this.apiUrl = 'https://rivendell-api.onrender.com'
	}

	// public getTransaction = async (chainId: string, command: string, signer: string) => {
	// 	// console.log(this.apiKey)
	// 	const res = await fetch(`${this.apiUrl}/payments`, {
	// 		body: JSON.stringify({
	// 			chainId, command, recipient: signer
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		method: 'POST',
	// 	})
	// 	const json = await res.json()
	// 	return json
	// }

	// public swap = async (swapObject: ISwap) => {

	// }

	// public bridge = async (fromChain: string, toChain: string, token: string, amount: string, from: string) => {

	// }

	public stake = async ({ chainId, amount }: IStake) => {
		const res = await fetch(`${this.apiUrl}/stake`, {
			body: JSON.stringify({ chainId, amount }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const json = await res.json()
		return json
	}
	
	public bridge = async ({ from, fromChainId, toChainId, token, amount }: IBridge) => {
		const res = await fetch(`${this.apiUrl}/bridge`, {
			body: JSON.stringify({ from, fromChainId, toChainId, token, amount }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const json = await res.json()
		return json
	}

	public transferTokens = async ({ chainId, amount, to, token }: ITransferERC20) => {
		const res = await fetch(`${this.apiUrl}/erc20`, {
			body: JSON.stringify({ chainId, amount, to, token }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const json = await res.json()
		return json
	}
}

export { Riv, IStake, ITransferERC20 }