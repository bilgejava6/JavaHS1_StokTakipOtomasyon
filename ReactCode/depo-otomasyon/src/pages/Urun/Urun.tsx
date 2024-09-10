import LeftMenu from "../../components/organisms/LeftMenu";
import {depoGlobalDispatch, useDepoSelector} from "../../store";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchMarkaListele} from "../../store/feature/markaSlice";
import IMarka from "../../models/IMarka";
import IModel from "../../models/IModel";
import {fetchGetAllModelByMarkaId} from "../../store/feature/modelSlice";

function Urun(){
    const dispatch = useDispatch<depoGlobalDispatch>();
    const markaList: IMarka[] = useDepoSelector(state=> state.marka.markaList);
    const [modelList,setModelList] = useState<IModel[]>([]);
    /***
     DİKKAT!!!!
     modellerin listesi markanın türüne bağlıdır, yani marka seçilir ve ilgili
     markaya ait modeller listelenir.
     */
    const getModelList = (markaId: number)=>{
        dispatch(fetchGetAllModelByMarkaId(markaId)).then(res=>{
            setModelList(res.payload.data);
        })
    }

    useEffect(()=>{
        dispatch(fetchMarkaListele());
    },[]);
    return (
        <div className='hold-transition sidebar-mini'>
            <div className="wrapper">

                <div className='modal fade' id='edit-modal' style={{display: 'none'}} aria-modal={true} role='dialog'>
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                Model Düzenleme Ekranı
                            </div>
                            <div className='modal-body'>

                            </div>
                        </div>
                    </div>
                </div>

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

                <LeftMenu/>

                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Ürün Ekleme İşlemleri</h1>
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <section className='col-lg-12'>
                                    <div className='card'>
                                        <div className="card-header">
                                            <div className='card-title'>
                                                Ürün işlemleri formu
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className="col-4">
                                                    <div className='form-group'>
                                                        <label>Marka Adı</label>
                                                        <select
                                                            onChange={
                                                            evt=> getModelList(parseInt(evt.target.value))
                                                        }
                                                            className='form-control'>
                                                            <option>Seçiniz</option>
                                                            {
                                                                markaList.map((marka,index)=>{
                                                                    return <option key={index} value={marka.id}>{marka.ad}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className='form-group'>
                                                        <label>Model Adı</label>
                                                        <select className='form-control'>
                                                            <option>Seçiniz</option>
                                                            {
                                                                modelList.map((model,index)=>{
                                                                    return <option key={index} value={model.id}>{model.modelAdi}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Adı</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Açıklama</label>
                                                        <textarea rows={4} className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Stok Kodu</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label>Ürün Barkodu</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Fiyatı</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Kdv</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Satış Fiyatı</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Birimi</label>
                                                        <select className='form-control'>
                                                            <option>Seçiniz</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ürün Stok Adedi</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-4 align-content-center">
                                                    <div className="form-group text-center">
                                                        <img className='rounded-circle' width='70%' height='70%' src="https://picsum.photos/200/200" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className='form-group'>
                                                    <button
                                                            className='btn btn-block btn-primary'>Kaydet
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='col-lg-12'>
                                <div className='card'>
                                        <div className='card-header'>
                                            <div className='card-title'>Ürün listesi tablosu</div>
                                        </div>
                                        <div className='card-body'>
                                            <table className='table table-hover table-bordered'>
                                                <thead className='bg-gradient-gray-dark'>
                                                <tr>
                                                    <td>Id</td>
                                                    <th>Marka</th>
                                                    <th>Model</th>
                                                    <th>Ürün Adı</th>
                                                    <th>Fiyat</th>
                                                    <th>Stok</th>
                                                    <td>Resim</td>
                                                    <th>İşlemler</th>
                                                </tr>
                                                </thead>
                                                <tbody>

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
    )
}

export default Urun;