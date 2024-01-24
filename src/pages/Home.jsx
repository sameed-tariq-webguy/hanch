import React from 'react'
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar'
import SoapBox from '../components/Home/SoapBox/SoapBox.jsx'
import Featured from '../components/Home/Featured/Featured.jsx'
import UpcomingAppearence from '../components/Home/UpcomingAppearence/UpcomingAppearence.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <>
      <div className="content-area">
        <SocialMediaBar />
        <SoapBox />
        <Featured />
        <UpcomingAppearence />
        <Footer />
      </div>
    </>
  )
}

export default Home