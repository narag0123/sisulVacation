"use client";
import { UseContext } from "@/app/(Model)/store";
import BottomNavBar from "@/app/(View)/(component)/bottom_nav_bar";
import { updateFireBaseAuthUser } from "@/app/(ViewModel)/authenticate/firebase_auth_vm";
import { getUserInfoCollection } from "@/app/(ViewModel)/authenticate/firebase_user_data_vm";
import React, {
    FormEvent,
    useContext,
    useEffect,
    useState,
} from "react";

const Info = () => {
    const context = useContext(UseContext);
    const {
        setBottomNavState,
        apiUserInfo,
        setApiUserInfo,
        user,
    } = context;

    const [email, setEmail] = useState<
        string | null | undefined
    >(user?.email);
    const [name, setName] = useState<
        string | null | undefined
    >("");
    const [group, setGroup] = useState<
        string | null | undefined
    >(apiUserInfo?.group);

    useEffect(() => {
        if (user) {
            getUserInfoCollection(
                user?.uid,
                setApiUserInfo
            );
        }
        setBottomNavState("info");
        setName(user?.displayName);
        setEmail(user?.email);
    }, [user]);

    const api_user_data: Partial<TApiUser> = {
        name: name as string,
        email: email as string,
        group: group as string,
        companyCode: apiUserInfo?.companyCode,
    };

    /**
     * updateFirebaseAuthUser를 호출하기 위한함수. 지금생각하면 updateFirebaseAuthUser를 직접 불러와도 될거같긴함..
     */
    const userInfoUpdateHdlr = (
        e: FormEvent<HTMLFormElement>
    ) => {
        updateFireBaseAuthUser(e, api_user_data);
    };

    return (
        <section className="bg-bg w-[100vw] h-[100vh] p-5 overflow-hidden">
            <h1 className="font-black text-[24px]">
                MY INFO
            </h1>
            <hr />
            <form
                className="h-full flex flex-col"
                onSubmit={userInfoUpdateHdlr}
            >
                <div className="my-4">
                    <div className="flex mt-3 items-center">
                        <span className="w-[20%]">ID</span>
                        <input
                            readOnly
                            placeholder={user?.email || ""}
                            className="w-full p-2 bg-bg border-[1px] border-[black] text-black40"
                        />
                    </div>
                    <div className="flex mt-3 items-center">
                        <span className="w-[20%]">
                            이름
                        </span>
                        <input
                            className="w-full p-2 bg-bg border-[1px] placeholder:text-[black]"
                            value={name || ""}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex mt-3 items-center">
                        <span className="w-[20%]">조</span>
                        <select
                            defaultValue={`${apiUserInfo?.group}`}
                            className="w-full p-2 bg-bg border-[1px]"
                            onChange={(e) => {
                                setGroup(e.target.value[0]);
                            }}
                        >
                            <option>
                                {apiUserInfo &&
                                    `${apiUserInfo?.group}`}
                                조
                            </option>
                            {`${apiUserInfo?.group}` !==
                                "A" && <option>A조</option>}
                            {`${apiUserInfo?.group}` !==
                                "B" && <option>B조</option>}
                            {`${apiUserInfo?.group}` !==
                                "C" && <option>C조</option>}
                            {`${apiUserInfo?.group}` !==
                                "D" && <option>D조</option>}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="my-10 bg-primary100 border-[1px] w-full px-2 py-3 rounded-full"
                >
                    회원정보 수정
                </button>
            </form>
            <BottomNavBar />
        </section>
    );
};

export default Info;
