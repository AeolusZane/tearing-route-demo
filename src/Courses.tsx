import { memo } from "react";
import { Outlet } from "react-router-dom";

const Courses = memo(() => {
    return (
        <div>
            <h2>Courses</h2>
            <Outlet />
        </div>
    );
});

export default Courses;