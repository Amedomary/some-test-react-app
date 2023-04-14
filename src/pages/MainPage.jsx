import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container">
      <h1>Главная страница</h1>
      <Link to='/chart'>Перейти на страницу графика</Link>
    </div>
  )
}

export default MainPage;