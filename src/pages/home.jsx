import Header from "../components/Header";
import Main from "../components/Main";

const home = (props) => {
  return(
    <>
    <Header/>
    <Main data={props.data}/>
    </>
  )
}

export default home;