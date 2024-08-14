import logo from '../../assets/tbc-logo.svg'
const Header = () => {
  return (
    <header className="bg-white text-slate-600 p-3 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="tbc-logo" />
          </div>
          <span className="text-sm font-semibold mx-10 text-slate-700 cursor-pointer hover:text-sky-600 transition ease-in-out delay-100">
            მთავარი
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
