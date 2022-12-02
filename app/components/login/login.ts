import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement {
    
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
            queryUser({email,password}).then(value => {
                if(value) {
                    const event: CustomEvent = new CustomEvent("login-success", {
                        composed: true
                    });

                    console.log(this);
                    
                    this.dispatchEvent(event);

                } else {
                    alert("Datos incorrectos");
                }
            });
        });

        const irAlRegistro = this.shadowRoot?.querySelector('button');
        irAlRegistro?.addEventListener('click', () => {
            const event: CustomEvent = new CustomEvent('ir-al-registro', {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/formulario/stylesLogin.css">
                <section class="Rect1">
                    <img id="logo" src="./assets/logoIG.png"/>

                    <my-formulario></my-formulario>

                </section>

                <section>
                    <h1 id="pregunta">¿No tienes una cuenta?</h1>
                    <button id="registro" type="submit">Regístrate</button>
                </section>

                <img id="logininterfaces" src="./assets/login.png"/>            
                <img id="appsabajo" src="./assets/appsabajo.png"/>            
            `;
        }
    }
}

customElements.define("my-login", Login);
