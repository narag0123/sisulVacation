import { db } from "@/firebase/firebase";
import {
    updateDoc,
    doc,
    setDoc,
    getDoc,
    DocumentData,
} from "firebase/firestore";

// 회원가입시 USERINFO 저장
export const createUserInfo = async (
    api_user_data: TApiUser,
    uid: string
) => {
    const { password, ...rest } = api_user_data;

    const usersCollectionRef = doc(db, "userInfo", uid);
    await setDoc(usersCollectionRef, rest);
};

// READ USERINFO
export const getUserInfoCollection = async (
    uid: string,
    setApiUserInfo: React.Dispatch<
        React.SetStateAction<DocumentData>
    >
) => {
    try {
        const docRef = doc(db, "userInfo", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setApiUserInfo(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (err) {
        console.log(err);
    }
};

// USERINFO UPDATE IN FIREBASE
export const updateUserInfo = async (
    uid: string,
    api_user_modify_data: Partial<TApiUser>
) => {
    const unmodified = doc(db, "userInfo", uid);
    const newField = api_user_modify_data;
    await updateDoc(unmodified, newField);
};
