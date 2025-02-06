import React from "react";


export default function Footer() {
    return(
        <footer>
            <section className="footer">
                <div className="footer_logo_info">
                    <div className="footer_brand">
                        <h1>Hayliv Makeup <br /> Studio</h1>
                    </div>

                    <div className="footer_contact">
                        <span className="footer_address">Dirección: Montemarano, AV, Italia</span>
                        <span className="footer_phone">
                            Número TEL: <a href="tel:333-333-3333">333-333-3333</a>  
                        </span>
                        <span className="footer_email">
                            Email: <a href="mailto:haylivmakeup@gmail.com">haylivmakeup@gmail.com</a>
                        </span>
                    </div>
                </div>


                <div className="footer_social">
                    <div className="footer_social_title">
                        <h3>Redes Sociales</h3>
                    </div>
                    <div className="footer_social_links">
                        <a className="footer_social_link" href="#" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/15047/15047435.png " alt="" />
                            <span>Facebook</span>
                        </a>
                        <a className="footer_social_link" href="#" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="" />
                            <span>Instagram</span>
                        </a>
                        <a className="footer_social_link" href="#" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="" />
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>

                <div className="footer_form">
                    <div className="footer_form_title">
                        <h3>Formulario</h3>
                    </div>
                    <form action="" className="footer_form_form">
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Email" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="footer_image">
                    <img src="https://cdn.pixabay.com/photo/2016/05/02/17/59/cosmetics-1367781_1280.jpg" alt="" />
                </div>
            </section>

            <section className="copyrigth">
                
            </section>
        </footer>
    )
}