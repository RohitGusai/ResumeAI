import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{ duration: 0.4 }}
        className="w-[420px] rounded-3xl bg-white p-10 text-center shadow-2xl"
      >
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100"
        >
          <Brain
            size={45}
            className="text-indigo-600"
          />
        </motion.div>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          AI is Comparing...
        </h2>

        <p className="mt-4 text-gray-500">
          Reading Resume
          <br />
          Reading Job Description
          <br />
          Matching Skills
          <br />
          Calculating ATS Score
        </p>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-gray-200">

          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "100%"
            }}
            transition={{
              duration: 2.5
            }}
            className="h-full rounded-full bg-indigo-600"
          />

        </div>

        <div className="mt-8 flex justify-center">

          <Sparkles
            className="animate-pulse text-indigo-600"
            size={28}
          />

        </div>

      </motion.div>

    </div>
  );
};

export default LoadingOverlay;  