import { Link } from "react-router-dom";
// import { atom, useAtom } from 'jotai';
// const text = atom('hello world');


const Header = () => {
    // const [textValue] = useAtom(text);

    // console.log('text:', textValue);
    console.log('组件初始化🐱', Math.random());
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <h1>Header</h1>
        </div>
    );
}

export default Header;