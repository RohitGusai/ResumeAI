import { CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const ATSScoreCard = ({ atsScore = 0 }) => {
  const passedChecks = [
    "Contact Information",
    "Professional Summary",
    "Work Experience",
    "Education",
    "Skills Section",
  ];

  const improvements = [
    "Add more job-specific keywords",
    "Use measurable achievements",
    "Reduce graphics & tables",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8"
    >
      {/* Top Section */}
      <div>
        {/* Header with Circular Score Badge */}
        <div className="flex items-center justify-between gap-4 ">
          <div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
              Analysis Metric
            </span>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              ATS Compatibility
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Applicant Tracking System benchmark
            </p>
          </div>

          <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-indigo-50/80 ring-1 ring-indigo-600/15">
            <span className="text-3xl font-extrabold tracking-tight text-indigo-600">
              {atsScore}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500/80">
              Score
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-slate-100" />

        {/* Passed Checks */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-emerald-800">
              Passed Checks
            </h3>
            <span className="text-xs font-medium text-emerald-600">
              {passedChecks.length} verified
            </span>
          </div>

          <div className="space-y-2">
            {passedChecks.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-emerald-100/80 bg-emerald-50/40 px-3.5 py-2.5 transition-colors hover:bg-emerald-50/70"
              >
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-emerald-600"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Improvements */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-amber-800">
              Suggested Improvements
            </h3>
            <span className="text-xs font-medium text-amber-600">
              {improvements.length} actions
            </span>
          </div>

          <div className="space-y-2">
            {improvements.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-amber-100/80 bg-amber-50/40 px-3.5 py-2.5 transition-colors hover:bg-amber-50/70"
              >
                <AlertTriangle
                  size={18}
                  className="shrink-0 text-amber-600"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ATSScoreCard;