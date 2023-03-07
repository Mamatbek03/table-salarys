import React, { useState } from "react";

const Makers = (props) => {
  const [day, setDay] = useState(null);
  const [salary, setSelery] = useState(null);

  const handleDay = (e) => {
    setDay(e.target.value);
    console.log(day);
  };
  const handleSalary = (e) => {
    setSelery(e.target.value);
    console.log(salary);
  };
  function total() {
    return day * salary;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>days</th>
            <th>salary per day</th>
            <th>total salary</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((item, id) => (
            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
                <input
                  onChange={handleDay}
                  defaultValue={item.days}
                  type="text"
                />
              </td>
              <td>
                <input
                  onChange={handleSalary}
                  defaultValue={item.salaryPerDay}
                  type="text"
                />{" "}
              </td>
              <td>
                <h4>{total()}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Makers;
