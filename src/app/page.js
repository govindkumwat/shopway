import Image from 'next/image'
import { Navbar } from './components/Navbar'
import MainSlider from './components/MainSlider'
import TopCat from './components/TopCat'
import FirstprodList from './components/FirstprodList'
import ShopTop from './components/ShopTop'
import Forher from './components/Forher'
import Forhim from './components/Forhim'
import Footer from './components/Footer'


export default function Home() {
  return (
   <>
    <Navbar/>
    <MainSlider/>
    <ShopTop/>
    <FirstprodList/>
    <Forher/>
    <Forhim/>
    <Footer/>
    </>
    
  )
}
