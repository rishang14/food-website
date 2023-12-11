import {Link} from "react-router-dom"
const SignIn = () => {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer text-center">
        <Link to={"/"} > Yum<span className="font-bold">Eats</span > </Link>
        </h1>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"> 
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      <form className="space-y-4 md:space-y-6" action="#" method="POST">
        <div>
          <label typeof="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" required="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label typeof="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        New User?
       <Link  to={"/SignUp"}className="font-semibold leading-6 text-orange-600 hover:text-orange-500">SignUp</Link>
      </p> 
    </div>
    </div>
  </div>
    </>
  )
}

export default SignIn;