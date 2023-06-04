import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Landing from "../../pages/home/Landing";
import UserDashBoard from "../../pages/user/UserDashBoard";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("http://localhost:8000/api/v1/user");
            console.log(res)
            if (res.data.token) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <UserDashBoard /> :<Landing />;
}
