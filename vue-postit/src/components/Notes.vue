<template>
  <body>
    <div id="app1">
    <button  class="add-note" type="button">+</button>
    </div>
  </body>
</template>
<script>
const notesContainer = document.getElementById("app1");
const addNoteButton = notesContainer.querySelector(".add-note");
function getNotes(){
return JSON.parse(localStorage.getItem("stickynotes-notes")||"[]")
}
function saveNotes(notes){
localStorage.setItem("stickynotes-notes",JSON.stringify(notes)); 
}
function createNoteElement(id,content){
const element = document.createElement("textarea"); 
element.classList.add("note");
element.value=content;
element.placeholder="empty sticky note";
element.addEventListener("change",()=>{
  updateNote (id,element.value);
});
element.addEventListener("dblclick",()=>{
  const doDelete = confirm("Are you sure you whish to delete this sticky note?");
  
})


return element;
}
function addNote(){

}
function updateNote(id,newContent){

}
function deleteNote( ) {
  
}


</script>

