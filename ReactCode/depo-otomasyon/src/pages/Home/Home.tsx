
function Home(){
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

                <aside className="main-sidebar sidebar-dark-primary elevation-4">

                    <a href="index3.html" className="brand-link">
                        <img src="/stoklogo.jpg" alt="AdminLTE Logo"
                             className="brand-image img-circle elevation-3"  style={{opacity:'.8'}}/>
                        <span className="brand-text font-weight-light">Stok | OTS</span>
                    </a>

                    <div className="sidebar">

                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2"
                                     alt="User Image"/>
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Yönetici</a>
                            </div>
                        </div>


                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">

                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Stok İşlemleri
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index3.html" className="nav-link active">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Acil İşlemler
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-copy"></i>
                                        <p>
                                            Ürün İşlemleri
                                            <i className="fas fa-angle-left right"></i>
                                            <span className="badge badge-info right">6</span>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/layout/top-nav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Top Navigation</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Top Navigation + Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/boxed.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Boxed</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Fixed Navbar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-footer.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Fixed Footer</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Collapsed Sidebar</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie"></i>
                                        <p>
                                            Raporlar
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/charts/chartjs.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>ChartJS</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/flot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Flot</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/inline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Inline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/uplot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>uPlot</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tree"></i>
                                        <p>
                                            Diğer İşlemler
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/UI/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>General</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/icons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Icons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/buttons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Buttons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/sliders.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Sliders</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/modals.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Modals & Alerts</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/navbar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Navbar & Tabs</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/timeline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Timeline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/ribbons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Ribbons</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>

                    </div>

                </aside>

                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header border-0">
                                            <div className="d-flex justify-content-between">
                                                <h3 className="card-title">Online Store Visitors</h3>
                                                <a href="javascript:void(0);">View Report</a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <p className="d-flex flex-column">
                                                    <span className="text-bold text-lg">820</span>
                                                    <span>Visitors Over Time</span>
                                                </p>
                                                <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up"></i> 12.5%
                    </span>
                                                    <span className="text-muted">Since last week</span>
                                                </p>
                                            </div>


                                            <div className="position-relative mb-4">
                                                <canvas id="visitors-chart" height="200"></canvas>
                                            </div>

                                            <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary"></i> This Week
                  </span>

                                                <span>
                    <i className="fas fa-square text-gray"></i> Last Week
                  </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">Products</h3>
                                            <div className="card-tools">
                                                <a href="#" className="btn btn-tool btn-sm">
                                                    <i className="fas fa-download"></i>
                                                </a>
                                                <a href="#" className="btn btn-tool btn-sm">
                                                    <i className="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body table-responsive p-0">
                                            <table className="table table-striped table-valign-middle">
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Sales</th>
                                                    <th>More</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="dist/img/default-150x150.png" alt="Product 1"
                                                             className="img-circle img-size-32 mr-2"/>
                                                        Some Product
                                                    </td>
                                                    <td>$13 USD</td>
                                                    <td>
                                                        <small className="text-success mr-1">
                                                            <i className="fas fa-arrow-up"></i>
                                                            12%
                                                        </small>
                                                        12,000 Sold
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-muted">
                                                            <i className="fas fa-search"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="dist/img/default-150x150.png" alt="Product 1"
                                                             className="img-circle img-size-32 mr-2"/>
                                                        Another Product
                                                    </td>
                                                    <td>$29 USD</td>
                                                    <td>
                                                        <small className="text-warning mr-1">
                                                            <i className="fas fa-arrow-down"></i>
                                                            0.5%
                                                        </small>
                                                        123,234 Sold
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-muted">
                                                            <i className="fas fa-search"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="dist/img/default-150x150.png" alt="Product 1"
                                                             className="img-circle img-size-32 mr-2"/>
                                                        Amazing Product
                                                    </td>
                                                    <td>$1,230 USD</td>
                                                    <td>
                                                        <small className="text-danger mr-1">
                                                            <i className="fas fa-arrow-down"></i>
                                                            3%
                                                        </small>
                                                        198 Sold
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-muted">
                                                            <i className="fas fa-search"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="dist/img/default-150x150.png" alt="Product 1"
                                                             className="img-circle img-size-32 mr-2"/>
                                                        Perfect Item
                                                        <span className="badge bg-danger">NEW</span>
                                                    </td>
                                                    <td>$199 USD</td>
                                                    <td>
                                                        <small className="text-success mr-1">
                                                            <i className="fas fa-arrow-up"></i>
                                                            63%
                                                        </small>
                                                        87 Sold
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-muted">
                                                            <i className="fas fa-search"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header border-0">
                                            <div className="d-flex justify-content-between">
                                                <h3 className="card-title">Sales</h3>
                                                <a href="javascript:void(0);">View Report</a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <p className="d-flex flex-column">
                                                    <span className="text-bold text-lg">$18,230.00</span>
                                                    <span>Sales Over Time</span>
                                                </p>
                                                <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up"></i> 33.1%
                    </span>
                                                    <span className="text-muted">Since last month</span>
                                                </p>
                                            </div>


                                            <div className="position-relative mb-4">
                                                <canvas id="sales-chart" height="200"></canvas>
                                            </div>

                                            <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary"></i> This year
                  </span>

                                                <span>
                    <i className="fas fa-square text-gray"></i> Last year
                  </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">Online Store Overview</h3>
                                            <div className="card-tools">
                                                <a href="#" className="btn btn-sm btn-tool">
                                                    <i className="fas fa-download"></i>
                                                </a>
                                                <a href="#" className="btn btn-sm btn-tool">
                                                    <i className="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div
                                                className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p className="text-success text-xl">
                                                    <i className="ion ion-ios-refresh-empty"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-success"></i> 12%
                    </span>
                                                    <span className="text-muted">CONVERSION RATE</span>
                                                </p>
                                            </div>

                                            <div
                                                className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p className="text-warning text-xl">
                                                    <i className="ion ion-ios-cart-outline"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-warning"></i> 0.8%
                    </span>
                                                    <span className="text-muted">SALES RATE</span>
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-0">
                                                <p className="text-danger text-xl">
                                                    <i className="ion ion-ios-people-outline"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
                                                    <span className="text-muted">REGISTRATION RATE</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

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

export default Home;