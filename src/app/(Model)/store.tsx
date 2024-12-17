"use client";

import { auth } from "@/firebase/firebase";
import {
    UserCredential,
    UserInfo,
    onAuthStateChanged,
} from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import React, {
    useState,
    createContext,
    useEffect,
} from "react";

// types
interface ContextType {
    // BOTTOM NAV의 위치
    bottomNavState: string;
    setBottomNavState: React.Dispatch<
        React.SetStateAction<string>
    >;
    // 이벤트 ADD 모달 담당
    isEventAddModal: boolean;
    setIsEventAddModal: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    // 유저의 Authentication 정보를 담음
    user: UserInfo | null;
    setUser: React.Dispatch<
        React.SetStateAction<UserInfo | null>
    >;
    // 헤더의 유저 모달 담당
    isUserMenu: boolean;
    setIsUserMenu: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    // 유저의 FIRESTORE 정보를 담음
    apiUserInfo: DocumentData | null;
    setApiUserInfo: React.Dispatch<
        React.SetStateAction<DocumentData | null>
    >;
    // VACATION의 FIRESTORE 정보를 담음
    apiVacations: DocumentData[];
    setApiVacations: React.Dispatch<
        React.SetStateAction<DocumentData[]>
    >;
    // Modify Modal 담당
    isModifyModal: boolean;
    setIsModifyModal: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    // Filter ON/OFF 담당
    isFilter: boolean;
    setIsFilter: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    // FILTER GROUP STATE 담당
    nowFilter: TGroupFilter;
    setNowFilter: React.Dispatch<
        React.SetStateAction<TGroupFilter>
    >;
    // 연월 클릭해서 이동하는것 담당
    moveDays: boolean;
    setMoveDays: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

// 초기값 설정
const initialContext: ContextType = {
    bottomNavState: "",
    setBottomNavState: () => {},
    isEventAddModal: false,
    setIsEventAddModal: () => {},
    user: null,
    setUser: () => {},
    isUserMenu: false,
    setIsUserMenu: () => {},
    apiUserInfo: null,
    setApiUserInfo: () => {},
    apiVacations: [],
    setApiVacations: () => {},
    isModifyModal: false,
    setIsModifyModal: () => {},
    isFilter: false,
    setIsFilter: () => {},
    nowFilter: { A: true, B: true, C: true, D: true },
    setNowFilter: () => {},
    moveDays: false,
    setMoveDays: () => {},
};

// Context Provider 전송할거
export const UseContext =
    createContext<ContextType>(initialContext);

//저장해서 쓸거
const UseProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [bottomNavState, setBottomNavState] =
        useState<string>("");
    const [isEventAddModal, setIsEventAddModal] =
        useState<boolean>(false);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isUserMenu, setIsUserMenu] =
        useState<boolean>(false);
    const [apiUserInfo, setApiUserInfo] =
        useState<DocumentData | null>(null);
    const [apiVacations, setApiVacations] = useState<
        DocumentData[]
    >([]);
    const [isModifyModal, setIsModifyModal] =
        useState<boolean>(false);
    // const [isDateClick, isSetDateClick] = useState<boolean>(false)
    const [isFilter, setIsFilter] =
        useState<boolean>(false);
    const [nowFilter, setNowFilter] =
        useState<TGroupFilter>({
            A: true,
            B: true,
            C: true,
            D: true,
        });
    const [moveDays, setMoveDays] = useState(false);

    // 로그인 상태 새로고침해도 안변하게
    useEffect(() => {
        const unsub = onAuthStateChanged(
            auth,
            (currentUser: any) => {
                setUser(currentUser);
            }
        );

        return unsub;
    }, [user]);

    return (
        <UseContext.Provider
            value={{
                bottomNavState,
                setBottomNavState,
                isEventAddModal,
                setIsEventAddModal,
                user,
                setUser,
                isUserMenu,
                setIsUserMenu,
                apiUserInfo,
                setApiUserInfo,
                apiVacations,
                setApiVacations,
                isModifyModal,
                setIsModifyModal,
                isFilter,
                setIsFilter,
                nowFilter,
                setNowFilter,
                moveDays,
                setMoveDays,
            }}
        >
            {children}
        </UseContext.Provider>
    );
};
export default UseProvider;
