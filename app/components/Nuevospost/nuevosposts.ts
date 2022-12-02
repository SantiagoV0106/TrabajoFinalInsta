class Nuevopost extends HTMLElement {
    post = {};
    static get observedAttributes() {
        return ['post'] 
    }
    attributeChangedCallback(propName, oldValue, newValue: string) {
        this.post = JSON.parse(newValue)
        }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `   
    <link rel="stylesheet" href="./components/Nuevospost/stylesnewposts.css">
    <section class="frame">
    <image class="mipost"src="${this.post.imagen}"></image>
    <image class="perfil"src="./assets/simguy.jpg"/>
    <h1 class= "comments"> ${this.post.comment}</h1>
    <h1 class= "username"> ${this.post.user}</h1>        
    <img class="like"src="./assets/heart.png"/>
    <img class="Cicon" src="./assets/comment.png"/>
    <img class="share" src="./assets/share.png"/>
    <img class="save" src="./assets/save.png"/>
    <img class="parriba" src="./assets/scroll.png"/>        
    </section> 
  ` }
    }
}

customElements.define('new-posts', Nuevopost)
export default Nuevopost