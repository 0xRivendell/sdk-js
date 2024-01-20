import { IStake, ISwap } from './interfaces'

class Intents {
	
	private apiKey: string
	public apiUrl: string

	constructor(apiKey: string) {
		this.apiKey = apiKey
		this.apiUrl = 'https://intents-api.onrender.com'
	}

	public getTransaction = async (chainId: string, command: string, signer: string) => {
		// console.log(this.apiKey)
		const res = await fetch(`${this.apiUrl}/payments`, {
			body: JSON.stringify({
				chainId, command, recipient: signer
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
		const json = await res.json()
		return json
	}

	public swap = async (swapObject: ISwap) => {

	}

	public bridge = async (fromChain: string, toChain: string, token: string, amount: string, from: string) => {

	}

	public stake = async ({ chainId, amount }: IStake) => {
		const res = await fetch(`${this.apiUrl}/stake`, {
			body: JSON.stringify({ chainId, amount }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const json = await res.json()
		return json
	}
	
}

export { Intents }