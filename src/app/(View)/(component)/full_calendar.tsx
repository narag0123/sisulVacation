"use client";
import React, {
    memo,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
    EventClickArg,
    EventContentArg,
} from "@fullcalendar/core";
import { formatter } from "@/app/(ViewModel)/CalendarButtons/calendar_buttons";
import HeaderComponent from "./header_component";

import {
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
} from "@/app/(ViewModel)/CalendarButtons/calendar_move_dates";

import BottomNavBar from "./bottom_nav_bar";
import { UseContext } from "@/app/(Model)/store";
import { event_data } from "@/app/(Model)/event_data";
import { getVacationsCollection } from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import { groupColorSelection } from "@/app/(ViewModel)/CalendarButtons/group_color";
import ModifyModal from "./modifyModal/modify_modal";
import { AnimatePresence } from "framer-motion";
import AddEventModal from "./addModal/add_event_modal";
import FilterModal from "./filter_modal";

const FullCalendarJS = memo(() => {
    const context = useContext(UseContext);
    const {
        setApiVacations,
        isModifyModal,
        setIsModifyModal,
        isEventAddModal,
        setIsEventAddModal,
        isFilter,
    } = context;
    const calendarRef = useRef<FullCalendar | null>(null);

    const [startX, setStartX] = useState<number | null>(
        null
    );
    const [endX, setEndX] = useState<number | null>(null);
    const [isSlided, setIsSlided] =
        useState<boolean>(false);
    const [tableArg, setTableArg] =
        useState<EventClickArg | null>(null);

    const [isDateClick, setIsDateClick] =
        useState<boolean>(false);

    useEffect(() => {
        // FullCalendar의 datesSet 이벤트 리스너 등록
        if (calendarRef.current) {
            const calendarApi =
                calendarRef.current.getApi();
            calendarApi.on("datesSet", handleDatesSet);
        }

        handleDatesSet();
    }, [calendarRef.current]);

    const handleDatesSet = () => {
        getVacationsCollection(
            formatter.year(calendarRef),
            formatter.monthNumber(calendarRef),
            setApiVacations
        );
    }; // 월 별 get요청

    // 이벤트 블럭 클릭시 동작하는 함수
    function handleDateClick(arg: EventClickArg) {
        setTableArg(arg);
        setIsModifyModal(true);
    }

    // rendering 되는 이벤트 블럭 디자인
    const renderEventContent = (
        eventInfo: EventContentArg
    ) => {
        return (
            <>
                {eventInfo.event.title ? (
                    <>
                        <div
                            className={`flex justify-center items-center h-[15px] ${groupColorSelection(
                                eventInfo
                            )}`}
                        >
                            {eventInfo.event.title}
                        </div>
                    </>
                ) : (
                    <div>없음</div>
                )}
            </>
        );
    };

    return (
        <section
            className="cal-section h-[90%] overflow-hidden"
            onTouchStart={(e) => {
                handleTouchStart(e, setStartX);
            }}
            onTouchMove={(e) => {
                handleTouchMove(e, setEndX);
            }}
            onTouchEnd={(e) => {
                handleTouchEnd(
                    startX,
                    endX,
                    calendarRef,
                    setStartX,
                    setEndX
                );
                setIsSlided(!isSlided);
            }}
        >
            <HeaderComponent
                calendarRef={calendarRef}
                isSlided={isSlided}
            />

            {/* <GroupFilter /> */}
            {/* TODO: 날짜 클릭해서 ADD EVENT 동작하도록 */}
            <div className="my-5 fullCalContainer">
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                    ]}
                    initialView="dayGridMonth"
                    height={"auto"}
                    // dayMaxEventRows={4}
                    headerToolbar={false}
                    events={event_data()}
                    eventClick={handleDateClick}
                    ref={calendarRef}
                    eventContent={renderEventContent}
                />
                <AnimatePresence>
                    {isModifyModal && (
                        <ModifyModal
                            tableArg={tableArg}
                            setTableArg={setTableArg}
                            year={formatter.year(
                                calendarRef
                            )}
                            month={formatter.monthNumber(
                                calendarRef
                            )}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isEventAddModal && (
                        <AddEventModal
                            tableArg={tableArg}
                            setTableArg={setTableArg}
                            year={formatter.year(
                                calendarRef
                            )}
                            month={formatter.monthNumber(
                                calendarRef
                            )}
                        />
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isFilter && <FilterModal />}
            </AnimatePresence>
            <BottomNavBar />
        </section>
    );
});
export default FullCalendarJS;
