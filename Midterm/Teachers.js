let url = 'https://raw.githubusercontent.com/nhogue/act311/main/midterm/'; 
let allURL = 'https://raw.githubusercontent.com/nhogue/act311/main/midterm/all.json';
let URLselected = '';
function departments() {
fetch(allURL)    
    .then(getResponse1)
    .then(getData1)
    .catch("Error")
    ;
}
function getResponse1(response1) {
    console.log(response1);
    return response1.json();
}
function getData1(data) {
    console.log("We're in getData1");
    console.log(data);
    var departmentArray = [];
    for(dept of data){
        if(!departmentArray.includes(dept)){
            departmentArray.push(dept);
        }
    }
    var select1 = document.getElementById("DepartmentSelect");
    for (a of departmentArray){
        var option1 = document.createElement("option");
        option1.text = a["dept"];
        option1.id = a["filename"];
        console.log(option1);
        select1.add(option1);
    }
}
function DepartmentSelection(button) {
    console.log(button);
    var selected1 = button.options[button.selectedIndex].id;
    console.log(selected1);
    URLselected = selected1;
    instructors();
    
    }
/////////////////////////////////////////////////////////////////////////////
function instructors() {
    setStatus("Start Fetch", "text-white bg-danger");

    fetch(url + URLselected)
        .then(getResponse)
        .then(getData)
        .catch("Error...")
        ;
}
function getResponse(response) {
    console.log(response);
    return response.json();
}
function getData(data) {
    //console.log("We're in getData");
    //console.log(data);
    setStatus("Data Received", "text-primary");
    var instructorArray = [];
    for(courses of data){
        //console.log(instructorArray[courses["instructor"]]);
        if(!instructorArray.includes(courses["instructor"])){
            instructorArray.push(courses["instructor"]);
        }
    }

    var select = document.getElementById("InstructorSelect");
    select.innerHTML='';
    for(x of instructorArray){
        var option = document.createElement("option");
        option.text = x;
        option.id = x;
        select.add(option);
    }

    //console.log(instructorArray);
    //console.log(lines);
}


function setStatus(newText, newColors) {
    let status = document.getElementById("status");
    status.innerHTML = newText;
    status.className = newColors;
}

function TeacherSelection(button) {
    //console.log(button);
    var selected = button.options[button.selectedIndex].id;
    //console.log(selected);
    fetch(url + URLselected)
    .then(getResponse)
    .then(data =>{
        getClasses(selected, data);
    })
    .catch("Error...")
    ;
}

function getClasses(selected, data) {
   //console.log(selected)
   //console.log(data)
   var courseArray = [];
   for(z of data){
       //console.log(z)
       if(selected==z["instructor"]){
        courseArray.push(z);
    }
   }
   console.log(courseArray);
   courseArray = classSort(courseArray);
   PrintHTML(courseArray, selected);
}
function PrintHTML(arr, instructor) {
    var grid = document.getElementById("theList");
    grid.innerHTML = "";
    var div = document.createElement('div');
    div.className = "col text-center bg-dark";
    div.appendChild(document.createTextNode(instructor));
    grid.appendChild(div);

    for (y of arr){
        div = document.createElement('div');
        var stringCourse = y.course
        var stringDay = "   "+y.days
        var stringTime ="   "+y.times;
        div.className = "col text-center bg-dark";
        div.appendChild(document.createTextNode("Name: "))
        div.appendChild(document.createTextNode(stringCourse))
        div.appendChild(document.createTextNode(" Day: "))
        div.appendChild(document.createTextNode(stringDay))
        div.appendChild(document.createTextNode(" Time: "))
        div.appendChild(document.createTextNode(stringTime))
        grid.appendChild(div);
        grid.classList.add("border");
        grid.classList.add("p-0");
    }
}

function classSort(arr) {
    arr.sort(function (a,b) {
        console.log(a,b)
        return 0;
    });
    return arr;
};