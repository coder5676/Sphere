var i=0;
const text=["Discover","Explore","Share","Learn"];
const color=["darkturquoise","dodgerblue","blue","orange"];
const bcolor=["rgb(179, 255, 245)","rgb(189, 237, 255)","rgb(186, 215, 255)", "rgb(255, 253, 240)"];
const images=["img1.png","img2.avif","img3.avif","hero.png"];
function animation(){
    document.getElementById("moving").innerHTML=text[i];
    document.getElementById("moving").style.color=color[i];
    document.getElementById("backface").style.backgroundColor=bcolor[i];
    document.getElementById("backface").style.transitionDuration="0.1s";
    document.getElementById("start").style.backgroundColor=color[i];
    document.getElementById("create").style.color=color[i];
    document.getElementById("create").style.border="2px solid "+color[i];
    document.getElementById("p1").style.color=color[i];
    document.getElementById("chimg").src=images[i];

    







    if(i<3){
        i+=1

    }
    else{
        i=0
    }


}
setInterval(animation,3000);
function login(){
    document.getElementById("loginform").style.transform="scale(1)";
    document.getElementById("signup").style.transform="scale(0)";


}
function signup(){
    document.getElementById("signup").style.transform="scale(1)";
    document.getElementById("loginform").style.transform="scale(0)";


}function closelogin(){
    document.getElementById("loginform").style.transform="scale(0)";



}function closesignup(){
    
    document.getElementById("signup").style.transform="scale(0)";


}