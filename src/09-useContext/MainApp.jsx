import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from './';
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                {/* Renderisa el componente indicado */}
                {/* <Route path="/*" element={ <LoginPage /> } /> */}
                {/* Redirecciona al path indicado */}
                <Route path="/*" element={ <Navigate to="/about" /> } />
            </Routes>
        </UserProvider>
    )
}
