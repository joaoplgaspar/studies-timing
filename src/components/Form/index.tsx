import { useState } from "react";
import Button from "../Button";
import styles from './Form.module.scss'
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";


interface FormProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[] | []>>
}

export default function Form( { setTarefas } : FormProps) {

  const [objetoEstudo, setObjetoEstudo] = useState({
    tarefa: '',
    tempo: '00:00:00'
  })

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setTarefas(tarefasAntigas => [...tarefasAntigas, 
      { 
        ...objetoEstudo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ])
    setObjetoEstudo({tarefa: '', tempo: '00:00:00'})
  }

  return (
    <form 
      className={styles.novaTarefa}
      onSubmit={event => adicionarTarefa(event)}
    >
        <div className={styles.inputContainer}>
            <label htmlFor="tarefa"></label>
            <input 
                type="text" 
                name="tarefa"
                value={objetoEstudo.tarefa}
                onChange={ evento => setObjetoEstudo({...objetoEstudo, tarefa: evento.target.value}) }
                id="tarefa"
                placeholder="o que você quer estudar?"
                required
            />
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="tempo"></label>
            <input 
                type="time"
                step="1"
                name="tempo"
                value={objetoEstudo.tempo}
                onChange={ evento => setObjetoEstudo({...objetoEstudo, tempo: evento.target.value}) }
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required 
            />
        </div>
        <Button type="submit"> Adicionar </Button>
    </form>
  )
}
