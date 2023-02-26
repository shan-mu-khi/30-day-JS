let elem=document.getElementsByClassName('clickMe')[0];

elem.addEventListener('click',()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color='rgb('+r+','+g+','+b+')'
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
})