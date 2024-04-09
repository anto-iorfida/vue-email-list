// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            // array empty to fill
            mailGenerate:[],
            
        };
    },
    methods: {
        // function email generate api
        getGenerateEmailApi(){
                        // api generate mail 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // single email generate
                this.dataResponse = response.data.response,
                // push in array mailGenerate single email generate
                this.mailGenerate.push(this.dataResponse);
            });
        }
        
    },
    mounted(){
        for(i=0;i < 10; i++){
            // for ten times generate new email
            this.getGenerateEmailApi()
        }
    }
}).mount('#app');