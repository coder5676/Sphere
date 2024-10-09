import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBu5-fE69WdhHWBR7-2U3NGMm2YgGb6fgo",
    authDomain: "sphere-858fc.firebaseapp.com",
    projectId: "sphere-858fc",
    storageBucket: "sphere-858fc.appspot.com",
    messagingSenderId: "683722942494",
    appId: "1:683722942494:web:61517cb2450ef4284b260f"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  async function getArticles(Domain) {
    document.getElementById("maincontainer").style.display="none";
   try{ const querySnapshot = await getDocs(collection(db, "articles"));
    var str="";
    querySnapshot.forEach((doc) => {
 /*   if(Domain=="all"){
        str+=` <div id="card">
        <div id="text">
            <p>${doc.data().domain}</p>
            <h1>${doc.data().heading} </h1>
        </div>
        <img src="${doc.data().imageurl}">
    </div>`
      }
      else if(doc.data().domain==Domain){
      str+=` <div id="card">
            <div id="text">
                <p>${doc.data().domain}</p>
                <h1>${doc.data().heading} </h1>
            </div>
            <img src="${doc.data().imageurl}">
        </div>`}*/

     if (Domain == "all" || doc.data().domain == Domain) {
          str += `<div id="card" onclick="openview('${doc.id}')">
                      <div id="text">
                          <p>${doc.data().domain}</p>
                          <h1>${doc.data().heading}</h1>
                      </div>
                      <img src="${doc.data().imageurl}">
                  </div>`;
      }


        else{
          console.log("Not found");
        }
    })
   

    document.querySelector("#elements").innerHTML=str;
    str="";}
    catch(error){
      console.log(error);
    }
  };

  
document.getElementById("pr").addEventListener("click",()=>{
document.getElementById("swipebox").classList.remove("open");
getArticles("programming");
}
);
document.getElementById("ino").addEventListener("click",()=>{
  document.getElementById("swipebox").classList.remove("open");
  getArticles("innovation");
  }
  );
  document.getElementById("gn").addEventListener("click",()=>{
    document.getElementById("swipebox").classList.remove("open");
    getArticles("general");
    }
    );
    document.getElementById("all").addEventListener("click",()=>{
      document.getElementById("swipebox").classList.remove("open");
      getArticles("all");
      }
      );
      document.getElementById("b1").addEventListener("click",()=>{
        document.getElementById("swipebox").classList.toggle("open");
        }
        );


window.openview=async function(id){
  console.log("hello from function");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  try{
    const docRef = doc(db, "articles", id);
        // Fetch the document data
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // Document data found
            document.getElementById("maindisplay").style.display="none";
            document.getElementById("maincontainer").style.display="flex";

           
var str2=`
<nav id="mainnav"> <button id="goback" onclick="goback()">↩</button><button style="background-color: black;">Liked it</button></nav>
        <div id="user">
            <p style="color:dodgerblue;margin-bottom: 0px;margin-left: 20px;">Creator</p>
          <h1>This article is created by</h1>
            <div> 
            <img id="userimg">
            <p id="username">${docSnap.data().user}</p>
            <p id="uploaddate">Change</p></div>
        </div>

        <h1 id="title">${docSnap.data().title}</h1>
        <img id="mainimg" src="${docSnap.data().imageurl}">
        <div id="content-alive">
        ${docSnap.data().content}
        </div>`

          document.querySelector("#maincontainer").innerHTML=str2;
            
        } else {
            // No such document
            console.log("No such document!");
           
        }
  } catch (error) {
      console.log(error);
  }

  }

window.onload=getArticles("all");
    
window.goback= async function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById("maindisplay").style.display="flex";
            document.getElementById("maincontainer").style.display="none";
 
}
       