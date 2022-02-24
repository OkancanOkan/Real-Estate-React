import React, { useState, useEffect } from "react";
import axios from "axios";

function GetProjeDurumuCombo({setProjectStatusID}) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getProjectStatusList"
    );
    console.log(response);
    setMyArrayData(response.data[0].ProjectStatusTable);
  }, []);

  return (
      
    <select className="form-control" id="cmbCity" name="cmbCity" onChange={e=>setProjectStatusID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.ProjectStatusID} value={item.ProjectStatusID}>{item.ProjectStatusName}</option>
      ))}
    </select>
    
  );
}

export default GetProjeDurumuCombo;