import React, { useState, useEffect } from "react";
import axios from "axios";

function GetProjectNameCombo(setProjectID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getProjectList"
    );
    console.log(response);
    setMyArrayData(response.data[0].ProjectsTable);
  }, []);

  return (
    <select className="form-control" id="cmbCity" name="cmbCity" onChange={e=>setProjectID(e.target.value)}>
      <option value={0}>Lütfen Seçiniz...</option>
      {myArrayData.map((item) => (
        <option key={item.ProjectID} value={item.ProjectID}>
          {item.ProjectName}
        </option>
      ))}
    </select>
  );
}

export default GetProjectNameCombo;
