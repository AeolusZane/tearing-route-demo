import { Link, useParams } from "react-router-dom";


function capitalizeString(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

function Course() {
    let { id } = useParams<"id">();

    return (
        <div>
            <h2>
                Welcome to the {id!.split("-").map(capitalizeString).join(" ")} course!
            </h2>

            <p>This is a great course. You're gonna love it!</p>
            <p>There are three thousands things in the world, but only three things i love. Sun, moon, and you</p>
            <p>Sun as morning, moon as night, and you are the only one I never say goodbye</p>
            <Link to="/courses">See all courses</Link>
        </div >
    );
}

export default Course;