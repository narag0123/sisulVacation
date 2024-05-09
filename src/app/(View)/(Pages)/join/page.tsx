"use client";
import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UseContext } from "@/app/(Model)/store";
import { register } from "@/app/(ViewModel)/authenticate/firebase_auth_vm";
import { useRouter } from "next/navigation";
import LoadingComponent from "../../(component)/loading/loading_component";
import BottomNavBar from "../../(component)/bottom_nav_bar";

const Join = () => {
    const context = useContext(UseContext);
    const { setUser } = context;
    const router = useRouter();

    const [isLoading, setIsLoading] =
        useState<boolean>(false);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] =
        useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerCompanyCode, setRegisterCompanyCode] =
        useState("");
    const [registerGroup, setRegisterGroup] = useState("");

    const api_user_data: TApiUser = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        group: registerGroup,
        companyCode: registerCompanyCode,
    };

    // 로그인 상태 새로고침해도 안변하게
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (e: any) =>
            setUser(e)
        );

        return unsub;
    }, []);

    return (
        <section className="bg-bg w-full h-[100vh] flex flex-col justify-center items-center p-4 gap-3">
            <div className="w-full flex flex-col justify-center items-center -translate-y-[10%]">
                <h1 className="font-black text-[24px] mb-[15px]">
                    회원가입
                </h1>
                {/* <h1 className="text-[18px] -mt-[15px] mb-[15px]">
                가입하셈 가입하셈 언능하셈
            </h1> */}
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={(e) => {
                        setIsLoading(true);
                        register(
                            e,
                            api_user_data,
                            router
                        ).then(() => {
                            setIsLoading(false);
                        });
                    }}
                >
                    <input
                        placeholder="EMAIL"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="email"
                        name="id"
                        onChange={(e) => {
                            setRegisterEmail(
                                e.target.value
                            );
                        }}
                    />
                    <input
                        placeholder="PASSWORD"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="password"
                        name="password"
                        onChange={(e) => {
                            setRegisterPassword(
                                e.target.value
                            );
                        }}
                    />
                    <input
                        placeholder="NAME"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="text"
                        name="name"
                        onChange={(e) => {
                            setRegisterName(e.target.value);
                        }}
                    />
                    <input
                        placeholder="사번"
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        type="text"
                        name="company_code"
                        onChange={(e) => {
                            setRegisterCompanyCode(
                                e.target.value
                            );
                        }}
                    />
                    <select
                        className="border-[1px] rounded-full w-full h-[50px] p-2 px-5"
                        onChange={(e) => {
                            setRegisterGroup(
                                e.target.value
                            );
                        }}
                        defaultValue={"SELECT GROUP"}
                    >
                        <option disabled>
                            SELECT GROUP
                        </option>
                        <option value={"A"}>A</option>
                        <option value={"B"}>B</option>
                        <option value={"C"}>C</option>
                        <option value={"D"}>D</option>
                    </select>

                    {isLoading && <LoadingComponent />}

                    <button
                        type="submit"
                        className="border-[1px] rounded-full w-full h-[50px] bg-primary60 font-bold"
                    >
                        가입하기
                    </button>
                </form>
            </div>
            <BottomNavBar />
        </section>
    );
};

export default Join;
