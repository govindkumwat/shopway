import Image from 'next/image'
import { Navbar } from './components/Navbar'
import MainSlider from './components/MainSlider'
import TopCat from './components/TopCat'
import FirstprodList from './components/FirstprodList'


export default function Home() {
  return (
   <>
    <Navbar/>
    <TopCat/>
    <MainSlider/>
    <FirstprodList/>
    </>
    
  )
}
