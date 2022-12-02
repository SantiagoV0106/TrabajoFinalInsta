import "../Nuevospost/nuevosposts.js";
class Listaposts extends HTMLElement {
    constructor() {
        super();
        this.posts = [];
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['posts'];
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this.posts = JSON.parse(newValue);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            const compts = this.posts.map((post) => `
            <l1>
            <new-posts post='${JSON.stringify(post)}'></new-posts>
            
            </li>
            `);
            this.shadowRoot.innerHTML = `
            <ul>
            ${compts.join('')}
            </ul>
            `;
        }
    }
}
customElements.define('my-lista', Listaposts);
export default Listaposts;
