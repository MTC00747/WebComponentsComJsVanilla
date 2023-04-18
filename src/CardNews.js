class CardNews extends HTMLElement {
    constructor() {

        super(); //Método Super do HTMLElement

        const shadow = this.attachShadow({ mode: "open" });// Tem como função deixar a shadow aberta a outros javascripts 
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    };
    //Método para construir elementos HTML
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card") //Setando Class = "card"

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left") //Setando Class = "card-left"

        const autor = document.createElement("span"); //Criando um elemento Span
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimo");

        const linkTitle = document.createElement("a");//criando um elemento a
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("url-Link")


        const newsContent = document.createElement("p"); //criando um elemento p 
        newsContent.textContent = this.getAttribute("content")


        //Referenciando as const
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRigth = document.createElement("div");
        cardRigth.setAttribute("class", "card-rigth") //Setando Class = "card-rigth"

        const image = document.createElement("img");
        image.src = this.getAttribute("img")
        cardRigth.appendChild(image);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);



        return componentRoot;
    };


    cardRigth() {

        return cardRigth;
    }

    //Método para estilizar Documento html
    styles() {
        const style = document.createElement("style");
        style.textContent = `

            .card {
                width: 80%;
                display : flex;
                flex-direction: row; 
                justify-content: space-between;
                height : 250px;
                -webkit-box-shadow: 15px -22px 32px -12px rgba(0,0,0,0.5);
                -moz-box-shadow: 15px -22px 32px -12px rgba(0,0,0,0.5);
                box-shadow: 15px -22px 32px -12px rgba(0,0,0,0.5);
                padding : 10px;
            }
            .card-rigth > img {
                    height : 100%;
            }

            .card-left {
                display: flex; 
                flex-direction : column;
                justify-content : center;
                padding-left: 10px;
            }
            .card-left > span {
                font-weight : 400;
            }
            .card-left > a{
                margin-top : 15px;
                font-size : 25px;
                color:black;
                text-decoration : none; 
                font-weight : bold;
            }
            .card-left > p {
                color : grey;
            }

        
        
        `


        return style;
    };

};

customElements.define('card-news', CardNews);