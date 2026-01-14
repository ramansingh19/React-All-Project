import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import User from "./User/User";
import Github, { githubuserInfo } from "./Github/Github";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubuserInfo} />
    </Route>
  )
);

export default function RouterProject() {
  return (
    <div className="h-[80vh] overflow-auto border border-gray-700 rounded-xl">
      <RouterProvider router={router} />
    </div>
  );
}
