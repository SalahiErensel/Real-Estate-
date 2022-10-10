import React from "react"

import Back from "../common/Back"

import RecentCard from "../home/recent/RecentCard"

import "../home/recent/recent.css"

import img from "../images/4.png"

const Blog = () => {
  
  return (

    <>

      <section className='blog-out mb'>

        <Back  title='Blog' cover={img} />

        <div className='container recent'>

          <RecentCard />

        </div>

      </section>

    </>

  )

}

export default Blog