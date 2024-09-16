import { collection, addDoc, getDocs, doc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const addProduct = async (name: string, category: string, expirationDate: string, price: number, branch: string, dateAdded: string) => {
  try {
    await addDoc(collection(db, 'products'), {
      name,
      category,
      expirationDate,
      price,
      branch,
      dateAdded
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getProducts = async () => {
  const q = query(collection(db, 'products'), orderBy('expirationDate'));
  const querySnapshot = await getDocs(q);
  let products: any[] = [];
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};

export const deleteProduct = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'products', id));
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};
