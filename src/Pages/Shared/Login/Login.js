import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.path || "/"
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );

    if(loading || sending ){
      return <Loading></Loading>
  }

    // if(user){
    //  navigate(from, {replace: true});
    // }

    if(user){
      navigate(from, {replace: true});
    }

    if (error) {
      errorElement = <div>
         <p className='text-danger'>Error: {error?.message}</p>
       </div>
    
   }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e)
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = () =>{
        navigate('/register')
    }

    const resetPassword= async() =>{
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }
      else{
        toast('Please enter your email!')
      }
    }
    return ( 
      
        <div className='pt-5'>
          <Header></Header>
          <div className='  mx-auto mt-5  py-2 bg-light shadow-sm border bg-opacity-10 rounded-3 login '>

      <h2 className='text-primary text-center mt-2 mb-3'>Please Login</h2>
    <Form onSubmit={handleSubmit} className=" mx-auto ">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='py-2  w-50 mx-auto' ref={emailRef} type="email" placeholder="Enter email"  required/>
       
      </Form.Group>

      <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
        <Form.Control className='py-2' ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
     
      <input className='w-50 mx-auto d-block mb-3 btn btn-primary ' type="submit" value="Login" />
    </Form>
    {errorElement}
    <p>Don't have account? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>create account</Link></p>
    <p>Forget Password? <button  className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
    
    <SocialLogin></SocialLogin>
        <ToastContainer />
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;