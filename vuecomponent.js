Vue.component('list-items', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var listitems = new Vue({
    el: '#vue-component-1',
    data: {
        components: [
            { id: 0, text: 'component 1' },
            { id: 1, text: 'component 2' },
            { id: 2, text: 'component 2' },
        ]
    }
})
