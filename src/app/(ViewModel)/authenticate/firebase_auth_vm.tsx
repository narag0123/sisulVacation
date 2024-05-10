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

/**
 * 로그인 함수. 로그인 후 / 로 리다이렉트함
 * @param email 이메일, 회사메일이면 좋음
 * @param pwd 비번
 * @router 회원가입 후 /로 리다이렉트
 */
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

/** 로그아웃 함수
 * */
export const logout = async () => {
    await signOut(auth);
};

/** 회원가입 함수. Firebase Authenticate에 유저정보 저장하고, createUserInfo를 호출하여 DB에 저장. preventDefault 걸려있고, 요청 성공시 /로 리다이렉트 걸려있음. displayName은 이 단계에서 설정됨.
 * @param api_user_data 회원가입시 받는 양식임 TApiUser타입으로 지정되어있음
 * @router 회원가입후 /로 리다이렉트함
 * */
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

/**
 * 비번 초기화. 메일보내서 초기화됨.
 * */
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

/** Firebase Authentication의 유저 정보의 displayName 업데이트.
 * @param api_user_data 변경사항을 전송할 유저의 데이터. TApiUser타입의 일부분만 가져다가 사용함.
 * */
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
    } catch (err) {
        alert("새로고침 후 다시시도 해 주세요");
        console.log(err);
    }
};
