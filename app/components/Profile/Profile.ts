export enum Variablesprofile {
    username = "username",
    fullname = "fullname",
    fotoperfil = "fotoperfil",
    cambiar = "cambiar"
}

class Profile extends HTMLElement {

    username?: string;
    fotoperfil?: string;
    fullname?: string;
    cambiar?: string;
    
    static get observedAttributes() {
        const variab: Record<Variablesprofile, null> = { username: null, fullname: null, fotoperfil:null, cambiar: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablesprofile, oldValue: string, newValue: string) {
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