import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function BlogInner() {
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
          <Alert severity="success">BlogInner Page</Alert>
        </Collapse>
      </Box>

      {/* 1 */}
      <section className="box py-24">
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
          <h2 className="font-semibold text-[48px]/[58px] w-185 my-5">
            Breaking the code How did we build our Figma plugin
          </h2>
          <p className="text-[#232536] text-[16px]/[24px] w-180">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the greatest satisfaction for
            our clients
          </p>
          <div className="text-[#232536 flex gap-4 items-center mt-4">
            <img className="w-8 h-8 rounded-[50%]" src="/per2.svg" alt="" />{" "}
            <h2>Andrew Jonson</h2>
            <p className="text-[#232536aa]">Posted on 27th January 2021</p>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="box">
        <img src="/s5main.svg" alt="" />
      </section>

      {/* 3 */}

      <section className="box text-[#232536] py-24 flex flex-col items-center gap-4">
        <h2 className="w-211 text-[36px]/[54px] font-semibold">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p className="w-211">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>
        <p className="w-211">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p className="w-211">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p className="w-211">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </p>
        <h2 className="font-semibold text-[24px]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <ul className="">
          <li>
            Step 1: Download the plugin from Figma community, search Ghost
            UXWriter
          </li>
          <li>Step 2: Open the plugin on your artboard</li>
          <li>
            Step 3: Search for your copy or look through the different
            categories of the copies
          </li>
          <li>
            Step 4: Select the type of error you are looking for. You will get
            three different copies for each error
          </li>
          <li>Step 5: Tap on the cards to insert text in your frames</li>
          <li>
            And you are all geared up to make your UX copies more fun and
            exciting 😎
          </li>
        </ul>
        <h2 className="font-semibold text-[24px]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p className="w-211">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>
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
