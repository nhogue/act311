
const app = Vue.createApp({
    data: function () {
        return {
            courses: [],
            picked: "ACT102",
        };
        },
        methods: {
        },
        computed: {
            byName: function() {
                return this.courses.filter( name => name.course.includes(this.picked));
            }
        },
        mounted() {
            fetch('https://raw.githubusercontent.com/nhogue/act311/main/CSMP.json')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    this.courses = data;
                    return data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
});
app.mount("#appArea");
