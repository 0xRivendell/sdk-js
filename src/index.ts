export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

class Intents {
	
	private apiKey: string
		
	constructor(apiKey: string) {
		this.apiKey = apiKey;
  	}

}

export { Intents }