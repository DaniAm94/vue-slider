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
    // Dopo che l'app viene montata, lancia l'autoplay
    mounted() {
        this.startAutoplay()
    },
    // Funzioni
    methods: {

        /**
         * set a new current index value depending on the destination
         * @param {*} location it specifics the destination of the new current index: next element, previous element, another specific element 
         */
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
        /**
         * It makes the gallery's autoplay to start
         */
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.setCurrentIndex('next');
            }, 2000)
        },
        /**
         * It stops the gallery's autoplay
         */
        stopAutoplay() {
            clearInterval(this.autoplay);
        }
    }
});

app.mount('#root');