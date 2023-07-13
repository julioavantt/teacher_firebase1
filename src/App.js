import { useEffect } from "react";

import {
  getFirestore,
  getDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  limit,
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

    const refDoc = doc(db, "items", "Pp6iwF8LqkvgEilKTe9q");

    getDoc(refDoc).then((snapshot) => {
      console.log({ id: snapshot.id, data: snapshot.data() });
    });
  }, []);

  /*   useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
    });
  }, []); */

  /* useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      where("price", ">", 10000),
      limit(10)
    );

    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
    });
  }, []); */

  return <div>TEST FIREBASE</div>;
}

export default App;
