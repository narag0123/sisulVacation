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
