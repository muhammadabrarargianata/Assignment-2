const editButton = document.getElementById('editButton')
const editForm = document.getElementById('myForm')

//form target untuk di ubah
const imageTarget = document.getElementById('imageTarget')
const nameTarget = document.getElementById('nameTarget')
const jobTarget = document.getElementById('jobTarget')
const availTarget = document.getElementById('availTarget')
const ageTarget = document.getElementById('ageTarget')
const locTarget = document.getElementById('locTarget')
const yearTarget = document.getElementById('yearTarget')
const emailTarget = document.getElementById('emailTarget')


//inisialisasi form
const formImage = document.getElementById('formImage')
const formName = document.getElementById('formName')
const formRole = document.getElementById('formRole')
const formAvail = document.getElementById('formAvail')
const formAge = document.getElementById('formAge')
const formLoc = document.getElementById('formLoc')
const formYear = document.getElementById('formYear')
const formMail = document.getElementById('formMail')
const submitBtn = document.getElementById('submitBtn')


//assign function to edit button
editButton.addEventListener('click', toggleEditForm)
submitBtn.addEventListener('click', mySubmitForm)



// function contruktor nya
function toggleEditForm (event){
    editForm.classList.toggle('hide-content')
}

function mySubmitForm (event){
    //event bubling
    event.preventDefault()

    //get value
    const currentFile = formImage.files[0]
    const currentName = formName.value
    const currentRole = formRole.value
    const currentAvail = formAvail.value
    const currentAge = formAge.value
    const currentLoc = formLoc.value
    const currentYear = formYear.value
    const currentMail = formMail.value
  
    // set value dari FORM to target
    nameTarget.innerHTML = currentName
    jobTarget.innerHTML = currentRole
    availTarget.innerHTML = currentAvail
    ageTarget.innerHTML = currentAge
    locTarget.innerHTML = currentLoc
    yearTarget.innerHTML = currentYear
    emailTarget.innerHTML = currentMail
  
    // set file to target
    // cek if file exist
    if(currentFile) {
      // bikin instance file reader
      const reader = new FileReader()
  
      // set function onload nya, pas filereader nya beres, itu mau ngapain
      reader.onload = function (e) {
        imageTarget.src = e.target.result
      }
  
      // pass the file to file reader
      reader.readAsDataURL(currentFile);
  
      // log debugging
      console.log(currentFile)
      console.log('file ada')
    }
    
    // hide form nya lagi
    toggleEditForm()
}
