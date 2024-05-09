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

// VACATION INFO 저장
export const createVacation = async (
    api_vacation_data: TApiVacation
) => {
    const vacationsCollectionRef = collection(
        db,
        "vacations"
    );

    try {
        // await addDoc(vacationsCollectionRef, api_vacation_data);
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

// READ VACATIONS INFO BY MONTH AND YEAR
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

        // startDate 필드의 첫 7글자가 "2024-04"인 문서만 가져오기 위한 쿼리
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
            // where("startDate", ">=", "2024-04"),
            // where("startDate", "<", "2024-05")
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
// READ VACATIONS INFO ONLY BY YEAR
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

// DELETE FUNC
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

// GET SPECIFIC DOC FOR UPDATE
const getVacationsCollectionForUpdate = (docId: string) => {
    const vacationsCollectionRef = collection(
        db,
        "vacations"
    );
};

// UPDATE FUNC
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
