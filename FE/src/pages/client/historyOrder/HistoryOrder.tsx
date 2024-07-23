import React from "react";

const HistoryOrder = () => {
  return (
    <>
      <main
        id="main-content"
        className="min-h-fit !shadow-none !outline-0 block isolate *:box-border"
      >
        <div className="hd-page-head">
          <div className="hd-header-banner bg-[url('./src/assets/images/shopping-cart-head.webp')] bg-no-repeat bg-cover bg-center">
            <div className="hd-bg-banner overflow-hidden relative !text-center bg-black bg-opacity-55 lg:py-[50px] mb-0 py-[30px]">
              <div className="z-[100] relative hd-container text-white">
                <h1 className="text-xl font-medium leading-5 mb-3">
                  Tài khoản
                </h1>
                <p className="text-sm">Lịch sử mua hàng</p>
              </div>
            </div>
          </div>
        </div>
        {/*end hd-page-head*/}
        <div className="hd-account-body max-w-5xl w-full mx-auto px-4 text-[14px] lg:my-[80px] my-[50px]">
          <div className="hd-account-head">
            <div className="max-w-auto">
              <div className="max-w-[42rem]">
                <span className="hd-all-textgrey block mt-4">
                  <span className="text-black font-semibold">Thu Hằng,</span>
                  ha9671889@gmail.com · Hà Nội, Việt Nam
                </span>
              </div>
              <hr className="mt-[1rem] h-0 border-solid border-b-2" />
              <div className="hd-account-menu overflow-x-auto flex uppercase font-medium">
                <a href="account.html" className="hd-account-menu-item">
                  Thông tin tài khoản
                </a>
                <a href="#" className="hd-account-menu-item">
                  Yêu thích
                </a>
                <a href="history-order.html" className="hd-account-menu-item">
                  Lịch sử mua hàng
                </a>
                <a
                  href="updatepass-account.html"
                  className="hd-account-menu-item"
                >
                  Đổi mật khẩu
                </a>
              </div>
              <hr className="h-0 border-solid border-b-2" />
            </div>
          </div>
          {/*end hd-account-head*/}
          <div className="hd-account-content pt-[30px] mx-auto">
            <div className="hd-ct-text">
              <h2 className="lg:mb-[50px] mb-[30px] lg:mt-[25px] text-2xl font-semibold uppercase">
                Lịch sử mua hàng
              </h2>
              <div className="border border-slate-200 rounded-lg overflow-hidden z-0 mb-[30px]">
                <div className="hd-head-form-order flex sm:flex-row justify-between lg:justify-between sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
                  <div>
                    <p className="text-lg font-semibold">#WU3746HGG12</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
                      <span>Aug 8, 2023</span>
                      <span className="mx-2">·</span>
                      <span className="text-[#00BADB] font-medium">
                        Đã giao hàng
                      </span>
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2.5 px-4 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-[#00BADB] dark:text-white hover:bg-gray-100 dark:hover:bg-[#23b6cd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                      Xem đơn hàng
                    </button>
                  </div>
                </div>
                {/*end hd-head-form-order*/}
                <div className="hd-body-form-order border-t border-slate-200 p-2 sm:p-8 divide-y divide-y-slate-20">
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/17.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Rey Nylon Backpack
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/16.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Round Buckle 1" Belt
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/2.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Waffle Knit Beanie
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end hd-body-form-order*/}
              </div>
              <div className="border border-slate-200 rounded-lg overflow-hidden z-0 mb-[30px]">
                <div className="hd-head-form-order flex sm:flex-row justify-between lg:justify-between sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
                  <div>
                    <p className="text-lg font-semibold">#WU3746HGG12</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
                      <span>Aug 8, 2023</span>
                      <span className="mx-2">·</span>
                      <span className="text-[#00BADB] font-medium">
                        Đã giao hàng
                      </span>
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2.5 px-4 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-[#00BADB] dark:text-white hover:bg-gray-100 dark:hover:bg-[#23b6cd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                      Xem đơn hàng
                    </button>
                  </div>
                </div>
                {/*end hd-head-form-order*/}
                <div className="hd-body-form-order border-t border-slate-200 p-2 sm:p-8 divide-y divide-y-slate-20">
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/17.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Rey Nylon Backpack
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/16.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Round Buckle 1" Belt
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
                    <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        alt="Rey Nylon Backpack"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block absolute align-middle  inset-0 h-full w-full object-cover object-center"
                        sizes="100px"
                        src="./src/assets/images/2.webp"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between ">
                          <div>
                            <h3 className="text-base font-medium line-clamp-1">
                              Waffle Knit Beanie
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <span>Natural</span>
                              <span className="mx-2 border-l border-slate-200 h-4" />
                              <span>XL</span>
                            </p>
                          </div>
                          <div className="mt-0.5 ml-2">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                              <span className="text-green-500 !leading-none">
                                $33
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500 dark:text-slate-400 flex items-center">
                          {/* <span class="hidden sm:inline-block">Qty</span> */}
                          <span className="inline-block">x</span>
                          <span className="ml-2">1</span>
                        </p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium hd-all-hover-bluelight"
                          >
                            Leave review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end hd-body-form-order*/}
              </div>
            </div>
          </div>
          {/*end hd-account-content*/}
        </div>
        {/*end hd-account-body*/}
      </main>
    </>
  );
};

export default HistoryOrder;