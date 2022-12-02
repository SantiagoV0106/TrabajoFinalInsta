export enum Post {
    username = "username",
    fotoperfil = "fotoperfil",
    post = "post",
    desc = "desc",
    fecha = "fecha",
    comments = "comments"
}

class MyPost extends HTMLElement {

    username?: string;
    fotoperfil?: string;
    post?: string;
    desc?: string;
    fecha?: string;
    comments?: string;
    
    static get observedAttributes() {
        const variab: Record<Post, null> = { username: null, fotoperfil: null,  post: null, desc: null, fecha: null, comments: null};
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Post, oldValue: string, newValue: string) {
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
            <link rel="stylesheet" href="./components/post/stylesMyPosts.css">
            <section class="frame">
            <image class="mipost"src="${this.post}"></image>
            <image class="perfil"src="${this.fotoperfil}"></image>        
            <h1 class= "desc"> ${this.desc}</h1>
            <h1 class= "comments"> ${this.comments}</h1>
            <h1 class= "date"> ${this.fecha}</h1>
            <h1 class= "username"> ${this.username}</h1>        
            <img class="like"src="./assets/heart.png"/>
            <img class="Cicon" src="./assets/comment.png"/>
            <img class="share" src="./assets/share.png"/>
            <img class="save" src="./assets/save.png"/>
            <img class="parriba" src="./assets/scroll.png"/>        
            </section>        

        `;
        }
    }
}

customElements.define("my-post", MyPost);
export default MyPost;