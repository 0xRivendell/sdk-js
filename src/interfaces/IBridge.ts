interface IBridge {
    fromChainId: string,
    toChainId: string,
    token: string,
    amount: string,
    from: string
}

export { IBridge }