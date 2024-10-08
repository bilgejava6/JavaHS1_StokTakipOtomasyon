import LeftMenu from "../../components/organisms/LeftMenu";
import IMarka from "../../models/IMarka";
import {depoGlobalDispatch, useDepoSelector} from "../../store";
import {useEffect, useState} from "react";
import {
    fetchFindMarka,
    fetchMarkaEdit,
    fetchMarkaEkle,
    fetchMarkaListele,
    fetchMarkaSil
} from "../../store/feature/markaSlice";
import {useDispatch} from "react-redux";
import swal from "sweetalert";
function Marka(){
    const dispatch: depoGlobalDispatch = useDispatch();
    const isMarkaAdi = useDepoSelector(state=> state.marka.isMarkaAdi);
    const [ad,setAd] = useState('');
    const [aciklama,setAciklama] = useState('');
    const [acikAdres,setAcikAdres] = useState('');
    const [yetkili,setYetkili] = useState('');
    const [iletisimTel,setIletisimTel] = useState('');

    const [editMarka,setEditMarka] = useState<IMarka>({
        id: 0,
        ad: '',
        aciklama: '',
        acikAdres: '',
        yetkili: '',
        iletisimTel: '',
    });

    const markaList: IMarka[] = useDepoSelector(state=> state.marka.markaList);
    useEffect(()=>{
       dispatch(fetchMarkaListele());
    },[]);
    const addMarka = ()=>{
        if(ad!=='' && yetkili!=='' && aciklama!=='' && acikAdres!=='' && iletisimTel!==''){
            dispatch(fetchMarkaEkle({ad, aciklama,acikAdres,yetkili,iletisimTel })).then(()=>{
                swal('KAYIT İŞLEMİ','Kayıt başarı ile tamamlandı', 'success').then(()=>{
                    dispatch(fetchMarkaListele());
                    setAd('');
                    setAcikAdres('');
                    setAciklama('');
                    setIletisimTel('');
                    setYetkili('');
                })

            })
        }else{
            swal('UYARI!','Tüm alanları doldurmanız gerekmektedir','error');
        }

    }
    const deleteMarka = (id: number)=>{
        swal({
            title: 'UYARI!',
            text: 'Seçtiğiniz kayıt silinmek üzere onaylıyor musunuz?',
            icon: 'error',
            buttons: ['İptal', 'Sil'],
            dangerMode: true
        }).then(onay=>{
            if(onay){
                dispatch(fetchMarkaSil(id)).then(()=>{
                    swal('SİLME İŞLEMİ','kayıt başarı ile silindi','success');
                    dispatch(fetchMarkaListele());
                })

            }else{
                swal('İPTAL','İşlem İptal Edildi','success');
            }
        })
    }
    /***
     DİKKAT!!!
     eğer bir event içerisine arrowfunction ekliyor iseniz ve function ın parametre alması gerekmiyor ise
     adını direkt yazabilirsiniz.
      -> onClick={addMarka}
     ancak eğer errorfunction bir değer talep ediyor ise onu function parantezleri ile çağırın.
     -> onClick={deleteMarka(3)} // bu kullanım yanlış hata verir.
     -> onClick={()=>{
         deleteMarka(3);
     }}
     Eğer bir değer, optional ise yani ? ile tanımlanmış ise önce onun varlığını kontrol etmelisiniz.
     if(marka.id)
        deleteMarka(marka.id);
     */

    const editMarkaSec=(marka: IMarka)=>{
        setEditMarka(marka);
    }

    const editMarkaAction = ()=>{
        if(editMarka.aciklama!=='' && editMarka.acikAdres!=='' && editMarka.yetkili!=='' && editMarka.ad!==''){
            dispatch(fetchMarkaEdit(editMarka)).then(()=>{
                swal('DÜZENLEME İŞLEMİ','Düzenleme başarı ile tamamlandı', 'success').then(()=>{
                    dispatch(fetchMarkaListele());
                    setEditMarka({
                        id: 0,
                        ad: '',
                        aciklama: '',
                        acikAdres: '',
                        yetkili: '',
                        iletisimTel: '',
                    })
                })
            })
        }

    }

    /***

     Musteri musteri = new Musteri();
     //musteri.ad = 4;
     musteri.setAd(3);
     musteri = new Musteri('','',44,323);
     {
         id: 4,
         ad: 'Ahmet',
         adres: 'Ankara'
     }
     .....
     {
         id: 4,
         ad: 'Ahmet',
         adres: 'Ankara',
         ad: 'Demet TAŞ
     }
     result
     {
         id: 4,
         adres: 'Ankara',
         ad: 'Demet TAŞ
     }
     */

    return(
        <div className='hold-transition sidebar-mini'>
            <div className="wrapper">

                <div className='modal fade' id='edit-modal' style={{display: 'none'}} aria-modal={true} role='dialog'>
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                Marka Düzenleme Ekranı
                            </div>
                            <div className='modal-body'>
                                <div className='form-group'>
                                    <label>Marka adı</label>
                                    <input value={editMarka.ad}
                                           onChange={evt => setEditMarka({...editMarka,ad: evt.target.value})} type="text"
                                           className='form-control'
                                           placeholder='marka adı giriniz.'/>
                                </div>
                                <div className='form-group'>
                                    <label>Aciklama</label>
                                    <input value={editMarka.aciklama}
                                           onChange={evt => setEditMarka({...editMarka,aciklama: evt.target.value})} type="text"
                                           className='form-control'
                                           placeholder='açıklama giriniz.'/>
                                </div>
                                <div className='form-group'>
                                    <label>Firma Yetkilisi</label>
                                    <input value={editMarka.yetkili}
                                           onChange={evt => setEditMarka({...editMarka,yetkili: evt.target.value})} type="text"
                                           className='form-control'
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
                                        <input value={editMarka.iletisimTel}
                                               onChange={evt => setEditMarka({...editMarka,iletisimTel: evt.target.value})}
                                               type="text" className='form-control'
                                               placeholder='telefon numarası giriniz.'/>
                                    </div>

                                </div>
                                <div className='form-group'>
                                    <label>Firma Açık Adresi</label>
                                    <textarea value={editMarka.acikAdres}
                                              onChange={evt => setEditMarka({...editMarka,acikAdres: evt.target.value})}
                                              rows={4} className='form-control'
                                              placeholder='açık adres bilgisini giriniz'/>
                                </div>
                                <div className='form-group'>
                                    <button data-dismiss='modal' onClick={editMarkaAction} className='btn btn-block btn-primary'>Düzenle & Kaydet</button>
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
                                                <input  value={ad} onChange={
                                                    evt=>
                                                    {
                                                        setAd(evt.target.value);
                                                        dispatch(fetchFindMarka(evt.target.value)); // marka var mı sorgula
                                                    }
                                                } type="text" className='form-control'
                                                       placeholder='marka adı giriniz.'/>
                                                {
                                                    isMarkaAdi &&
                                                    <label className='text-danger'>* Bu marka zaten kayıtlıdır</label>
                                                }

                                            </div>
                                            <div className='form-group'>
                                                <label>Aciklama</label>
                                                <input value={aciklama} onChange={evt=> setAciklama(evt.target.value)}  type="text" className='form-control'
                                                       placeholder='açıklama giriniz.'/>
                                            </div>
                                            <div className='form-group'>
                                                <label>Firma Yetkilisi</label>
                                                <input value={yetkili} onChange={evt=> setYetkili(evt.target.value)}  type="text" className='form-control'
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
                                                    <input value={iletisimTel} onChange={evt=> setIletisimTel(evt.target.value)}  type="text" className='form-control'
                                                           placeholder='telefon numarası giriniz.'/>
                                                </div>

                                            </div>
                                            <div className='form-group'>
                                                <label>Firma Açık Adresi</label>
                                                <textarea value={acikAdres} onChange={evt=> setAcikAdres(evt.target.value)}  rows={4} className='form-control'
                                                          placeholder='açık adres bilgisini giriniz'/>
                                            </div>
                                            <div className='form-group'>
                                                <button disabled={isMarkaAdi} onClick={addMarka} className='btn btn-block btn-primary'>Kaydet</button>
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
                                                            <td>No</td>
                                                            <th>M.Id</th>
                                                            <th>Ad</th>
                                                            <th>Aciklama</th>
                                                            <th>Yetkili</th>
                                                            <th>Telefon</th>
                                                            <th>Adres</th>
                                                            <th>İşlemler</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        markaList.map((marka,index)=> {
                                                            return <tr key={index}>
                                                                <td>{index+1}</td>
                                                                <td>{marka.id}</td>
                                                                <td>{marka.ad}</td>
                                                                <td>{marka.aciklama}</td>
                                                                <td>{marka.yetkili}</td>
                                                                <td>{marka.iletisimTel}</td>
                                                                <td>{marka.acikAdres}</td>
                                                                <td>
                                                                    <a onClick={()=>{
                                                                        if(marka.id)
                                                                            deleteMarka(marka.id)
                                                                    }} className='btn bg-danger p-2 m-1'>
                                                                        <i className="fa-solid fa-eraser fa-lg"></i>
                                                                    </a>
                                                                    <a onClick={()=>{
                                                                        editMarkaSec(marka)
                                                                    }} data-toggle='modal' data-target='#edit-modal' className='btn  bg-warning p-2 m-1'>
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

export default Marka;