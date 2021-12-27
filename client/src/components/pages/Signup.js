import React from 'react'

const inputStyle = 'btn m-2 bg-black bradius-6 reflex txt-white font-normal txt-normal p-4';

export default function Signup() {
    return (
        <div className='grid vh100 bg-gradient-2 jf-al-all-center grid-row-1 grid-column-1'>
            <div className={inputStyle +' p-8'}>
                <p className='h1 font-title txt-center txt-white'>Sign Up</p>
                <form className='grid grid-row-3 rgap-4 p-8' id='signup-form'>
                    <input className={inputStyle} type="text" placeholder='example@hotmail.com' />
                    <input className={inputStyle} type="password" placeholder='Password' />
                    <button className={inputStyle} type='submit'>Sign up</button>
                </form>
            </div>
        </div>
    )
}
