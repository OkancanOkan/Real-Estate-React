import React, { useState, useEffect } from "react";
import axios from "axios";

function GetCinsiyetRadio(setGenderID) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://private-3fc19-insaatapi1.apiary-mock.com/getGenderList"
    );
    console.log(response);
    setMyArrayData(response.data[0].GendersTable);
  }, []);

  return (
    <div>
        {myArrayData.map((item)=>(
            <label key ={item.GenderID}>
                <input
                type="radio"
                name="rdGender"
                onChange={e=>setGenderID(e.target.value)}
                id={`rdGender${item.GenderID}`}
                defaultValue={item.GenderID}
                />&nbsp;&nbsp;
                {item.GenderName}&nbsp;&nbsp;

            </label>
         ) )}
    </div>
   );
}

export default GetCinsiyetRadio;
