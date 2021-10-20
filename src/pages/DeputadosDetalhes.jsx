import React from 'react'
import { Container } from 'react-bootstrap'

const DeputadosDetalhes = (props) => {
    const [deputados, setdeputados] = useState({})
    const [despesas, setdespessss] = useState({})
    const [discursos, setdiscursos] = useState([])
    const [eventos, seteventos] = useState([])
    const [frentes, setfrentes] = useState([])
    const [ocupacoes, setocupacoes] = useState([])
    const [orgaos, setorgaos] = useState([])
    const [profissoes, setprofissoes] = useState([])

    useEffect(() => {

        const id = props.match.params.id

        apiCamara.get(`/deputados/${id}`).then(resultado => {
            setdeputados(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/despesas`).then(resultado => {
            setdespessss(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/discursos`).then(resultado => {
            setdiscursos(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/eventos`).then(resultado => {
            seteventos(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/frentes`).then(resultado => {
            setfrentes(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/ocupacoes`).then(resultado => {
            setocupacoes(resultado.data.dados);
        })

        apiCamara.get(`/deputados/${id}/orgaos`).then(resultado => {
            setorgaos(resultado.data.dados);
        })
        apiCamara.get(`/deputados/${id}/profissoes`).then(resultado => {
            setproficoes(resultado.data.dados);
        })
    }, [props])


    console.log(deputados)

    return (
        <Container>
            <h1>Página Deatalhes Deputados</h1>
            

        </Container>
    )
}

export default DeputadosDetalhes
