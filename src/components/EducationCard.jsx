import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, XCircle } from "lucide-react";

const EducationCard = ({
  education = {
    required: "Bachelor's Degree",
    candidate: "MCA",
    match: true,
    score: 95,
  },
}) => {
  const { required, candidate, match, score } = education;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
    >
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-blue-100 p-3">
          <GraduationCap
            size={30}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Education Analysis
          </h2>

          <p className="text-gray-500">
            Compare educational qualifications
          </p>
        </div>
      </div>

      {/* Qualification Cards */}

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Required */}

        <div className="rounded-2xl border bg-slate-50 p-5">
          <p className="text-sm text-gray-500">
            Required Qualification
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {required}
          </h3>
        </div>

        {/* Candidate */}

        <div className="rounded-2xl border bg-blue-50 p-5">
          <p className="text-sm text-gray-500">
            Your Qualification
          </p>

          <h3 className="mt-3 text-xl font-semibold text-blue-700">
            {candidate}
          </h3>
        </div>

      </div>

      {/* Match Status */}

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-gray-50 p-5">

        <div className="flex items-center gap-3">

          {match ? (
            <CheckCircle2
              size={26}
              className="text-green-600"
            />
          ) : (
            <XCircle
              size={26}
              className="text-red-500"
            />
          )}

          <div>
            <h3 className="font-semibold">
              Qualification Match
            </h3>

            <p className="text-sm text-gray-500">
              {match
                ? "Your qualification satisfies the job requirement."
                : "Your qualification does not fully match the requirement."}
            </p>
          </div>

        </div>

        <div className="text-right">
          <h2 className="text-3xl font-bold text-indigo-600">
            {score}%
          </h2>
        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">
          <span>Qualification Match</span>
          <span>{score}%</span>
        </div>

        <div className="h-3 rounded-full bg-gray-200">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${score}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-blue-600"
          />

        </div>

      </div>

      {/* AI Summary */}

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">

        <h3 className="font-semibold text-blue-700">
          AI Summary
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          Your educational background is compared against the
          minimum qualification required by the job description.
          Recruiters generally consider candidates whose education
          satisfies or exceeds the required qualification.
        </p>

      </div>

    </motion.div>
  );
};

export default EducationCard;