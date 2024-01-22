console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'Vue Slider',
    data() {
        return {
            destinations
        }
    }
});

app.mount('#root');