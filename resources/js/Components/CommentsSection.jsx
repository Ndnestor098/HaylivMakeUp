import React from "react"

export default function CommentsSection() {
    return (
        <section class="comments_section">
            <div class="comments_header">
                <h3>Clientes Sastifechos</h3>
            </div>

            <div class="comments_list">
                <div class="comment">
                    <div class="comment_user">
                        <div class="comment_avatar">
                            <img src="https://cdn.pixabay.com/photo/2018/01/02/09/47/woman-3055841_1280.jpg" alt="person" />
                        </div>

                        <div class="comment_user_info">
                            <h6 class="comment_user_name">Paulina Perez</h6>
                            <p class="comment_rating">Estrellas</p>
                        </div>
                    </div>

                    <div class="comment_content">
                        <p>
                            Increíble trabajo. Me maquillaron para una sesión de fotos y el resultado 
                            fue espectacular. Los colores, la precisión y la duración del maquillaje 
                            fueron perfectos. Sin duda volveré a contratar este servicio.
                        </p>
                    </div>
                </div>

                <div class="comment">
                    <div class="comment_user">
                        <div class="comment_avatar">
                            <img src="https://cdn.pixabay.com/photo/2020/06/08/09/01/hair-5273705_960_720.jpg" alt="person" />
                        </div>

                        <div class="comment_user_info">
                            <h6 class="comment_user_name">Maria Alonzo</h6>
                            <p class="comment_rating">Estrellas</p>
                        </div>
                    </div>

                    <div class="comment_content">
                        <p>
                            Me hicieron un maquillaje artístico para una fiesta temática y quedé fascinada. 
                            Los detalles eran impresionantes y recibí muchos halagos. ¡Muy recomendado!
                        </p>
                    </div>
                </div>

                <div class="comment">
                    <div class="comment_user">
                        <div class="comment_avatar">
                            <img src="https://cdn.pixabay.com/photo/2019/10/14/16/28/woman-4549327_960_720.jpg" alt="person" />
                        </div>

                        <div class="comment_user_info">
                            <h6 class="comment_user_name">Rosmari Rodriguez</h6>
                            <p class="comment_rating">Estrellas</p>
                        </div>
                    </div>

                    <div class="comment_content">
                        <p>
                            El mejor maquillaje que me han hecho. Se adaptaron exactamente a lo que quería 
                            y el maquillaje duró toda la noche sin problemas. Profesionalismo y talento en 
                            cada detalle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}