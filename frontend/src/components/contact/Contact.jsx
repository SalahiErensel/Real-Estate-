import React from "react"

import "./contact.css"

const Contact = () => {

  return (

    <>

      <section className='contact mb'>

        <div className='container'>

          <form className='shadow'>

            <h4>CONTACT US</h4> <br />

            <div>

              <input type='text' placeholder='Name' />

              <input type='text' placeholder='E-mail' />

            </div>

            <input type='text' placeholder='Subject' />

            <textarea cols='30' rows='10' placeholder="Message">

            </textarea>

            <button>SEND</button>

          </form>

        </div>

      </section>

    </>

  )

}

export default Contact