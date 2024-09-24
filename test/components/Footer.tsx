import Link from "next/link";
import Image from "next/image";
import { social } from "@/data/social";

export default function Footer() {
  const sizeIcon = 20;
  return (
    <>
      <footer className="bg-primaryDark">
        <div className="container mx-auto px-8 text-white lg:px-16">
          <div className="flex flex-wrap gap-12 border-b py-12 lg:gap-0">
            <div className="flex w-full flex-wrap lg:w-3/5">
              <div className="mb-3 w-full space-y-5 sm:w-3/6">
                <b>ติดต่อ</b>
                <ul className="*:mb-4 [&_li]:flex [&_li]:items-start [&_li]:space-x-2">
                  <li>
                    <Image
                      className="pt-1"
                      width={sizeIcon}
                      height={sizeIcon}
                      src={
                        "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/ct-location.svg"
                      }
                      alt="icon-location"
                    />
                    <p>
                      บริษัท สวิทซเฟลคซ จำกัด <br />
                      เลขที่ 30/119 หมู่ 1 ต.โคกขาม <br />
                      อ.เมือง จ.สมุทรสาคร 74000
                    </p>
                  </li>
                  <li>
                    <Image
                      className="pt-1"
                      width={sizeIcon}
                      height={sizeIcon}
                      src={
                        "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/ct-clock.svg"
                      }
                      alt="icon-clock"
                    />
                    <p>
                      จันทร์ - เสาร์ <br />
                      9:00 - 17:00 , <br />
                      ปิดทำการวันอาทิตย์
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-full space-y-4 sm:w-2/6">
                <b>ตัวแทนจำหน่าย</b>
                <div>
                  <p>
                    สนใจสั่งซื้อสินค้าเป็นจำนวนมาก
                    หรือสมัครเป็นตัวแทนจำหน่ายได้ที่
                  </p>
                  <p>โทร. 1277</p>
                  <p>E-mail: Service@switchflex.com</p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-around lg:w-2/5 [&_a]:flex [&_a]:space-x-2">
              <div className="flex-1 space-y-5">
                <b>ติดตาม</b>
                <ul className="space-y-4">
                  {social.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={sizeIcon}
                          height={sizeIcon}
                          src={item.img}
                          alt={`icon-${item.title}`}
                        />
                        <p>{item.title}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 space-y-5">
                <b>สั่งซื้อ</b>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={"https://topvalue.com/brands/alectric"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={sizeIcon}
                        height={sizeIcon}
                        src={
                          "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/site-topvalue.svg"
                        }
                        alt="icon-topvalue"
                      />
                      <p>Topvalue.com</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://shopee.co.th/alectric_officialstore"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={sizeIcon}
                        height={sizeIcon}
                        src={
                          "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/site-shopee.svg"
                        }
                        alt="icon-shopee"
                      />
                      <p>Shopee</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://www.lazada.co.th/shop/alectric-officialstore/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={sizeIcon}
                        height={sizeIcon}
                        src={
                          "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/site-lazada.svg"
                        }
                        alt="icon-lazada"
                      />
                      <p>Lazada</p>
                    </a>
                  </li>
                  <li>
                    <a href={""}>
                      <Image
                        width={sizeIcon}
                        height={sizeIcon}
                        src={
                          "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/site-jd.svg"
                        }
                        alt="icon-jd"
                      />
                      <p>JD Central</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap py-3">
            <div className="w-full content-center lg:w-1/5">
              <Image
                className="mx-auto lg:mx-0"
                width={120}
                height={50}
                src={
                  "https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/logo-white.svg"
                }
                alt="swf"
              />
            </div>
            <div className="mb-7 flex-1 text-center *:p-5">
              <p>
                Copyright © 2013-present Magento, Inc. All rights reserved.
              </p>
              <Link href={"/privacy-policy"}>
                เงื่อนไขการใช้งาน นโยบายส่วนบุคคล
              </Link>
            </div>
            <div className="hidden lg:flex lg:w-1/5"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
