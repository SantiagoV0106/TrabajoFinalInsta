export var Variablesprofile;
(function (Variablesprofile) {
    Variablesprofile["username"] = "username";
    Variablesprofile["fullname"] = "fullname";
    Variablesprofile["fotoperfil"] = "fotoperfil";
    Variablesprofile["cambiar"] = "cambiar";
})(Variablesprofile || (Variablesprofile = {}));
class Profile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, fullname: null, fotoperfil: null, cambiar: null };
        return Object.keys(variab);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Profile/stylesProfile.css">
                <section class="Profile">
                    <img id="fotoperfil" src="${this.fotoperfil}"/>
                    <h1 id="username">${this.username}</h1>
                    <p id="fullname">${this.fullname}</p>
                    <h2 id="cambiar">${this.cambiar}</h2>
                </section>
        `;
        }
    }
}
customElements.define("my-profile", Profile);
export default Profile;
