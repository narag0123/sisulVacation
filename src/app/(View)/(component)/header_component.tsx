import { formatter } from "@/app/(ViewModel)/CalendarButtons/calendar_buttons";
import React, {
    memo,
    useContext,
    useEffect,
    useState,
} from "react";

import { UseContext } from "@/app/(Model)/store";

import UserMenuPopup from "./addModal/user_menu_popup";
import FullCalendar from "@fullcalendar/react";
import { useRouter } from "next/navigation";

type Props = {
    calendarRef: React.MutableRefObject<FullCalendar | null>;
    isSlided: boolean;
};

const HeaderComponent: React.FC<Props> = memo(
    ({ calendarRef, isSlided }) => {
        const context = useContext(UseContext);
        const {
            user,
            setIsEventAddModal,
            isUserMenu,
            setIsUserMenu,
            setIsFilter,
        } = context;
        const [year, setYear] = useState<string>("");
        const [month, setMonth] = useState<string>("");
        const router = useRouter();

        useEffect(() => {
            setYear(formatter.year(calendarRef));
            setMonth(formatter.monthNumber(calendarRef));
        }, [isSlided]);

        return (
            <section className="flex justify-between">
                <div className="flex flex-col gap-[4px]">
                    <div className="font-black text-[24px]">
                        {month}
                    </div>
                    <div className="font-light text-black40">
                        {year}
                    </div>
                </div>

                <div className="flex gap-[20px] items-center">
                    {user === null ? (
                        <a href="/login">
                            <img
                                src="asset/img/person.crop.circle@10x.png"
                                className="object-cover w-[18px] h-[18px]"
                            />
                        </a>
                    ) : (
                        // 이름부분
                        <div>
                            <span
                                className="border-[1px] border-black100 p-1 px-2 rounded-md"
                                onClick={() => {
                                    setIsUserMenu(true);
                                }}
                            >
                                {user?.displayName}
                            </span>
                            <span>
                                {isUserMenu && (
                                    <UserMenuPopup />
                                )}
                            </span>
                        </div>
                    )}
                    <img
                        className=" w-[18px] object-cover"
                        onClick={() => {
                            window.location.reload();
                        }}
                        src="/asset/img/arrow.clockwise.square@10x.png"
                    />

                    <img
                        src="/asset/img/square.grid.2x2@10x.png"
                        className=" w-[18px] object-cover"
                        onClick={() => {
                            setIsFilter(true);
                        }}
                    />
                    <img
                        src="asset/img/plus2.png"
                        className="object-cover w-[15px] h-[15px]"
                        onClick={() => {
                            if (user) {
                                setIsEventAddModal(true);
                            } else {
                                alert("로그인 해 주세요");
                                router.push("/login");
                            }
                        }}
                    />
                    {/* <div>DISPLAYED?</div> */}
                </div>
            </section>
        );
    }
);

export default HeaderComponent;
