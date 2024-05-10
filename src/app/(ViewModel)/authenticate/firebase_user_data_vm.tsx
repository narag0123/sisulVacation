import { db } from "@/firebase/firebase";
import {
    updateDoc,
    doc,
    setDoc,
    getDoc,
    DocumentData,
} from "firebase/firestore";

/**
 * 회원가입시 USERINFO DB에 저장 */
export const createUserInfo = async (
    api_user_data: TApiUser,
    uid: string
) => {
    const { password, ...rest } = api_user_data;

    const usersCollectionRef = doc(db, "userInfo", uid);
    await setDoc(usersCollectionRef, rest);
};

/**
 * READ USERINFO BY UID
 * @param setApiUserInfo 유저를 uid에 의해 불러오고, 해당정보를 apiUserInfo에 저장하여 표기함.
 * */
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

/** USERINFO UPDATE IN FIREBASE. firebase storage에 저장된 UserInfo 문서 업데이트
 * @param uid userInfo document의 docId
 * @param api_user_modify_data 실제로 document에 업데이트될 정보. TApiUser타입의 일부분만 가져옴(사실 다 가져와도될듯?)
 * */
export const updateUserInfo = async (
    uid: string,
    api_user_modify_data: Partial<TApiUser>
) => {
    const unmodified = doc(db, "userInfo", uid);
    const newField = api_user_modify_data;
    await updateDoc(unmodified, newField);
};
