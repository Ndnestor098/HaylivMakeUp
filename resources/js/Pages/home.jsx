import { Head, Link } from '@inertiajs/react';
import Menu from '../Layouts/Menu';
import LandingBanner from '../Components/LandingBanner';

export default function Welcome({  }) {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='Pagina De Hayliv Make Up'/>
            </Head>
            
            <Menu />

            <LandingBanner />

            <section className="carousel">
                <div className="carousel__title">REAL RESULT</div>
                <div className="carousel__content">
                    <div className="carousel__item">
                        <h2>La Magia del Maquillaje: Transformación, Expresión y Empoderamiento</h2>
                        <p>
                            El maquillaje es mucho más que una simple herramienta estética; es una forma de arte, 
                            una declaración de identidad y, para muchos, un medio de empoderamiento personal. 
                            Desde los orígenes de la civilización, las personas han utilizado pigmentos naturales 
                            para realzar su belleza, contar historias y marcar su lugar en el mundo. Hoy en día, 
                            el maquillaje sigue siendo un puente entre la creatividad y la confianza
                        </p>
                    </div>
                    <div className="carousel__item">
                        <h2>El Maquillaje: Un Lenguaje Universal de Creatividad</h2>
                        <p>
                            El maquillaje es mucho más que una simple herramienta estética; es una forma de arte, 
                            una declaración de identidad y, para muchos, un medio de empoderamiento personal. 
                            Desde los orígenes de la civilización, las personas han utilizado pigmentos naturales 
                            para realzar su belleza, contar historias y marcar su lugar en el mundo. Hoy en día, 
                            el maquillaje sigue siendo un puente entre la creatividad y la confianza
                        </p>
                    </div>
                    <div className="carousel__item">
                        <h2>Maquillaje: Historia, Cultura y Revolución</h2>
                        <p>
                            El maquillaje es mucho más que una simple herramienta estética; es una forma de arte, 
                            una declaración de identidad y, para muchos, un medio de empoderamiento personal. 
                            Desde los orígenes de la civilización, las personas han utilizado pigmentos naturales 
                            para realzar su belleza, contar historias y marcar su lugar en el mundo. Hoy en día, 
                            el maquillaje sigue siendo un puente entre la creatividad y la confianza
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
