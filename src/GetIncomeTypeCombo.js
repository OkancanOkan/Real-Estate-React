import React, { useState, useEffect } from "react";
import axios from "axios";

function GetIncomeTypeCombo(setIncomeTypeID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getIncomeTypeList"
    );
    console.log(response);
    setMyArrayData(response.data[0].IncomeTypesTable);
  }, []);

  return (
      
    <select className="form-control" id="cmbCity" name="cmbCity" onChange={e=>setIncomeTypeID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.IncomeTypeID} value={item.IncomeTypeID}>{item.IncomeTypeName}</option>
      ))}
    </select>
    
  );
}

export default GetIncomeTypeCombo;