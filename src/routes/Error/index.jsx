import { useNavigate } from "react-router-dom"

export default function Error(){

    const navegacao = useNavigate()
    const voltar = () => {
        return navegacao('/')
    }

    return(
        <>
            <h1> Error 404 - Página não encontrada!!!</h1>
            <button onClick={voltar}>Back to home</button>
        </>
    )
}