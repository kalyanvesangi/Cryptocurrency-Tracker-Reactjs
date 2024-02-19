import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData
  return (
    <li className="list-item-container">
      <img src={currencyLogo} alt={currencyName} className="currency-logo" />
      <p className="list-items">{currencyName}</p>
      <p className="list-items">{usdValue}</p>
      <p className="list-items">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
