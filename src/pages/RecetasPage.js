import React from "react";
import "../styles/components/pages/RecetasPage.css";
const RecetasPage = (props) => {
    return (
        <section className="holder">
        <div className="historia">
            <h2>RECETAS DE COMIDA VENEZOLANA</h2>
            <p>La comida venezolana se ha ido popularizando poco a poco más allá de su país de origen. Es común hoy en
                día conseguir restaurantes donde comer arepas en muchas ciudades latinoamericanas, en
                Estados Unidos, o incluso en Europa. La deliciosa gastronomía de Venezuela tiene influencia directa de
                la cocina de sus pobladores indígenas
                originarios más los sabores, técnicas e ingredientes traídos de europa luego de la conquista. El
                resultado es delicioso.</p>
        </div>
        <div class="Menu">
            <h2>Menu</h2>
            <div className="tipos">

                <div className="tipo">
                    <img src="images/recetas/entrada.jpg" alt="entrada" />
                    <h5>Entrada</h5>
                    <p>Esta categoría de entradas y pasapalos ha ido variando mucho en los últimos tiempos. Aunque hay
                        algunos platillos que se mantienen y seguirán siendo unos clásicos, como los tequeños, en
                        Venezuela hemos incorporado algunas tendencias más del estilo fusión que dan como resultado la
                        popularidad de otras opciones como antipastos, mini cachapitas, mini arepitas rellenas, tempura
                        de vegetales, o brochetas variadas.</p>
                </div>
                <div className="tipo">
                    <img src="images/recetas/sopa.jpg" alt="sopa" />
                    <h5>Sopa</h5>
                    <p>En Venezuela existe una cantidad enorme de recetas de sopas, cremas, caldos y más! Desde las más
                        sencillas como una sopita de pollo para animarnos el cuerpo débil hasta un buen mondongo,
                        suficientemente complejo de preparar, resultan fundamentales en nuestra gastronomía. Muchas
                        veces las acompañamos con cazabe o pancitos tostados, las cremas resultan tan apetecibles,
                        especialmente cuando “llega pacheco”.</p>
                </div>
                <div className="tipo">
                    <img src="images/recetas/principal.jpg" alt="principal" />
                    <h5>Principal</h5>
                    <p>Cada región de este hermoso país se identifica por sus costumbres y expresiones propias, entre
                        las cuales destaca la expresión culinaria, como parte de la cultura, del diario vivir, platos
                        diversos y originales, varían según la situación geográfica de cada región, y según las forma de
                        vida de sus habitantes. Aquí te ofrecemos una lista de platos prácticos y variados para que
                        disfrutes de la gastronomía venezolana.

                    </p>
                </div>
                <div className="tipo">
                    <img src="images/recetas/reposteria.jpg" alt="reposteria" />
                    <h5>reposteria</h5>
                    <p>En la cocina venezolana existe una gran variedad de postres, algunos de origen aborigen como el
                        majarete y los dulces a base de papelón. Entre los dulces caseros de la época de la colonia
                        destacan: la Torta de Jojoto, la de Pan, la de Plátano, así como flanes y quesillos de piña,
                        guayaba, naranja y coco. Otra variedad son los dulces en almíbar, con su máxima expresión en el
                        famoso Dulce de Lechosa.</p>
                </div>
                <div className="tipo">
                    <img src="images/recetas/bebida.jpg" alt="bebida" />
                    <h5>Bebida</h5>
                    <p>Las bebidas tradicionales en Venezuela son muy variadas según los ingredientes utilizados. Son
                        populares las chichas (a base de arroz o maíz), los caratos y jugos de frutas, las merengadas
                        que llevan leche, las refrescantes hechas con papelón y por supuestos los licores que van desde
                        cacao, café, y hasta frutas como parchita y fresa entre los artesanales más conocidos.
                        Dependiendo de la región y el clima hay bebidas preferidas.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default RecetasPage;