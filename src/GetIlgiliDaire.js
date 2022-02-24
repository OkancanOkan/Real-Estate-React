import React, { useState, useEffect } from "react";
import axios from "axios";

function GetIlgiliDaire(setChechFlatID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getFlatTypeList"
    );
    console.log(response);
    setMyArrayData(response.data[0].FlatsTypeTable);
  }, []);

  return (
    <div>
       {myArrayData.map((item)=><label key={item.FlatTypeID}>
           <input
           type="checkbox"
           name="chkDaire"
           onChange={e=>setChechFlatID(e.target.value)}
           id={`chkDaire${item.FlatTypeID}`}
           defaultValue={item.FlatTypeID}/>&nbsp;&nbsp;
           {item.FlatTypeName}&nbsp;&nbsp;


       </label>

       )}
    </div>
   );
}

export default GetIlgiliDaire;
