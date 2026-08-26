import MatchScore from "./MatchScore";
import ATSScoreCard from "./ATSScoreCard";
import MatchingSkills from "./MatchingSkills";
import MissingSkills from "./MissingSkills";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import KeywordAnalysis from "./KeywordAnalysis";
// import SuggestionsCard from "./SuggestionsCard";
import Summary from "./Summary";

const ResultDashboard = ({ result }) => {
  if (!result) return null;

  return (
    <section className="mt-20 ">
      
      {/* Heading */}

      <div className="min-h-[200px]  mb-10 text-center">
        <hr className="border-gray-700" />
        <h2 className=" text-4xl font-bold text-white">
          Resume Analysis Report
        </h2>

        <p className=" mt-3 text-gray-300">
          AI generated comparison between Resume &
          Job Description
        </p>

      </div>

      {/* Score Section */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* <MatchScore score={result.match_score} /> */}

        {/* <ATSScoreCard atsScore={result.atsScore} /> */}

      </div>
      
      {/* Skills */}

      <div className="t-10 grid gap-8 lg:grid-cols-2">

        <MatchingSkills skills={result.deterministic_match.matched_skills} />

        <MissingSkills skills={result.deterministic_match.missing_hard_skills} />

      </div>

      {/* Experience & Education */}

       <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <ExperienceCard
          experienceYearRequired={result.deterministic_match.experience_years_required}
          experienceYearFound={result.deterministic_match.experience_years_found}
        />

        <KeywordAnalysis
          
          strengths={result.qualitative_analysis.strengths}
        />
        

      </div> 

      {/* Keyword */}
      <div className="mt-10">
      <Summary
          summary={result.qualitative_analysis.summary}
        />
        

      </div>

      

      {/* Suggestions */}

      {/* <div className="mt-10">

        <SuggestionsCard
          suggestions={result.actionable_feedback.recommendation}
        />

      </div> */}

    </section>
  );
};

export default ResultDashboard;