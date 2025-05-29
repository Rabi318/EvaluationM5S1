import { onValue, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const SnackContext = createContext();
const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    const snacksRef = ref(db, "snacks");
    onValue(snacksRef, (snapshot) => {
      const data = snapshot.val();
      setSnacks(data ? Object.values(data) : []);
    });
  }, []);
  return (
    <SnackContext.Provider value={{ snacks, setSnacks }}>
      {children}
    </SnackContext.Provider>
  );
};

export { SnackContext, SnackProvider };
