const axios = require('axios')
const cheerio = require ('cheerio')
const fs = require ('fs')

let url = "https://aps4.missouriwestern.edu/schedule/default.asp?tck=202210"
let subjects = [];
let departments = [];

axios.get(url)
.then(resp => {
    const html = resp.data;
    //console.log(html);
    const $ = cheerio.load(html);
    getSubject($);
    getDepartment($);

})
.catch(err => console.log("Error: ", err))

function getSubject($) {
    const select = $('#subject');
    select.children().each((i, e)=>{
        //console.log(i, '--', $(e).attr('value')+'..'+$(e.text))
        let value = $(e).attr('value');
        let text = $(e).text();
        //console.log(value, text);
        let subject = {};
        subject.value = value;
        subject.text = text;
        //console.log(subject);
        subjects.push(subject);
    })
    fs.writeFile('./subjects.json', JSON.stringify(subjects), err=>{
        if(err){
            console.log("Error Writing File", err)
        }else{
            console.log("subjects.json was created")
        }
    })
}
function getDepartment($) {
    const select = $('#department');
    select.children().each((i, e)=>{
        //console.log(i, '--', $(e).attr('value')+'..'+$(e.text))
        let value = $(e).attr('value');
        let text = $(e).text();
        //console.log(value, text);
        let department = {};
        department.value = value;
        department.text = text;
        //console.log(department);
        departments.push(department);
        })
        fs.writeFile('./departments.json', JSON.stringify(departments), err=>{
            if(err){
                console.log("Error Writing File", err)
            }else{
                console.log("deparments.json was created")
            }
        })
    }
