import {
  FileSearch,
  FileText,
  BriefcaseBusiness,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative mt-16 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20 shadow-lg shadow-indigo-950/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-500/15">
          <FileSearch size={38} />
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">

          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            <Sparkles size={12} />
            AI Resume Analyzer
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to Analyze Your Resume?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Upload your resume and job description to discover how well
            your profile matches the role with AI-powered analysis.
          </p>

        </div>

        {/* Process Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">

          {/* Resume */}
          <div className="group/card rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-950/80">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <FileText size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Resume
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  PDF or DOCX
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm leading-5 text-slate-500">
              Upload your latest resume for skill and experience analysis.
            </p>

          </div>

          {/* Job Description */}
          <div className="group/card rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-950/80">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Job Description
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  PDF, DOCX or TXT
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm leading-5 text-slate-500">
              Add the job requirements you want to compare against.
            </p>

          </div>

          {/* AI Report */}
          <div className="group/card rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-950/80">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                <Sparkles size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  AI Report
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  Match & ATS Analysis
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm leading-5 text-slate-500">
              Get your match score, missing skills and detailed insights.
            </p>

          </div>

        </div>

        {/* Bottom Hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
          <span>Upload both documents to get started</span>
          <ArrowRight size={14} className="text-indigo-500" />
        </div>

      </div>
    </motion.div>
  );
};

export default EmptyState;