import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import UploadCard from "./UploadCard";
import MatchScore from "./MatchScore";
import ResultDashboard from "./ResultDashboard";
import { compareResume } from "../Services/CompareService";
import EmptyState from "./common/EmptyState";
import ErrorCard from "./common/ErrorCard";
import JobDescriptionCard from "./JobDescriptionCard";


const CompareSection = () => {
  const [resume, setResume] = useState(null);
  const [jd, setJD] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  // const [score, setScore] = useState(0);
  const [error, setError] = useState(null);



  const compareFiles = async () => {


    if(!resume || !jd.trim())
    {
        return;
    }

    setLoading(true);
    setError(null);
    

    // const formData = new FormData();

    // formData.append("resume",resume);

    // formData.append("jobDescription",jd);

    try{

        const response = await compareResume(resume,jd);
        console.log("API Response:", response?.deterministic_match.match_score);

        setResult(response);

    }
    catch(error){

    console.error(error);

    setError(
        error.message ||
        "Unable to compare resume."
    );

}

    finally{

        setLoading(false);

    }



  // setTimeout(() => {
  //   const random =
  //     Math.floor(Math.random() * 41) + 60;

  //   console.log("Result Score:", result?.matchScore);
  //   setScore(random);

  //   setLoading(false);
  // }, 2500);

//   setResult({
//     matchScore: 87,

//     atsScore: 91,

//     matchingSkills: [
//         "React",
//         "JavaScript",
//         "Tailwind CSS",
//         "Git",
//         "REST API"
//     ],

//     missingSkills: [
//         "Docker",
//         "AWS",
//         "Kubernetes"
//     ],

//     experience: {
//         required: "3 Years",
//         candidate: "2.5 Years"
//     },

//     education: {
//         required: "Bachelor's Degree",
//         candidate: "MCA"
//     },

//     keywords: [
//         "React",
//         "Redux",
//         "Node.js",
//         "MongoDB",
//         "REST"
//     ],

//     suggestions: [
//         "Add Docker experience",
//         "Mention CI/CD pipelines",
//         "Include measurable project achievements",
//         "Use more ATS keywords"
//     ]
// });
};

  return (
    
    <section className="mx-auto min-h-screen w-full  px-6 py-20 bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white ">
      <LoadingOverlay isLoading={loading} />
      <div className=" grid gap-10 lg:grid-cols-3">

        <UploadCard
          title="Resume"
          acceptedFiles=".pdf,.doc,.docx"
          file={resume}
          setFile={setResume}
        />

        <div className="flex flex-col items-center justify-center gap-8">

          <MatchScore score={result?.deterministic_match.match_score} />

          <button
  onClick={compareFiles}
  disabled={loading || !resume || jd.trim() === ""}
  className=" rounded-xl border border-indigo-600 bg-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-500 disabled:text-slate-900 disabled:shadow-none"
>
  {loading ? "Analyzing Resume..." : "Compare Resume"}
</button>

        </div>

        <JobDescriptionCard
          value={jd}
          onChange={setJD}
        />

      </div>

      {error ? (
  <ErrorCard
    title="Comparison Failed"
    message={error}
    onRetry={compareFiles}
  />
) : result ? (
  <ResultDashboard result={result} />
) : (
  <EmptyState />
)}


    </section>
  );
};

export default CompareSection;