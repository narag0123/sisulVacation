"use client";
import { auth } from "@/firebase/firebase";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth,
} from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";
import {
    createUserInfo,
    updateUserInfo,
} from "./firebase_user_data_vm";

// 로그인 함수
export const login = async (
    e: FormEvent,
    email: string,
    pwd: string,
    router: AppRouterInstance
) => {
    e.preventDefault();
    try {
        const authenticate =
            await signInWithEmailAndPassword(
                auth,
                email,
                pwd
            );
        alert("환영합니다!");

        router.push("/");
    } catch (err) {
        alert("로그인 실패! 새로고침 후 다시 시도해보세요");
        console.log(err);
    }
};

// 로그아웃 함수
export const logout = async () => {
    await signOut(auth);
};

// 회원가입 함수
export const register = async (
    e: FormEvent<HTMLFormElement>,
    api_user_data: TApiUser,
    router: AppRouterInstance
) => {
    e.preventDefault();

    try {
        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                api_user_data.email,
                api_user_data.password
            );
        await updateProfile(userCredential.user, {
            displayName: api_user_data.name,
        });

        createUserInfo(
            api_user_data,
            userCredential.user.uid
        );

        alert("회원가입이 완료되었습니다");
        router.push("/");
    } catch (err) {
        alert("새로고침 후 다시시도 해 주세요");
        console.log(err);
    }
};

// 비번 초기화
export const resetPwd = async (email: string) => {
    const confirmation = window.confirm(
        "비밀번호를 초기화 하시겠습니까?"
    );
    if (confirmation) {
        logout();
        alert(
            `${email}로 \n 비밀번호 초기화 이메일을 보냈습니다.`
        );

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("새로고침 후 다시시도 해 주세요");
            });
    }
};

// 유저 정보 업데이트
export const updateFireBaseAuthUser = async (
    e: FormEvent<HTMLFormElement>,
    api_user_data: Partial<TApiUser>
) => {
    e.preventDefault();

    try {
        const auth = getAuth();
        if (auth.currentUser !== null) {
            await updateProfile(auth.currentUser, {
                displayName: api_user_data.name,
            })
                .then(() => {
                    console.log(auth.currentUser?.uid);
                    console.log(api_user_data);
                    updateUserInfo(
                        auth.currentUser?.uid!,
                        api_user_data
                    );
                })
                .catch((err) => console.log(err));
            console.log("성공");
        } else {
            console.log("에러발생");
        }

        alert("업데이트가 완료되었습니다");
        // router.push("/");
    } catch (err) {
        alert("새로고침 후 다시시도 해 주세요");
        console.log(err);
    }
};
