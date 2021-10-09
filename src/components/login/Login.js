import React from 'react'
import './login.css'
export default function Login() {
    return (
        <div className='login'>
            <div className='company_details'>
                Company Name
            </div>
            <div className='login_content'>
                <div className='login_content_head'>  LOG IN</div>
                <div className='login_enter'>
                    <p>Enter Email</p>
                    <input></input>
                </div>
                <div className='login_enter'>
                    <p>Enter Password</p>
                    <input></input>
                </div>
                <div className='login_content_submit'>
                    <button>Submit</button>
                </div>
        
            </div>
            
        </div>
    )
}
