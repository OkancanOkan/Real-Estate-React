import React, { useEffect, useState } from "react";
import axios from "axios";


function GetProjectList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getProjectList"
    );

    console.log(response);
    setMyArrayData(response.data[0].ProjectsTable);

    const response2 = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getCityList"
    );
    setMyArrayData2(response2.data[0].CitiesTable);

    const response3 = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getProjectStatusList"
    );
    setMyArrayData3(response3.data[0].ProjectStatusTable);
  }, []);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.ProjectID}>
          <td>{item.ProjectName}</td>
          <td>
            {myArrayData2
              .filter((item2) => item2.CityID === item.CityID)
              .map((item3) => item3.CityName)}{" "}
          </td>
          <td>
            {" "}
            {myArrayData3
              .filter((item4) => item4.ProjectStatusID === item.ProjectStatusID)
              .map((item5) => item5.ProjectStatusName)}
          </td>
          <td>{item.CreationDate}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default GetProjectList;