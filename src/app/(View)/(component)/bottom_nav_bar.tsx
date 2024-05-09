"use client";
import { UseContext } from "@/app/(Model)/store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const BottomNavBar = () => {
    const context = useContext(UseContext);
    const { bottomNavState, setBottomNavState, user } =
        context;
    const router: AppRouterInstance = useRouter();

    // 라우터 + context state변경함수임
    const pageHdlr = (param: string) => {
        // router자리
        router.push(`/${param}`);
        // context 변경함수
        setBottomNavState(param);
    };

    return (
        <section className="absolute bottom-0 left-0 h-[10%] z-[2] w-full px-10 flex justify-between border-t-black20 border-t-[0.5px] text-black40">
            <div
                className="flex flex-col justify-center items-center gap-1"
                onClick={() => {
                    pageHdlr("");
                }}
            >
                <img
                    src={`${
                        bottomNavState == ""
                            ? "/asset/img/house.circle@10x.png"
                            : "/asset/img/house.circle@10x_grey.png"
                    }`}
                    className="w-[24px] object-cover
                    
                    "
                />
                <div
                    className={`text-[12px] ${
                        bottomNavState == "" &&
                        "text-black100"
                    }`}
                >
                    HOME
                </div>
            </div>
            <div
                className="flex flex-col justify-center items-center gap-1"
                onClick={() => {
                    if (user) {
                        pageHdlr("history");
                    } else {
                        alert("로그인 해 주세요 🙏");
                        router.push("/login");
                    }
                }}
            >
                <img
                    src={`${
                        bottomNavState == "history"
                            ? "/asset/img/list.bullet.circle@10x.png"
                            : "/asset/img/list.bullet.circle@10x_grey.png"
                    }`}
                    className="w-[24px] object-cover"
                />
                <div
                    className={`text-[12px] ${
                        bottomNavState == "history" &&
                        "text-black100"
                    }`}
                >
                    HISTORY
                </div>
            </div>
            {/* <div
                className="flex flex-col justify-center items-center gap-1"
                onClick={() => {
                    if (user) {
                        pageHdlr("filter");
                    } else {
                        alert("로그인 해 주세요 🙏");
                        router.push("/login");
                    }
                }}
            >
                <img
                    src={`${
                        bottomNavState == "filter"
                            ? "/asset/img/circle.hexagongrid.circle@10x.png"
                            : "/asset/img/circle.hexagongrid.circle@10x_grey.png"
                    }`}
                    className="w-[24px] object-cover"
                />
                <div
                    className={`text-[12px] ${
                        bottomNavState == "filter" &&
                        "text-black100"
                    }`}
                >
                    FILTER
                </div>
            </div> */}
            <div
                className="flex flex-col justify-center items-center gap-1"
                onClick={() => {
                    if (user) {
                        pageHdlr("info");
                    } else {
                        alert("로그인 해 주세요 🙏");
                        router.push("/login");
                    }
                }}
            >
                <img
                    src={`${
                        bottomNavState == "info"
                            ? "/asset/img/info.circle@10x.png"
                            : "/asset/img/info.circle@10x_grey.png"
                    }`}
                    className="w-[24px] object-cover"
                />
                <div
                    className={`text-[12px] ${
                        bottomNavState == "info" &&
                        "text-black100"
                    }`}
                >
                    INFO
                </div>
            </div>
        </section>
    );
};

export default BottomNavBar;
