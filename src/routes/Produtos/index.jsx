import { Link } from 'react-router-dom'
import { listaProdutos } from '../../components/listaProdutos'

export default function Produtos(){

    // PASSANDO VALORES PELA URI

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