 import {Link} from "react-router-dom" 
 import backgroundImg from "./signUp.jpg"
const SignUp = () => { 
  const img = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat',

  };
  return (
    <> 
    <div className="h-screen" style={img}>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer">
        <Link to={"/"} > Yum<span className="font-bold">Eats</span > </Link>
        </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label typeof="email" className="block text-sm font-medium leading-6 text-gray-900">Your email</label>
                      <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"  required=""/>
                  </div>
                  <div>
                      <label typeof="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"required=""/>
                  </div>
                  <div>
                      <label typeof="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label typeof="terms" className="font-bold text-gray-500">I accept the <span className="font-medium text-primary-600 hover:underline text-orange-700" href="#">Terms and Conditions</span></label>
                      </div>
                  </div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-bold">Create an account</button>
                  <p className="text-sm font-light text-gray-700">
                      Already have an account? <Link to={"/SignIn"} className="font-bold text-primary-600 hover:underline text-orange-700">SignIn here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div> 
  </div>
    </>
  )
}

export default SignUp