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

export default function Team() {
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
          <Alert severity="success">{window.localStorage.getItem("team")} Page</Alert>
        </Collapse>
      </Box>
      ;{/* 1 */}
      <section className="box flex flex-col items-center py-25 gap-3">
        <div>
          <img
            src={window.localStorage.getItem("img")}
            alt=""
            className="rounded-[50%]"
          />
        </div>
        <h2 className="font-semibold text-[#232536] text-[36px]">
          {window.localStorage.getItem("team")}
        </h2>
        <p className="text-[#232536a0] font-medium text-[14px]">CEO</p>
        <p className="text-[#232536a0] font-medium text-[14px]/[24px] w-110 text-center">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>
      </section>
      {/* 2 */}
      <section className="bg-[#ECF8F9] ">
        <div className="box h-145 py-24">
          <div className="w-4 h-4 bg-[#666DFF]"></div>
          <h2 className="font-semibold text-[#232536] text-[48px]">
            Read our latest blogs & news
          </h2>
          <div className="flex justify-between">
            <div className="flex">
              <img src="/s5img.svg" alt="" />
              <div className="w-82 bg-white p-8 flex flex-col justify-between">
                <p className="text-[#23253660] font-medium">Jan 19, 2021</p>
                <h2 className="text-[24px]/[36px] font-semibold text-[#232536]">
                  Today's best design trends for digital products
                </h2>
                <a
                  href=""
                  className="text-[#444CFC] flex items-center gap-4 text-[16px] font-medium"
                >
                  Read more
                  <i class="fa-solid fa-arrow-right-long text-black"></i>
                </a>
              </div>
            </div>
            <div className="flex">
              <img src="/s5img1.svg" alt="" />
              <div className="w-82 bg-white p-8 flex flex-col justify-between">
                <p className="text-[#23253660] font-medium">Jan 19, 2021</p>
                <h2 className="text-[24px]/[36px] font-semibold text-[#232536]">
                  A practical guide to building a brand strategy
                </h2>
                <a
                  href=""
                  className="text-[#444CFC] flex items-center gap-4 text-[16px] font-medium"
                >
                  Read more
                  <i class="fa-solid fa-arrow-right-long text-black"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <Footer />
    </>
  );
}
