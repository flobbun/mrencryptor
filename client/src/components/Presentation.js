import React from 'react';

export default function Presentation() {
    return (
        <div className='grid jf-al-all-center'>
            <div className='bgwave-white vw100'>&nbsp;</div>
            <section className='grid bgwave-white-up bg-cover bg-norepeat-y 
                    bg-pos-bottom bg50 grid-row-1 grid-column-1
                    txt-white txt-center p-4 jf-al-all-center'>
                <div className='grid'>
                    <p className="h2 txt-title">
                        Hey! I'm <b>Mr.Encryptor</b>, let me introduce myself...
                    </p>
                    <p className='txt-shadow-2 grid w64 m-auto font-normal txt-big'>
                            I am a data encryptor, use me to encrypt your passwords, messages or sensitive data. You can customize encryption methods to make your information a better hidden secret.
                    </p>
                    <a className='grid mt-4 jf-content-center' href="#encryptor">
                        <button className="reflex font-title btn heffect-1 bg-white bradius-6 p-8 txt-ultra">
                            I want to use it!
                        </button>
                    </a>
                </div>
            </section>
        </div>
    )
}
