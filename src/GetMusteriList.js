import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import GuncelleMusteriLİst from "./GuncelleMusteriLİst";
import { DialogContent } from "@mui/material";



 
 function GetCustomerList() {
  const [myArrayData, setMyArrayData] = useState([]);
  const [myArrayData2, setMyArrayData2] = useState([]);
  const [myArrayData3, setMyArrayData3] = useState([]);
  const [myArrayData4, setMyArrayData4] = useState([]);
  const [open, setOpen] = React.useState(false);
  const Config = require('./Config');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(async () => {
    const response = await axios.get(
      Config.serviceAddress+'/getCustomerList'
    );
    
  
    console.log(response);
    setMyArrayData(response.data[0].CustomersTable);

    const response2 = await axios.get(
     Config.serviceAddress+"/getGenderList"
    );
    
    setMyArrayData2(response2.data[0].GendersTable);

    const response3 = await axios.get(
      Config.serviceAddress+'/getCityList'
    );
    setMyArrayData3(response3.data[0].CitiesTable);
    const response4 = await axios.get(
      Config.serviceAddress+"/getIncomeTypeList"
    );
    setMyArrayData4(response4.data[0].IncomeTypesTable);
  }, []);



  return (

    <><Dialog open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    > <DialogContent><GuncelleMusteriLİst /></DialogContent>  </Dialog>
    <tbody>
        {myArrayData.map((item) => (
          <tr key={item.CustomerID}>
            <td><Link to={`?id=${item.CustomerID}`} onClick={handleClickOpen}>{item.CustomerName}</Link></td>
            <td>{item.CustomerSurname}</td>
            <td>{item.GSM}</td>
            <td>{item.BirthDate}</td>
            <td>{item.TC}</td>
            <td>{item.Email}</td>
            <td>{item.Address}</td>
            <td>
              {myArrayData2
                .filter((item2) => item2.GenderID === item.GenderID)
                .map((item3) => item3.GenderName)}
            </td>
            <td>{myArrayData3.filter((item4) => item4.CityID === item.CityID).map((item5) => item5.CityName)}</td>
            <td>{item.CustomerNo}</td>
            <td>{myArrayData4.filter((item6) => item6.IncomeTypeID === item.IncomeTypeID).map((item7) => item7.IncomeTypeName)}</td>
            <td>{item.CreationDate}</td>
          </tr>
        ))}
      </tbody></>
  );
}


export default GetCustomerList;
