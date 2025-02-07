import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "@/layouts/Layout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";
// import ProtectedRoute from "@/auth/ProtectedRoute.tsx";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element=
                {<Layout showHero>
                    <HomePage/>
                </Layout>}
            />
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            {/*<Route element={<ProtectedRoute/>}>*/}
            {/*    <Route path="/user-profile" element=*/}
            {/*        {*/}
            {/*            <Layout showHero={false}>*/}
            {/*                <UserProfilePage />*/}
            {/*            </Layout>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</Route>*/}

            <Route path="/user-profile" element=
                {
                    <Layout showHero={false}>
                        <UserProfilePage />
                    </Layout>
                }
            />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRoutes;