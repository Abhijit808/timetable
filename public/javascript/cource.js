const lastchild = document.getElementById("input-form");
const  submit = document.getElementById("submitbtn");
const inputDiv = document.getElementById("inputs-append");  
const facultyNames = window.localStorage.getItem("requiredfacultynamefeilds");
const Branches = window.localStorage.getItem("requiredbranchnamefeilds");
const Courses = window.localStorage.getItem("requiredcoursenamefeilds");
console.log(facultyNames);
console.log(Branches);
console.log(Courses);
for (let index = 1; index <= Courses; index++) {
    const div =document.createElement("div");
    div.classList.add("Branchnames","flex");
    lastchild.append(div);
    const label = document.createElement("label");
    label.htmlFor = "courseName";
    label.innerText =`course ${Branches-index+1}: `;
    div.append(label);
    const input = document.createElement("input");
    input.name = `Course_Name_${index}`;
    input.type="text";
    input.className = "input"
    input.required=true;
    div.appendChild(input);
}