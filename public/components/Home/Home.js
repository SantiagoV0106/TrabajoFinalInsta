import DataPosts from "../../dataPosts.js";
import dataProfile from "../../dataProfile.js";
import db from "../../services/db.js";
import dataRecomendaciones from "../../datarmd.js";
import "../Listaposts/listaposts.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        db.leerPosts((postspintar) => this.render(postspintar));
    }
    render(postspintar) {
        const comptsProfile = dataProfile.map(({ username, fotoperfil, fullname, cambiar }) => `
        <my-profile
        username="${username}"
        fotoperfil="${fotoperfil}"
        fullname="${fullname}"
        cambiar="${cambiar}"
        ></my-profile>
        `);
        const comptsRecomendaciones = dataRecomendaciones.map(({ username, fotoperfil, desc2, seguir }) => `
        <my-recmd
        username="${username}"
        fotoperfil="${fotoperfil}"
        desc2="${desc2}"
        seguir="${seguir}"
        ></my-recmd>
        `);
        const comptsPosts = DataPosts.map(({ username, comments, desc, post, fotoperfil, fecha }) => `
        <my-post
        username="${username}"
        fotoperfil="${fotoperfil}"
        post="${post}"
        desc="${desc}"
        comments="${comments}"
        fecha="${fecha}"
        ></my-post>
        `);
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        
        <barra-up></barra-up>
        <link rel="stylesheet" href="./components/recomendaciones/stylesrecomnd.css">
            <section class="reco">
                <h3 id="Sugerencias">Sugerencias para ti</h3>
                <h3 id="verTodo">Ver Todo</h3>
            </section>

        <section>
        <my-story></my-story>
        
        ${comptsProfile.join("")}
        ${comptsRecomendaciones.join("")}
        ${comptsPosts.join("")}
        <my-lista posts='${JSON.stringify(postspintar)}'></my-lista>
        <form-post></form-post>
        </section>
        `;
    }
}
customElements.define("app-home", Home);
