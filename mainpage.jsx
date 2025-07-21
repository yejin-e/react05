import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Main Page</div>
      <a href="/notice">go notice - a</a>
      <Link to={"/notice"}>go notice - link</Link>
      <button onClick={() => { navigate("/notice") }}>go notice - button</button>
    </div>
  )
}
export default MainPage;