import React, { useEffect, useState } from "react";
import axios from "axios";

function GetSatisList()
{
    const[myArrayData,setMyArrayData]=useState([]);
    const[myArrayData2,setMyArrayData2]=useState([]);
    const[myArrayData3,setMyArrayData3]=useState([]);

    useEffect(async()=>{
        const response = await axios.get("https://private-3fc19-insaatapi1.apiary-mock.com/getSalesList");
        console.log(response);
        setMyArrayData(response.data[0].SalesTable);

        const response2 = await axios.get("https://private-3fc19-insaatapi1.apiary-mock.com/getCustomerList");
        console.log(response2);
        setMyArrayData2(response2.data[0].CustomersTable);

        const response3 = await axios.get("https://private-3fc19-insaatapi1.apiary-mock.com/getEmployeeList");
        console.log(response3);
        setMyArrayData3(response3.data[0].EmployeesTable);

        
    },[]);
    return(
        <tbody>
            {myArrayData.map((item)=>(
                <tr key={item.SaleID}>
                    <td>{item.SaleDate}</td>
                    <td>{myArrayData2.filter((item2)=>item2.CustomerID===item.CustomerID).map((item3)=>item3.CustomerName)}</td>
                    <td>{item.FlatNo}</td>
                    <td>{item.Price}</td>
                    <td>{myArrayData3.filter((item4)=>item4.EmployeeID===item.EmployeeID).map((item5)=>item5.EmployeeName)}</td>
                    <td>{item.Notes}</td>
                    <td>{item.CreationDate}</td>

                </tr>
            ))}
        </tbody>
    )
}
export default GetSatisList;