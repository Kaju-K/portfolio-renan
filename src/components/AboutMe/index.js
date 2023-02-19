import "./AboutMe.css"
import { Link } from "react-router-dom"

function AboutMe() {
    return (
        <>
        <section className="about-me">
            <div className="about-me-container">
                <img src="img/renan-avatar.png" alt="renan avatar" className="about-me__photo"></img>
                <div className="about-me-description english-description">
                    <h2 className="description-greetings">HI!</h2>
                    <h3 className="description-title">I'm a senior 2D Animator and Motion Designer with 8 years of professional experience.</h3>
                    <p className="description-text">I have already worked for animation studios like Boulder Media (Netflix TV series production), <a href="#top" className="description__link">Mighty Studios (BBC TV series)</a> and <a href="#top" className="description__link">MoonBow</a> (series of animated advertisements).
                    <br></br>
                    <br></br>

                    I also worked on projects like <a href="#top" className="description__link">Steam Community Awards for Valve</a>, one of the biggest video games developers, publishers and distributers in the world; and <a href="#top" className="description__link">Rocket League Esports social media animations</a>, a well aclaimed and award-winning video game.
                    <br></br>
                    <br></br>

                    My software specialities are mainly Toon Boom Harmony and Adobe Creative Suite (After Effects, Illustrator and Photoshop), as well as Blender (intermediate level) and Cinema 4D (intermediate level).
                    <br></br>
                    <br></br>

                    You can check my work <Link to="/" className="description__link">here</Link> or contact me <Link to="/contact" className="description__link">here</Link>. Hope you enjoy it!</p>
                </div>

                <hr className="description-division"></hr>

                <div className="about-me-description portuguese-description">
                    <h2 className="description-greetings">OLÁ!</h2>
                    <h3 className="description-title">Sou animador 2D sênior e Motion Designer com 8 anos de experiência profissional.</h3>
                    <p className="description-text">Já trabalhei para estúdios de animação como Boulder Media (produção de série de TV para Netflix), <a href="#top" className="description__link">Mighty Studios (série de TV da BBC)</a> e <a href="#top" className="description__link">MoonBow</a> (produção de anúncios animados).
                    <br></br>
                    <br></br>

                    Também trabalhei em projetos como <a href="#top" className="description__link">Steam Community Awards</a> para a Valve, uma das maiores desenvolvedoras, editoras e distribuidoras de videogames do mundo; e em animações de mídia social da <a href="#top" className="description__link">Rocket League Esports</a>, um videogame premiado e aclamado mundialmente.
                    <br></br>
                    <br></br>

                    Minhas especialidades de software são principalmente Toon Boom Harmony e Adobe Creative Suite (After Effects, Illustrator e Photoshop), bem como Blender (nível intermediário) e Cinema 4D (nível intermediário).
                    <br></br>
                    <br></br>

                    Você pode conferir o meu trabalho <Link to="/" className="description__link">aqui</Link> ou entrar em contato comigo <Link to="/contact" className="description__link">aqui</Link>. Espero que goste!</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMe
