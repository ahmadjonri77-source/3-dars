import Logo from "../images/Logo.svg";
import Headerimg from "../images/header.svg";
import hlogo1 from "../images/hlogo1.svg";
import hlogo2 from "../images/hlogo2.svg";
import hlogo3 from "../images/hlogo3.svg";
import hlogo4 from "../images/hlogo4.svg";
import hlogo5 from "../images/hlogo5.svg";

export default function Header() {
  return (
    <header className="bg-[#232536]">
     
      <div>
        {/* top */}

        <div className="box h-224 flex flex-col justify-center">
          <div className=" flex items-center justify-between">
            {/* left */}

            <div className="flex flex-col gap-6">
              <div className="w-6 h-6 bg-[#FFFFFF0F]"></div>
              <h2 className="text-[56px]/[68px] font-semibold w-156 text-white">
                Transform Your Idea Into Reality with Finsweet
              </h2>
              <p className="text-[16px]/[28px] w-132 text-[#FFFFFF60]">
                The entire Finsweet team knows what's good with Webflow and you
                can too with 1 week and a good attitude.
              </p>
              <button className="bg-[#444CFC] w-55 h-16 flex items-center gap-1 text-white justify-center">
                Request Quote <i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>

            {/* right */}

            <img src={Headerimg} alt="" />
          </div>
          {/* bottom */}
          <div className="flex items-center justify-between mt-8">
           <div>
             <p className="text-[14px] text-[#FFFFFF60] font-medium">
              Our Clients
            </p>
            <h2 className=" font-medium text-[18px] text-white">
              We've Worked with
            </h2>
           </div>
           <img src={hlogo1} alt="" />
           <img src={hlogo2} alt="" />
           <img src={hlogo3} alt="" />
           <img src={hlogo4} alt="" />
           <img src={hlogo5} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
