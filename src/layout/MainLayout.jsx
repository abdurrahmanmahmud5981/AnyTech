import { Outlet } from "react-router-dom"
import Navber from "../components/shared/Navber"

const MainLayout = () => {
  return (
    <>
    <header>
        <nav>
            <Navber></Navber>
        </nav>
    </header>
    <main>
    <Outlet></Outlet>
    </main>
    <footer></footer>
    </>
  )
}

export default MainLayout