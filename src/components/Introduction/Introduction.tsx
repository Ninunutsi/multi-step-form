const Introduction = () => {
  return (
    <div className="sm:w-90 md:w-[70vw] flex flex-col items-center justify-center lg:w-[600px] mx-auto p-6 bg-white border border-white rounded-lg shadow-sm my-12 bg-[url('assets/polygon-scatter-haikei.svg')] bg-cover bg-center min-h-80">
      <h1 className="text-3xl font-bold text-sky-600 mb-4">გამარჯობა,</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        პლატფორმაზე რეგისტრაციისთვის გთხოვთ შეიყვანოთ თქვენი მონაცემები
      </p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 my-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        დაწყება
      </button>
    </div>
  )
}

export default Introduction
