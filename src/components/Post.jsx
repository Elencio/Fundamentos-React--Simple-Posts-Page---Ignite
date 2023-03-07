import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {
     
  const [comments, setComments] = useState([
    'Post muito Nice!'
  ]);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentInvalid(){
       event.target.setCustomValidity('O comentario não pode ser vazio');
  }
   
  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }


  function handleCreateNewComment(){
      event.preventDefault();

      setComments([...comments, newCommentText]);
      setNewCommentText(''); 
  }

  function deleteComment(commentToDelete){
        const commentWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        });

        setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
         {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link'){
              return <p key={line.content}><a href="">{line.content}</a></p>
            }
        })}

       </div>
      
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        
           <strong>Deixe o seu feedback</strong>

           <textarea 
               name='comment'
               value={newCommentText}
               placeholder='Deixe o seu comentario '
               onChange={handleNewCommentChange}
               onInvalid={handleNewCommentInvalid}
               required
           />
              
          <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
          </footer>

        </form>

       <div className={styles.commetList}>
          {comments.map(comment => {
            return (
            <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
            />)
          })}
       </div>
    </article>
  
   );
}