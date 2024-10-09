import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

  document.getElementById("save").addEventListener("click",()=>{
    const user="abhai";
  var selectelement=document.getElementById("domainselector");
  var selvalue=selectelement.options[selectelement.selectedIndex].value;
  const domain=selvalue;
  const title=document.getElementById("title").value;
  const heading=document.getElementById("heading").value;
  const imageurl=document.getElementById("imageurl").value;
  const content=document.getElementById("maincontent").value;
    addArticle(user,title,heading,imageurl,content,domain);
  })
  async function addArticle(user,title,heading,imageurl,content,domain) {
    try {
      const docRef = await addDoc(collection(db, "articles"), {
       user:user,
       domain:domain,
        title: title,
        heading:heading,
        imageurl:imageurl,
        content: content,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("uploadcnt").style.display="flex";



    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  // Initialize Firebase
  
  
  let history = [];

  function saveState() {
      history.push(document.getElementById('maincontent').value);
  }
  
  document.getElementById('addtext').addEventListener('click', function() {
      saveState();
      let text = prompt('Enter the text:');
      if (text) {
          document.getElementById('maincontent').value += `<p>${text}</p>\n`;
      }
      show();
  });
  
  document.getElementById('addimage').addEventListener('click', function() {
      saveState();
      let url = prompt('Enter the image URL:');
      if (url) {
          document.getElementById('maincontent').value += `<img src="${url}" alt="Image">\n`;
      }
      show()
  });
  
  document.getElementById('addboldtext').addEventListener('click', function() {
      saveState();
      let heading = prompt('Enter the heading:');
      if (heading) {
          document.getElementById('maincontent').value += `<h1>${heading}</h1>\n`;
      }
      show()
  });
  
  document.getElementById('undo').addEventListener('click', function() {
      if (history.length > 0) {
          document.getElementById('maincontent').value = history.pop();
      }
      show()
  });
  function show(){
    const a=document.getElementById("maincontent").value;
    document.getElementById("preview").innerHTML=a;
  }
  
  document.getElementById("ok").addEventListener("click",()=>{
    window.close();
  })
  document.getElementById("cancel").addEventListener("click",()=>{
    window.close();
    
  })
  
  
