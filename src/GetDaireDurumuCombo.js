import React, { useState, useEffect } from "react";
import axios from "axios";

function GetDaireDurumuCombo(setCmbFlatStatusID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatStatusList"
    );
    console.log(response);
    setMyArrayData(response.data[0].FlatStatusTable);
  }, []);

  return (
    <select className="form-control" id="cmbFlatStatus" name="cmbFlatStatus" onChange={e=>setCmbFlatStatusID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.FlatStatusID} value={item.FlatStatusID}>
          {item.FlatStatusName}
        </option>
      ))}
    </select>
  );
}

export default GetDaireDurumuCombo;
