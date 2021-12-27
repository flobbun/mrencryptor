import React from 'react';
// import copyIcon from '../assets/img/icons/copy.svg';

const inputStyle = 'btn m-2 bg-black bradius-6 reflex txt-white font-normal txt-normal p-4';

const Options = () => 
    <div className="vw80 reflex grid grid-row-3 jf-content-center jf-items-center grid-column-1 bg-black p-8 bradius-4 txt-white txt-normal font-normal">
        <label className='grid grid-column-2 cgap-4 txt-center al-items-center'>
            Protocol
            <select className={inputStyle} id="protocols" name="protocols">
                <option>ec</option>
                <option>ec00</option>
                <option>ec01</option>
                <option>ecMAC</option>
            </select>
        </label>
        <label className='grid grid-column-2 cgap-4 txt-center al-items-center'>
            Modes
            <select className={inputStyle} id="modes" name="modes">
                <option value="encrypt">Encrypt</option>
                <option value="decrypt">Decrypt</option>
            </select>
        </label>
        <label className='grid grid-column-2 cgap-4 txt-center al-items-center'>
            Iterations
            <input className={inputStyle} id="iterations" type="number" name="iterations" 
                defaultValue={1} min="1" max="4"/>
        </label>
    </div>;

const Encryption = () =>
    <div className="vw80 reflex grid grid-row-3 jf-content-center jf-items-center grid-column-1 bg-black p-8 bradius-4 txt-white txt-normal font-normal">
        <form className='w50 grid al-content-center al-items-center jf-items-center grid-row-1 grid-column-2'>
            <input className={inputStyle} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" id="cinput" type="text" placeholder="Input..." name="cinput"/>
            <button className={inputStyle} type="button" id="btnEncrypt">➪</button>
        </form>
        <div className="grid al-self-center w50 separator"></div>
        <div className='grid jf-items-center vw100 p-4 m-4'>
            <div className="w50 reflex bg-white txt-black bradius-4" id="coutput" data-text="Output..."></div>
        </div>
    </div>;

export default function Encryptor() {

    // const [text, setText] = React.useState('');
    // const [encryptedText, setEncryptedText] = React.useState('');

    return (
        <section className='bg-white grid grid-row-2 jf-content-center jf-items-center al-items-center al-content-center' id='encryptor'>
            {Options()}
            {Encryption()}
            <div className='vw100 vh30 bgwave-white'>&nbsp;</div>
        </section>
    )
}
