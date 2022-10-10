import React from "react"

import img from "../images/6.png"

import Back from "../common/Back"

import "../home/featured/Featured.css"

import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {

  return (

<>

      <section className='services mb'>

        <Back  title='Services' cover={img} />

        <div className='featured container'>

          <FeaturedCard />

        </div>

      </section>

    </>

)

}

export default Services
