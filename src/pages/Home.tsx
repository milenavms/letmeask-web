import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../componentes/Button'

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie uma sala com o google
                    </button>
                    <div className="separator">
                        Ou entre em uma sala
                    </div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}