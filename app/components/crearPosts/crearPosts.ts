import db from "../../services/db.js";
export class Formpost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {       
        this.mount();
        }
    mount(){
        this.render();
        this.addListeners();
    }
    addListeners() {
        const form = this.shadowRoot.querySelector('form')
        form.addEventListener("submit", (evento)=> {
            evento.preventDefault();
            const user = evento.target.elements[0].value
            const imagen = evento.target.elements[1].value
            const comment = evento.target.elements[2].value
            console.log({user,imagen,comment});
            db.addPost({user,imagen,comment});
         })
    }
    render() {
        if (!this.shadowRoot) return
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/crearPosts/stylesCP.css">
        <form class = 'Rect2'>
        <p id = 'titulo'> Crea tu post <p>
        <input id="username" type="text" placeholder="Usuario">
                <input id="post" type="text" placeholder="Link de tu post">
                <input id="comment" type="text" placeholder="comentario">
        <button id="crear" type="submit">Crear</button>
        </form>
           
        `
        }
}

customElements.define("form-post", Formpost);
