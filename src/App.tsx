import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import loadable from '@loadable/component';
import Courses from "./Courses";
import CoursesIndex from "./CourseIndex";
import NoMatch from "./NoMatch";
import Layout from "./Layout";

// import Course from "./Course";
// import Home from "./Home";

// const Course = lazy(() => import('./Course'));
// const Home = lazy(() => import('./Home'));

/**
 * loadable不会出现重复渲染的问题，但不是react官方的
 * 可能造成数据不一致
 */
const Course = loadable(() => import('./Course'));
const Home = loadable(() => import('./Home'));

/**
 * Course和Home路由刷新会加载两次Header
 * 但如果先访问的NoMatch，切其它两个就不会多次render
 * 所以注意：进入的主路由，不是lazy的就还好
 */

let routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: "/courses/:id", element: <Course /> },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default function App() {
  /**
    * 如果路由写在App里面，会导致切换路由时，MainLayout组件会多次render
    */
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);

  return (
    <div>
      <h1>Route Objects Example</h1>

      {element}
    </div>
  );
}





