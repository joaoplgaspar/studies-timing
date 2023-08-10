import { ITarefa } from '../../../types/tarefa'
import styles from './Item.module.scss'

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa } : ItemProps) {
  return (
    <li 
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}
    >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={styles.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}
