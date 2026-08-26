// const mockResult = {
//   matchScore: 87,

//   atsScore: 91,

//   matchingSkills: [
//     "React",
//     "JavaScript",
//     "Tailwind CSS",
//     "REST API",
//     "Git",
//     "MySQL",
//     "Spring Boot"
//   ],

//   missingSkills: [
//     "Docker",
//     "AWS",
//     "Redis",
//     "Kubernetes"
//   ],

//   experience: {
//     required: "3 Years",
//     candidate: "2.5 Years",
//     matchPercentage: 82
//   },

//   education: {
//     required: "Bachelor's Degree",
//     candidate: "MCA",
//     match: true,
//     score: 95
//   },

//   keywords: [
//     {
//       keyword: "React",
//       percentage: 100
//     },
//     {
//       keyword: "JavaScript",
//       percentage: 95
//     },
//     {
//       keyword: "REST API",
//       percentage: 80
//     },
//     {
//       keyword: "Docker",
//       percentage: 20
//     },
//     {
//       keyword: "AWS",
//       percentage: 0
//     }
//   ],

//   suggestions: [
//     "Mention Docker if you have experience.",
//     "Add measurable achievements.",
//     "Include GitHub project links.",
//     "Increase keyword density.",
//     "Highlight leadership experience."
//   ]
// };

// export default mockResult;

import api from "./api";

export const compareResume = async (resume, jobDescription) => {
    const formData = new FormData();

    formData.append("resume", resume);
    formData.append("job_description", jobDescription);

    const response = await api.post(
        "/compare/compare",
        formData
    );

    return response.data;
};