import { async } from "@firebase/util";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const getAllBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));

    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const restOfData = doc.data();
        return { id, ...restOfData };
    });
    return data;
};

export const getBookById = async (id) => {
    const docRef = doc(db, "books", id);
    const docSnap = await getDoc(docRef);

    // console.log(docSnap.exists());
    // console.log(docSnap.data());

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Doc not found");
    }
};
