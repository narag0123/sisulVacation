import { UseContext } from "@/app/(Model)/store";
import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { getUserInfoCollection } from "@/app/(ViewModel)/authenticate/firebase_user_data_vm";
import { Timestamp } from "firebase/firestore";
import {
    createVacation,
    getVacationsCollection,
} from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import {
    workTypeChangeHdlr,
    workTypeHler,
} from "@/app/(ViewModel)/utilFuncs/date_picker_hdlr";
import { AnimatePresence, motion } from "framer-motion";
import { variantAddModal } from "@/app/(Model)/framer/framer_variant";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { DateClickArg } from "@fullcalendar/interaction";

interface Props {
    tableArg: EventClickArg | null;
    setTableArg: React.Dispatch<
        React.SetStateAction<EventClickArg | null>
    >;
    year: string;
    month: string;

    dateClickArg?: DateClickArg | null;
}

const AddEventModal: React.FC<Props> = ({
    year,
    month,
}) => {
    const context = useContext(UseContext);
    const {
        setIsEventAddModal,
        user,
        apiUserInfo,
        setApiUserInfo,
        setApiVacations,
    } = context;

    const [startDate, setStartDate] =
        useState<Dayjs | null>(
            dayjs(new Date().setHours(8, 0, 0, 0))
        );
    const [endDate, setEndDate] = useState<Dayjs | null>(
        dayjs(new Date().setHours(17, 0, 0, 0))
    );
    const [memo, setMemo] = useState<string>("");
    const [Vtype, setVType] = useState<string>("");

    /** db로 전송보낼거 */
    const api_vacation_data: TApiVacation = {
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
        <motion.section
            className="absolute left-0 bottom-0 w-full  rounded-t-3xl bg-[#ebebeb] z-50 px-10 py-6 shadow-[0_10px_20px_20px_rgba(0,0,0,0.05)] flex flex-col gap-5"
            initial={{
                y: 100 + "%",
                zIndex: 100,
            }}
            animate={{
                y: 0,
                zIndex: 100,
            }}
            exit={{
                y: 100 + "%",
                zIndex: 100,
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.2,
            }}
        >
            <div
                className="mb-5"
                onClick={() => {
                    setIsEventAddModal(false);
                }}
            ></div>
            <form
                className="flex flex-col justify-center gap-5"
                onSubmit={(e) => {
                    if (api_vacation_data.type !== "") {
                        e.preventDefault();
                        createVacation(
                            api_vacation_data
                        ).then(() => {
                            console.log("created!");
                            getVacationsCollection(
                                year,
                                month,
                                setApiVacations
                            );
                            setIsEventAddModal(false);
                        });
                    } else {
                        e.preventDefault();
                        alert("초/중/말 중에 선택해주세요");
                    }
                }}
            >
                <div className="flex justify-between font-bold text-[18px]">
                    <span>{user?.displayName}</span>
                    <span>{apiUserInfo?.group}조</span>
                </div>

                <hr className="border-black40" />
                <div className="flex flex-col w-full gap-0">
                    <div className="flex w-full">
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
                <AnimatePresence>
                    {Vtype !== "" && (
                        <>
                            <motion.div
                                initial={"initHeight"}
                                animate={"animateHeight"}
                                variants={variantAddModal}
                            >
                                <motion.div
                                    className="flex flex-col gap-[10px]"
                                    initial={"initOpacity"}
                                    animate={
                                        "animateOpacity"
                                    }
                                    variants={
                                        variantAddModal
                                    }
                                >
                                    {/* start date */}
                                    <div className="flex gap-2">
                                        <DateTimePicker
                                            className="w-full"
                                            label="시작일"
                                            value={dayjs(
                                                startDate
                                            )}
                                            onChange={(
                                                newValue
                                            ) => {
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
                                            onAccept={(
                                                newValue
                                            ) => {
                                                workTypeChangeHdlr(
                                                    newValue,
                                                    Vtype,
                                                    setVType,
                                                    "종료",
                                                    undefined,
                                                    setEndDate
                                                );
                                            }}
                                            shouldDisableDate={(
                                                day
                                            ) => {
                                                return dayjs(
                                                    dayjs(
                                                        day as Dayjs
                                                    ).format(
                                                        `YYYY-MM-DD`
                                                    )
                                                ).isBefore(
                                                    `${api_vacation_data.startDate}`
                                                );
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                            <hr className="border-black40" />
                        </>
                    )}
                </AnimatePresence>

                <div className="flex flex-col gap-2">
                    <textarea
                        className="resize-none h-[15vh] p-2 rounded-sm bg-[#f4f4f4] border-[1px] border-black40"
                        placeholder="메모를 입력하세요"
                        onChange={(e) => {
                            setMemo(e.target.value);
                        }}
                    />
                </div>
                <hr className="border-black40" />
                <button
                    type="submit"
                    className="rounded-3xl bg-point py-2 text-[white] mx-5"
                >
                    SEND
                </button>
            </form>
        </motion.section>
    );
};

export default AddEventModal;
