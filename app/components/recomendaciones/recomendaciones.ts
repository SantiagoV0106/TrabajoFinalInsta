export enum Variablesrecomd {
    fotoperfil = "fotoperfil",
    username = "username",
    desc2 = "desc2",
    seguir = "seguir"
}

class Recomend extends HTMLElement {

    fotoperfil?: string;
    username?: string;
    desc2?: string;
    seguir?: string;
    
    static get observedAttributes() {
        const variab: Record<Variablesrecomd, null> = { username: null, fotoperfil: null, desc2: null, seguir: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablesrecomd, oldValue: string, newValue: string) {
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
            <link rel="stylesheet" href="./components/recomendaciones/stylesrecomnd.css">
                <section class="Recomendados">
                    <img id="fotoperfil" src="${this.fotoperfil}"/>
                    <h1 id="username2">${this.username}</h1>
                    <h2 id="userInfo">${this.desc2}</h2>
                    <h3 id="seguir">${this.seguir}</h3>
                </section>
            `;
        }
        
    }
}

customElements.define("my-recmd", Recomend);
export default Recomend;