    const btn = document.querySelector('.btn');
    function HandleClick(){
        let body=document.querySelector('body');
        body.style.backgroundColor=RandomColor()
    }
    function RandomColor(){
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`
    }
