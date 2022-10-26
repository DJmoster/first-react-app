import React from "react";

import "./style.css";
import Card from "./card";
import img from "./images/istockphoto-1342152935-170667a.jpg";

const cardsList = [
    {"title": "Article 1", "img": img, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius ipsum. Donec vel ultricies magna. Aliquam pulvinar, nibh nec mollis vehicula, lectus leo posuere risus, a rhoncus enim elit sit amet orci. Suspendisse sagittis ex nec odio varius"},
    {"title": "Article 2", "img": img, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius ipsum. Donec vel ultricies magna. Aliquam pulvinar, nibh nec mollis vehicula, lectus leo posuere risus, a rhoncus enim elit sit amet orci. Suspendisse sagittis ex nec odio varius"},
    {"title": "Article 3", "img": img, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius ipsum. Donec vel ultricies magna. Aliquam pulvinar, nibh nec mollis vehicula, lectus leo posuere risus, a rhoncus enim elit sit amet orci. Suspendisse sagittis ex nec odio varius"},

]

function Cards() {
    return (
        <div class="cards-block">
            {
                cardsList.map((obj) => {
                    return (
                        <Card 
                            title={obj.title}
                            img={obj.img} 
                            description={obj.description}
                        />
                    );
                })
            }
        </div>
    );
}

export default Cards;