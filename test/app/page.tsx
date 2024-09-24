import Image from "next/image";
import Link from "next/link";
import {
  bestSeller1,
  bestSeller2,
  bestSeller3,
  bestSeller4,
  bestSeller5,
  alectricBanner1,
  alectricBanner2,
  alectricBanner3,
  blogCallcenter,
  blogService,
  blogWarehouse,
  switchflex,
} from "@/data/imgHome";
import { social } from "@/data/social";

export default function Home() {
  return (
    <>
      {/* Video */}
      <div className="relative mb-3 aspect-video w-full">
        <iframe
          className="absolute aspect-video w-full bg-cover"
          src="https://www.youtube-nocookie.com/embed/5_yygU9ecMQ?si=X_YvsTvPVLwpKdUy&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=5_yygU9ecMQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* <div className="bg-blue-topv-500 absolute h-full w-full opacity-0"></div> */}
      </div>

      {/* Best Seller */}
      <div className="container mx-auto text-center">
        <h1 className="text-primary">Best seller</h1>
        <div className="mx-5 grid grid-cols-1 justify-center justify-items-center gap-0 md:flex md:gap-3">
          <div className="space-y-2">
            <Image src={bestSeller1} alt="best-seller1" />
            <Image src={bestSeller2} alt="best-seller2" />
          </div>
          <div className="col-span-3">
            <Image src={bestSeller3} alt="best-seller3" />
          </div>
          <div className="space-y-2">
            <Image src={bestSeller4} alt="best-seller4" />
            <Image src={bestSeller5} alt="best-seller5" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="space-y-2">
        <Image src={alectricBanner1} alt="alectric-banner1" />
        <Image src={alectricBanner2} alt="alectric-banner2" />
        <Image src={alectricBanner3} alt="alectric-banner3" />
      </div>

      {/* Block-standard */}
      <div className="bg-blue-50">
        <div className="container mx-auto p-5 text-center">
          <h1 className="text-primary">มาตรฐานของเรา</h1>
          <div className="grid grid-cols-1 gap-5 py-5 *:space-y-4 *:rounded-3xl *:bg-white *:p-12 lg:grid-cols-3 [&_img]:mx-auto [&_img]:size-64 [&_img]:object-cover [&_p]:text-gray-500">
            <div>
              <Image alt="standard1" src={blogCallcenter} />
              <div className="space-y-2">
                <b>Call Center</b>
                <p>
                  โทร 1277 หรือช่องทาง offical ของร้านค้า มีบริการดูแลหลังการขาย
                  แนะนำและให้คำปรึกษาอย่างรวดเร็วที่สุด
                </p>
              </div>
            </div>
            <div>
              <Image alt="standard2" src={blogService} />
              <div className="space-y-2">
                <b>Service Center</b>
                <p>รับประกันสินค้าสูงสุด 3 ปี เปลี่ยนคืนสินค้าได้ภายใน 7 วัน</p>
              </div>
            </div>
            <div>
              <Image alt="standard3" src={blogWarehouse} />
              <div className="space-y-2">
                <b>Quality Control</b>
                <p>
                  สินค้าได้รับมาตรฐานมอก. ควบคุมและตรวจสอบคุณภาพสินค้าก่อนจัดส่ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact us */}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3 space-x-4 p-5">
          <div className="flex items-center divide-x *:px-2">
            <h4 className="text-primary font-semibold">ติดตามเรา</h4>
            <Image
              src="https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/logo.svg"
              alt="logo-alectric"
              width={60}
              height={60}
            />
          </div>
          <div className="space-x-2">
            {social.map((item, index) => (
              <a href={item.href} key={index}>
                <button className="btn-social">
                  <Image
                    width={23}
                    height={23}
                    src={item.img}
                    alt="icon-facebook"
                  />
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* About us */}
        <div className="mx-auto max-w-md overflow-hidden bg-white shadow-md md:max-w-6xl">
          <div className="md:flex">
            <div className="md:flex-1">
              <Image
                className="h-48 w-full object-cover md:h-full"
                src={switchflex}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-4 md:w-2/5 md:flex-initial md:px-16 [&_p]:text-sm [&_p]:text-gray-500">
              <div className="space-y-3 divide-y-2">
                <div className="mb-5">
                  <p>เกี่ยวกับ</p>
                  <h1 className="text-primary mb-5 mt-3 block text-xl font-semibold">
                    บริษัท สวิทซ เฟลคซ จำกัด
                  </h1>
                  <p>
                    ก่อตั้งขึ้นเมื่อปี 2005
                    โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
                    และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
                    ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี
                    2019 คณะผู้ก่อตั้งบริษัท
                    ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
                    มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
                  </p>
                  <Link href={"/about-us"}>
                    <button className="btn-primary mt-6">ดูเพิ่มเติม</button>
                  </Link>
                </div>
                <div className="pt-6">
                  <p className="pb-4">ไปยังเว็บไซต์</p>
                  <a
                    href={"https://switchflex.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={120}
                      height={50}
                      src={
                        "https://alectric.asia/media/wysiwyg/homepage/aboutus/switchflex-logo.svg"
                      }
                      alt="swf"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
