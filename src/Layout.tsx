import { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Loading } from "./Loading";


const Layout = () => {
    return <Suspense fallback={<Loading />}>
        <Header />
        <div>
            <Outlet />
        </div>
    </Suspense>
}

export default Layout;