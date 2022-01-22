import React from 'react';

const playAnim = () => {
    const presentation = document.getElementById('presentation');
    presentation.style.animation = 'minimize 1.2s forwards';
    presentation.querySelectorAll('.bgwave-white')[0].style.animation ='fadeout 0.1s forwards';
    setTimeout(() => {
        window.scrollTo(0, -document.body.scrollHeight);
    }, 1200);
}

export default function Presentation() {
    return (
        <div id='presentation' className='grid jf-al-all-center'>
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
                    <div className='grid mt-4 jf-content-center'>
                        <button onClick={playAnim} className="reflex font-title btn heffect-1 bg-white bradius-6 p-8 txt-ultra">
                            I want to use it!
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
