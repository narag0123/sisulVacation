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
import {
    deleteVacation,
    getVacationsCollectionByYear,
} from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import dayjs, { Dayjs } from "dayjs";
import { DocumentData } from "firebase/firestore";
import { UserInfo } from "firebase/auth";
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

interface Props {
    apiVacations: DocumentData[];
    user: UserInfo | null;
}

const HistoryCardComponent: React.FC<Props> = ({
    apiVacations,
    user,
}) => {
    const [expand, setExpand] = useState<number>(-1);

    const deleteConfirmHdlr = (index: DocumentData) => {
        const confirmation =
            confirm("문서를 삭제하시겠습니까?");

        if (confirmation) {
            deleteVacation(index.docId)
                .then(() => {
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <div className="flex flex-col gap-3 my-5">
            {apiVacations?.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        {e?.userId === user?.uid && (
                            <div
                                className={`rounded-md flex flex-col gap-2 border-black60 border-[1px] p-3 px-5 
                       ${expand == i && "shadow-lg"}
                        `}
                            >
                                <div
                                    className="flex  text-black100 justify-around w-full"
                                    onClick={() => {
                                        if (expand == i) {
                                            setExpand(-1);
                                        } else {
                                            setExpand(i);
                                        }
                                    }}
                                >
                                    <div className="flex gap-3">
                                        <div>
                                            {dayjs(
                                                e?.startDate
                                            ).format(
                                                "MM. DD."
                                            )}
                                        </div>
                                        <div>
                                            {e?.startTime}
                                        </div>
                                    </div>
                                    <div> | </div>
                                    <div className="flex gap-3">
                                        <div>
                                            {dayjs(
                                                e?.endDate
                                            ).format(
                                                "MM. DD"
                                            )}
                                        </div>
                                        <div>
                                            {e?.endTime}
                                        </div>
                                    </div>
                                </div>
                                {expand == i && (
                                    <>
                                        <hr className="border-black40" />

                                        <div className="flex justify-around gap-5">
                                            <button
                                                className="bg-[#ff3d3d] w-full py-1 rounded-md text-[white] font-thin"
                                                onClick={() => {
                                                    deleteConfirmHdlr(
                                                        e
                                                    );
                                                }}
                                            >
                                                삭제
                                            </button>
                                            {/* <button
                                        className="bg-point w-1/2 py-1 rounded-md text-[white] font-thin"
                                        onClick={() => {
                                            console.log(
                                                "수정"
                                            );
                                        }}
                                    >
                                        수정
                                    </button> */}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default History;
