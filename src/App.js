import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id:uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id:uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id:uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id:uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id:uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id:uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id:uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[0].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[0].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[0].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[0].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[1].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[1].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[1].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[1].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[2].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[2].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[2].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[2].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[3].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[3].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[3].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[3].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[4].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[4].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[4].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[4].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BRUNO BIGNARDI',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://github.com/brunodono.png',
      time: times[5].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'ARTUR PEREIRA',
      cargo: 'Engenheiro de Software na Amazon',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.18169-9/15181478_1176329839141954_7052225010216379390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=3bP91gPiAw0AX--TZM8&_nc_ht=scontent-dub4-1.xx&oh=00_AT_cKO9a_xUAx4Zdlz9-6_R74pWjj8zHdeEZrq_XcIcMLQ&oe=6350FF60',
      time: times[5].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'BEATRIZ PEREZ',
      cargo: 'UX Designer na Apple',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/172316004_4465416416805812_3793067169229186545_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mD1JTYfORDoAX9vVjZz&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT-BZC11FrKyugAMZARSrmAsBZi0g-UI-QfmKSFztM9GTQ&oe=634DECA6',
      time: times[5].nome
    },
    {
      id:uuidv4(),
      favorito: false,
      nome: 'GIULIA BIGNARDI',
      cargo: 'Psicologa da Meta',
      imagem: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/240590310_1041987846545915_6015555178653594338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=MOsRgYP_rUsAX8-mTQW&tn=i6P0WbLhnsz-hTV6&_nc_ht=scontent-dub4-1.xx&oh=00_AT9r8Ci2Wo2RYCoh0LJLFJKdUf47jOthd6nkfHRSGfnj6w&oe=632F43BA',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)


  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    
  };

  function mudarCorDoTime(cor, id) {
    setTimes(times.map((time) =>  {
      if(time.id === id) {
        time.cor = cor;
      }
      return time
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, { ...novoTime, id:uuidv4() } ])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador
    })
    )


  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
