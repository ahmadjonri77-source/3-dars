import Company from "./companets/company/company";
import Home from "./companets/Home/Home";
import Logo from "./companets/images/Logo.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  useNavigate,
} from "react-router-dom";
import Team from "./companets/team/team";
import Career from "./companets/career/career";
import Inner from "./companets/careerinner/inner";
import Details from "./companets/innerchild/details";
import Requirements from "./companets/innerchild/requirements";
import Responsibilities from "./companets/innerchild/responsibilities";
import Blog from "./companets/blog/blog";
import BlogInner from "./companets/bloginner/bloginner";
import Policy from "./companets/policy/policy";
import { useEffect } from "react";

function Nav() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
      <header className="bg-[#232536]">
        <nav>
          <div className="box border-red-300 h-20 py-7 flex items-center justify-between">
            <img src={Logo} alt="" />
            <ul className="flex h-full text-[#FFFFFF60] text-[16px] font-medium gap-8">
              <li>
                <NavLink className="h-20" to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/company">Company</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/bloginner" element={<BlogInner />} />
          <Route path="/careerinner" element={<Inner />}>
            <Route path="/careerinner/details" element={<Details />} />
            <Route
              path="/careerinner/requirements"
              element={<Requirements />}
            />
            <Route
              path="/careerinner/responsibilities"
              element={<Responsibilities />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
