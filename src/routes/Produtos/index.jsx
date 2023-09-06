export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to={'/editar/produtos/${prod.id}'}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}