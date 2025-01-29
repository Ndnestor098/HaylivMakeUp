import React from "react"

export default function CardLayout(params) {
    return (
        <article className="card_layout">
            <div className="card_layout__image">
                <a href="#">
                    <img src="https://cdn.pixabay.com/photo/2020/05/31/07/45/beauty-5241620_960_720.jpg" alt="" />
                </a>
            </div>

            <div className="card_layout__content">
                    <h2 className="card_layout__content__title">La Magia del Maquillaje: Identidad y Expresión</h2>
                    <p className="card_layout__content__text">
                        El maquillaje es mucho más que una simple herramienta estética; es una forma de arte, 
                        una declaración de identidad y, para muchos, un medio de empoderamiento personal. 
                        Desde los orígenes de la civilización, las personas han utilizado pigmentos naturales 
                        para realzar su belleza, contar historias y marcar su lugar en el mundo. Hoy en día, 
                        el maquillaje sigue siendo un puente entre la creatividad y la confianza
                    </p>
                    <a href="#" className="btn btn--primary btn--small">Leer más</a>
              
            </div>
        </article>
    )
}