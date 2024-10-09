const text = ["Welcome to Sphere", 'Explore articles', 'Learn new things', 'Share thoughts'];
const colors=["black","#34C98B","#FE1010","#3C10FE"];
const bgcolors=["#E0E1E0","#AEFAC5","#F7CBC7","#C7D6F7"];
var i = 0;
var j=0;
const f=["e1","e2","e3","e4","e5"]
function changeText() {
    const element = document.getElementById("p1");
        i = (i + 1) % text.length;
        element.innerHTML = text[i];
        element.style.color=colors[i]; 
        document.querySelector(".sph").style.backgroundColor=bgcolors[i];

        if(document.getElementById(f[j]).style.backgroundColor="white"){
    document.getElementById(f[j]).style.backgroundColor="black";
    document.getElementById(f[j]).style.color="white";
    if(j>0){document.getElementById(f[j-1]).style.backgroundColor="white";
    document.getElementById(f[j-1]).style.color="black";
    }
  

}

j=(j+1) % f.length;
}
setInterval(changeText,3300);

document.getElementById("cross").addEventListener("click",()=>{
    document.getElementById("loginform").style.scale="0";
})
document.getElementById("cross2").addEventListener("click",()=>{
    document.getElementById("signup").style.scale="0";
})
function login(){
    document.getElementById("signup").style.transform="scale(0)"
    document.getElementById("loginform").style.transform="scale(1)";
}
function signup(){
    document.getElementById("signup").style.transform="scale(1)";
    document.getElementById("loginform").style.transform="scale(0)";
}

window.addEventListener("scroll",()=>{
    
    const y=window.scrollY;
    const width=window.innerWidth;
    console.log(width);
    console.log(y);
    if(width>1400){
    document.body.style.transitionDuration="1s";
    if(y<=740){
        document.body.style.backgroundColor="white";


    }
    else if(y>740 && y<1500){
        document.body.style.backgroundColor="black";
    }
    else if(y>1500&&y<1900){
        document.body.style.backgroundColor="#C7E5FF";
     

    }
    else if(y>1900 && y<3600){
        document.body.style.backgroundColor="#e5fbeb";
    }
    else if(y>3600){
        document.body.style.backgroundColor="white";
    }
    }
    else{
       document.body.style. backgroundColor="white";
    }
})
