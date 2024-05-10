"use client";
import React, { useState } from "react";
import { DocumentData } from "firebase/firestore";
import { UserInfo } from "firebase/auth";
import { deleteVacation } from "@/app/(ViewModel)/authenticate/firebase_vacation_data_vm";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { variantHistoryCard } from "@/app/(Model)/framer/framer_variant";

interface Props {
    apiVacations: DocumentData[];
    user: UserInfo | null;
}

const HistoryCardComponent: React.FC<Props> = ({
    apiVacations,
    user,
}) => {
    const [expand, setExpand] = useState<number>(-1); // -1은 닫혀있는 상태 / -1이 아니면 i번째 카드가 open됨

    /**
     * history page에서 delete vm불러오고 나서 페이지 새로고침하는 함수. 페이지 새로고침 안하면 반영이 안됨.
     */
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
            {/* history card를 apiVacation으로 불러오고 map돌림. */}
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
                                    className="flex text-black100 justify-around w-full"
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
                                <AnimatePresence>
                                    {expand == i && (
                                        <motion.div
                                            initial={
                                                "initFilterModal"
                                            }
                                            animate={
                                                "animateFilterModal"
                                            }
                                            variants={
                                                variantHistoryCard
                                            }
                                        >
                                            {e.memo !==
                                                "" && (
                                                <>
                                                    <hr className="border-black40" />
                                                    <div className="flex flex-col my-2 px-3">
                                                        {
                                                            e?.memo
                                                        }
                                                    </div>
                                                </>
                                            )}
                                            <hr className="border-black40 mb-3" />
                                            <div className="flex justify-around ">
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
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default HistoryCardComponent;
