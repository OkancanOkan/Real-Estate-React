import React, { useState, useEffect } from "react";
import axios from "axios";

function GetOdaSayısıCombo(setFlatTypeID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatTypeList"
    );
    console.log(response);
    setMyArrayData(response.data[0].FlatsTypeTable);
  }, []);

  return (
    <select className="form-control" id="cmbCity" name="cmbCity" onChange={e=>setFlatTypeID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.FlatTypeID} value={item.FlatTypeID}>
          {item.FlatTypeName}
        </option>
      ))}
    </select>
  );
}

export default GetOdaSayısıCombo;
