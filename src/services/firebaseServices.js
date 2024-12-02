import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Adjust the path as per your folder structure

export const fetchUserDetails = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //console.log("User data:", docSnap.data());
            return docSnap.data(); // Contains fullName and email
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
};
