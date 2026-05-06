import { Link, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function Blog() {
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
        sx={{ width: "10%", position: "absolute", right: "20px", top: "100px" }}
      >
        <Collapse in={open}>
          <Alert severity="success">Blog Page</Alert>
        </Collapse>
      </Box>

      {/* 1 */}

      <section className="box py-24 flex justify-between ">
        <div className="flex flex-col gap-5 ">
          <div className="w-6 h-6 bg-[#FFE0C7]"></div>
          <h2 className="tracking-[3px] text-[#232536] text-[14px] font-medium uppercase">
            TREnding
          </h2>
          <h2 className="font-semibold text-[48px] text-[#232536] w-156">
            Breaking the code How did we build our Figma plugin
          </h2>
          <p className="tetx-[#232536] text-[16px]/[24px] w-156">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the.
          </p>
          <Link
            to="/bloginner"
            className="text-[#444CFC] flex items-center gap-2"
          >
            Read More
            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
          <div className="text-[#232536 flex gap-4 items-center">
            <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />{" "}
            <h2>Andrew Jonson</h2>
            <p className="text-[#232536aa]">Posted on 27th January 2021</p>
          </div>
          <img className="w-156 h-98" src="/s5mini.svg" alt="" />
        </div>

        <div className="w-129 h-184 bg-[#FFE0C7] p-20 relative flex flex-col justify-between">
          <img src="/s4img.svg" className="absolute top-0 right-0" alt="" />
          <div>
            <h2 className="font-semibold text-[24px] text-[#232536]">
              Great design expectations prejudice in digital products in Next
              Year
            </h2>
            <div className="flex gap-2 items-center mt-3">
              <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
              <div>
                <p>Andrew Jonson</p>
                <p className="font-medium text-[14px] text-[#232536ba]">
                  Jan 19, 2021
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] text-[#232536]">
              Great design expectations prejudice in digital products in Next
              Year
            </h2>
            <div className="flex gap-2 items-center mt-3">
              <img className="w-8 h-8 rounded-[50%]" src="/per4.svg" alt="" />
              <div>
                <p>Andrew Jonson</p>
                <p className="font-medium text-[14px] text-[#232536ba]">
                  Jan 19, 2021
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-[24px] text-[#232536]">
              Great design expectations prejudice in digital products in Next
              Year
            </h2>
            <div className="flex gap-2 items-center mt-3">
              <img className="w-8 h-8 rounded-[50%]" src="/per3.svg" alt="" />
              <div>
                <p>Andrew Jonson</p>
                <p className="font-medium text-[14px] text-[#232536ba]">
                  Jan 19, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}

      <section className="box">
        <h2 className="font-semibold text-[48px] text-[#232536]">
          Read Recent Post
        </h2>
        <div className="grid grid-cols-2 my-15 gap-8">
          <div className="flex">
            <img src="/b1img1.svg" alt="" />
            <div className="p-8 bg-[#F9F9FF]">
              <h2 className="font-semibold text-[24px] text-[#232536] w-66">
                Today's best design trends for digital products
              </h2>
              <div className="flex gap-2 items-center mt-5">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src="/b1img2.svg" alt="" />
            <div className="p-8 bg-[#F9F9FF]">
              <h2 className="font-semibold text-[24px] text-[#232536] w-66">
                Today's best design trends for digital products
              </h2>
              <div className="flex gap-2 items-center mt-5">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src="/b1img3.svg" alt="" />
            <div className="p-8 bg-[#F9F9FF]">
              <h2 className="font-semibold text-[24px] text-[#232536] w-66">
                Today's best design trends for digital products
              </h2>
              <div className="flex gap-2 items-center mt-5">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src="/b1img4.svg" alt="" />
            <div className="p-8 bg-[#F9F9FF]">
              <h2 className="font-semibold text-[24px] text-[#232536] w-66">
                Today's best design trends for digital products
              </h2>
              <div className="flex gap-2 items-center mt-5">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}

      <section className="box py-24">
        <h2 className="font-semibold text-[48px] text-[#232536]">All posts </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bbb">
            <img src="/b2img1.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bbb">
            <img src="/b2img2.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bbb">
            <img src="/b2img3.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bbb">
            <img src="/b2img4.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bbb">
            <img src="/b2img5.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bbb">
            <img src="/b2img6.svg" alt="" />
            <div className="p-8">
              <h2 className="font-semibold text-[24px] text-[#232536] w-85">
                We aim to attain the greatest satisfaction for our clients{" "}
              </h2>
              <p className="text-[#232536] w-85 my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />
                <div>
                  <p>Andrew Jonson</p>
                  <p className="font-medium text-[14px] text-[#232536ba]">
                    Jan 19, 2021
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
