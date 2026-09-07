// import mockResult from "./MockData.js";

// export const compareResume = async (formData) => {
//   console.log("Uploading Files...");

//   console.log(formData.get("resume"));

//   console.log(formData.get("jobDescription"));

//   // simulate server delay

//   await new Promise((resolve) => {
//     setTimeout(resolve, 2500);
//   });

//   return mockResult;
// };

import axios from "axios";

const api = axios.create({
    baseURL: "https://43-204-211-69.nip.io/api",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export default api;
