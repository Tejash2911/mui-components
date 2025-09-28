const sleep = (delay: number = 1000) => new Promise(resolve => setTimeout(resolve, delay))

export default sleep
