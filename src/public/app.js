const btn = document.querySelector('#pokemon')
const divTeste = document.querySelector('.teste')

btn.addEventListener('click', ()=> {
    divTeste.innerHTML = `
    <div class="js">
    <h1>idiota</h1>
    <img src="https://th.bing.com/th/id/OIP.mtupwKQy9UabTdHvByomDQHaEo?rs=1&pid=ImgDetMain" alt="">
    </div>                    
    `
})

