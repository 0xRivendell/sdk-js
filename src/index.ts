export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

class Intents {
	
	private apiKey: string
	public apiUrl: string

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.apiUrl = 'https://intents-api.onrender.com/';
	}

	public getTransaction = async (chainId: string, command: string, signer: string) => {
		const res = await fetch(this.apiUrl, {
			body: JSON.stringify({
				chainId, command, recipient: signer
			}),
			headers: {
				'Content-Type': 'application/json',
			}
		})
		const json = await res.json()
		return json
	}

}

export { Intents }