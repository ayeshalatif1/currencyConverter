import React, { useId } from "react"



function InputUI( {
        label,
        amount,
        disabledField,
        amountChange,    //amount to convert
        currencyChange,     //currency type to change 
        currencyTypes = [],
        selectedCurrency = "usd" 
   }){                                  
    const amountInputID = useId()  //unique id which will bind label with input (TO/FROM)
    return (
        <>
            <div className="inputBox">

                <div className="amountEntry">
                    <label htmlFor={amountInputID}>{label}</label><br />
                    <input type="number" name="amountInput" id={amountInputID} 
                        value={amount}    disabled={disabledField}
                        onChange={(e) => amountChange && amountChange(Number(e.target.value))}
                    />
                </div>

                <div className="typeEntry">
                    <label htmlFor="currencyInput">Currency</label><br />
                    <select name="currencyInput"
                        value={selectedCurrency}  
                        onChange={(e) => currencyChange && currencyChange(e.target.value)}
                    >

                        {currencyTypes.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>

                        ))}

                    </select>
                </div>

            </div>
        </>
    )
}

export default InputUI