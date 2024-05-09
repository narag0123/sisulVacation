import React from "react";
import BottomNavBar from "../../(component)/bottom_nav_bar";

const FindPwd = () => {
    return (
        <section className="bg-bg w-full h-[100vh] flex flex-col justify-center items-center p-4 gap-3">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <h1 className="font-black text-[24px] mb-[15px]">
                    비밀번호 찾기
                </h1>
                {/* <h1 className="text-[18px] -mt-[15px] mb-[15px]">
                일단 개발자한테 연락해주세요
            </h1> */}
                <form className="flex flex-col gap-3 w-full">
                    <input
                        placeholder="ID"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="email"
                        name="id"
                    />
                    <input
                        placeholder="NAME"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="text"
                        name="name"
                    />
                    <input
                        placeholder="사번"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="text"
                        name="company_code"
                    />
                    <button
                        type="submit"
                        className="border-[1px] rounded-full w-full h-[50px] bg-primary60 font-bold"
                    >
                        비밀번호 찾기
                    </button>
                    <BottomNavBar />
                </form>
            </div>
        </section>
    );
};

export default FindPwd;
