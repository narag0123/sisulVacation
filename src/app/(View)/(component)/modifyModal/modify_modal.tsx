"use client";
import { UseContext } from "@/app/(Model)/store";
import { getUserInfoCollection } from "@/app/(ViewModel)/authenticate/firebase_user_data_vm";
import {
    createVacation,
    deleteVacation,
    getVacationsCollection,
    modifyVacation,
} from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import {
    workTypeChangeHdlr,
    workTypeHler,
} from "@/app/(ViewModel)/utilFuncs/date_picker_hdlr";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import {
    DocumentData,
    Timestamp,
} from "firebase/firestore";
import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import { motion } from "framer-motion";
import { variantModifyModal } from "@/app/(Model)/framer/framer_variant";

interface Props {
    tableArg: EventClickArg | null;
    setTableArg: React.Dispatch<
        React.SetStateAction<EventClickArg | null>
    >;
    year: string;
    month: string;
}

const ModifyModal: React.FC<Props> = ({
    tableArg,
    year,
    month,
}) => {
    const context = useContext(UseContext);
    const {
        user,
        setIsModifyModal,
        apiVacations,
        setApiVacations,
        apiUserInfo,
        setApiUserInfo,
    } = context;

    /**
     * apiVacation을 docId에 따라 1개만 가져오도록 필터링한 것
     */
    const apiVacationEventFilter: DocumentData | null =
        apiVacations
            ? apiVacations.filter(
                  (item) =>
                      item.docId ===
                      tableArg?.event.extendedProps.docId
              )[0]
            : null;

    const [startDate, setStartDate] =
        useState<Dayjs | null>(
            apiVacationEventFilter
                ? dayjs(
                      apiVacationEventFilter.startDate +
                          " " +
                          apiVacationEventFilter.startTime
                  )
                : null
        );
    const [endDate, setEndDate] = useState<Dayjs | null>(
        apiVacationEventFilter
            ? dayjs(
                  apiVacationEventFilter.endDate +
                      " " +
                      apiVacationEventFilter.endTime
              )
            : null
    );
    const [memo, setMemo] = useState<string>(
        apiVacationEventFilter
            ? apiVacationEventFilter.memo
            : null
    );
    const [Vtype, setVType] = useState<string>(
        apiVacationEventFilter
            ? apiVacationEventFilter.type
            : null
    );

    /**
     * db로 전송 보낼거
     */
    const api_vacation_modify_data: TApiVacation = {
        userId: `${user?.uid !== null ? user?.uid : ""}`,

        name: `${
            user?.displayName !== null
                ? user?.displayName
                : ""
        }`,
        group: `${
            apiUserInfo?.group !== null
                ? apiUserInfo?.group
                : ""
        }`,

        startDate: `${startDate?.format(
            "YYYY"
        )}-${startDate?.format("MM")}-${startDate?.format(
            "DD"
        )}`,
        startTime: `${startDate?.format(
            "HH"
        )}:${startDate?.format("mm")}`,
        endDate: `${endDate?.format(
            "YYYY"
        )}-${endDate?.format("MM")}-${endDate?.format(
            "DD"
        )}`,
        endTime: `${endDate?.format(
            "HH"
        )}:${endDate?.format("mm")}`,

        type: Vtype,
        memo: memo,
        timeStamp: Timestamp.now().toDate().toString(),
    };

    useEffect(() => {
        if (user !== null) {
            getUserInfoCollection(
                user?.uid!,
                setApiUserInfo
            );
        }
    }, [user]);

    return (
        <motion.div
            className="absolute bg-bg w-[90%] p-8 z-20  rounded-md shadow-2xl"
            // left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            initial={"initModifyModal"}
            animate={"animateModifyModal"}
            exit={"exitModifyModal"}
            variants={variantModifyModal}
        >
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-[20px] font-bold">
                    {apiVacationEventFilter?.name}
                </h1>
                <button
                    className={`px-5 py-1 
                      ${
                          user?.uid !==
                          apiVacationEventFilter?.userId
                              ? "border-black60 text-black60"
                              : "border-[red] text-[red]"
                      }
                   
                     border-[1px] rounded-md  text-[14px]
                    `}
                    disabled={
                        user?.uid !==
                            apiVacationEventFilter?.userId &&
                        true
                    }
                    onClick={(e) => {
                        const confirm = window.confirm(
                            "이벤트를 삭제 하시겠습니까?"
                        );
                        if (confirm) {
                            // e.preventDefault();
                            deleteVacation(
                                apiVacationEventFilter?.docId
                            ).then(() => {
                                getVacationsCollection(
                                    year,
                                    month,
                                    setApiVacations
                                );
                                setIsModifyModal(false);
                            });
                        }
                    }}
                >
                    삭제하기
                </button>
            </div>
            <form
                className="flex flex-col justify-center gap-5"
                onSubmit={(e) => {
                    if (
                        api_vacation_modify_data.type !== ""
                    ) {
                        e.preventDefault();
                        modifyVacation(
                            e,
                            api_vacation_modify_data,
                            tableArg?.event.extendedProps
                                .docId
                        ).then(() => {
                            console.log("then active");

                            getVacationsCollection(
                                year,
                                month,
                                setApiVacations
                            );
                            setIsModifyModal(false);
                        });
                    } else {
                        e.preventDefault();
                        alert("초/중/말 중에 선택해주세요");
                    }
                }}
            >
                <hr className="border-black40" />
                <div className="flex flex-col w-full">
                    <div className="flex w-full ">
                        <button
                            className={`w-1/3 border-[1px] border-r-0 border-black60 py-1 rounded-tl-xl ${
                                Vtype == "초" &&
                                "bg-[black] text-bg"
                            }`}
                            onClick={(e) => {
                                workTypeHler(
                                    e,
                                    "초",
                                    setStartDate,
                                    setEndDate
                                );
                                setVType("초");
                            }}
                        >
                            초번
                        </button>
                        <button
                            className={`w-1/3 border-[1px] border-r-0 border-black60 py-1 ${
                                Vtype == "중" &&
                                "bg-[black] text-bg"
                            }`}
                            onClick={(e) => {
                                workTypeHler(
                                    e,
                                    "중",
                                    setStartDate,
                                    setEndDate
                                );
                                setVType("중");
                            }}
                        >
                            중번
                        </button>
                        <button
                            className={`w-1/3 border-[1px] border-black60 py-1 rounded-tr-xl ${
                                Vtype == "말" &&
                                "bg-[black] text-bg"
                            }`}
                            onClick={(e) => {
                                workTypeHler(
                                    e,
                                    "말",
                                    setStartDate,
                                    setEndDate
                                );
                                setVType("말");
                            }}
                        >
                            말번
                        </button>
                    </div>
                    <div className="flex w-full">
                        <button
                            className={`w-1/2 border-[1px] border-r-0 border-t-0 border-black60 py-1 rounded-bl-xl ${
                                Vtype == "주" &&
                                "bg-[black] text-bg"
                            }`}
                            onClick={(e) => {
                                workTypeHler(
                                    e,
                                    "주",
                                    setStartDate,
                                    setEndDate
                                );
                                setVType("주");
                            }}
                        >
                            주간
                        </button>
                        <button
                            className={`w-1/2 border-[1px] border-t-0 border-black60 py-1 rounded-br-xl ${
                                Vtype == "야" &&
                                "bg-[black] text-bg"
                            }`}
                            onClick={(e) => {
                                workTypeHler(
                                    e,
                                    "야",
                                    setStartDate,
                                    setEndDate
                                );
                                setVType("야");
                            }}
                        >
                            야간
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    {/* start date */}
                    <div className="flex gap-2">
                        <DateTimePicker
                            className="w-full"
                            label="시작일"
                            value={dayjs(startDate)}
                            onAccept={(newValue) => {
                                workTypeChangeHdlr(
                                    newValue,
                                    Vtype,
                                    setVType,
                                    "시작",
                                    setStartDate,
                                    setEndDate
                                );
                            }}
                            format="YYYY-MM-DD (dd) HH:mm"
                            ampm={false}
                        />
                    </div>
                    {/* end date */}
                    <div className="flex gap-2">
                        <DateTimePicker
                            className="w-full"
                            label="종료일"
                            format="YYYY-MM-DD (dd) HH:mm"
                            ampm={false}
                            value={endDate}
                            onAccept={(newValue) => {
                                workTypeChangeHdlr(
                                    newValue,
                                    Vtype,
                                    setVType,
                                    "종료",
                                    undefined,
                                    setEndDate
                                );
                            }}
                            shouldDisableDate={(day) => {
                                return dayjs(
                                    dayjs(
                                        day as Dayjs
                                    ).format(`YYYY-MM-DD`)
                                ).isBefore(
                                    `${api_vacation_modify_data.startDate}`
                                );
                            }}
                        />
                    </div>
                </div>
                <hr className="border-black40" />
                <div className="flex flex-col gap-2">
                    <textarea
                        disabled={
                            user?.uid !==
                                apiVacationEventFilter?.userId &&
                            true
                        }
                        className="resize-none h-[15vh] p-2 rounded-sm bg-[#f4f4f4] border-[1px] border-black40"
                        placeholder={
                            apiVacationEventFilter?.memo ===
                            ""
                                ? `메모를 입력하세요`
                                : apiVacationEventFilter?.memo
                        }
                        onChange={(e) => {
                            setMemo(e.target.value);
                        }}
                    />
                </div>
                <hr className="border-black40" />
                <button
                    type="submit"
                    className={`px-5 py-2 
                    ${
                        user?.uid !==
                        apiVacationEventFilter?.userId
                            ? "bg-black60"
                            : "bg-point"
                    }
                     text-bg rounded-md w-full`}
                    disabled={
                        user?.uid !==
                            apiVacationEventFilter?.userId &&
                        true
                    }
                >
                    수정
                </button>
            </form>
        </motion.div>
    );
};

export default ModifyModal;
