import Header from "./Header";
import Footer from "./Footer";
import GetMusteriList from "./GetMusteriList";
import React from "react";


function ListeMusteri()
{
    return(
       <><Header /><div className="page-container">
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
                            <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-settings" />
                            </a>
                            <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <h3>THEME COLORS</h3>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <ul className="theme-colors">
                                                    <li className="theme-color theme-color-default" data-theme="default">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Default</span>
                                                    </li>
                                                    <li className="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Blue Hoki</span>
                                                    </li>
                                                    <li className="theme-color theme-color-blue-steel" data-theme="blue-steel">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Blue Steel</span>
                                                    </li>
                                                    <li className="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Orange</span>
                                                    </li>
                                                    <li className="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Yellow Crusta</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <ul className="theme-colors">
                                                    <li className="theme-color theme-color-green-haze" data-theme="green-haze">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Green Haze</span>
                                                    </li>
                                                    <li className="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Red Sunglo</span>
                                                    </li>
                                                    <li className="theme-color theme-color-red-intense" data-theme="red-intense">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Red Intense</span>
                                                    </li>
                                                    <li className="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Purple Plum</span>
                                                    </li>
                                                    <li className="theme-color theme-color-purple-studio" data-theme="purple-studio">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Purple Studio</span>
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
                                                <select className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" data-original-title="Change theme style" data-container="body" data-placement="left">
                                                    <option value="boxed" selected="selected">Square corners</option>
                                                    <option value="rounded">Rounded corners</option>
                                                </select>
                                            </li>
                                            <li>
                                                Layout
                                                <select className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
                                                    <option value="boxed" selected="selected">Boxed</option>
                                                    <option value="fluid">Fluid</option>
                                                </select>
                                            </li>
                                            <li>
                                                Top Menu Style
                                                <select className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body" data-placement="left">
                                                    <option value="dark" selected="selected">Dark</option>
                                                    <option value="light">Light</option>
                                                </select>
                                            </li>
                                            <li>
                                                Top Menu Mode
                                                <select className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                                    <option value="fixed">Fixed</option>
                                                    <option value="not-fixed" selected="selected">Not Fixed</option>
                                                </select>
                                            </li>
                                            <li>
                                                Mega Menu Style
                                                <select className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body" data-placement="left">
                                                    <option value="dark" selected="selected">Dark</option>
                                                    <option value="light">Light</option>
                                                </select>
                                            </li>
                                            <li>
                                                Mega Menu Mode
                                                <select className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body" data-placement="left">
                                                    <option value="fixed" selected="selected">Fixed</option>
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
                    <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                                    <h4 className="modal-title">Modal title</h4>
                                </div>
                                <div className="modal-body">
                                    Widget settings form goes here
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn blue">Save changes</button>
                                    <button type="button" className="btn default" data-dismiss="modal">Close</button>
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
                            <a href="#">Müşteri Yönetimi</a><i className="fa fa-circle" />
                        </li>
                        <li>
                            <a href="liste_Musteri.html">Müşteri</a>
                            <i className="fa fa-circle" />
                        </li>
                        <li className="active">
                            Liste
                        </li>
                    </ul>
                    {/* END PAGE BREADCRUMB */}
                    {/* BEGIN PAGE CONTENT INNER */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* BEGIN SAMPLE TABLE PORTLET*/}
                            <div className="portlet light">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <i className="fa fa-cogs font-green-sharp" />
                                        <span className="caption-subject font-green-sharp bold uppercase">TÜM KAYITLAR</span>
                                    </div>
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse">
                                        </a>
                                        <a href="#portlet-config" data-toggle="modal" className="config">
                                        </a>
                                        <a href="javascript:;" className="reload">
                                        </a>
                                        <a href="javascript:;" className="remove">
                                        </a>
                                    </div>
                                </div>
                                <div className="portlet-body">
                                    <div className="table-scrollable">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{ width: '100px !important' }}>
                                                        Müşteri Adı
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Müşteri Soyadı
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        GSM
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Doğum Tarihi
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        T.C.
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        E-Mail
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Adres
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Cinsiyet
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Şehir
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Müşteri Numarası
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Gelir Durumu
                                                    </th>
                                                    <th scope="col" style={{ width: '100px' }}>
                                                        Oluşturma Tarihi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <GetMusteriList/>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* END SAMPLE TABLE PORTLET*/}
                        </div>
                    </div>
                    {/* END PAGE CONTENT INNER */}
                </div>
            </div>
            {/* END PAGE CONTENT */}
        </div><Footer/></>

    )
}
export default ListeMusteri;