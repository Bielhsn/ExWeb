import { Link } from 'react-router-dom'

export default function Menu(){

    //CRIANDO LINK DE NAVEGAÇÃO
    return(
        <nav className='menu'>
            <Link to='/'> Home </Link> {/* Componente passando a rota */}
            <span> | </span>
            <Link to='/produtos'>Produtos</Link> {/* Componente passando a rota */}
        </nav>
    )
}