const save ="";
const App = Vue.createApp({
    data() {
        return {
            todoes: [],
            newTodo: "",
        }
    },
    created() {
        this.todoes = JSON.parse(localStorage.getItem("todoes") || '[]')

     },
    methods: {
        saveTodo: function () {
            
            if (this.newTodo == "") {
                alert("please enter same task")
            } else {
              
                this.todoes.push(this.newTodo);
                localStorage.setItem("todoes", JSON.stringify(this.todoes));
                this.newTodo = "";
            }
        },
        removeTodo: function (index) {
            this.todoes.splice(index, 1);
            localStorage.setItem("todoes", JSON.stringify(this.todoes));


        },

    }
    

}
)

App.mount("#app")