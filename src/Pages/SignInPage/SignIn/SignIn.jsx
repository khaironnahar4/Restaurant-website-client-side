import registerImg from "../../../assets/auth/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";

// react simple captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../../Auth/UseAuth/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

function SignIn() {
  const axiosPublic = useAxiosPublic();
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const {handleSignin, setUser, handleGoogleSignin} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';
  // console.log(from);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    // console.log(data);
    handleSignin(data.email, data.password)
    .then(userCredential =>{
      const user = userCredential.user;
      setUser(user);
      navigate(from);
    })
    .catch(error =>{
      console.log(error.message);
    })
    
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const value = captchaRef.current.value;
    console.log(value);

    if (validateCaptcha(value) == true) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

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
          navigate(from);
        })
      })
      .catch(error=>{
        console.log(error.message);
        
      })
    }

  return (
    <div className="hero register min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={registerImg} alt="register image" />
        </div>

        <div className="card w-full lg:w-1/2 shrink-0">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
            <h1 className="text-center text-[40px] font-semibold">Login</h1>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Put your email address",
                })}
                placeholder="Type here"
                className="input input-bordered"
                
              />
              {errors.email && (
                <p role="alert" className="text-red-700">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                placeholder="Enter your password"
                className="input input-bordered"
                
              />
              {errors.password && (
                <p role="alert" className="text-red-700">
                  Please give the currect password.
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* recaptcha */}
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the text here"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleCaptcha}
                className="bg-white mt-2 py-2 text-center text-[#D1A054] border rounded-md cursor-pointer"
              >
                Validate
              </div>
            </div>

            {/* submit button */}
            <div className="form-control mt-6">
              <button
                disabled={disable}
                className="w-full bg-[#D1A054] text-white py-3 rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center items-center">
            <p className="text-[#D1A054]">
              New here? <Link to={"/register"}>Create a new account</Link>
            </p>
            <p className="py-6">Or sign up with</p>
            <div className="flex justify-center items-center gap-5">
              <div
                className="text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer"
              >
                <FaFacebookF />
              </div>

              <div onClick={handleGoogleRegister}
                className="text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer"
              >
                <FaGoogle />
              </div>

              <div
                className="text-xl font-bold w-12 h-12
                 border-2 border-black rounded-full 
                 flex justify-center items-center cursor-pointer"
              >
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
