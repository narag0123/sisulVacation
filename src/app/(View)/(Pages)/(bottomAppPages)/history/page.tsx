"use client";
import { UseContext } from "@/app/(Model)/store";
import BottomNavBar from "@/app/(View)/(component)/bottom_nav_bar";
import {
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import "dayjs/locale/ko";
import { getVacationsCollectionByYear } from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import dayjs, { Dayjs } from "dayjs";
import HistoryCardComponent from "@/app/(View)/(component)/history_card";

const History = () => {
    const context = useContext(UseContext);
    const {
        setBottomNavState,
        apiVacations,
        setApiVacations,
        user,
    } = context;

    const [selectedDate, setSelectedDate] = useState<
        Dayjs | null | undefined
    >(dayjs(new Date()));

    useEffect(() => {
        setBottomNavState("history");

        getVacationsCollectionByYear(
            selectedDate?.year().toString()!,
            setApiVacations
        );
    }, [selectedDate]);

    return (
        <main className="bg-bg w-full h-[100vh]">
            <section className="bg-bg w-full h-[90vh] p-5 overflow-scroll">
                <h1 className="mb-5 font-black text-[24px]">
                    HISTORY
                </h1>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ko"
                >
                    <DatePicker
                        className="w-full"
                        label={"연도별 검색"}
                        views={["year"]}
                        format={"YYYY년"}
                        value={selectedDate}
                        onChange={(newValue) =>
                            setSelectedDate(newValue)
                        }
                    />
                </LocalizationProvider>

                <HistoryCardComponent
                    apiVacations={apiVacations}
                    user={user}
                />
                <BottomNavBar />
            </section>
        </main>
    );
};

export default History;
