import LeftMenu from "../../components/organisms/LeftMenu";
import IMarka from "../../models/IMarka";
import {depoGlobalDispatch, useDepoSelector} from "../../store";
import {useEffect, useState} from "react";
import {
    fetchFindMarka, fetchMarkaAdList,
    fetchMarkaEdit,
    fetchMarkaEkle,
    fetchMarkaListele,
    fetchMarkaSil
} from "../../store/feature/markaSlice";
import {useDispatch} from "react-redux";
import swal from "sweetalert";
import IModel from "../../models/IModel";
import {fetchModelDuzenle, fetchModelEkle, fetchModelListele, fetchModelSil} from "../../store/feature/modelSlice";
import IMarkaAdList from "../../models/IMarkaAdList";
function Model(){
    const dispatch: depoGlobalDispatch = useDispatch();
    const [ad,setAd] = useState('');
    const [markaId,setMarkaId] = useState(0);
    const [editAd,setEditAd] = useState('');
    const [editMarkaId,setEditMarkaId] = useState(0);
    const [editId, setEditId] = useState(0);
    const markaAdList: IMarkaAdList[] = useDepoSelector(state=> state.marka.markaAdList);
    const modelList: IModel[] = useDepoSelector(state=> state.model.modelList);
    const [editModel,setEditModel] = useState<IModel>({
        id: 0,
        markaId: 0,
        modelAdi: ''
    });
    /**
     * 1- Model ekleme fetch
     * 2- Modelleri listeleme fetch
     * 3- Model düzenleme fetch
     * 4- model silme fetch
     * 5- Marka listesini çekecek fetch
     * */
    useEffect(()=>{
        dispatch(fetchMarkaAdList());
        dispatch(fetchModelListele());
    },[]);

    const modelEkle = ()=>{
        dispatch(fetchModelEkle({
            markaId: markaId,
            modelAdi: ad
        })).then(()=>{
            swal('Başarılı','Kaydetme İşlemi başarı ile tamamlandı','success').then(()=>{
                dispatch(fetchModelListele());
            })
        })
    }

    const modelSil = (modelId: number)=>{
        swal({
            title: 'Model Silme İşlemi',
            text: 'Seçtiğiniz kayıt silinecektir. Devam etmek istiyor musunuz?',
            icon: 'error',
            buttons:['İptal','Sil'],
            dangerMode: true
        }).then(secim=>{
            if (secim){
                dispatch(fetchModelSil(modelId)).then(()=>{
                    dispatch(fetchModelListele());
                    swal('BİLDİRİM','Kayıt başarı ile silinmiştir.','success')
                })

            }else{
                swal('İPTAL','İşlem iptal edildi','success')
            }
        })
    }

    const modelDuzenle = (editModel: IModel)=>{
        if(editModel.id)
            setEditId(editModel.id);
        setEditMarkaId(editModel.markaId);
        setEditAd(editModel.modelAdi);
    }

    const modelDuzenleKaydet = ()=>{
        dispatch(fetchModelDuzenle({
            id: editId,
            markaId: editMarkaId,
            modelAdi: editAd
        })).then(()=>{
            swal('DÜZENLEME','Düzenleme işlemi başarı ile gerçekleştirilmiştir.','success').then(()=>{
                dispatch(fetchModelListele());
            })
        })
    }
    return(
        <div className='hold-transition sidebar-mini'>
            <div className="wrapper">

                <div className='modal fade' id='edit-modal' style={{display: 'none'}} aria-modal={true} role='dialog'>
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                Model Düzenleme Ekranı
                            </div>
                            <div className='modal-body'>
                                <div className='form-group'>
                                    <label>Marka Adı</label>
                                    <select value={editMarkaId}
                                            onChange={
                                        evt => setEditMarkaId(parseInt(evt.target.value))}
                                            className='form-control'>
                                        <option>Seçiniz</option>
                                        {
                                            markaAdList.map((markaAd, index) => {
                                                return <option key={index}
                                                               value={markaAd.markaId}>{markaAd.markaAd}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label>Model adı</label>
                                    <input value={editAd} onChange={
                                        evt => {
                                            setEditAd(evt.target.value);
                                        }
                                    } type="text" className='form-control'
                                           placeholder='model adı giriniz.'/>

                                </div>
                                <div className='form-group'>
                                    <button onClick={modelDuzenleKaydet} data-dismiss='modal' className='btn btn-block btn-primary'>Düzenle & Kaydet</button>
                                </div>
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

                <LeftMenu />

                <div className="content-wrapper">

                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Model Ekleme İşlemleri</h1>
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
                                                Model işlemleri formu
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <div className='form-group'>
                                                <label>Marka Adı</label>
                                                <select onChange={evt=> setMarkaId(parseInt(evt.target.value))} className='form-control'>
                                                    <option>Seçiniz</option>
                                                    {
                                                        markaAdList.map((markaAd,index)=> {
                                                            return <option key={index} value={markaAd.markaId}>{markaAd.markaAd}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className='form-group'>
                                                <label>Model adı</label>
                                                <input  value={ad} onChange={
                                                    evt=>
                                                    {
                                                        setAd(evt.target.value);

                                                    }
                                                } type="text" className='form-control'
                                                       placeholder='model adı giriniz.'/>

                                            </div>
                                            <div className='form-group'>
                                                <button onClick={modelEkle} className='btn btn-block btn-primary'>Kaydet</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='col-lg-8'>
                                    <div className='card'>
                                            <div className='card-header'>
                                                <div className='card-title'>Model listesi tablosu</div>
                                            </div>
                                            <div className='card-body'>
                                                <table className='table table-hover table-bordered'>
                                                    <thead className='bg-gradient-gray-dark'>
                                                        <tr>
                                                            <td>No</td>
                                                            <th>M.Id</th>
                                                            <th>Marka Adı</th>
                                                            <th>Model Adı</th>
                                                            <th>İşlemler</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        modelList.map((model,index)=>{
                                                            return <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{model.id}</td>
                                                                <td>{model.markaAdi}</td>
                                                                <td>{model.modelAdi}</td>
                                                                <td>
                                                                    <a onClick={() => {
                                                                        if(model.id)
                                                                            modelSil(model.id)
                                                                    }} className='btn bg-danger p-2 m-1'>
                                                                        <i className="fa-solid fa-eraser fa-lg"></i>
                                                                    </a>
                                                                    <a onClick={() => {
                                                                        modelDuzenle(model);
                                                                    }} data-toggle='modal' data-target='#edit-modal'
                                                                       className='btn  bg-warning p-2 m-1'>
                                                                        <i className="fa-solid fa-pen-to-square fa-lg"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
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

export default Model;