import Header from "./Header";
import Footer from "./Footer";
import GetSehirCombo from "./GetSehirCombo";
import GetIncomeTypeCombo from "./GetIncomeTypeCombo";
import GetCinsiyetRadio from "./GetCinsiyetRadio";
import GetIlgiliDaire from "./GetIlgiliDaire";
import axios from "axios";
import React, { useState } from "react";

function FormMusteri() {
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

  
  const gonder = async () => {
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
    const response = await axios.post(
      "https://private-3fc19-insaatapi1.apiary-mock.com/postCustomer",
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
    <>
      <Header />
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1> Müşteri </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="javascript:;"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_Musteri.html">Müşteri</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Giriş</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        MÜŞTERİ BİLGİLERİ
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
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
              <div className="col-md-6 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        MÜŞTERİ BİLGİLERİ
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
                        value="Kaydet"
                        onClick={() => gonder()}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
              <div className="col-md-12 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        KAYIT GEÇMİŞİ
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
                          <label>
                            <strong>Oluşturan Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User XXX</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Oluşturma Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleyen Kullanıcı</strong>
                          </label>
                          <p className="form-control-static">User YYY</p>
                        </div>
                        <div className="form-group">
                          <label>
                            <strong>Güncelleme Tarihi</strong>
                          </label>
                          <p className="form-control-static">DD/MM/YYYY</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      <Footer />
    </>
  );
}
export default FormMusteri;
