export interface DataShape {
    username: string;
    comments: string;
    desc: string;
    post: string;
    fotoperfil: string;
    fecha: string;
  }

const DataPosts: DataShape[] = [
    {
        "username": "NarutoFan69",
        "comments" : "View all 5 comments",
        "desc" : "narutofan69",       
        "post": "./assets/Narutochikito.jpg",
        "fotoperfil" : "./assets/Narutochikito.jpg",
        "fecha" :"2 DAYS AGO"
    },
    
];
export default DataPosts;