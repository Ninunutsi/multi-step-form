// import Form from './components/Form'
import Header from './components/Header'
import Introduction from './components/Introduction'
import SuccessMessage from './components/SuccessMessage'

function App() {
  return (
    <div className="bg-[#fcfdff] w-full bg-[url('./assets/wave-haikei.svg')] bg-cover bg-center h-screen">
      <Header />
      {/* <Form /> */}
      <Introduction />
      <SuccessMessage email="email" name="name" />
    </div>
  )
}

export default App
