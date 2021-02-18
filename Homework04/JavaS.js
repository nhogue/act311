function showClasses(){
    courses.forEach( a => {
        var tablename=""
        switch(a.course.substring(0,3)){
            case "CSC" :
                tablename= "Csc"
                break;
            case "ACT" :
                tablename= "Act"
                break;
            case "MAT" :
                tablename= "Mat"
                break;
            case "PHY" :
                tablename= "Phy"
                break;
        }
        
        var table = document.querySelector("#"+tablename);
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1).innerHTML=a.course;
        var cell2 = row.insertCell(-1).innerHTML=a.crn;
        var cell3 = row.insertCell(-1).innerHTML=a.title;
        
        
        var dates = "Days: "+a["days"]+" Time: "+ a["times"]
        
        if(a["times"]=="-"){
            dates="Online"
        }
        var cell4 = row.insertCell(-1).innerHTML=dates;
        var cell5 = row.insertCell(-1).innerHTML=a.instructor;
        
        if(a["hours"]==0){
            row.classList.add("bg-warning");      
        }
        table.classList.remove("table-striped")
        table.classList.add("table-striped")
    })

}