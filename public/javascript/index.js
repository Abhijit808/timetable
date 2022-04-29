function validate() {
    const NoOfBranches = document.getElementById("branchNo").value;
    const NoOfCourses = document.getElementById("courseNo").value;
    const NoOfFaculty = document.getElementById("facultyNo").value;
    const warning = document.querySelectorAll(".letter");
    const submit = document.getElementById("submitbtn");
    const form = document.getElementById("input-form");
    if (NoOfBranches<0||NoOfBranches>10||NoOfBranches=="") {
        warning.forEach(element => {
            element.innerText = "PLEASE ENTER A VALID NUMBER*";
        });
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
      })
    }
    else if (NoOfCourses<0||NoOfCourses>10||NoOfCourses=="") {
        // warning.innerText = "PLEASE ENTER A VALID NUMBER*";
      form.addEventListener('submit',(e)=>{
          e.preventDefault();
      })
    } 
    else if (NoOfFaculty<0||NoOfFaculty>10||NoOfFaculty=="") {
        // warning.innerText = "PLEASE ENTER A VALID NUMBER*";
      form.addEventListener('submit',(e)=>{
          e.preventDefault();
      })
    } 
    else{
        warning.forEach(element => {
            element.innerText = " ";
        });
        //  window.location = " ";
         window.localStorage.setItem("requiredbranchnamefeilds",NoOfBranches);
         window.localStorage.setItem("requiredcoursenamefeilds",NoOfCourses);
         window.localStorage.setItem("requiredfacultynamefeilds",NoOfFaculty);
    }
}