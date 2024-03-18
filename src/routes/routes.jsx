import Feed from '../pages/Feed';
import Main from '../layout/Main';
import SinglePost from '../pages/SinglePost';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "/posts/:id",
        element: <SinglePost />
      }
    ]
  },
]);

export default router