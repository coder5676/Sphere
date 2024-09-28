function pr() {
  fetchdata("programming");
  document.getElementById("swipebox").classList.remove("open");

}
function ino() {
  fetchdata("innovation");
  document.getElementById("swipebox").classList.remove("open");

}
function gn() {
  fetchdata("general");
  document.getElementById("swipebox").classList.remove("open");

}function openall(){
  fetchdata("all");
  document.getElementById("swipebox").classList.remove("open");

}
fetchdata("all");

function fetchdata(d) {
  fetch('content.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data, d);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendData(data, Domain) {
  document.getElementById("dmname").innerHTML=Domain;
  var str = "";
  if(Domain=="all"){
    str=""
    for (let i = 0; i < data.length; i++) {
      let items = data[i];
      str += `
      <div id="card" onclick="opendetailedview(${i})">
      <div id="text">
      <p>${items.domain}</p>
                  <h1>${items.heading}</h1>
                 </div>
                <img id="image" src=${items.imageurl}></img>
              </div>`;
  }
}
  else{
    str=""
    for (let j = 0; j < data.length; j++) {
      let items = data[j];
      if (items.domain == Domain) {
        str += `
        <div id="card" onclick="opendetailedview(${j})">
        <div id="text">
        <p>${items.domain}</p>
                    <h1>${items.heading}</h1>
                   </div>
                  <img id="image" src=${items.imageurl}></img>
                </div>`;
      }}
     
    }
    document.querySelector("#elements").innerHTML = str;
}

function opendetailedview(index) {
  fetch('content.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let items = data[index];
      const str2 = `
        <nav><button onclick="goback()">Back</button></nav>
        <h1 id="pagetitle">${items.heading}</h1>
        <img id="pageimage" src=${items.imageurl}>
        <div id="createdby">
          <div id="imageuser"></div>
          <table>
            <tr><td><h1 style="font-size: 20px;" id="username">Abhai Pratap Maurya</h1></td></tr>
            <tr><td><p style="margin-top:0px" id="date">dated: ${new Date().toLocaleDateString()}</p></td></tr>
          </table>
        </div>
        <p id="pagetext">${items.text}</p>
        `;
      document.querySelector("#maincontainer").innerHTML = str2;
  document.getElementById("maincontainer").style.visibility="visible";

    })
    .catch(function (err) {
      console.log(err);
    });
}
function goback(){
  document.getElementById("maincontainer").innerHTML="";
  document.getElementById("maincontainer").style.visibility="hidden";
}
function openbox(){
  document.getElementById("swipebox").classList.toggle("open");
}