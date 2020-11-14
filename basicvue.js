var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        productId: 53,
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// testing on console
// app3.seen = false

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'hung 1' },
            { text: 'hung 2' },
            { text: 'hung 2' },
        ]
    }
})

// testing on console
// app4.todos.push({ text: 'New item' })

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Active Event',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'New style of binding'
    }
})