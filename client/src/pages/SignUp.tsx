import { Link } from "react-router-dom"

const SignUp:React.FC = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 items-center">SignUp</h1>
      <form action="" className="flex flex-col gap-4">
        <input type="text" name="" placeholder="username" className="border p-3 rounded-lg" id="username" />
        <input type="email" name="" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input type="password" name="" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-700 hover:underline">Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
