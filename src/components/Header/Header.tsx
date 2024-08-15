import logo from '../../assets/tbc-logo.svg'

const Header = () => {
  return (
    <header className="bg-white text-slate-600 p-3 w-full">
      <div className="container mx-auto flex justify-between md:justify-start items-center max-w-[1200px]">
        <div className="flex items-center">
          <h1>
            <img src={logo} alt="TBC logo" className="w-28 md:w-32" />
          </h1>
        </div>
        <nav className="flex items-center">
          <div className="relative group">
            <span className="text-sm font-semibold text-slate-700 cursor-pointer hover:text-sky-600 transition-all ease-in-out delay-100 ml-10">
              მთავარი
            </span>
            <div className="absolute mt-1 z-50 hidden group-hover:block whitespace-normal break-words rounded-lg text-center bg-white py-1 px-2 text-xs font-normal text-slate-500 shadow-lg">
              არაფერს არ შვება
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
