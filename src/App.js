import React, { useState } from "react";
import Counter from "./Components/Counter";
import Makers from "./Components/Makers";
import Par from "./Components/Par";
import ParRender from "./Components/ParRender";

const App = () => {
  const [current, setCurrent] = useState(10);
  let increment = () => setCurrent(current + 1);
  let decrement = () => setCurrent(current - 1);

  let [par, setPar] = useState([]);

  const handlePar = (newObj) => {
    let newPar = [...par];
    newPar.push(newObj);
    setPar(newPar);
  };

  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];

  return (
    <div>
      <Counter current={current} increment={increment} decrement={decrement} />
      <Par handlePar={handlePar} />
      <ParRender par={par} />
      <Makers employees={employees} />
    </div>
  );
};

export default App;
