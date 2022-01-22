import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <>
            <header className='grid p-4 jf-content-center grid-row-2 grid-column-1 rgap-2 bg-white bshadow-1'>
                <h1 className='grid jf-self-center'>
                    <Link to='/'>
                        <img className='w90' src={logo} alt="MrEncryptor logo" />
                    </Link>
                </h1>
                <nav className='grid al-items-center'>
                    <ul className='grid grid-row-1 grid-column-3 jf-content-center jf-items-center'>
                        <li className='reflex txt-center heffect-2 bg-black p-4 bradius-4 p-4'>
                            <Link className="h4 txt-white txt-normal font-normal" 
                                to='/security'>Security</Link>
                        </li>
                        <li className='reflex txt-center heffect-2 bg-black p-4 bradius-4 p-4'>
                            <Link className="h4 txt-white txt-normal font-normal" 
                                to='/contact'>Contact</Link>
                        </li>
                        <li className='reflex txt-center heffect-2 bg-black p-4 bradius-4 p-4'>
                            <Link className="h4 txt-white txt-normal font-normal" 
                                to='/signup'>Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='bgwave-white vw100'>&nbsp;</div>
        </>
    )
}
