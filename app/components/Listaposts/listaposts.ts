import "../Nuevospost/nuevosposts.js"

class Listaposts extends HTMLElement {
    posts = [];
    static get observedAttributes() {
        return ['posts']
    }
    attributeChangedCallback(propName, oldValue, newValue: string) {
        this.posts = JSON.parse(newValue)      
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
            

            const compts = this.posts.map((post)=>`
            <l1>
            <new-posts post='${JSON.stringify(post)}'></new-posts>
            
            </li>
            `)
            
            this.shadowRoot.innerHTML = `
            <ul>
            ${compts.join('')}
            </ul>
            `

        }      
       
    }
}

customElements.define('my-lista', Listaposts)
export default Listaposts