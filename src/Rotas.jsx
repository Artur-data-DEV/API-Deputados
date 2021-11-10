import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Blocos from './pages/Blocos';
import Deputados from './pages/Deputados';
import DeputadosDetalhes from './pages/DeputadosDetalhes';
import Eventos from './pages/Eventos';
import Frentes from './pages/Frentes';
import Legislaturas from './pages/Legislaturas';
import Orgãos from './pages/Orgãos';
import PaginaInicial from './pages/PaginaInicial';
import Partidos from './pages/Partidos';
import Proposições from './pages/Proposições';
import Referências from './pages/Referências';
import Votações from './pages/Votações';


const Rotas = () => {
    return (
        <Switch>

            <Route exact path="/" component={PaginaInicial}/>
            <Route exact path="/deputados" component={Deputados}/>
            <Route exact path="/deputados/:id" component={DeputadosDetalhes}/>
            <Route exact path="/legislaturas" component={Legislaturas}/>
            <Route exact path="/blocos" component={Blocos}/>
            <Route exact path="/eventos" component={Eventos}/>
            <Route exact path="/frentes" component={Frentes}/>
            <Route exact path="/orgaos" component={Orgãos}/>
            <Route exact path="/partidos" component={Partidos}/>
            <Route exact path="/proposicoes" component={Proposições}/>
            <Route exact path="/referencias" component={Referências}/>
            <Route exact path="/votacoes" component={Votações}/>

         </Switch>
      
    )
}

export default Rotas