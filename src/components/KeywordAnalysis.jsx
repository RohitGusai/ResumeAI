import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const KeywordAnalysis = ({
  strengths = [],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        group relative w-full overflow-hidden
        rounded-2xl
        border border-slate-800/80
        bg-slate-900/70
        shadow-2xl
        backdrop-blur-xl
      "
    >

      {/* ================= AMBIENT GLOWS ================= */}

      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-56 w-56
          rounded-full
          bg-indigo-500/10
          blur-[90px]
          transition-opacity
          duration-500
          group-hover:bg-indigo-500/15
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-24 -left-24
          h-56 w-56
          rounded-full
          bg-emerald-500/10
          blur-[90px]
        "
      />


      <div className="relative">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between gap-5 p-6 sm:p-7">

          <div className="flex min-w-0 items-center gap-4">

            {/* Icon */}

            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl
                bg-indigo-500/10
                text-indigo-400
                ring-1 ring-indigo-500/20
                shadow-lg
                shadow-indigo-950/20
              "
            >
              <BrainCircuit size={24} />
            </div>


            {/* Title */}

            <div className="min-w-0">

              <div className="flex flex-wrap items-center gap-2">

                <h2
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Keyword Analysis
                </h2>

                <Sparkles
                  size={15}
                  className="text-indigo-400"
                />

              </div>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-500
                  sm:text-sm
                "
              >
                AI-identified strengths from your resume
              </p>

            </div>

          </div>


          {/* Strength Count */}

          <div
            className="
              flex h-12 min-w-12
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-xl
              border border-emerald-500/20
              bg-emerald-500/10
              px-3
            "
          >

            <span
              className="
                text-lg
                font-bold
                text-emerald-400
              "
            >
              {strengths.length}
            </span>

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-wider
                text-emerald-500/70
              "
            >
              Strengths
            </span>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="h-px bg-slate-800" />


        {/* ================= STRENGTHS ================= */}

        <div className="p-6 sm:p-7">

          {strengths.length > 0 ? (

            <div>

              {/* Section Header */}

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-slate-300
                    "
                  >
                    Candidate Strengths
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-600
                    "
                  >
                    Key strengths identified from your resume
                  </p>

                </div>

                <div
                  className="
                    hidden
                    items-center
                    gap-1.5
                    rounded-full
                    border border-emerald-500/20
                    bg-emerald-500/5
                    px-3 py-1.5
                    text-xs
                    font-medium
                    text-emerald-400
                    sm:flex
                  "
                >
                  <TrendingUp size={13} />

                  {strengths.length}{" "}
                  {strengths.length === 1
                    ? "Strength"
                    : "Strengths"}
                </div>

              </div>


              {/* Strength Cards */}

              <div className="grid gap-3">

                {strengths.map((strength, index) => (

                  <motion.div
                    key={index}

                    initial={{
                      opacity: 0,
                      x: -15,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: 0.25 + index * 0.08,
                    }}

                    whileHover={{
                      x: 3,
                    }}

                    className="
                      group/strength
                      flex items-start gap-3
                      rounded-xl
                      border border-slate-800
                      bg-slate-950/50
                      p-4
                      transition-all
                      duration-200
                      hover:border-emerald-500/20
                      hover:bg-emerald-500/5
                    "
                  >

                    {/* Number */}

                    <div
                      className="
                        flex h-9 w-9
                        shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-emerald-500/10
                        text-xs
                        font-bold
                        text-emerald-400
                        ring-1 ring-emerald-500/20
                      "
                    >
                      {index + 1}
                    </div>


                    {/* Content */}

                    <div className="min-w-0">

                      <div className="mb-1 flex items-center gap-2">

                        <CheckCircle2
                          size={14}
                          className="
                            shrink-0
                            text-emerald-400
                            transition-transform
                            duration-200
                            group-hover/strength:scale-110
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wider
                            text-emerald-500/70
                          "
                        >
                          Strength {index + 1}
                        </span>

                      </div>

                      <p
                        className="
                          text-sm
                          font-medium
                          leading-6
                          text-slate-300
                        "
                      >
                        {strength}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          ) : (

            /* ================= EMPTY STATE ================= */

            <div
              className="
                flex min-h-32
                flex-col
                items-center
                justify-center
                rounded-xl
                border border-slate-800
                bg-slate-950/50
                text-center
              "
            >

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-slate-800
                  text-slate-600
                "
              >
                <BrainCircuit size={20} />
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  font-medium
                  text-slate-400
                "
              >
                No candidate strengths identified
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-600
                "
              >
                Try comparing your resume with another job description.
              </p>

            </div>

          )}

        </div>


        {/* ================= AI INSIGHT ================= */}

        <div className="px-6 pb-6 sm:px-7 sm:pb-7">

          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border border-indigo-500/20
              bg-gradient-to-r
              from-indigo-950/40
              via-slate-950/50
              to-indigo-950/20
              p-4
            "
          >

            {/* Accent */}

            <div
              className="
                absolute
                left-0 top-0
                h-full w-1
                bg-gradient-to-b
                from-indigo-400
                to-purple-600
              "
            />


            <div className="flex items-start gap-3">

              {/* Icon */}

              <div
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-indigo-500/10
                  text-indigo-400
                  ring-1 ring-indigo-500/20
                "
              >
                <BrainCircuit size={17} />
              </div>


              {/* Content */}

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-indigo-300
                  "
                >
                  AI-Powered Analysis
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  This analysis compares your resume with the
                  requirements and responsibilities mentioned in
                  the job description.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default KeywordAnalysis;