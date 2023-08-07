import React from 'react'
import Header from "./Header";
import Slider from "./Slider"
import Footer from './Footer';
import Tab from "./Tab"
import Testimonials from './Testimonials';
import Feature from './Feature';
import Feauture2 from './Feature2';
import Contact from './Contact'
import Faq from './Faq';
import Hero from './Hero';
const Home = () => {
  return (
    <div>
        <Hero/>
        <Slider/>
        <Tab/>
        <Feature/>
        <Feauture2/>
      <Testimonials/>
      <Faq/>
        <Contact/>
    </div>
  )
}

export default Home