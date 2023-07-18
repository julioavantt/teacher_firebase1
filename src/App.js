import { useEffect } from "react";

import {
  getFirestore,
  //  getDoc,
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

  /*   useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", "RVuV0wBrK5aJ9ryOsKd0");

    getDoc(refDoc).then((snapshot) => {
      console.log({ id: snapshot.id, ...snapshot.data() });
    });
  }, []); */

  /*   useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, []); */

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "items"),
      where("category", "==", "gorra"),
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
  }, []);

  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Julio",
        phone: 33333,
        email: "fweewefff",
      },
      items: [
        { name: "bicicleta", price: 200 },
        { name: "gorra", price: 2000 },
      ],
      total: 1000,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) =>
      console.log("orden con id" + id + " creada!")
    );
  };

  const updateOrder = () => {
    const db = getFirestore();
    const orderDoc = doc(db, "orders", "fhth6fIh3MsWqfAe6ovv");
    updateDoc(orderDoc, { total: 333331 });
  };

  return (
    <div>
      TEST FIREBASE<button onClick={sendOrder}>ENVIAR ORDEN</button>
      <button onClick={updateOrder}>ACTUALIZAR ORDEN</button>
    </div>
  );
}

export default App;
