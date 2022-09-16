import Post from "./Post"
import { useParams } from "react-router"



const Main = (props) => {
const params = useParams();
  return( 
    <main>
    <h2>{params.id ? "Ditt valda inlägg" : "Alla inlägg"}</h2>
      <article className={params.id && "hidden"}>
        {props.data?.map((post) => {
          return ( 
            <Post info={post}/>
          )
        })}
      </article>
  </main>
)

}



export default Main; 