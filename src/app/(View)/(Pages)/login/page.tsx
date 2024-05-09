"use client";
import { login } from "@/app/(ViewModel)/authenticate/firebase_auth_vm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingComponent from "../../(component)/loading/loading_component";
import BottomNavBar from "../../(component)/bottom_nav_bar";

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [isLoading, setIsLoading] =
        useState<boolean>(false);
    const router: AppRouterInstance = useRouter();

    return (
        <section className="bg-bg w-full h-[100vh] flex flex-col justify-center items-center p-4">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <h1 className="font-black text-[24px] mb-[15px]">
                    로그인
                </h1>
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={(e) => {
                        setIsLoading(true);
                        login(
                            e,
                            loginEmail,
                            loginPassword,
                            router
                        ).then(() => {
                            setIsLoading(false);
                        });
                    }}
                >
                    <input
                        placeholder="ID"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="email"
                        name="id"
                        onChange={(e) => {
                            setLoginEmail(e.target.value);
                        }}
                    />
                    <input
                        placeholder="PASSWORD"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="password"
                        name="password"
                        onChange={(e) => {
                            setLoginPassword(
                                e.target.value
                            );
                        }}
                    />
                    <button
                        type="submit"
                        className="border-[1px] rounded-full w-full h-[50px] bg-primary60 font-bold"
                    >
                        로그인
                    </button>
                    {isLoading && <LoadingComponent />}
                </form>
                <div className="w-full flex gap-3">
                    <a
                        className="border-[1px] rounded-full w-full h-[40px] bg-primary20 flex justify-center items-center"
                        href="/join"
                    >
                        회원가입
                    </a>
                    <a
                        className="border-[1px] rounded-full w-full h-[40px] bg-primary20 flex justify-center items-center"
                        href="/find-pwd"
                    >
                        비밀번호 찾기
                    </a>
                </div>
            </div>
            <BottomNavBar />
        </section>
    );
};

export default LoginPage;
