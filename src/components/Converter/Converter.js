import "./Converter.css";
import { useState } from "react";

const Converter = () => {
  const [plnAmount, setPlnAmount] = useState(null);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const amount = event.target.amount.value;
    const currency = event.target.currency.value;

    const url = `https://api.nbp.pl/api/exchangerates/rates/a/`;

    try {
      const response = await fetch(`${url}${currency}`);
      const data = await response.json();

      const rate = data.rates?.[0]?.mid;
      if (rate) {
        const amountInput = parseFloat(amount);
        const plnAmount = (amountInput * rate).toFixed(2);
        setPlnAmount(plnAmount);
      } else {
        alert("Coś poszło nie tak, spróbuj później");
      }
    } catch (error) {
      alert("Coś poszło nie tak, spróbuj później");
    }
  };

  return (
    <div className="exch-container">
      <form onSubmit={handleOnSubmit}>
        <input
          type="number"
          className="amount"
          step="0.01"
          name="amount"
          placeholder="Wpisz kwotę"
        />
        <select className="sel" name="currency">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="chf">CHF</option>
        </select>
        <button className="btn">Przelicz</button>
      </form>
      <div className="result">{plnAmount && `TO ${plnAmount} PLN`}</div>
    </div>
  );
};

export default Converter;
