import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="text-slate-500 font-bold text-md sm:text-[1.6rem] flex flex-wrap">
          <Link to='/'><span className='text-slate-700'>Aashi</span><span className='text-slate-600'>yana</span></Link>
        </h1>
        <form action="" className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-24 sm:w-64"></input>
          <FaSearch className='text-slate-600'></FaSearch>
        </form>
        <ul className='flex flex-row gap-4 font-semibold text-[1.2rem]'>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/about'>About</Link></li>
          <li className='text-slate-700 hover:underline'><Link to='/sign-in'>Sign in</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
