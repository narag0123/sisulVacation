"use client";
import React, { useState, useEffect } from "react";

const EventPopUpNotice = () => {
    const [
        isEventNoticePopedUpBefore,
        setIsEventNoticePopedUpBefore,
    ] = useState<string>();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue =
                localStorage.getItem(
                    "IsEventClosedBefore"
                ) || "false";
            setIsEventNoticePopedUpBefore(storedValue);
        }
    }, []);

    return (
        <>
            {isEventNoticePopedUpBefore == "false" && (
                <div className="absolute bg-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[50%] bg-whilte shadow-xl border-[1px] rounded-lg z-[10000] p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-[22px]">
                            공지
                        </h1>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold">
                                2025. 3. 1.
                            </p>
                            <p>
                                - 4조 2교대 근무패턴
                                업데이트 하였습니다
                            </p>
                            <p>
                                - 이제 좌측상단 날짜클릭하면
                                원하는 월로 이동할 수
                                있습니다
                            </p>
                        </div>
                    </div>
                    <button
                        className="w-full p-3 bg-point text-bg rounded-xl shadow-sm"
                        onClick={() => {
                            localStorage.setItem(
                                "IsEventClosedBefore",
                                "true"
                            );
                            setIsEventNoticePopedUpBefore(
                                "true"
                            );
                            console.log("꺼짐");
                        }}
                    >
                        다음 업데이트 까지 끄기
                    </button>
                </div>
            )}
        </>
    );
};

export default EventPopUpNotice;
