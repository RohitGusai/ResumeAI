const JobDescriptionCard = ({ value, onChange }) => {
  return (
    <div className="group relative w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:shadow-indigo-950/20 sm:p-6">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

      <div className="relative flex h-full flex-col">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
              Target Position
            </p>

            <h2 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
              Job Description
            </h2>
          </div>

          {/* <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-semibold text-purple-400">
            Required
          </span> */}

        </div>

        {/* Textarea */}
        <div className="relative flex-1">

          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste the target job description, responsibilities, and required qualifications here..."
            className="min-h-[260px] w-full resize-none rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-200 outline-none transition-all duration-300 placeholder:text-slate-100 placeholder:text-lg hover:border-slate-700 focus:border-indigo-500/60 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />

          {/* Textarea Bottom Gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 rounded-b-xl bg-gradient-to-t from-slate-950/30 to-transparent" />

        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3">

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span
              className={`h-2 w-2 rounded-full ${
                value?.trim()
                  ? "bg-emerald-400"
                  : "bg-slate-600"
              }`}
            />

            <span>
              {value?.trim()
                ? "Description added"
                : "Paste full requirements"}
            </span>
          </div>

          <span
            className={`text-xs font-medium ${
              value?.length > 0
                ? "text-indigo-400"
                : "text-slate-600"
            }`}
          >
            {(value || "").length} characters
          </span>

        </div>

      </div>
    </div>
  );
};

export default JobDescriptionCard;