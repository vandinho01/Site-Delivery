import "../App.css";
function Cardapio(){
    return(
        <section id="cardapio" className="cardapio">
            <h2>Nosso Cardápio</h2>
            <p>Escolha seu favorito e peça pelo Whatssapp</p>

            <ul className="menu-grid">
                <li>
                    <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                    <span className="badge">Mais vendido</span>
                    <h3>Burguer Clássico</h3>
                    <p>Pão Brioche, 180g de carne, queijo cheddar, alface, tomate e molho especial</p>
                    <strong>R$ 29,90</strong>
                    <a href="" className="btn">Pedir agora</a>
                </li>
                <li>
                    <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                    <span className="badge">Novidade</span>
                    <h3>Burguer Clássico</h3>
                    <p>Pão Brioche, 180g de carne, queijo cheddar, alface, tomate e molho especial</p>
                    <strong>R$ 29,90</strong>
                    <a href="" className="btn">Pedir agora</a>
                </li>

                <li>
                    <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                    <h3>Burguer Clássico</h3>
                    <p>Pão Brioche, 180g de carne, queijo cheddar, alface, tomate e molho especial</p>
                    <strong>R$ 29,90</strong>
                    <a href="" className="btn">Pedir agora</a>
                </li>

                
            </ul>

        </section>

    
    )
}

export default Cardapio