"use client";
import React, {
    useContext,
    useEffect,
    useRef,
} from "react";
import FullCalendarJS from "../(component)/full_calendar";
import { UseContext } from "@/app/(Model)/store";
import AddEventModal from "../(component)/addModal/add_event_modal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ko";
import { AnimatePresence, motion } from "framer-motion";

const MainPage = () => {
    const context = useContext(UseContext);
    const {
        isEventAddModal,
        setIsEventAddModal,
        isUserMenu,
        setIsUserMenu,
        isModifyModal,
        setIsModifyModal,
        isFilter,
        setIsFilter,
    } = context;

    // const touchStartY = useRef(0);

    // // Pull-to-Refresh 구현
    // useEffect(() => {
    //     // 터치 시작 이벤트 핸들러
    //     const handleTouchStart = (event: TouchEvent) => {
    //         touchStartY.current = event.touches[0].clientY;
    //     };

    //     // 터치 이동 이벤트 핸들러
    //     const handleTouchMove = (event: TouchEvent) => {
    //         const currentY = event.touches[0].clientY;
    //         const diffY = currentY - touchStartY.current;

    //         // 사용자가 페이지 맨 위에 있고, 터치를 아래로 당긴 정도가 임계값을 넘으면 페이지를 새로고침
    //         if (window.scrollY === 0 && diffY > 300) {
    //             const confirmed = confirm("refresh?");
    //             confirmed && window.location.reload();
    //         }
    //     };

    //     // 터치 이벤트 리스너 추가
    //     window.addEventListener(
    //         "touchstart",
    //         handleTouchStart
    //     );
    //     window.addEventListener(
    //         "touchmove",
    //         handleTouchMove
    //     );

    //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
    //     return () => {
    //         window.removeEventListener(
    //             "touchstart",
    //             handleTouchStart
    //         );
    //         window.removeEventListener(
    //             "touchmove",
    //             handleTouchMove
    //         );
    //     };
    // }, []);

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="ko"
            >
                {/* <AnimatePresence>
                    {isEventAddModal && <AddEventModal />}
                </AnimatePresence> */}
                <AnimatePresence>
                    {(isEventAddModal ||
                        isUserMenu ||
                        isModifyModal ||
                        isFilter) && (
                        // 검은색 가림막

                        <motion.div
                            className="w-full h-full absolute top-0 left-0 z-10 bg-black100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => {
                                setIsEventAddModal(false);
                                setIsUserMenu(false);
                                setIsModifyModal(false);
                                setIsFilter(false);
                            }}
                        ></motion.div>
                    )}
                </AnimatePresence>
                <FullCalendarJS />
            </LocalizationProvider>
        </>
    );
};

export default MainPage;
