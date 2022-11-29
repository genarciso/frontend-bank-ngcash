import { Navigate, Route, Routes } from "react-router-dom"
import { RequireAuth } from "./components/RequireAuth"
import { Dashboard } from "./pages/Dashboard"
import { FormUser } from "./pages/FormUser"
import { Login } from "./pages/Login"

const RoutesPath = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/user/new" element={<FormUser />}/>
            <Route path="/dashboard" element={
                // <RequireAuth>
                    <Dashboard />
                // </RequireAuth>
                } />
            <Route path="/" element={
                <Navigate to="/dashboard" />
                } />
            <Route path="*" element={
                <Navigate to="/dashboard" />
                } />
        </Routes>
    )
}

export { RoutesPath }