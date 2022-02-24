import Header from "./Header";
import Footer from "./Footer";
import GetSehirCombo from "./GetSehirCombo";
import GetIncomeTypeCombo from "./GetIncomeTypeCombo";
import GetCinsiyetRadio from "./GetCinsiyetRadio";
import GetIlgiliDaire from "./GetIlgiliDaire";
import axios from "axios";
import React, { useState } from "react";


  

  
function GuncelleMusteriList() {
  const [txtCustomerName, setTxtCustomerName] = useState();
  const [txtCustomerSurname, setTxtCustomerSurname] = useState();
  const [txtGsm, setTxtGsm] = useState();
  const [txtTc, setTxtTc] = useState();
  const [txtEmail, setTxtEmail] = useState();
  const [txtAdress, setTxtAdress] = useState();
  const [radioGender, setRadioGender] = useState();
  const [checkFlat, setChechFlat] = useState();
  const [cmbCity, setCmbCity] = useState();
  const [txtCustomerPhone, setTxtCustomerPhone] = useState();
  const [cmbIncomeLevel, setCmbIncomeLevel] = useState();
 

  
  const guncelle = async () => {
    let requestBody = {
      Name: txtCustomerName,
      Surname: txtCustomerSurname,
      Gsm: txtGsm,
      Tc: txtTc,
      Email: txtEmail,
      Address: txtAdress,
      Gender: radioGender,
      Flat: checkFlat,
      City: cmbCity,
      Phone : txtCustomerPhone,
      IncomeLevel: cmbIncomeLevel,

      

    };
    const response = await axios.put(
      "https://private-3fc19-insaatapi1.apiary-mock.com/putCustomer",
      requestBody
    );
    if (response.data.Result === "İşleminiz başarıyla gerçekleşmiştir.") {
      window.alert("OK");
      console.log(requestBody);
    } else {
      window.alert("Not OKE");
    }
  };

  return (
       
              <div className="row">
              <div className="col-xl-12 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        MÜŞTERİ BİLGİLERİ GÜNCELLEME
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                      <a
                        href="#portlet-config"
                        data-toggle="modal"
                        className="config"
                      ></a>
                      <a href="javascript:;" className="reload"></a>
                      <a href="javascript:;" className="remove"></a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                      <div className="form-group">
                          <label>Müşteri Adı*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Müşterinin Adı"
                            name="txtName"
                            id="txtName"
                            autoComplete="off"
                            onChange={(e) => setTxtCustomerName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Müşteri Soyadı</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Müşterinin Soyadı"
                            name="txtSurname"
                            id="txtSurname"
                            autoComplete="off"
                            onChange={(e) => setTxtCustomerSurname(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>GSM</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtGSM"
                            id="txtGSM"
                            autoComplete="off"
                            onChange={(e) => setTxtGsm(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Doğum Tarihi</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dBirthDate"
                            id="dBirthDate"
                          />
                        </div>
                        <div className="form-group">
                          <label>T.C.*</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtTC"
                            id="txtTC"
                            autoComplete="off"
                            onChange={(e) => setTxtTc(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>E-Mail</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtEMail"
                            id="txtEMail"
                            autoComplete="off"
                            onChange={(e) => setTxtEmail(e.target.value)}
                          />

                        </div>
                        <div className="form-group">
                          <label>Adres</label>
                          <textarea
                            className="form-control"
                            name="txtAddress"
                            id="txtAddress"
                            defaultValue={""}
                            autoComplete="off"
                            onChange={(e) => setTxtAdress(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Cinsiyet</label>
                          <GetCinsiyetRadio setGenderID={e=>setRadioGender(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label>İlgilendiği Daireler</label>
                          <GetIlgiliDaire  setChechFlatID={setChechFlat}/>
                        </div>
                        <div className="form-group">
                          <label>Şehir</label>
                          <GetSehirCombo setCityID={setCmbCity} />
                        </div>
                        <div className="form-group">
                          <label>Müşteri Numarası</label>
                          <input
                            type="text"
                            className="form-control"
                            name="txtCustomerNo"
                            id="txtCustomerNo"
                            autoComplete="off"
                            onChange={(e) => setTxtCustomerPhone(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Gelir Durumu</label>
                          <GetIncomeTypeCombo setIncomeTypeID={setCmbIncomeLevel} />
                        </div>
                      <div className="form-actions right">
                        <button
                          type="button"
                          className="btn default"
                          name="btnCancel"
                          id="btnCancel"
                        >
                          Vazgeç
                        </button>
                        <input
                        type="button"
                        className="btn green"
                        name="btnSubmit"
                        id="btnSubmit"
                        value="Guncelle"
                        onClick={() => guncelle()}


                        />
                           
                             
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
            
              </div>
              </div>
              
                
                  
             
  );
}

export default GuncelleMusteriList;
