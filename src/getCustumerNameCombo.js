import React, { useState, useEffect } from "react";
import axios from "axios";

function GetCustomerNameCombo(setCmbCustomerNameID)
{
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getCustomerList"
    );
    console.log(response);
    setMyArrayData(response.data[0].CustomersTable);
  }, []);
    return(
        <select className="form-control" id="cmbCustomerName" name="cmbCustomerName" onChange={e=>setCmbCustomerNameID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.CustomerID} value={item.CustomerID}>
          {item.CustomerName}
        </option>
      ))}
    </select>
    );

}
export default GetCustomerNameCombo;