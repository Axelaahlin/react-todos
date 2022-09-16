import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useLocation } from "react-router";

const Singelpost = () => {
  const {id} = useParams();

  // const location = useLocation();
  const [post, setPost] = useState(null)
  const [comment, setComment] = useState(null)

  async function getComments () {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/")
    let json = await response.json()
    setComment(json)
    
  }

  async function getPosts () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let json = await response.json()
    setPost(json)
  }

  useEffect(() => {
      getComments()
      getPosts()
  })

  return( 
    <main className="singelPostMain">
      <div className="singelpost">
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
        <div className="singelPostComments">
          <h3>Kommentarer</h3>
            {comment?.map((comment) => {
              return (
                <div className="comment">
                  <p>Namn: {comment.name}</p>
                  <p>Email: {comment.email}</p>
                  <p className="kommentar">{comment.body}</p>
                </div>
              )
            })}
        </div>
      </div>
     
    </main>
  )
}

export default Singelpost;