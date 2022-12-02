export var Post;
(function (Post) {
    Post["username"] = "username";
    Post["fotoperfil"] = "fotoperfil";
    Post["post"] = "post";
    Post["desc"] = "desc";
    Post["fecha"] = "fecha";
    Post["comments"] = "comments";
})(Post || (Post = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, fotoperfil: null, post: null, desc: null, fecha: null, comments: null };
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
