import { useNavigate } from "react-router-dom";
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

export default function Company() {
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
  const navigate = useNavigate();
  return (
    <div>
      {/* alert */}

      <Box
        sx={{ width: "12%", position: "absolute", right: "20px", top: "100px" }}
      >
        <Collapse in={open}>
          <Alert severity="success">Company Page</Alert>
        </Collapse>
      </Box>

      {/* 1 */}

      <section className="box py-24 ">
        <div className="flex justify-between">
          <div className="w-7 h-7 bg-[#FFD3AF]"></div>
          <div>
            <img src="s4img.svg" alt="" />
          </div>
        </div>
        <div className="mt-6 mb-16">
          <h2 className="font-medium text-[14px] tracking-[3px] uppercase">
            Company
          </h2>
          <h2 className="font-semibold text-[48px]/[58px] w-166 my-5">
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="text-[#232536] text-[16px]/[24px] w-180">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.{" "}
          </p>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="items-end absolute right-0">
            <div className="flex w-87">
              <div className="bg-[#444CFC] w-[20%] h-6"></div>
              <div className="bg-[#FFD3AF] w-[55%] h-6"></div>
              <div className="bg-[#FFA155] w-[25%] h-6"></div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <img src="/s1img.svg" alt="" />
            <img src="/s1img2.svg" alt="" />
            <img src="/s1img3.svg" alt="" />
          </div>
        </div>
      </section>

      {/* 2 */}

      <section className="box flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="w-4 h-4 bg-[#666DFF]"></div>
          <p className="font-semibold text-[#232536]">Our Story 👇 </p>
          <h2 className="font-semibold text-[36px]/[56px] w-138 text-[#232536]">
            From Startups to Titans of Industry
          </h2>
          <p className="text-[16px]/[24px] w-138 text-[#232536]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic unsatiable saw his giving Remain expense of gay produce
            excited perceived do an a china mean its so ye when in explained
            Hearts am next over match mr partiality not shoud latter thus as out
            no passed forming middleton exercise up
          </p>
        </div>
        <div className="w-156 py-15 px-27 bg-[#FFD3AF91]">
          <div className="flex gap-15">
            <div>
              <h2 className=" font-semibold text-[36px]/[58px] text-[#232536]">
                1560+
              </h2>
              <div className="flex w-18 mt-2 mb-1">
                <div className="bg-[#444CFC] w-[20%] h-1.5"></div>
                <div className="bg-[#FFD3AF] w-[55%] h-1.5"></div>
                <div className="bg-[#FFA155] w-[25%] h-1.5"></div>
              </div>
              <p>Project Delivered</p>
            </div>
            <div>
              <h2 className=" font-semibold text-[36px]/[58px] text-[#232536]">
                100+
              </h2>
              <div className="flex w-18 mt-2 mb-1">
                <div className="bg-[#444CFC] w-[20%] h-1.5"></div>
                <div className="bg-[#FFD3AF] w-[55%] h-1.5"></div>
                <div className="bg-[#FFA155] w-[25%] h-1.5"></div>
              </div>
              <p>Professional</p>
            </div>
          </div>
          <div className="flex gap-22 mt-7.5">
            <div>
              <h2 className=" font-semibold text-[36px]/[58px] text-[#232536]">
                950+
              </h2>
              <div className="flex w-18 mt-2 mb-1">
                <div className="bg-[#444CFC] w-[20%] h-1.5"></div>
                <div className="bg-[#FFD3AF] w-[55%] h-1.5"></div>
                <div className="bg-[#FFA155] w-[25%] h-1.5"></div>
              </div>
              <p>Happy Client</p>
            </div>
            <div>
              <h2 className=" font-semibold text-[36px]/[58px] text-[#232536]">
                10 yrs
              </h2>
              <div className="flex w-18 mt-2 mb-1">
                <div className="bg-[#444CFC] w-[20%] h-1.5"></div>
                <div className="bg-[#FFD3AF] w-[55%] h-1.5"></div>
                <div className="bg-[#FFA155] w-[25%] h-1.5"></div>
              </div>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}

      <section className="box bg-[#FAFAFC] flex items-center justify-between px-25 !my-25">
        <img src="/hlogo1.svg" alt="" />
        <img src="/hlogo2.svg" alt="" />
        <img src="/hlogo3.svg" alt="" />
        <img src="/hlogo4.svg" alt="" />
        <img src="/hlogo5.svg" alt="" />
      </section>

      {/* 4 */}

      <section className="bg-[#ECF8F9] w-446 m-auto">
        <div className="box h-165 py-24 flex justify-between items-center">
          {/* left */}

          <div>
            <h3 className="font-medium text-[14px] tracking-[3px]">
              Our expertise
            </h3>
            <h2 className="font-semibold text-[48px]/[58px] text-[#232536] w-156 mt-4 mb-6">
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p className="text-[16px]/[24px] text-[#5D5F6D] w-156">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          {/* right */}

          <div>
            <div className="w-4 h-4 bg-[#444CFC]"></div>
            <div className="w-135 bg-white h-35 p-8 flex gap-3">
              <img src="/s2img.svg" alt="" className="w-12 h-12" />
              <div>
                <h2 className=" font-semibold text-[16px]">On Time Delivery</h2>
                <p className=" font-medium text-[14px] text-[#5D5F6D] w-75 mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-135 bg-white h-35 p-8 flex gap-3 my-3">
              <img src="/s2img2.svg" alt="" className="w-12 h-12" />
              <div>
                <h2 className=" font-semibold text-[16px]">On Time Delivery</h2>
                <p className=" font-medium text-[14px] text-[#5D5F6D] w-75 mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-135 bg-white h-35 p-8 flex gap-3">
              <img src="/s2img3.svg" alt="" className="w-12 h-12" />
              <div>
                <h2 className=" font-semibold text-[16px]">On Time Delivery</h2>
                <p className=" font-medium text-[14px] text-[#5D5F6D] w-75 mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex w-135">
              <div className="bg-[#444CFC] w-[20%] h-2"></div>
              <div className="bg-[#FFD3AF] w-[55%] h-2"></div>
              <div className="bg-[#FFA155] w-[25%] h-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 */}

      <section className="box py-25">
        <div className="flex flex-col gap-5 mb-16">
          <h2 className="font-medium text-[14px] tracking-[3px] uppercase">
            Our VISION
          </h2>
          <h2 className="font-semibold text-[36px]/[56px] w-176 text-[#232536]">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h2>
          <p className="text-[16px]/[24px] w-155 text-[#232536]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div>
          <img src="/s5main.svg" alt="" />
        </div>
      </section>

      {/* 6 */}

      <section className="box">
        <div>
          <h3 className="font-medium text-[14px] tracking-[3px]">
            MEET OUR TEAM
          </h3>
          <h2 className="font-semibold text-[48px]/[58px] text-[#232536] w-156 mt-4 mb-6">
            Teamwork is the only way we work
          </h2>
          <p className="text-[16px]/[24px] text-[#5D5F6D] w-156">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-16">
          <div className="relative">
            <img src="/per1.svg" alt="" className="imghover" />
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Javena Melo");
                window.localStorage.setItem("img", "/per1.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Javena Melo
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Hondamir Komilov");
                window.localStorage.setItem("img", "/per2.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Hondamir Komilov
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per2.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Omar Yazliye");
                window.localStorage.setItem("img", "/per3.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Omar Yazliye
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per3.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Ahmad Hilol");
                window.localStorage.setItem("img", "/per4.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Ahmad Hilol
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per4.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Johon Ali");
                window.localStorage.setItem("img", "/per5.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Johon Ali
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per5.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Alisher Aliyev");
                window.localStorage.setItem("img", "/per6.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Alisher Aliyev
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per6.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Islom Isaqov");
                window.localStorage.setItem("img", "/per7.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Islom Isaqov
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per7.svg" alt="" />
          </div>
          <div className="relative">
            <div
              className="hoverbox absolute bg-[#232536bd] w-full h-full top-0 p-12"
              onClick={() => {
                navigate("/team");
                window.localStorage.setItem("team", "Anvarmirzo Mir");
                window.localStorage.setItem("img", "/per2.svg");
              }}
            >
              <h2 className="text-white text-[24px] font-semibold mt-28">
                Anvarmirzo Mir
              </h2>
              <p className="font-medium text-[#ffffff58] text-[14px] mb-4 mt-2">
                Support Assist
              </p>
              <div className="flex gap-4 text-white">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <img className="imghover" src="/per2.svg" alt="" />
          </div>
        </div>
      </section>

      {/* 7 */}

      <section className="box flex pb-24">
        <div className="bg-[#666DFF] h-84 w-315 p-24 relative flex justify-between items-center">
          <img src="/s6img.svg" alt="1" className="absolute top-0 left-0" />
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

      {/* 8 */}

      <Footer />
    </div>
  );
}
