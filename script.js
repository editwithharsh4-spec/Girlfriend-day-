for(let i=0;i<25;i++){
let b=document.createElement("div");
b.className="balloon";
b.style.left=Math.random()*100+"vw";
b.style.animationDuration=(5+Math.random()*6)+"s";
b.style.background=`hsl(${Math.random()*360},100%,65%)`;
document.body.appendChild(b);
}

setTimeout(()=>{
alert("❤️ Happy Girlfriend Day My Chini ❤️");
},1500);
