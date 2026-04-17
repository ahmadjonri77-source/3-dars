import footimg1 from "../images/s7img.svg";
import logo from "../images/logo2.svg";

export default function Footer() {
  return (
    <footer>
      <div className="box pb-16">
        <img src={footimg1} alt="" />
        <div className="mt-8 flex justify-between pr-25">
          <div>
            <h2 className="font-semibold text-[48px]/[58px] text-[#232536] w-115">
              Let's make something special
            </h2>
            <h3 className="font-semibold text-[24px]/[36px] text-[#232536] mt-10 mb-7">
              Let's talk! 🤙{" "}
            </h3>
            <p className="font-medium text-[18px]/[28px] text-[#232536] ">
              020 7993 2905
            </p>
            <p className="font-medium text-[18px]/[28px] text-[#232536] ">
              hi@finsweet.com
            </p>
            <hr className="w-55 text-[#00000014] my-4" />
            <p className="font-medium text-[14px]/[20px] text-[#232536] w-55">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
          </div>
          <ul className="flex flex-col gap-3 text-[#232536] text-[16px] font-semibold">
            <li>Home</li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Career </a>
            </li>
            <li>
              <a href="">News</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-[#232536] text-[14px] font-medium">
            <li className="text-[16px] font-semibold mb-px">Service</li>
            <li>
              <a href="">Technical support</a>
            </li>
            <li>
              <a href="">Testing</a>
            </li>
            <li>
              <a href="">Development </a>
            </li>
            <li>
              <a href="">AWS/Azure </a>
            </li>
            <li>
              <a href="">Consulting</a>
            </li>
            <li>
              <a href="">Information Technology</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-[#232536] text-[14px] font-medium">
            <li className="text-[16px] font-semibold mb-px">Resourses</li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Testimonial</a>
            </li>
            <li>
              <a href="">Privacy Policy </a>
            </li>
            <li>
              <a href="">Terms of use</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#FFE6D2]">
        <div className="box h-20 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img src={logo} alt="" />
            <p className="font-medium -mb-1">©2021 Finsweet</p>
          </div>
          <div className="flex gap-6">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>

          </div>
        </div>
      </div>
    </footer>
  );
}
