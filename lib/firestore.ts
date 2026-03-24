import { db } from "./firebase";
import { collection, addDoc, query, orderBy, getDocs, limit, serverTimestamp } from "firebase/firestore";

export async function saveMessage(userId: string, bookId: string, chapterId: string, role: "user" | "assistant", text: string) {
  try {
    const messagesRef = collection(db, `users/${userId}/chats/${bookId}_${chapterId}/messages`);
    await addDoc(messagesRef, {
      role,
      text,
      timestamp: serverTimestamp()
    });
  } catch (err) {
    console.error("Error saving message", err);
  }
}

export async function getChatHistory(userId: string, bookId: string, chapterId: string) {
  try {
    const messagesRef = collection(db, `users/${userId}/chats/${bookId}_${chapterId}/messages`);
    const q = query(messagesRef, orderBy("timestamp", "asc"), limit(50));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (err) {
    console.error("Error fetching history", err);
    return [];
  }
}
