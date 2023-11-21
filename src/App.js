import { useEffect } from "react";

//import { getFirestore, getDoc, doc } from "firebase/firestore";
//import { getFirestore, getDocs, collection } from "firebase/firestore";

import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
  addDoc,
} from "firebase/firestore";

/* import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore"; */

function App() {
  //! documento by id

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productitos", "WtQvfOx6urqr1iAJU3dp");

    getDoc(refDoc).then((snapshot) => {
      console.log({ id: snapshot.id, ...snapshot.data() });
    });
  }, []);

  /* useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "productitos");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "productitos"),
      where("categoryId", "!=", "ropa"),
      limit(1)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []); */
}

export default App;
