import { db } from "@/firebase/firebase";
import {
    collection,
    getDocs,
    updateDoc,
    doc,
    deleteDoc,
    setDoc,
    DocumentData,
    query,
    where,
} from "firebase/firestore";
import { FormEvent } from "react";

/**
 * VACATION INFO 를 DB에 저장
 * @param api_vacation_data DB에 저장할 데이터. TApiVacation 타입으로 들어와야함.
 */
export const createVacation = async (
    api_vacation_data: TApiVacation
) => {
    const vacationsCollectionRef = collection(
        db,
        "vacations"
    );

    try {
        const vacationDocRef = doc(vacationsCollectionRef); // 문서 참조 생성

        // 문서에 ID와 데이터를 함께 저장
        await setDoc(vacationDocRef, {
            docId: vacationDocRef.id, // 문서 ID 저장
            ...api_vacation_data, // 다른 필드들도 함께 저장
        }).then(() => {
            console.log("Create Success!");
        });
    } catch (error) {
        console.log("FAILED!");
        console.log(error);
    }
};

/**
 * READ VACATIONS INFO BY MONTH AND YEAR. apiVacations에 year, month정보와 함께 array형태로 저장하여 보여줌.
 * @param year 연도
 * @param month 월
 * @param setApiVacations 서버에서 가져오는 모든 휴가 정보인 apiVacations array를 설정
 * */
export const getVacationsCollection = async (
    year: string,
    month: string,
    setApiVacations: React.Dispatch<
        React.SetStateAction<DocumentData>[]
    >
) => {
    try {
        const vacationsCollectionRef = collection(
            db,
            "vacations"
        );

        /** startDate 필드의 첫 7글자가 "2024-04"와 같은 형태의 문서만 가져오기 위한 쿼리. 이렇게 조건을 걸어준것만 가져와야 사용량을 줄일 수 있다 */
        const queryYMCondition = query(
            vacationsCollectionRef,
            where("startDate", ">=", `${year}-${month}`),
            where(
                "startDate",
                "<",
                `${year}-${(parseInt(month) + 1)
                    .toString()
                    .padStart(2, "0")}`
            )
        );

        const querySnapshot = await getDocs(
            queryYMCondition
        );
        const vacationsData = querySnapshot.docs.map(
            (doc) => doc.data()
        );

        // Firebase에서 가져온 데이터를 apiVacations에 설정합니다.
        setApiVacations(vacationsData);

        console.log("VACATION GET SUCCESS");
    } catch (error) {
        console.error(
            "휴가 정보 가져오기 중 오류가 발생했습니다:",
            error
        );
    }
};
/** DB에서 휴가정보를 YEAR별로 가져옴 */
export const getVacationsCollectionByYear = async (
    year: string,
    setApiVacations: React.Dispatch<
        React.SetStateAction<DocumentData>[]
    >
) => {
    try {
        const vacationsCollectionRef = collection(
            db,
            "vacations"
        );

        // startDate 필드의 첫 7글자가 "2024-04"인 문서만 가져오기 위한 쿼리
        const queryYMCondition = query(
            vacationsCollectionRef,
            where("startDate", ">=", `${year}`),
            where(
                "startDate",
                "<",
                `${(parseInt(year) + 1)
                    .toString()
                    .padStart(2, "0")}`
            )
        );

        const querySnapshot = await getDocs(
            queryYMCondition
        );
        const vacationsData = querySnapshot.docs.map(
            (doc) => doc.data()
        );

        // Firebase에서 가져온 데이터를 apiVacations에 설정합니다.
        setApiVacations(vacationsData);

        console.log("VACATION GET SUCCESS");
    } catch (error) {
        console.error(
            "휴가 정보 가져오기 중 오류가 발생했습니다:",
            error
        );
    }
};

/**
 * firebase document의 docId 를 가져와서 지움
 * @param docId firebase document의 docId
 * */
export const deleteVacation = async (docId: string) => {
    try {
        const unmodified = doc(db, "vacations", docId);
        await deleteDoc(unmodified);
        console.log("delete success!");
    } catch (error) {
        console.log(error);
        console.log("failed!");
    }
};

/** UPDATE FUNC
 * @param api_vacation_modify_data  변경할 데이터. TApiVacation 타입에 맞게 저장되어야 함
 * @param uid 어떤 문서를 찾을지에 대한 변수. firebase document의 docId에 해당함
 * */
export const modifyVacation = async (
    e: FormEvent,
    api_vacation_modify_data: TApiVacation,
    uid: string
) => {
    try {
        const unmodified = doc(db, "vacations", uid);
        const newField = api_vacation_modify_data;
        await updateDoc(unmodified, newField);

        console.log("update success!");
    } catch (error) {
        console.log(error);
        console.log("failed!");
    }
};
