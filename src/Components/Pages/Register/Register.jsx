import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import img from '../../../assets/login/login.svg'
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser , updateProfileAndPhoto } = useContext(AuthContext);
    // console.log(createUser)
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                
                const saveUser = {name:  user.displayName ,email: user.email}
                updateUser(result.user , name , email)
                .then(() => {
                   fetch('http://localhost:5000/users' , {
                    method: 'POST' ,
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                   })
                   .then(res => res.json())
                   .then(data =>{
                        if(data.insertedId){
                           
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                   })
                })
            })
            .catch(error => console.log(error))

    }

    const updateUser = (user , name , photo )=>{
        updateProfileAndPhoto(user , name , photo)
        .then(result =>{
            console.log('update user' , result);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;