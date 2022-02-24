import React, { useEffect, useState } from "react";
import axios from "axios";


function GetDaireList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);
  const [myArrayData4, setMyArrayData4] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatList"
    );

    console.log(response);
    setMyArrayData(response.data[0].FlatsTable);

    const response2 = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getProjectList"
    );
    setMyArrayData2(response2.data[0].ProjectsTable);

    const response3 = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatTypeList"
    );
    setMyArrayData3(response3.data[0].FlatsTypeTable);

    const response4 = await axios.get(
        "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatStatusList"
      );
      setMyArrayData4(response4.data[0].FlatStatusTable);
  }, []);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.FlatID}>
          <td>{item.FlatNo}</td>
          <td>
            {myArrayData2
              .filter((item2) => item2.ProjectID === item.ProjectID)
              .map((item3) => item3.ProjectName)}{" "}
          </td>
          <td>
            {" "}
            {myArrayData3
              .filter((item4) => item4.FlatTypeID === item.FlatTypeID)
              .map((item5) => item5.FlatTypeName)}
          </td>
          <td>
            {" "}
            {myArrayData4
              .filter((item6) => item6.FlatStatusID === item.FlatStatusID)
              .map((item7) => item7.FlatStatusName)}
          </td>
          <td>{item.Price}</td>
          <td>{item.CreationDate}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default GetDaireList;