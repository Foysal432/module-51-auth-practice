
import useAuth from "./hooks/useAuth";

const Login = () => {
  const {singin}=useAuth()
    // const {GoogleLogin,singin}=useAuth()
    // const handleSocial =(media)=>{
    //     media()
    //      .then(result=> console.log(result))
    //      .catch(error=> console.error(error))
    // }

    const handlefrom = e =>{
     e.preventDefault();
     const email =e.target.email.value;
     const password =e.target.password.value;
     console.log(email,password)
    //  singin
    singin(email,password)
    .then(rcs=>console.log(rcs.user))
    .catch(error=>console.error(error))
    }  

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
           <form onSubmit={handlefrom}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
           </form>
           {/* <div className="form-control mt-6">
                <button onClick={()=>handleSocial(GoogleLogin)} className="btn btn-primary">Google</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;