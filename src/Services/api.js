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
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export default api;