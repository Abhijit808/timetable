const form = document.getElementById("completeDetails");
const facultyNames = window.localStorage.getItem("requiredfacultynamefeilds");
const div = document.createElement("div");
//wrapper    
div.className = "wrapper";
form.append(div);
const label = document.createElement("label");
label.className = "label", "flex";
label.htmlFor = "details";
label.innerText = "HEY!!"
div.append(label);
for (let index = 1; index <= facultyNames; index++) {
    const innerwrapper = document.createElement("div");
    innerwrapper.className= "innerwrapper";
    div.append(innerwrapper);    
    //Creating label
    //creating input element
    const label1 = document.createElement("label");
    label1.className = "label", "flex";
    label1.htmlFor = "facultyname";
    label1.innerText = "facultyname"
    innerwrapper.append(label1);
    //input element
    const nameoffaculty = document.createElement("input");
    nameoffaculty.className = "input"
    nameoffaculty.name = "facutyname";
    nameoffaculty.type = "text";
    nameoffaculty.required = true;
    innerwrapper.append(nameoffaculty);
    //lablel2
    const label2 = document.createElement("label");
    label2.className = "label", "flex";
    label2.htmlFor = "Subject1";
    label2.innerText = "subject1"
    innerwrapper.append(label2);
    //input element
    const gotobranches1 = document.createElement("input");
    gotobranches1.className = "input"
    gotobranches1.name = "subject1";
    gotobranches1.type = "text";
    gotobranches1.required = true;
    innerwrapper.append(gotobranches1);
    // label element
    const label3 = document.createElement("label");
    label3.className = "label", "flex";
    label3.htmlFor = "Subject2";
    label3.innerText = "subject2"
    innerwrapper.append(label3);
    const gotoBranches2 = document.createElement("input");
    gotoBranches2.className = "input"
    gotoBranches2.name = "subject2";
    gotoBranches2.type = "text";
    gotoBranches2.required = true;
    innerwrapper.append(gotoBranches2);

}


const inputBtn = document.createElement("input");
inputBtn.type = "submit";
inputBtn.className = "primary-btn";
inputBtn.id = "submitBtn";
form.append(inputBtn)





