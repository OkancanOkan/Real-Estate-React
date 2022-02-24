import React, { useState, useEffect } from "react";
import axios from "axios";

function GetEmployeeNameCombo(setCmbEmployeeNameID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getEmployeeList"
    );
    console.log(response);
    setMyArrayData(response.data[0].EmployeesTable);
  }, []);

  return (
    <select className="form-control" id="cmbFlatStatus" name="cmbFlatStatus" onChange={e=>setCmbEmployeeNameID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.EmployeeID} value={item.EmployeeID}>
          {item.EmployeeName}
        </option>
      ))}
    </select>
  );
}

export default GetEmployeeNameCombo;
