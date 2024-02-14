import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
import Card from "./Components/card"

function App() {
  

  return (
    <>
    <Navbar/>
     <div className="cards">
      <Card title='card1' description='card1' />
      <Card title='card2' description='card2' />
      <Card title='card3' description='card3' />
      <Card title='card4' description='card4' />
     

     </div> 
    <Footer/>
    </>
  )
}

export default App
