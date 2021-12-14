let addBtn=document.getElementById("submit");
let addTitle=document.getElementById("text");
let addTxt=document.getElementById("description")

addBtn.addEventListener("click", (e) =>{
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value="";
    addTxt.value="";

    showNotes();
})

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    
    let html="";
    notesObj.forEach(function(element, index){
        html +=`
        <div id="note">
      <h3>${element.title}</h3>
        <p>${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="del"><span class="glyphicon glyphicon-trash"></span></button>
        <button id="${index}" onclick="editNote(this.id)" class="edit"> <span class="glyphicon glyphicon-edit"></span></button>

    </div>`;
    });

    let notesElm=document.getElementById("notes");
    if(notesObj.length !=0){
        notesElm.innerHTML=html;
    }
}


function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

function editNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.findIndex((element, index)=>{
        addTitle.value=element.title;
        addTxt.value=element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
}

showNotes();
