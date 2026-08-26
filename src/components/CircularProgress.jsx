import { motion } from "framer-motion";

const CircularProgress = ({ percentage }) => {
  const radius = 95;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center ">

      <svg
        height={radius * 2}
        width={radius * 2}
      >
        {/* Background */}

        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}

        <motion.circle
          stroke="#4F46E5"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset,
          }}
          transition={{
            duration: 1.5,
          }}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

      </svg>

      <div className="absolute text-center ">

        <h1 className="text-5xl font-bold text-indigo-700">

          {percentage}%

        </h1>

        <p className="text-gray-500">

          Match

        </p>

      </div>

    </div>
  );
};

export default CircularProgress;