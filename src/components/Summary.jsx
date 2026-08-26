import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Summary = ({ summary }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/10 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[90px]" />

      <div className="relative">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            {/* AI Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 ring-1 ring-indigo-500/30 shadow-lg shadow-indigo-950/30">
              <BrainCircuit size={29} />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  AI Candidate Analysis
                </h2>

                <Sparkles
                  size={17}
                  className="text-indigo-400"
                />

              </div>

              <p className="mt-1 text-sm text-slate-500">
                AI-generated assessment of the candidate's fit
              </p>

            </div>

          </div>

          {/* AI Status */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            Analysis Complete

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />


        {/* ================= SUMMARY HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 via-slate-950/60 to-purple-950/30"
        >

          {/* Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />

          <div className="p-6 sm:p-7">

            {/* Section Heading */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                  <Sparkles size={18} />
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-400">
                    AI Insight
                  </p>

                  <h3 className="mt-0.5 text-base font-bold text-white">
                    Executive Summary
                  </h3>

                </div>

              </div>

              <CheckCircle2
                size={19}
                className="text-emerald-400"
              />

            </div>


            {/* Summary Text */}
            <p className="mt-6 text-lg leading-7 text-slate-300">
              {summary || "No summary available."}
            </p>


            {/* Bottom Indicator */}
            <div className="mt-7 flex items-center gap-2 border-t border-slate-800/70 pt-4">

              <span className="text-[11px] text-slate-600">
                Generated from resume & job description analysis
              </span>

              <ArrowRight
                size={13}
                className="text-indigo-500"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </motion.div>
  );
};

export default Summary;