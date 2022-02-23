import { doc, collection, onSnapshot } from "firebase/firestore";

import { FETCH_SINGLE_CLASS } from "../Constants/Constants";

const singleClassStudent = (payload) => {
  console.log("payload" ,payload)
  return {
    type: FETCH_SINGLE_CLASS,
    payload,
  };
};

export { singleClassStudent };
