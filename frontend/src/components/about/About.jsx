import React from "react"

import Back from "../common/Back"

import Heading from "../common/Heading"

import img from "../images/3.png"

import "./about.css"

const About = () => {

  return (

    <>

      <section className='about'>

        <Back title='About Us - Who we are?' cover={img} />

        <div className='container flex mtop'>

          <div className='left row'>

            <Heading title='Our Company' subtitle="Check out our company's vision and mission" />

            <p>--------------------------------Vision and Mission-------------------------------</p>

          </div>

        </div>

      </section>

    </>

  )

}

export default About