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

export default function Policy() {


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
          <Alert severity="success">Policy Page</Alert>
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
          <h2 className="font-semibold text-[48px]/[58px] w-185 my-5">
            Privacy Policy
          </h2>
          <p className="text-[#232536] text-[16px]/[24px] w-180">
            Last Updated on 27th January 2021
          </p>
        </div>
      </section>
      {/* 2 */}

      <section className="box text-[#232536] py-24 flex flex-col items-center gap-4 bg-[#ECF8F9]">
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
          We disclose your information in the following manner:
        </h2>
        <p className="w-211">
          Business partners, suppliers and sub-contractors (“Affiliates”):
          Affiliates may use this information to help provide, understand, and
          improve our services and Affiliate’s own services for the performance
          of any contract we enter into
        </p>
        <p className="w-211">
          Financial Institutions and Auditors: In order to complete third party
          financial, technical and legal audits of our operations to help us
          operate our business, we may need to share your information with
          financial institutions and auditors.
        </p>
        <p className="w-211">
          Advertisers and Advertising Networks: To provide you with select and
          serv e relevant advertisements to you and others, we may share your
          data with advertiser sand advertising networks. We do not disclose
          your Personal Information or Sensitive Personal Information to our
          advertisers, but we may provide them with aggregate information about
          our users (for example, we may inform them that any given number of
          participants in a specified age group who clicked on their
          advertisement on any given day). We may also use such aggregate
          information to help advertisers reach the kind of audience they want
          to target.
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
