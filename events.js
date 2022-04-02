const butn = document.querySelector('.btn')

butn.addEventListener('click', (e)=>{
    e.preventDefault();
    butn.style.background = 'blue'
    // console.log('click');
})