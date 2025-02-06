import React from "react";


export default function Footer() {
    return(
        <>
            <footer>
                <section className="footer">
                    <div className="footer_logo_info">
                        <div className="footer_brand">
                            <a href={route('home')}>
                                <h1>Hayliv Makeup <br /> Studio</h1>
                            </a>
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

                    <div className="footer_social_menu">
                        <div style={{ width:"100%", maxWidth:"205px" }}>
                            <div className="footer_menu_title">
                                <h3>Menu</h3>
                            </div>
                            <div className="footer_menu_links">
                                <a href={route("home")}>Home</a>
                                <a href={route("home")}>About</a>
                                <a href={route("home")}>Services</a>
                                <a href={route("home")}>Works</a>
                            </div>
                        </div>

                        <div>
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
                    </div>

                    <div className="form">
                        <div className="form_title">
                            <h3>Formulario</h3>
                        </div>
                        <form action="" className="form_visit">
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" id="name" placeholder="Nombre" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="phone">Numero Telefonico</label>
                                <input type="tel" name="phone" id="phone" placeholder="Phone" />
                            </div>
                            <div>
                                <label htmlFor="date">Fecha de Visita</label>
                                <input type="date" name="date" id="date" />
                            </div>

                            <button className="btn btn--primary btn--small" type="submit">Enviar</button>
                        </form>
                    </div>

                    <div className="footer_image_container">
                        <div className="footer_image" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/05/02/17/59/cosmetics-1367781_1280.jpg')" }}>
                        </div>
                    </div>
                </section>                
            </footer>

            <section className="copyrigth">
                <p>&copy; 2024 Hayliv Makeup. All rights reserved.</p>
            </section>
        </>

    )
}