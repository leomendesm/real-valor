export const API = (limit, timestamp) => `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL&limit=${limit}&toTs=${timestamp}`

export const calcRate = (open, close) => close / open

export const calcDailyPrice = (rate, amount) => rate * amount