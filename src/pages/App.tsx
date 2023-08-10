import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import styles from './App.module.scss'
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefaSelecionada.id === tarefa.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }

        return tarefa
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
