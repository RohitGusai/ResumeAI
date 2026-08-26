import { motion } from "framer-motion";
import {
  AlertCircle,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const MissingSkills = ({ skills = [] }) => {
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
          bg-red-500/10
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-24 -left-24
          h-56 w-56
          rounded-full
          bg-indigo-500/10
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
                bg-red-500/10
                text-red-400
                ring-1 ring-red-500/20
                shadow-lg shadow-red-950/20
              "
            >
              <AlertCircle size={24} />
            </div>


            {/* Title */}

            <div className="min-w-0">

              <div className="flex flex-wrap items-center gap-2">

                <h2
                  className="
                    text-xl font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Missing Skills
                </h2>

                <Sparkles
                  size={15}
                  className="text-red-400"
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
                Skills required by the job description but not
                found in your resume
              </p>

            </div>

          </div>


          {/* Count */}

          <div
            className="
              flex h-12 min-w-12
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-xl
              border border-red-500/20
              bg-red-500/10
              px-3
            "
          >

            <span
              className="
                text-lg
                font-bold
                text-red-400
              "
            >
              {skills.length}
            </span>

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-wider
                text-red-500/70
              "
            >
              Missing
            </span>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="h-px bg-slate-800" />


        {/* ================= SKILLS ================= */}

        <div className="p-6 sm:p-7">

          {skills.length > 0 ? (

            <div className="flex flex-wrap gap-2.5">

              {skills.map((skill, index) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}

                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}

                  className="
                    group/skill
                    flex cursor-default
                    items-center gap-2
                    rounded-lg
                    border border-red-500/20
                    bg-red-500/5
                    px-3.5 py-2.5
                    text-red-300
                    transition-all
                    duration-200
                    hover:border-red-500/40
                    hover:bg-red-500/10
                    hover:shadow-lg
                    hover:shadow-red-950/20
                  "
                >

                  <AlertCircle
                    size={15}
                    className="
                      shrink-0
                      text-red-400
                      transition-transform
                      duration-200
                      group-hover/skill:scale-110
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-semibold
                      sm:text-sm
                    "
                  >
                    {skill}
                  </span>

                </motion.div>

              ))}

            </div>

          ) : (

            /* ================= EMPTY STATE ================= */

            <div
              className="
                flex min-h-32
                flex-col
                items-center
                justify-center
                text-center
              "
            >

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-emerald-500/10
                  text-emerald-400
                  ring-1 ring-emerald-500/20
                "
              >
                <AlertCircle size={20} />
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  font-medium
                  text-slate-400
                "
              >
                No missing skills
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-600
                "
              >
                Your resume covers the required skills.
              </p>

            </div>

          )}

        </div>


        {/* ================= INSIGHT ================= */}

        {skills.length > 0 && (

          <div className="px-6 pb-6 sm:px-7 sm:pb-7">

            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                border border-red-500/20
                bg-gradient-to-r
                from-red-950/40
                via-slate-950/50
                to-red-950/20
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
                  from-red-400
                  to-rose-600
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
                    bg-red-500/10
                    text-red-400
                    ring-1 ring-red-500/20
                  "
                >
                  <Lightbulb size={17} />
                </div>


                {/* Content */}

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-red-300
                    "
                  >
                    Recommendation
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Add these skills only if you genuinely have
                    experience with them. Relevant keywords can
                    improve your ATS compatibility and overall
                    resume match.
                  </p>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </motion.div>
  );
};

export default MissingSkills;