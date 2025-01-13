import './Register.css'
import registerImg from "../../../assets/auth/authentication2.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6';
import { useForm } from "react-hook-form"
import useAuth from '../../../Auth/UseAuth/useAuth';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

function Register() {
  const axiosPublic = useAxiosPublic();
  const {handleSignUp, setUser, handleGoogleSignin} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = (data)=>{
    // console.log(data);
    handleSignUp(data.email, data.password)
    .then((userCredential)=>{
      const user = userCredential.user;
      updateProfile(user, {
        displayName: data.name
      }).then(()=>{
        setUser(user);
        const userData = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userData)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Congratulation! You are log in",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        })
        
      }).catch(error =>{
        console.log(error.message);
      })
    })
    .catch(error =>{
      console.log(error.message);
      
    })
    
  }

  const handleGoogleRegister = ()=>{
    handleGoogleSignin()
    .then(result =>{
      const user = result.user;
      setUser(user);
      const userData = {
        name: user?.displayName,
        email: user?.email
      }
      axiosPublic.post('/users', userData)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Congratulation! You are log in",
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          console.log(res.data);
        }
        navigate('/')
      })
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }

  return (
    <div className="hero register min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="text-center lg:text-left">
          <img src={registerImg} alt="register image" />
        </div>

        <div className="card w-full lg:w-1/2 shrink-0">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
            <h1 className='text-center text-[40px] font-semibold'>Sign Up</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", 
                  { required: "You name is required" })
                }
                placeholder="Type here"
                className="input input-bordered"
                
              />
              {errors.name && <p role="alert" className='text-red-700'>{errors.name.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", 
                  { required: "Email Address is required" })
                }
                placeholder="Type here"
                className="input input-bordered"
               
              />
              {errors.email && <p role="alert" className='text-red-700'>{errors.email.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", 
                  { 
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i,
                    required: true
                   },
                  
                )}
                placeholder="Enter your password"
                className="input input-bordered"
                
              />
              {errors.password && <p role="alert" className='text-red-700'>
                Password must be at least 6 digit and contain a letter, a number and a special character
                </p>}
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>

            <div className="form-control mt-6">
              <button className="w-full bg-[#D1A054] text-white py-3 rounded-md">Sign up</button>
            </div>
          </form>

          <div className='flex flex-col justify-center items-center'>
            <p className='text-[#D1A054]'>Already registered? Go to <Link to={'/sign-in'}>Log in</Link></p>
            <p className='py-6'>Or sign up with</p>
            <div className='flex justify-center items-center gap-5'>
                <div className='text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer'>
                    <FaFacebookF />
                 </div>

                 <div onClick={handleGoogleRegister} 
                 className='text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer'>
                    <FaGoogle />
                 </div>

                 <div className='text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer'>
                    <FaGithub />
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
