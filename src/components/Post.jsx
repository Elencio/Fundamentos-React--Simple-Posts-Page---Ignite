import styles from './Post.module.css';

export function Post(){
   return (
    <article className={styles.post}>
      <header>
         <div className={styles.author}>
            <img className= {styles.avatar} src="https://github.com/elencio.png"/>
            <div className={styles.authorInfo}>
                <strong>Elencio Zivane</strong>
                <span>Fullstack Developer</span>
            </div>
         </div>

         <time title='11 de maio as 8:13h' dataTime="2022-05-11 08:13:30">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 

      <p>👉  {" "}<a href=""> jane.design/doctorcare</a></p>  

      <p>
        <a href=""> #novoprojeto</a>  {" "}
        <a href="">#nlw</a>   {" "}
        <a href=""> #rocketseat </a>
        </p>     
      </div>

      <form className={styles.commentForm}>
         <strong>Deixe o seu feedback </strong>

          <textarea 
            placeholder="Deixe o seu comentario"
          />
           <footer>
           <button type="submit">Publicar</button>
           </footer>
        
      </form>




    </article>
   )
}