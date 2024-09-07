import LeftMenu from "../../components/organisms/LeftMenu";

function Marka(){
    return(
        <div className='hold-transition sidebar-mini'>
            <div className="wrapper">

                <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i
                                className="fas fa-bars"></i></a>
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search"></i>
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search"
                                               placeholder="Search" aria-label="Search"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                            <button className="btn btn-navbar" type="button"
                                                    data-widget="navbar-search">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">

                                    <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar"
                                             className="img-size-50 mr-3 img-circle"/>
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><i
                                                    className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                                Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">

                                    <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar"
                                             className="img-size-50 img-circle mr-3"/>
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i
                                                    className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                                Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">

                                    <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar"
                                             className="img-size-50 img-circle mr-3"/>
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i
                                                    className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4
                                                Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2"></i> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2"></i> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>

                    </ul>
                </nav>

                <LeftMenu />

                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Marka Ekleme İşlemleri</h1>
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <section className='col-lg-4'>
                                    <div className='card'>
                                        <div className="card-header">
                                            <div className='card-title'>
                                                Marka işlemleri formu
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <div className='form-group'>
                                                <label>Marka adı</label>
                                                <input type="text" className='form-control'
                                                       placeholder='marka adı giriniz.'/>
                                            </div>
                                            <div className='form-group'>
                                                <label>Aciklama</label>
                                                <input type="text" className='form-control'
                                                       placeholder='açıklama giriniz.'/>
                                            </div>
                                            <div className='form-group'>
                                                <label>Firma Yetkilisi</label>
                                                <input type="text" className='form-control'
                                                       placeholder='yetkili personel ad soyadını giriniz'/>
                                            </div>
                                            <div className='form-group'>
                                                <label>İletişim Telefonu</label>
                                                <div className='input-group'>
                                                    <div className='input-group-prepend'>
                                                        <span className='input-group-text'>
                                                            <i className="fa-solid fa-square-phone"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className='form-control'
                                                           placeholder='telefon numarası giriniz.'/>
                                                </div>

                                            </div>
                                            <div className='form-group'>
                                                <label>Firma Açık Adresi</label>
                                                <textarea rows={4} className='form-control'
                                                          placeholder='açık adres bilgisini giriniz'/>
                                            </div>
                                            <div className='form-group'>
                                                <button className='btn btn-block btn-primary'>Kaydet</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='col-lg-8'>
                                    <div className='card'>
                                            <div className='card-header'>
                                                <div className='card-title'>marka listesi tablosu</div>
                                            </div>
                                            <div className='card-body'>
                                                <table className='table table-hover table-bordered'>
                                                    <thead className='bg-gradient-gray-dark'>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Ad</th>
                                                            <th>Aciklama</th>
                                                            <th>Yetkili</th>
                                                            <th>Telefon</th>
                                                            <th>Adres</th>
                                                            <th>İşlemler</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Asus</td>
                                                            <td>Anakart ve Ekrankartı üretici firması</td>
                                                            <td>Ali BEY</td>
                                                            <td>0 312 999 99 99</td>
                                                            <td>Ankara - Merkez</td>
                                                            <td>
                                                                <a className='btn bg-danger p-2 m-1' >
                                                                    <i className="fa-solid fa-eraser fa-lg"></i>
                                                                </a>
                                                                <a className='btn  bg-warning p-2 m-1'>
                                                                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                    </div>
                                </section>

                            </div>

                        </div>

                    </div>

                </div>


                <footer className="main-footer">
                    <strong>Copyright &copy; 2014-2024 <a href="https://github.com/bilgejava6">Bilgeadam HS 1 Grubu</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.1.0
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Marka;