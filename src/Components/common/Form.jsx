import { useState, useEffect } from 'react'
import './Form.css'

const Form = () => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    console.log(errors)
  }, [errors])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    }

    const testEmail = emailRegex.test(data.email);
    const testName = data.name != false && data.name.length < 50;
    const testMessage = data.message != false && data.message.length < 1024;

    setErrors(prevErrors => ({
      ...prevErrors,
      name: !testName,
      email: !testEmail,
      message: !testMessage
    }))

    if (testEmail && testName && testMessage) {
      setFormSubmitted(true)
    } else {
      setFormSubmitted(false)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        {errors.name && <span className='formError'>Name must be over 2 characters long</span>}
        <input type="email" name="email" placeholder="Email" />
        {errors.email && <span className='formError'>Please enter a valid email address</span>}
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
        {errors.message && <span className='formError'>Message can&apos;t be empty, and under 1024 characters long</span>}
        {!errors.name && !errors.email && formSubmitted && <p className='formSuccess'>Form submitted successfully</p>}
      </form>
    </>
  )
}

export default Form