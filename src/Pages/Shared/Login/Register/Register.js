import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from '../../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';
import Header from '../../Header/Header';

const Register = () => {
    
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate  = useNavigate()
    const navigateLogin = (e) =>{
        e.preventDefault()
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async (e)=>{
        e.preventDefault();
        const displayName =  e.target.name.value;
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        const agree = e.target.terms.checked
        
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName});
        alert('Updated profile');

        navigate('/home')
        
    }
    return (
        <div >
            <Header></Header>
            
      
        <div className='w-50 container mx-auto mt-4 py-2 border bg-secondary bg-opacity-10 rounded-3'>
        <h2 className='text-center mt-3 mb-4 text-primary'> Register Your Account</h2>
        <form action="" onSubmit={handleRegister}>
            <input className='d-block mx-auto w-50 py-2 mb-2 ps-2 rounded-2 border' type="text" name="name" id=""  placeholder='your name'/>
            <input className='d-block mx-auto w-50 py-2 mb-2 ps-2 rounded-2 border' type="email" name="email" id="" placeholder='your email'/>
            <input className='d-block mx-auto w-50 py-2 mb-2 ps-2 rounded-2 border' type="password" name="password" id="" placeholder='password'/>
            <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`ms-2 ${agree ? '': 'text-danger'} ` } htmlFor="terms"> Accept terms and conditions</label><br />
            <input disabled={!agree} className='btn btn-primary w-25 mx-auto mt-2 ' type="submit" value="Register" />
        </form>
        

    <p className='text-center mt-3'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login now</Link></p>

    <div className=''> 
    <SocialLogin></SocialLogin>
    </div>
    </div>
        </div>  
    );
};

export default Register;