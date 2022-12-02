export var Variablesrecomd;
(function (Variablesrecomd) {
    Variablesrecomd["fotoperfil"] = "fotoperfil";
    Variablesrecomd["username"] = "username";
    Variablesrecomd["desc2"] = "desc2";
    Variablesrecomd["seguir"] = "seguir";
})(Variablesrecomd || (Variablesrecomd = {}));
class Recomend extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, fotoperfil: null, desc2: null, seguir: null };
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
