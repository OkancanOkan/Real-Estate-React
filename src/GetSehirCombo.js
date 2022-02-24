import React, { useState, useEffect } from "react";
import axios from "axios";

function GetSehirCombo({setCityID}) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getCityList"
    );
    console.log(response);
    setMyArrayData(response.data[0].CitiesTable);
  }, []);
  return (
    <select className="form-control" id="cmbCity" name="cmbCity" onChange={e=>setCityID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.CityID} value={item.CityID}>
          {item.CityName}
        </option>
      ))}
    </select>
  );
}

export default GetSehirCombo;
