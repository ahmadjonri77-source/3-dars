import img1 from "../images/s1img.svg";
import img2 from "../images/s1img2.svg";
import img3 from "../images/s1img3.svg";
import s2img1 from "../images/s2img.svg";
import s2img2 from "../images/s2img2.svg";
import s2img3 from "../images/s2img3.svg";
import s3img1 from "../images/s3img.svg";
import s3img2 from "../images/s3img2.svg";
import s3img3 from "../images/s3img3.svg";
import s4img1 from "../images/s4img.svg";
import s4img2 from "../images/s4img1.svg";
import s4img3 from "../images/s4img2.svg";
import s4img4 from "../images/s4img3.svg";
import s4img5 from "../images/s4img4.svg";
import s4img6 from "../images/s4img5.svg";
import s4img7 from "../images/s4img6.svg";
import s5img1 from "../images/s5img.svg";
import s5img2 from "../images/s5img1.svg";
import s6img1 from "../images/s6img.svg";
export default function Main() {
  return (
    <main>
      {/* 1 */}

      <section className="box pt-30 pb-25">
        <div className="h-212">
          {/*  */}

          <h2 className=" font-medium text-[14px] tracking-[3px]">ABOUT US</h2>

          {/*  */}

          <div className="flex w-full justify-between items-center">
            <h2 className=" font-semibold text-[48px]/[58px] text-[#232536] w-160">
              The company leads entire webdesign process from concept to
              delivery.
            </h2>
            <div className="w-140">
              <h2 className=" font-semibold text-[36px]/[54px] text-[#232536]">
                The Era Of Technology.
              </h2>
              <p className="text-[#5D5F6D] text-[16px]/[24px] mt-4">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>

          {/* imgs */}

          <div className="flex w-full justify-between my-12">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>

          {/*  */}

          <div className="flex justify-between">
            <div className="flex gap-16">
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
            <a
              href=""
              className="text-[#444CFC] flex items-center gap-4 text-[16px] font-medium"
            >
              Read about us
              <i class="fa-solid fa-arrow-right-long text-black"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 2 */}

      <section className="bg-[#ECF8F9]">
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
              <img src={s2img1} alt="" className="w-12 h-12" />
              <div>
                <h2 className=" font-semibold text-[16px]">On Time Delivery</h2>
                <p className=" font-medium text-[14px] text-[#5D5F6D] w-75 mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-135 bg-white h-35 p-8 flex gap-3 my-3">
              <img src={s2img2} alt="" className="w-12 h-12" />
              <div>
                <h2 className=" font-semibold text-[16px]">On Time Delivery</h2>
                <p className=" font-medium text-[14px] text-[#5D5F6D] w-75 mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-135 bg-white h-35 p-8 flex gap-3">
              <img src={s2img3} alt="" className="w-12 h-12" />
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

      {/* 3 */}

      <section className="bg-[#FFE6D2]">
        <div className="box py-24">
          <h3 className="font-medium text-[14px] tracking-[3px]">
            Our Services
          </h3>
          <h2 className="font-semibold text-[48px]/[58px] text-[#232536] w-195 mt-4 mb-10">
            We build software solutions that solve client's business challenges
          </h2>
          <button className="bg-[#444CFC] w-55 h-16 flex items-center gap-1 text-white justify-center">
            Start a Project<i class="fa-solid fa-arrow-right-long"></i>
          </button>
          <div className="mt-20 flex justify-between">
            <div className="w-100 h-84 bg-white p-12 flex flex-col justify-between">
              <div>
                <img src={s3img1} alt="" />
              </div>
              <h2 className="font-semibold text-[16px]">Technical support</h2>
              <p className="text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <a
                href=""
                className="text-[#444CFC] flex items-center gap-4 text-[16px] font-medium"
              >
                Read more
                <i class="fa-solid fa-arrow-right-long text-black"></i>
              </a>
            </div>
            <div className="w-100 h-84 bg-white p-12 flex flex-col justify-between">
              <div>
                <img src={s3img2} alt="" />
              </div>
              <h2 className="font-semibold text-[16px]">Testing Management</h2>
              <p className="text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <a
                href=""
                className="text-[#444CFC] flex items-center gap-4 text-[16px] font-medium"
              >
                Read more
                <i class="fa-solid fa-arrow-right-long text-black"></i>
              </a>
            </div>
            <div className="w-100 h-84 bg-white p-12 flex flex-col justify-between">
              <div>
                <img src={s3img3} alt="" />
              </div>
              <h2 className="font-semibold text-[16px]">Develepment</h2>
              <p className="text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
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
      </section>

      {/* 4 */}

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
          <img src={s4img1} alt="" className="h-7" />
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
                <img src={s4img2} className="w-12 h-12" alt="" />
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
              <img src={s4img3} className="w-12 h-12" alt="" />
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
              <img src={s4img4} className="w-12 h-12" alt="" />
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
              <img src={s4img5} className="w-12 h-12" alt="" />
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
              <img src={s4img6} className="w-12 h-12" alt="" />
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
                <img src={s4img7} className="w-12 h-12" alt="" />
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

      {/* 5 */}

      <section className="bg-[#ECF8F9] ">
        <div className="box h-145 py-24">
          <div className="w-4 h-4 bg-[#666DFF]"></div>
          <h2 className="font-semibold text-[#232536] text-[48px]">
            Read our latest blogs & news
          </h2>
          <div className="flex justify-between">
            <div className="flex">
              <img src={s5img1} alt="" />
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
              <img src={s5img2} alt="" />
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

      {/* 6 */}

      <section className="box py-24 flex">
        <div className="bg-[#666DFF] h-84 w-315 p-24 relative flex justify-between items-center">
          <img src={s6img1} alt="" className="absolute top-0 left-0" />
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


      
    </main>
  );
}
