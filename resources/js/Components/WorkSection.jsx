import React from 'react';


export default function WorkSection() {
    return(
        <section className="work_section">
            <div className="work_intro">
                <div className="work_intro_text">
                    <h3>My work</h3>
                </div>
                <div className="work_intro_image">
                    <img src="https://cdn.pixabay.com/photo/2017/09/06/20/06/face-2722810_1280.jpg" alt="" />
                </div>
            </div>

            <div className="work_experiences">
                <div className="work_experience">
                    <div className="work_experience_image">
                        <img src="https://cdn.pixabay.com/photo/2014/11/16/00/09/woman-532914_960_720.jpg" alt="" />
                    </div>
                    <div className="work_experience_text">
                        <h6>Arte Místico – 2023</h6>
                        <p>
                            Un maquillaje inspirado en seres mitológicos, con tonos iridiscentes y 
                            detalles en dorado que resaltan la fantasía.
                        </p>
                    </div>
                </div>

                <div className="work_experience">
                    <div className="work_experience_image">
                        <img src="https://cdn.pixabay.com/photo/2015/01/09/11/11/woman-594116_960_720.jpg" alt="" />
                    </div>
                    <div className="work_experience_text">
                        <h6>Arte en el Rostro – 2021</h6>
                        <p>
                            Un diseño de maquillaje abstracto que combina pinceladas audaces y texturas
                            en 3D, evocando una obra de arte viva.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}