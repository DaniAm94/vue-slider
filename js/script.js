console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'Vue Slider',
    data() {
        return {
            destinations,
            currentIndex: 0
        }
    },
    computed: {
        isLastIndex() {
            return this.currentIndex === this.destinations.length - 1;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        }
    }
});

app.mount('#root');