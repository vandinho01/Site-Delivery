import "../App.css";
function Home( ) {
    return(
        <section id="home" className="hero-wrapper">  
            <article className="hero">
                <div>
                    <h1>O melhor Hamburguer da Cidade</h1>
                    <p>Ingredientes frescos, receitas especiais e entrega rápida. Peça agora e receba em até 40 minutos! </p>
                    <nav className="hero-buttons">
                        <a id="cardapio" className="btn">Cardápio</a>
                        <a className="btn btn-outline">📱 Whatssapp</a>
                    </nav>
                    <ul className="hero-stats">
                        <li><strong>+500</strong> clientes felizes</li>
                        <li><strong>4.9</strong> avaliação ⭐</li>
                        <li><strong>40min</strong> ou seu dinheiro de volta</li>
                        
                    </ul>
                </div>
        <img alt="hamburguer" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </article>
        </section>
    )
}
export default Home