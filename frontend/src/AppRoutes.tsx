import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layouts/Layout.tsx";
import HomePage from "@/pages/HomePage.tsx";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element=
                {<Layout>
                    <HomePage/>
                </Layout>}
            />
            <Route path="/user-profile" element={<span>User Profile Page</span>} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRoutes;