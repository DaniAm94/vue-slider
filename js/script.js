console.log(Vue);

const { createApp } = Vue;
const app = createApp({
    name: 'Vue Slider',
    data() {
        return {

            // Array preso da data.js
            destinations,
            // Indica l'indice della pagina attiva
            currentIndex: 0,
            // Variabile che contiene l'autoplay
            autoplay: null
        }
    },

    // Variabili composte ricavate dai data
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
    mounted() {
        this.startAutoplay()
    },
    // Funzioni
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
        },
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.setCurrentIndex('next');
            }, 1000)
        },
        stopaAutoplay() {
            clearInterval(this.autoplay);
        }
    }
});

app.mount('#root');