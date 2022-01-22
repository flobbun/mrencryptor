import React from 'react';
import Axios from 'axios';
// import copyIcon from '../assets/img/icons/copy.svg';

const inputStyle = 'btn m-2 bg-black bradius-6 reflex txt-white font-normal txt-normal txt-center p-6';
const labelStyle = 'grid txt-black font-title grid-column-2 cgap-12 txt-center al-items-center';

const Options = () => 
    <div className="vw80 vh33 grid grid-row-3 jf-content-center jf-items-center grid-column-1 p-8 bradius-4 txt-white txt-normal font-normal">
        <label className={labelStyle}>
            <p className='txt-left'>Protocol</p>
            <select onChange={onChange} className={inputStyle} name="protocol">
                <option>ec</option>
                <option>ec00</option>
                <option>ec01</option>
                <option>ecMAC</option>
            </select>
        </label>
        <label className={labelStyle}>
            <p className='txt-left'>Modes</p>
            <select onChange={onChange} className={inputStyle} name="mode">
                <option value="encrypt">Encrypt</option>
                <option value="decrypt">Decrypt</option>
            </select>
        </label>
        <label className={labelStyle}>
            <p className='txt-left'>Iterations</p>
            <input onChange={onChange} className={inputStyle} type="number" name="iterations" defaultValue={1} min="1" max="4"/>
        </label>
    </div>;

const Encryption = () =>
    <div className="vw80 vh50 grid grid-row-3 jf-content-center jf-items-center grid-column-1 p-8 bradius-4 txt-white txt-normal font-normal">
        <form onSubmit={onEncrypt} className='w50 grid al-content-center al-items-center jf-items-center grid-row-1 grid-column-2'>
            <input onChange={onChange} className={inputStyle} name="input" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" placeholder="Input..."/>
            <button className={inputStyle+' txt-capitalize'} type="submit">Process</button>
        </form>
        <div className="grid al-self-center w50 separator"></div>
        <div className='overflow-hidden grid jf-items-center w100 h80 p-4 m-4'>
            <div id='coutput' className="w50 reflex bg-white txt-black bradius-4" data-text="Output..."></div>
        </div>
    </div>;


const inputState = {
    input: '',
    iterations: 1,
    mode: 'encrypt',
    protocol: 'ec'
};

const onEncrypt = async (e) => {
    e.preventDefault();
    const res = await Axios.post('http://localhost:3000/api/machine/encrypt', inputState);
    document.querySelector('#coutput').textContent = res.data.output;
}

const onChange = (e) => {
    const { name, value } = e.target;
    inputState[name] = value;
}

export default function Encryptor() {

    return (
        <section className='p-12 overflow-hidden bg-blue grid grid-row-2 jf-content-center jf-items-center al-items-center al-content-center' id='encryptor'>
            {Options()}
            {Encryption()}
        </section>
    )
}
