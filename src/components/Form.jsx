import { useState } from "react";
import Slider from "@mui/material/Slider";
import ChartComponent from "./ChartComponent";
import "./form.css";

const Form = () => {
  const [initial, setInitial] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [returnRate, setReturnRate] = useState(0);
  // console.log(initial, monthlyAmount, returnRate)
  const [yearOne, setYearOne] = useState(0);
  const [yearFive, setYearFive] = useState(0);
  const [yearTwenty, setYearTwenty] = useState(0);

  const [total, setTotal] = useState(0);
  const handleCalculate = () => {
    const years = 25;
    const compoundingFrequency = 12;

    const r = returnRate / 100;
    const n = compoundingFrequency;
    const t = years;

    const compoundFactor = Math.pow(1 + r / n, n * t);
    const futureValue =
      initial * compoundFactor +
      monthlyAmount * ((compoundFactor - 1) / (r / n));

    const oneCF = Math.pow(1 + r / n, n * 1);
    const oneValue = initial * oneCF + monthlyAmount * ((oneCF - 1) / (r / n));
    setYearOne(Math.round(oneValue * 10) / 10); 

    const fiveCF = Math.pow(1 + r / n, n * 5);
    const fiveValue =
      initial * fiveCF + monthlyAmount * ((fiveCF - 1) / (r / n));
    setYearFive(Math.round(fiveValue * 10) / 10);

    const twentyCF = Math.pow(1 + r / n, n * 20);
    const twentyValue =
      initial * twentyCF + monthlyAmount * ((twentyCF - 1) / (r / n));
    setYearTwenty(Math.round(twentyValue * 10) / 10);

    const formattedTotal = futureValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    setTotal(formattedTotal);
  };

  const data = [
    {
      name: "1 year",
      Total: yearOne,
    },
    {
      name: "5 years",
      Total: yearFive,
    },
    {
      name: "20 years",
      Total: yearTwenty,
    },
  ];

  return (
    <div className="page">
      <div className="formBox">
        <label htmlFor="Initial Investment">Initial Investment</label>
        <input
          type="number"
          onChange={(e) => {
            let num = Number(e.target.value);
            setInitial(num);
          }}
        />

        <label htmlFor="slider">Monthly Contributions: {monthlyAmount}</label>
        <Slider
          size="small"
          defaultValue={150}
          min={100}
          max={250}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "rgb(208, 208, 11)", width: "320px" }}
          onChange={(e) => {
            let num = Number(e.target.value);
            setMonthlyAmount(num);
          }}
        />

        <label htmlFor="drop down">Expected Rate of Return </label>
        <input
          type="number"
          onChange={(e) => {
            let num = Number(e.target.value);
            setReturnRate(num);
          }}
        />
        <button onClick={handleCalculate} >Calculate</button>
        <p>In 25 years, you will have {total}</p>
      </div>
      <div className="chartBox">
        <ChartComponent data={data} />
      </div>
    </div>
  );
};

export default Form;
