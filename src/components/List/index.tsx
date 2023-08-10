import Item from './Item'
import styles from './List.module.scss'
import { ITarefa } from '../../types/tarefa'

interface ListProps {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function List( { tarefas, selecionaTarefa } : ListProps ) {

  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item) => (
              <Item 
                {...item}
                key={item.id}
                selecionaTarefa={selecionaTarefa}
              />
            ))}
        </ul>
    </aside>
  )
}
