import { Sparkles, CheckCircle2 } from "lucide-react";
import CircularProgress from "./CircularProgress";

const MatchScore = ({ score }) => {
  const getStatus = () => {
    if (score >= 80) return "Excellent Match";
    if (score >= 60) return "Good Match";
    if (score >= 40) return "Moderate Match";
    return "Needs Improvement";
  };

  const getStatusStyle = () => {
    if (score >= 80) {
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    }

    if (score >= 60) {
      return "border-blue-500/20 bg-blue-500/10 text-blue-400";
    }

    if (score >= 40) {
      return "border-yellow-500/20 bg-yellow-500/10 text-yellow-400";
    }

    return "border-red-500/20 bg-red-500/10 text-red-400";
  };

  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:shadow-indigo-950/20 sm:p-7">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-indigo-500/20" />

      <div className="relative">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                AI Analysis
              </p>

              <h2 className="mt-0.5 text-lg font-bold tracking-tight text-white">
                Resume Match
              </h2>
            </div>

          </div>

          {/* Score Badge */}
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            Score
          </span>

        </div>

        {/* Circular Score */}
        <div className="flex justify-center py-4">
          <CircularProgress percentage={score} />
        </div>

        {/* Status */}
        <div className="mt-5 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${getStatusStyle()}`}
          >
            <CheckCircle2 size={14} />
            {getStatus()}
          </div>
        </div>

        {/* Title & Description */}
        {/* <div className="mt-6 text-center">

          <h3 className="text-xl font-bold text-white">
            Resume Match Score
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
            AI compares your skills, experience, education,
            and keywords against the job description.
          </p>

        </div> */}

        {/* Analysis Details */}
        {/* <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50">

          <div className="px-3 py-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
              Skills
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-300">
              Analyzed
            </p>
          </div>

          <div className="border-x border-slate-800 px-3 py-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
              Experience
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-300">
              Compared
            </p>
          </div>

          <div className="px-3 py-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
              Keywords
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-300">
              Matched
            </p>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default MatchScore;