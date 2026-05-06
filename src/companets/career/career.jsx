import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function Career() {
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {/* alert */}

      <Box
        sx={{ width: "12%", position: "absolute", right: "20px", top: "100px" }}
      >
        <Collapse in={open}>
          <Alert severity="success">Career Page</Alert>
        </Collapse>
      </Box>

      {/* 1 */}

      <section className="box py-24 flex flex-col items-center">
        <div className="relative text-[#232536] w-full ">
          <p className="text-[14px] font-medium tracking-[3px] text-center ">
            CAREER AT FINSWEET
          </p>
          <img className="absolute right-0 top-0" src="/s4img.svg" alt="" />
        </div>
        <h2 className="text-[48px]/[56px] font-semibold text-[#232536] w-156 text-center my-6 ">
          We hired people who are Always Passionate about what they do
        </h2>
        <p className="text-[16px]/[24px] text-[#232536] w-156 text-center ">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          .
        </p>
        <img src="/carer.svg" alt="" className="my-15" />
        <h2 className="text-[18px] font-medium text-[#232536] text-center ">
          See Our open positions{" "}
        </h2>
      </section>

      {/* 2 */}

      <section className="box bg-[#ECF8F9] p-19.5 grid grid-cols-3 gap-8">
        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Full Stack Developer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            onClick={() =>
              window.localStorage.setItem("job", "Full Stack Developer")
            }
            className="font-medium text-[#5D5FEF]"
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Testing Engineer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Testing Engineer")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Hr Manager
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() => window.localStorage.setItem("job", "Hr Manager")}
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Product Designer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Product Designer")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Wordpress Developer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Wordpress Developer")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Jr. QA Tester
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() => window.localStorage.setItem("job", "Jr. QA Tester")}
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Sr. UX Designer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Sr. UX Designer")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Social Media Manager
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Social Media Manager")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="w-88 h-60 bg-white p-12">
          <h2 className="font-semibold text-[#232536] text-[16px]">
            Golang Developer
          </h2>
          <p className="w-44 text-[16px]/[24px] text-[#232536b5] mt-3 mb-9">
            Bengaluru · Full Time $10K - $18K · No equity
          </p>
          <Link
            to="/careerinner"
            className="font-medium text-[#5D5FEF]"
            onClick={() =>
              window.localStorage.setItem("job", "Golang Developer")
            }
          >
            Apply Now <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </section>

      {/* 3 */}

      <section className="box h-215 py-24">
        {/* top */}

        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-[14px] tracking-[3px]">
              Our Process
            </h3>
            <h2 className="font-semibold text-[48px]/[58px] text-[#232536] w-195 mt-4 mb-4">
              The process we are working With Our client Worldwide
            </h2>
            <p className="text-[#232536] w-160">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>
          <img src="/s4img.svg" alt="" className="h-7" />
        </div>

        {/* bottop */}

        {/* 1 */}

        <div className="flex mt-16 items-center justify-between">
          <div className="mt-2">
            <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
              <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
                01
              </h2>
              <div className="flex gap-4 -mt-3">
                <img src="/s4img1.svg" className="w-12 h-12" alt="" />
                <div>
                  <h2 className="font-semibold text-[16px]">Discover</h2>
                  <p className="text-[#23253660] mt-1.5">
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-100">
              <div className="bg-[#444CFC] w-[20%] h-2"></div>
              <div className="bg-[#FFD3AF] w-[55%] h-2"></div>
              <div className="bg-[#FFA155] w-[25%] h-2"></div>
            </div>
          </div>
          <h2 className="text-[#DADADD]">- - -</h2>
          <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
            <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
              02
            </h2>
            <div className="flex gap-4 -mt-3">
              <img src="/s4img2.svg" className="w-12 h-12" alt="" />
              <div>
                <h2 className="font-semibold text-[16px]">Designing</h2>
                <p className="text-[#23253660] mt-1.5">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#DADADD]">- - -</h2>
          <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
            <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
              03
            </h2>
            <div className="flex gap-4">
              <img src="/s4img3.svg" className="w-12 h-12" alt="" />
              <div className="-mt-3">
                <h2 className="font-semibold text-[16px]">Development</h2>
                <p className="text-[#23253660] mt-1.5">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 */}

        <div className="flex mt-16 items-center justify-between">
          <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
            <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
              04
            </h2>
            <div className="flex gap-4">
              <img src="/s4img4.svg" className="w-12 h-12" alt="" />
              <div className="-mt-3">
                <h2 className="font-semibold text-[16px]">Testing</h2>
                <p className="text-[#23253660] mt-1.5">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#DADADD]">- - -</h2>
          <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
            <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
              05
            </h2>
            <div className="flex gap-4 -mt-3">
              <img src="/s4img5.svg" className="w-12 h-12" alt="" />
              <div>
                <h2 className="font-semibold text-[16px]">Deployment</h2>
                <p className="text-[#23253660] mt-1.5">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#DADADD]">- - -</h2>
          <div className="-mt-2">
            <div className="flex w-100">
              <div className="bg-[#444CFC] w-[20%] h-2"></div>
              <div className="bg-[#FFD3AF] w-[55%] h-2"></div>
              <div className="bg-[#FFA155] w-[25%] h-2"></div>
            </div>
            <div className="w-100 h-41 border border-[#2325362B] px-4 flex flex-col">
              <h2 className="font-semibold text-[24px] text-[#23253620] self-end">
                06
              </h2>
              <div className="flex gap-4 -mt-3">
                <img src="/s4img6.svg" className="w-12 h-12" alt="" />
                <div>
                  <h2 className="font-semibold text-[16px]">Maintenance</h2>
                  <p className="text-[#23253660] mt-1.5">
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
