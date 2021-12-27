import React from 'react'

export default function Footer() {

    const goTo = (url) => window.location.href = url;   

    return (
        <footer className='font-normal txt-normal bg-black txt-white txt-center p-2'>
            <p>This is a creation of &nbsp;
            <b className='btn' onClick={()=>goTo('https://jhonsportfolio.netlify.app')}>Jhon Aguiar</b>.</p>
            <small>Thanks for using it!</small>
        </footer>
    )
}
