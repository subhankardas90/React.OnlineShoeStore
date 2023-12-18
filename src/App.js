import './App.css'
import NavBar from './components/NavBar'
import CustomerReview from './sections/CustomerReview'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'

function App() {

  return (
    <main className='relative'>
      <NavBar />
      <section className='xl:padding-1 wide:sm:pr-16 pr-8 sm:pb-24 pb-12'><Hero /></section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='sm:px-16 px-8 sm:py-24 py-12'><SuperQuality /></section>
      <section className='sm:px-16 px-8 py-10'><Services /></section>
      <section className='sm:px-16 px-8 sm:py-24 py-12'><SpecialOffer /></section>
      <section className='sm:px-16 px-8 sm:py-24 py-12 bg-pale-blue'><CustomerReview /></section>
      <section className="sm:px-16 px-8; sm:py-32 py-16 w-full"><Subscribe /></section>
      <section className='bg-black sm:px-16 px-8; patting-t pb-8'><Footer /></section>
    </main>
  )
}

export default App
