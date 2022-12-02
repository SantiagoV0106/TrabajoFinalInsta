class MyStory extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/historias/stylesHistorias.css">
            <section class = "barra">
            <image id = "story" src="./assets/Stories.png"/>

            
            
            </section>
            `;
        }
    }

}

customElements.define("my-story", MyStory);
export default MyStory;