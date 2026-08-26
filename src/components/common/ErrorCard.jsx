import { AlertTriangle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const ErrorCard = ({
  title = "Something went wrong",
  message = "Please try again.",
  onRetry,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-8 shadow-lg"
    >
      <div className="flex flex-col items-center text-center">

        <div className="rounded-full bg-red-100 p-5">
          <AlertTriangle
            size={50}
            className="text-red-600"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-red-700">
          {title}
        </h2>

        <p className="mt-3 max-w-md text-gray-600">
          {message}
        </p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-8 flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
        )}

      </div>
    </motion.div>
  );
};

export default ErrorCard;