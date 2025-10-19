import './App.css'
import FrameDetails from './components/FrameDetails'
import Product from './components/Product'
import TopNav from './components/TopNav'
import { DUMMY_PRODUCT } from './config/constant'

function App() {
  return (
    <>
      <TopNav />

      {/* Add top padding to prevent overlap with fixed header */}
      <main className='px-5 pt-24'> 
        <Product product={DUMMY_PRODUCT} />
        <FrameDetails product={DUMMY_PRODUCT} />
      </main>
    </>
  )
}

export default App
