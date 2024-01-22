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
        },
        lastIndex() {
            return this.destinations.length - 1;
        }
    },
    methods: {
        setCurrentIndex(location) {
            if (location === 'prev') {
                if (this.isFirstIndex) this.currentIndex = this.lastIndex;
                else this.currentIndex--;
            }
            else if (location === 'next') {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            }
            else {
                this.currentIndex = location;
            }
        }
    }
});

app.mount('#root');