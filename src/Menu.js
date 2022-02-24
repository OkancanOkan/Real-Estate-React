import {Link} from 'react-router-dom';

function Menu ()
{
    return(
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/Home">Dashboard</Link>
            </li>				
            <li className="menu-dropdown classic-menu-dropdown ">
              <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                Proje Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-briefcase" />
                    Proje </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormProje">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeProje">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>	
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-home" />
                    Daire </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormDaire">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeDaire">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-user" />
                    Çalışan </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormCalisan">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeCalisan">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>
              </ul>
            </li>					
            <li className="menu-dropdown classic-menu-dropdown ">
              <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                Müşteri Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-user-female" />
                    Müşteri </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormMusteri">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeMusteri">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-eye" />
                    Ziyaret </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormZiyaret">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeZiyaret">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>	
                <li className=" dropdown-submenu">
                  <a href="#">
                    <i className="icon-rocket" />
                    Satış </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/FormSatis">
                        Yeni Giriş </Link>
                    </li>
                    <li className=" ">
                      <Link to="/ListeSatis">
                        Liste </Link>
                    </li>									
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                İçerik Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" mega-menu-submenu">
                  <Link to="/ListeCinsiyet">
                    <i className="icon-settings" />
                    Cinsiyet </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeDaireTipi">
                    <i className="icon-settings" />
                    Daire Tipi </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeGelirTipi">
                    <i className="icon-settings" />
                    Gelir Tipi </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeProjeDurumu">
                    <i className="icon-settings" />
                    Proje Durumu </Link>
                </li>
                <li className=" mega-menu-submenu">
                  <Link to="/ListeSehir">
                    <i className="icon-settings" />
                    Şehir </Link>								
                </li></ul>
            </li>									
          </ul>
        </div>
    )
}
export default Menu;
