
import "./global.css";
import styles from './App.module.css';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/elencio.png',
      name: 'Elencio Zivane',
      role: 'Software Developer',
    },
    content: [
       {type: 'paragraph', content: 'Fala galeraa π'},
       {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
       {type: 'link', content: ' πjane.design/doctorcare'},
    ], 
     publishedAt: new Date('2022-03-06 17:00:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gervasioartur.png',
      name: 'Gervasio Artur',
      role: 'Fullstack Developer',
    },
    content: [
       {type: 'paragraph', content: 'Fala galeraa π'},
       {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
       {type: 'link', content: ' πjane.design/doctorcare'},
    ], 
     publishedAt: new Date('2023-03-06 17:44:30'),
  },
];



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)

          })}
        </main>
      </div>
    </div>
  
  )
}

