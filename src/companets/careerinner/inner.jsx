import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

export default function Inner() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [open]);

  
  return (
    <>
        <Box sx={{ width: "12%", position:"absolute", right:"20px", top:"100px" }}>
      <Collapse in={open}>
        <Alert severity="success">
          Careerinner Page
        </Alert>
      </Collapse>
    </Box>
      {/*  */}
      <section className="box py-24 flex items-center justify-between px-24">
        <div className="flex flex-col justify-between h-65">
          <h2 className="tracking-[3px] text-[#232536] text-[14px] font-medium uppercase">
            CAREER AT Ether
          </h2>
          <h2 className="font-semibold text-[48px] text-[#232536]">
            {window.localStorage.getItem("job")}
          </h2>
          <p className="tetx-[#232536] text-[16px]/[24px] w-109">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>
          <button className="bg-[#444CFC] w-42 h-16 flex items-center gap-1 text-white justify-center">
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="w-129 h-81 bg-[#FFE0C7] p-20 relative flex flex-col justify-between">
          <img src="/s4img.svg" className="absolute top-0 right-0" alt="" />
          <h2 className="font-semibold text-[24px] text-[#232536]">
            Job Description
          </h2>
          <p>Remote, India , 4 to 5 Years Of Experience</p>
          <p>Department: Product Engineering</p>
          <p>Full Time 5 Position Available.</p>
        </div>
      </section>

      {/* 2 */}

      <section>
        <div className=" box py-10 bg-[#ECF8F9] flex justify-center gap-20 ">
          <NavLink
            className={({ isActive }) =>
              `font-semibold text-[24px] ${isActive ? "activelink" : ""}`
            }
            to="/careerinner/details"
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold text-[24px] ${isActive ? "activelink" : ""}`
            }
            to="/careerinner/requirements"
          >
            Requirements
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold text-[24px]  ${isActive ? "activelink" : ""}`
            }
            to="/careerinner/responsibilities"
          >
            Responsibilities
          </NavLink>
        </div>

        <div className="box">
          <hr className="text-[#E0F1F2] bg-[#E0F1F2] h-1" />
          <Outlet />
        </div>
      </section>

      {/* 3 */}

      <section className="box py-24">
        <h2 className="text-[36px] font-semibold text-[#232536]">Apply Now</h2>
        <div className="grid grid-cols-2 gap-8 w-full my-8">
          <div className="h-24 bg-[#F9F9FF] p-9 text-[#232536]">
            {" "}
            <h2>First Name</h2>
          </div>
          <div className="h-24 bg-[#F9F9FF] p-9 text-[#232536]">
            <h2>Last Name</h2>
          </div>
          <div className="h-24 bg-[#F9F9FF] p-9 text-[#232536]">
            <h2>Email Id</h2>
          </div>
          <div className="h-24 bg-[#F9F9FF] p-9 text-[#232536]">
            <h2>Mobile No</h2>
          </div>
          <div className="col-span-2 h-50 bg-[#F9F9FF] p-9 text-[#232536]">
            Why do you thing you are good fit for Ether?
          </div>
        </div>
        <button className="bg-[#444CFC] w-62 h-16 flex items-center gap-1 text-white justify-center">
          Submit Application <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </section>

      {/* 4 */}

      <section className="box py-24 flex">
        <div className="bg-[#666DFF] h-84 w-315 p-24 relative flex justify-between items-center">
          <img src="/s6img.svg" alt="" className="absolute top-0 left-0" />
          <div className="text-white">
            <h3 className="font-medium text-[14px] tracking-[3px]">
              NEWSLETTER
            </h3>
            <h2 className="font-semibold text-[36px]/[54px] w-122">
              Subscribe our News Letter to get Latest Updates.
            </h2>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Paresh@Pixeto.com"
            className="h-16 w-111 bg-white text-[#23253680] p-6"
          />
        </div>
        <div className=" h-84 w-5">
          <div className="bg-[#444CFC] h-[20%] w-5"></div>
          <div className="bg-[#FFD3AF] h-[55%] w-5"></div>
          <div className="bg-[#FFA155] h-[25%] w-5"></div>
        </div>
      </section>

      {/* 5 */}

      <Footer />
    </>
  );
}
