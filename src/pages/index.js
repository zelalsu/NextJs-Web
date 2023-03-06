
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Photo from '../components/Logo/Photo'
import Navbars from '@/components/Navbar/Navbars'
import Header from '@/components/Header/Header'
import Card from '@/components/Cards/Card'
import AltHeader from '@/components/Body/AltHeader'
import Comment from '@/components/Comment/Comment'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <>
      <main  >
        <Photo />
        <Card />
        <AltHeader/>
        <Comment />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
