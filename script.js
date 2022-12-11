document.body.onload=function(){
    nb=4;
    pos=0
    container=document.getElementById("carrousel_container");
    g=document.getElementById("gauche");
    d=document.getElementById("droite");
    container.style.width=(50*nb) + "vw";
    for (i=1;i<=nb;i++){
        div=document.createElement("div");
        div.className="img";
        div.style.backgroundImage="url('img/carrousel/img"+i+".png')";
        container.appendChild(div);
    }   
}
g.onclick=function(){
    if(pos<0)
        pos++;
    else
        pos=-nb+1;
    container.style.transform="translate("+pos*50+"vw)";
    container.style.transition="all 100ms ease-in-out";
}
d.onclick=function(){
    
    if(pos>-nb+1)
        pos--;
    else
        pos=0;
    container.style.transform="translate("+pos*50+"vw)";
    container.style.transition="all 100ms ease-in-out";
}