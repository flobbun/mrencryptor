const btnEncrypt = document.querySelector("#btnEncrypt");
const cinput = document.querySelector("#cinput");
const coutput = document.querySelector("#coutput");
const protocols = document.querySelector("#protocols");
const modes = document.querySelector("#modes");
const iterations = document.querySelector("#iterations");
new ClipboardJS('#copyOutput');

async function post(url, data)
{
    const res = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
      });
    return res;
}

async function encryption(){
    const res = await post('/encrypt', {
        input: cinput.value,
        protocol: protocols.options[protocols.selectedIndex].text,
        mode: modes.options[modes.selectedIndex].text,
        iterations: parseInt(iterations.value)
    });
    const {output} = await res.json();
    coutput.innerHTML = output;
}

btnEncrypt.addEventListener("click", () => {
   if(cinput.value != '')
        encryption();
});