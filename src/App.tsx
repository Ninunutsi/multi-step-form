import Form from './components/Form'
import Header from './components/Header'
import Introduction from './components/Introduction'

function App() {
  return (
    <div className="bg-[#fcfdff] w-full bg-[url('./assets/wave-haikei.svg')] bg-cover bg-center h-screen">
      <Header />
      {/* <Form /> */}
      <Introduction />
    </div>
  )
}

export default App
