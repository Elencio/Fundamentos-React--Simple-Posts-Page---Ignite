import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({content}){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false}   src="https://github.com/edilsonrogerio.png" alt="" />
      <div className={styles.commentBox}>
         <div className={styles.commentContent}>

             <header>
                <div className={styles.authorAndTime}>
                   <strong>Elencio Zivane</strong>
                    <time title='11 de maio as 8:13h' dateTime="2022-05-11 08:13:30">Acerca de 1h atras</time>
                </div>
                <button title='Deletar Comentario' >
                   <Trash size={24}/>
                </button>
             </header>

              <p>{content}</p>
         </div>

         <footer>
             <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
             </button>
         </footer>
      </div>
    </div>
  )
}