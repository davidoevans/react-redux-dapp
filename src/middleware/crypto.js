import _cryptos from './cryptos.json'

const TIMEOUT = 100

export default {
  getCryptos: (cb, timeout) => setTimeout(() => cb(_cryptos), timeout || TIMEOUT),
}
