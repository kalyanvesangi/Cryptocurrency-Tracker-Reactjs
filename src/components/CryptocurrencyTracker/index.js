import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => {
  console.log('cryptocurency')
  return (
    <div className="bg-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="card-item-container">
        <div className="card-container">
          <p className="card-item"> COIN TYPE</p>
          <p className="card-item">USD</p>
          <p className="card-item">EURO</p>
        </div>
        <CryptocurrenciesList />
      </div>
    </div>
  )
}
export default CryptocurrencyTracker
