import { addUser } from "../../services/db.js";

export class Registro extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const form = this.shadowRoot?.querySelector("my-formulario");
        form?.addEventListener("formulario-fullfiled", (evt: CustomEvent) => {
            const email = evt.detail.email;
            const password = evt.detail.password;

            addUser({email,password});

            const event: CustomEvent = new CustomEvent("register-success",{
                composed: true
            })
            this.dispatchEvent(event); 
        })
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/formulario/stylesLogin.css">
            
            <section class="Rect1">
            <img id="logo" src="./assets/logoIG.png"/>
                <h1 id="registrarp">Regístrate<h1>
                <my-formulario></my-formulario> 
            </section>

            <img id="logininterfaces" src="./assets/login.png"/>
            <img id="telefonoLogin" src="./assets/telefonoLogin.png"/>
            <img id="appsabajo" src="./assets/appsabajo.png"/> 
        `;
        }
    }
}

customElements.define("my-registro", Registro);
