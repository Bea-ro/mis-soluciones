import './App.css'
import Title from './components/Title'
import Paragraph from './components/Paragraph'

function App() {
  const pageTitle = '¡Bienvenid@s a Rock{theCode}!' 
  return (
    <div className="App">
      <h1><Title text={pageTitle}/></h1>
      <p><Paragraph text={pageTitle}/></p>  
    </div>
  )
}

export default App