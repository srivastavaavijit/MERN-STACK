function myMove(){
    let pos = 0;
    const element = document.getElementById("inside");
    const id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }
        pos++;
        element.style.top = pos + 'px';
        element.style.left = pos + 'px';
    }
};