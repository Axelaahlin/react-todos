import { Link } from 'react-router-dom'

const Post = (props) => {
  return(
    <div className="post">
      <Link to={`/post/${props.info.id}`} state={props.info}><h3>{props.info.title}</h3></Link>
    </div>
  )
}
export default Post;  