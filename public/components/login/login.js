import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("my-formulario");
        form === null || form === void 0 ? void 0 : form.addEventListener("formulario-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Datos incorrectos");
                }
            });
        });
        const irAlRegistro = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('button');
        irAlRegistro === null || irAlRegistro === void 0 ? void 0 : irAlRegistro.addEventListener('click', () => {
            const event = new CustomEvent('ir-al-registro', {
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
