import React from "react";
import { useAuth } from "../../context/auth";

const TestPage = () => {
    const [auth] = useAuth();
    return (
        <>
            <h1 className="pt-40">test file</h1>
            <p>{JSON.stringify(auth, null, 4)}</p>
        </>
    );
};
export default TestPage;