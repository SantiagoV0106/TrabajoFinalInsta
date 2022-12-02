class UpMenu extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/barraup/stylesMenu.css">      
<section>
            <div class="barra">
            <div class="barraacomode">
            <image class="logo" src="./assets/logoIG.png"/>
            <div class="nav-items">
            <image class="iconos" src="./assets/homeMenu.png"/>
            <image class="iconos" src="./assets/mensajesMenu.png"/>
            <image class="iconos" src="./assets/moreMenu.png"/>
            <image class="iconos" src="./assets/exploreMenu.png"/>
            <image class="iconos" src="./assets/heartMenu.png"/>
            <image class="icono" src="./assets/simguy.jpg"/>
            
            </div>
            </div>
            
            </div>
            
            </section>


        `;
        }

    }
}

customElements.define("barra-up", UpMenu);
export default UpMenu;