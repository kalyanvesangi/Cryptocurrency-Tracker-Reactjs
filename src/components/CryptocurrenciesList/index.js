import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: false}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyData: formatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          currencyData.map(each => (
            <CryptocurrencyItem cryptoData={each} key={each.id} />
          ))
        )}
        )
      </div>
    )
  }
}
export default CryptocurrenciesList
