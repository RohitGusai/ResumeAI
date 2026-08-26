import {
  UploadCloud,
  FileText,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { useRef, useState } from "react";

const UploadCard = ({
  title,
  acceptedFiles,
  file,
  setFile,
}) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const selected = e.dataTransfer.files?.[0];

    if (!selected) return;

    setFile(selected);
  };

  return (
    <div
      className={`group relative w-full max-w-md rounded-2xl border p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:p-6 ${
        isDragging
          ? "border-indigo-500/70 bg-indigo-950/30 shadow-indigo-500/10"
          : "border-slate-800/80 bg-slate-900/70 hover:border-slate-700 hover:shadow-indigo-950/20"
      }`}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

      <div className="relative">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
              Upload Document
            </p>

            <h2 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
              {title}
            </h2>
          </div>

          {file && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
              <CheckCircle2 size={12} />
              Ready
            </span>
          )}
        </div>

        {/* Drop Zone */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative flex min-h-[260px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-6 text-center transition-all duration-300 ${
            isDragging
              ? "border-indigo-400 bg-indigo-500/10"
              : "border-slate-700 bg-slate-950/50 hover:border-indigo-500/60 hover:bg-indigo-500/5"
          }`}
        >
          {/* Inner Glow */}
          <div
            className={`pointer-events-none absolute h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 ${
              isDragging
                ? "bg-indigo-500/20 opacity-100"
                : "bg-indigo-500/10 opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Upload Icon */}
          <div
            className={`relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
              isDragging
                ? "scale-110 bg-indigo-500 text-white shadow-xl shadow-indigo-500/30"
                : "bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20 group-hover:scale-105 group-hover:bg-indigo-500/20"
            }`}
          >
            <UploadCloud size={30} />
          </div>

          {/* Main Text */}
          <p className="relative mt-5 text-sm font-semibold text-white sm:text-base">
            {isDragging
              ? "Drop your file here"
              : "Drag & Drop your document"}
          </p>

          {/* Browse */}
          <p className="relative mt-2 text-sm text-slate-500">
            or{" "}
            <span className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300">
              browse from computer
            </span>
          </p>

          {/* Accepted Format */}
          <div className="relative mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <FileText size={13} />
            {acceptedFiles}
          </div>

          {/* Hidden Input */}
          <input
            ref={inputRef}
            hidden
            type="file"
            accept={acceptedFiles}
            onChange={handleChange}
          />
        </div>

        {/* Selected File */}
        {file && (
          <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3.5">

            <div className="flex min-w-0 items-center gap-3">

              {/* File Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <FileText size={19} />
              </div>

              {/* File Info */}
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {file.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  {(file.size / 1024).toFixed(2)} KB
                  <span className="mx-1.5 text-slate-700">•</span>
                  Ready to analyze
                </p>
              </div>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
              aria-label="Remove uploaded file"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-red-500/10 hover:text-red-400 active:scale-95"
            >
              <Trash2 size={17} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCard;