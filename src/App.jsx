import { useState } from 'react'
import './App.css'
import InputUI from './components/input.jsx'   
import useCurrencyInfo from './hooks/UseCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)  //original
  const [from, setFrom] = useState("usd")    //input currency type
  const [to, setTo] = useState("pkr")  //to convert into currency type
  const [convertedAmount, setConvertedAmount] = useState(0)  //converted

  const currencyInfo = useCurrencyInfo(from)
  const currencies = Object.keys(currencyInfo)  //currency names extracted from API


  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="formPart">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div className="callingUI">
              <InputUI
                label="From"
                amount={amount}
                amountChange={setAmount}
                currencyTypes={currencies}
                currencyChange={setFrom}
                selectedCurrency={from}
                disabledField={false}
              />
            </div>

            <div className="callingUI">
              <InputUI
                label="To"
                amount={convertedAmount}
                amountChange={setConvertedAmount}
                currencyTypes={currencies}
                currencyChange={setTo}
                selectedCurrency={to}
                disabledField = {true}


              />

            </div>

            <div className="submitBtn">
              <button type='submit' id='submit'> Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
