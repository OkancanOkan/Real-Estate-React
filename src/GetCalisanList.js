import React, { useEffect, useState } from "react";
import axios from "axios";


function GetDaireList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);


  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getEmployeeList"
    );
    console.log(response);
    setMyArrayData(response.data[0].EmployeesTable);

    const response2 = await axios.get(
        "https://private-3fc19-insaatapi1.apiary-mock.com/getEmployeeList"
      );
      console.log(response2);
    setMyArrayData2(response2.data[0].EmployeesTable);

      const response3 = await axios.get(
        "https://private-3fc19-insaatapi1.apiary-mock.com/getEmployeeList"
      );
    
    console.log(response3);
    setMyArrayData3(response3.data[0].EmployeesTable);

  }, []);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.EmployeeID}>
          <td>{item.EmployeeName}</td>
          <td>{item.EmployeeSurname}</td>
          
          <td>{item.CreationDate}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default GetDaireList;