import React from 'react'

function QuickForm() {
  return (
    <div className="quickfrom_container">
      <h1>
        JOIN <span>NOW</span>
      </h1>
      <form
        target="_blank"
        action="https://formsubmit.co/adacodesolutions@gmail.com"
        method="POST"
        >
        <input type="text" placeholder="Your Name " name="name" />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
        <input type="email" name="email" placeholder="Your Email" required />

      <div className="course_checkbox">
        <div className='checkbox_selector'>
          <label><input className='checkmark' type="radio" value="Embedded Systems & Iot" name='Interested In' required  />Embedded Systems & Iot</label>
          <label><input type="radio" value="Data science" name='Interested In' />Data science</label>
          <label><input type="radio" value="Mern Stack" name='Interested In' />Mern Stack</label>
          <label><input type="radio" value="Cloud computing" name='Interested In' />Cloud computing</label>
          <label><input type="radio" value="Flutter" name='Interested In' />Flutter</label>
          <label><input type="radio" value="Python Fullstack" name='Interested In' />Python Fullstack</label>
          <label><input type="radio" value="Ethical Hacking" name='Interested In' />Ethical Hacking</label>
          <label><input type="radio" value="Cyber Security" name='Interested In' />Cyber Security</label>
        </div>
      </div>

        <input className='button' type="submit" value={'Enroll Now'} />
      </form>
    </div>

  )
}

export default QuickForm
