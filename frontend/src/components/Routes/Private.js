import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Landing from "../../pages/home/Landing";
import Car from "../../pages/home/Car"
import Dashboard from "../../pages/Dashboard/Dashboard";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            console.log("bhghghghghhfhghg")

            const res = await axios.get("http://localhost:8000/api/v1/user");
            console.log(res)
            console.log("bhghghghghhfhghg")
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Dashboard /> :<Landing />;
}
