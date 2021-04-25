const app = Vue.createApp({
    data: function () {
        return {
            rawData: [],
            hideTable: true,
            courses: [],
            picked: "",
            departments: [],
            selectedD: "",
            subjects: [],
            selectedS: "",
        };
        },
        methods: {
            searchInput: function () {
                //console.log(this.selectedD, this.selectedS, this.picked);
                this.courses = this.rawData;
                //console.log(this.courses)
                this.courses = this.courses.filter( name => name.course.toLowerCase().includes(this.picked.toLowerCase()));
                this.courses = this.courses.filter( name => name.departmentName.toLowerCase().includes(this.selectedD.toLowerCase()));
                this.courses = this.courses.filter( name => name.subjectName.toLowerCase().includes(this.selectedS.toLowerCase()));
                console.log(this.courses);
            }
        },
        computed: {
            /*byCourse: function() {
                return this.courses.filter( name => name.course.includes(this.picked));
            },
            byDepartment: function() {
                return this.departments.filter( name => name.department.includes(this.selectedD));
            },
            bySubject: function() {
                return this.subjects.filter ( name => name.subject.includes(this.selectedS));                
            },*/

        },
        mounted() {
            fetch('https://raw.githubusercontent.com/nhogue/act311/main/classes.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //console.log(data);
                    this.rawData = data;
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                });
            fetch('https://raw.githubusercontent.com/nhogue/act311/main/departments.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                this.departments = data;
                return data;
            })
            .catch((err) => {
                console.log(err);
            });
            fetch('https://raw.githubusercontent.com/nhogue/act311/main/subjects.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //console.log(data);
                    this.subjects = data;
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
});
app.mount("#appArea");