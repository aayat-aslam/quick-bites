import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Layout from "@/layouts/Layout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";
import {useAuth0} from "@auth0/auth0-react";
import ProtectedRoute from "@/auth/ProtectedRoute.tsx";
import LoadingScreen from "@/components/LoadingScreen.tsx";

const AppRoutes = ()=>{
    const { isLoading } = useAuth0();
    const location = useLocation(); // Get the current route
    // Define different loading icons & texts for each route
    const loadingConfigs = {
        "/": {
            text: "Preparing your delicious meal...",
            icons: ["🍽️", "🍔", "🍕", "🍛", "🍣"],
        },
        "/auth-callback": {
            text: "Authenticating your account...",
            icons: ["🔑", "🔒", "🆔", "🛡️", "✅"],
        },
        "/user-profile": {
            text: "Loading your profile...",
            icons: ["👤", "📝", "⚙️", "🏆", "🛡️"],
        },
        "default": {
            text: "Preparing your delicious meal...",
            icons: ["🍽️", "🍔", "🍕", "🍛", "🍣"],
        }
    };

    // Get the correct config based on the current route
    // @ts-ignore
    const { text, icons } = loadingConfigs[location.pathname] || loadingConfigs["default"];

    if (isLoading) {
        return <LoadingScreen loadingText={text} icons={icons} />;
    }
    return(
        <Routes>
            <Route path="/" element=
                {<Layout showHero>
                    <HomePage/>
                </Layout>}
            />
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/user-profile" element=
                    {
                        <Layout showHero={false}>
                            <UserProfilePage />
                        </Layout>
                    }
                />
            </Route>

            {/*<Route path="/user-profile" element=*/}
            {/*    {*/}
            {/*        <Layout showHero={false}>*/}
            {/*            <UserProfilePage />*/}
            {/*        </Layout>*/}
            {/*    }*/}
            {/*/>*/}
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRoutes;