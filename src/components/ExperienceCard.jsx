import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const ExperienceCard = ({
  experienceYearRequired = 0,
  experienceYearFound = 0,
}) => {
  // Convert candidate experience from decimal years
  // into years + months for display.
  const experienceInMonths = Math.round(
    experienceYearFound * 12
  );

  const years = Math.floor(experienceInMonths / 12);
  const months = experienceInMonths % 12;

  // JD explicitly specifies an experience requirement
  const hasExperienceRequirement =
    experienceYearRequired > 0;

  // Candidate meets requirement
  const requirementMet =
    hasExperienceRequirement &&
    experienceYearFound >= experienceYearRequired;

  // Difference
  const experienceDifference =
    experienceYearFound - experienceYearRequired;

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
          bg-blue-500/10
          blur-[90px]
        "
      />


      <div className="relative">

        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-4 p-6 sm:p-7">

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
            <BriefcaseBusiness size={24} />
          </div>


          {/* Title */}

          <div>

            <div className="flex items-center gap-2">

              <h2
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Experience Analysis
              </h2>

              <TrendingUp
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
              Compare required experience with your resume
            </p>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="h-px bg-slate-800" />


        {/* ================= EXPERIENCE STATS ================= */}

        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-7">

          {/* Required Experience */}

          <motion.div
            whileHover={{ y: -3 }}
            className="
              rounded-xl
              border border-slate-800
              bg-slate-950/50
              p-5
              transition-all
              duration-200
              hover:border-slate-700
            "
          >

            <div className="flex items-center justify-between">

              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Required
              </p>

              <BriefcaseBusiness
                size={18}
                className="text-slate-600"
              />

            </div>


            <h3
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-white
              "
            >
              {hasExperienceRequirement ? (
                <>
                  {experienceYearRequired}

                  <span
                    className="
                      ml-1.5
                      text-sm
                      font-medium
                      text-slate-500
                    "
                  >
                    Years
                  </span>
                </>
              ) : (
                <span
                  className="
                    text-lg
                    font-medium
                    text-slate-500
                  "
                >
                  Not specified
                </span>
              )}
            </h3>

            <p
              className="
                mt-2
                text-xs
                text-slate-600
              "
            >
              Job description requirement
            </p>

          </motion.div>


          {/* Candidate Experience */}

          <motion.div
            whileHover={{ y: -3 }}
            className="
              rounded-xl
              border border-indigo-500/20
              bg-indigo-500/5
              p-5
              transition-all
              duration-200
              hover:border-indigo-500/30
              hover:bg-indigo-500/10
            "
          >

            <div className="flex items-center justify-between">

              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-indigo-400
                "
              >
                Your Experience
              </p>

              <TrendingUp
                size={18}
                className="text-indigo-400"
              />

            </div>


            <h3
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                text-indigo-300
              "
            >

              {years > 0 && (
                <span>
                  {years}{" "}
                  {years === 1 ? "Year" : "Years"}
                </span>
              )}

              {months > 0 && (
                <span
                  className="
                    ml-2
                    text-sm
                    font-medium
                    text-indigo-400
                  "
                >
                  {months}{" "}
                  {months === 1 ? "Month" : "Months"}
                </span>
              )}

              {experienceYearFound === 0 && (
                <span
                  className="
                    text-lg
                    font-medium
                    text-indigo-400
                  "
                >
                  No experience found
                </span>
              )}

            </h3>

            <p
              className="
                mt-2
                text-xs
                text-slate-600
              "
            >
              Experience detected in your resume
            </p>

          </motion.div>

        </div>


        {/* ================= STATUS ================= */}

        <div className="px-6 pb-6 sm:px-7 sm:pb-7">

          {hasExperienceRequirement ? (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className={`
                relative
                overflow-hidden
                rounded-xl
                border
                p-4
                ${
                  requirementMet
                    ? "border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-slate-950/50 to-emerald-950/20"
                    : "border-red-500/20 bg-gradient-to-r from-red-950/40 via-slate-950/50 to-red-950/20"
                }
              `}
            >

              {/* Accent */}

              <div
                className={`
                  absolute
                  left-0 top-0
                  h-full w-1
                  ${
                    requirementMet
                      ? "bg-gradient-to-b from-emerald-400 to-green-600"
                      : "bg-gradient-to-b from-red-400 to-rose-600"
                  }
                `}
              />


              <div className="flex items-start gap-3">

                {/* Icon */}

                <div
                  className={`
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-lg
                    ring-1
                    ${
                      requirementMet
                        ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                        : "bg-red-500/10 text-red-400 ring-red-500/20"
                    }
                  `}
                >

                  {requirementMet ? (
                    <CheckCircle2 size={17} />
                  ) : (
                    <AlertCircle size={17} />
                  )}

                </div>


                {/* Content */}

                <div>

                  <p
                    className={`
                      text-sm
                      font-semibold
                      ${
                        requirementMet
                          ? "text-emerald-300"
                          : "text-red-300"
                      }
                    `}
                  >
                    {requirementMet
                      ? "Experience Requirement Met"
                      : "Experience Requirement Not Met"}
                  </p>


                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    {requirementMet
                      ? `${Math.abs(
                          experienceDifference
                        ).toFixed(1)} years above the requirement`
                      : `${Math.abs(
                          experienceDifference
                        ).toFixed(1)} years below the requirement`}
                  </p>

                </div>

              </div>

            </motion.div>

          ) : (

            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                border border-slate-800
                bg-slate-950/50
                p-4
              "
            >

              <div
                className="
                  absolute
                  left-0 top-0
                  h-full w-1
                  bg-slate-700
                "
              />

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-slate-800
                    text-slate-500
                  "
                >
                  <BriefcaseBusiness size={17} />
                </div>

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-300
                    "
                  >
                    Experience Requirement Not Specified
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    The job description does not specify a
                    required number of years of experience.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </motion.div>
  );
};

export default ExperienceCard;