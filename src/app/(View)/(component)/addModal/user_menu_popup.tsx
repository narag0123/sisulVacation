import { UseContext } from "@/app/(Model)/store";
import {
    logout,
    resetPwd,
} from "@/app/(ViewModel)/authenticate/firebase_auth_vm";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";

const UserMenuPopup = () => {
    const context = useContext(UseContext);
    const { user, isUserMenu, setIsUserMenu } = context;

    // useEffect(() => {
    //     console.log(isUserMenu);
    // }, [isUserMenu]);

    return (
        <div className="absolute z-20 right-0 mx-5 w-[70vw]  bg-[#fff] p-5 rounded-md shadow-lg flex flex-col gap-3">
            <a
                href="/info"
                className="flex justify-between font-ProximaNova font-black h-[40px] border-[1px] px-3 items-center"
            >
                <div>{user?.displayName}</div>
                <div>{user?.email}</div>
            </a>
            <div className="flex flex-col gap-3">
                <button
                    className="bg-point rounded-sm h-[40px] text-[#fff]"
                    onClick={() => {
                        logout();
                        setIsUserMenu(false);
                    }}
                >
                    LOGOUT
                </button>
                <button
                    className="bg-primary80 rounded-sm h-[40px]"
                    onClick={() => {
                        resetPwd(user?.email!);

                        setIsUserMenu(false);
                    }}
                >
                    RESET PASSWORD
                </button>
            </div>
        </div>
    );
};

export default UserMenuPopup;
