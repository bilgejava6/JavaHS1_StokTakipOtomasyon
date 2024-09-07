import {useState} from "react";
import {fetchRegister} from "../../store/feature/authSlice";
import {useDispatch} from "react-redux";
import {depoGlobalDispatch} from "../../store";
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';
function Register(){
    const dispatch: depoGlobalDispatch  = useDispatch();
    /**
     * DİKKAT!!!!!
     * sayfalar arasında geçiş için, rect-router-dom kullanılacaktır. çünkü bizim navigasyon işlemlerimizi
     * o yönetmektedir. Bu nedenle useNavigate ile sayfalar arası geçişi sağlayacağız.
     * */
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUsername] = useState('');
    const register = ()=>{
        // fetchRegister({
        //     userName: userName,
        //     password: password,
        //     email: email
        // })
        // DİKKAT!!! Eğer key değeri ile value değişken adı aynı ise tekrar yazılmasına gerek yoktur.
       dispatch(fetchRegister({userName,email,password})).then(()=>{
           swal('Üyelik İşlemi','Kayıt başarı ile tamamlanmıştır','success').then(()=>{
               navigate('/login');
           })
       })
        // Burada userName  değişkeninin adı fetch işleminde talep edilen key değerini ifade eder, değişkenin value ise gönderilmek
        // istenilen değeri ifade eder.
    }
    return(
        <div className='hold-transition register-page'>
            <div className="register-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Register a new membership</p>


                        <div className="input-group mb-3">
                            <input onChange={evt=> setUsername(evt.target.value)} type="text" className="form-control" placeholder="User Name"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={evt=> setEmail(evt.target.value)} type="email" className="form-control" placeholder="Email"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={evt=> setPassword(evt.target.value)} type="password" className="form-control" placeholder="Password"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={evt=> setConfirmPassword(evt.target.value)} type="password" className="form-control" placeholder="Retype password"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
                                    <label htmlFor="agreeTerms">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>

                            <div className="col-4">
                                <button onClick={register} type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>

                        </div>


                        <div className="social-auth-links text-center">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i>
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i>
                                Sign up using Google+
                            </a>
                        </div>

                        <a href="/login" className="text-center">I already have a membership</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register;