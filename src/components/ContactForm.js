import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import EmailBg from '../assets/images/email.jpg'
import IconSocial from "../components/IconSocial"

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mleovazl',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    
    <main>
      <EmailContainer id="contact">
        <EmailContent>
      <h1>Let's play together!</h1>
      <IconSocial />
     
      <form onSubmit={handleOnSubmit}>
      <FormWrap>
        <label htmlFor="email">
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="Your Email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        /></label>
        
      
        <label htmlFor="message">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        /></label>
        <Gotcha>
        <input type="text" name="_gotcha" />
        </Gotcha>
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        
        </FormWrap>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </EmailContent>
      </EmailContainer>
    </main>
  )
}

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%, 
        rgba(0,0,0,0.1) 100%
        ), 
        url(${EmailBg}) no-repeat center;
        background-size: cover;
        height: 60vw;
        width: 100%;
        padding: 10rem calc((100vw - 1300px) / 2);
        color: #fff;
        display: grid;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        @media screen and (max-width: 1024px) {
          height: 100%;
        }

`
const EmailContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-family: 'Poppins', sans-serif;
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(1rem, 5vw, 3rem);
            padding: 0 1rem;
            color: #fff;
        }
        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 1rem;
        }
        form {
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
`
const FormWrap = styled.div`
        
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 360px;
        input {
            padding: 1rem 1.5rem;
            outline: none;
            width: 360px;
            height: 48px;
            border: none;
        }
            textarea {
            padding: 1rem 1.5rem;
            margin-top: 10px;
            outline: none;
            width: 360px;
            height: 100px;
            border: none;
            
        }
            button {
              font-family: 'Poppins', sans-serif;
                background: #F26A2E;
                white-space: nowrap;
                padding: 16px 40px;
                margin-top: 20px;
                color: #fff;
                font-size: ${({ big }) => (big ? '20px' : '16px')};
                outline: none;
                border: none;
                min-widht: 100px;
                text-decoration: none;
                transition: 0.3s !important;
                
                &:hover {
                    background: #fff;
                    color: #F26A2E;
                    transform: translateY(-2px);
                }
            }
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;

            input {
                margin-bottom: 1rem;
                max-width: 250px;
                
            }
            textarea {
              max-width: 250px;
              
          }
          
        }
`
const Gotcha = styled.div`
        display: none;
`