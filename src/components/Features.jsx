import {
  Target,
  ShieldCheck,
  TrendingUp,
  Zap,
  UploadCloud,
  FileSearch,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Semantic Keyword Matching",
      description:
        "Understand related skills, technologies, synonyms, and job-specific terminology instead of relying only on exact keywords.",
      color: "indigo",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "ATS Compatibility",
      description:
        "Analyze your resume structure and identify issues that may affect how Applicant Tracking Systems read your resume.",
      color: "purple",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Skills Gap Analysis",
      description:
        "Discover the skills you already have, the skills you're missing, and the qualifications required for the role.",
      color: "emerald",
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Match Score",
      description:
        "Get a clear percentage based on skills, experience relevance, job requirements, and overall alignment.",
      color: "amber",
    },
  ];

  const steps = [
    {
      icon: <UploadCloud size={23} />,
      number: "01",
      title: "Upload Resume",
      description:
        "Upload your resume and let ResumeAI extract the important information.",
    },
    {
      icon: <FileSearch size={23} />,
      number: "02",
      title: "Analyze Job",
      description:
        "Add the job description and identify the requirements that matter.",
    },
    {
      icon: <CheckCircle2 size={23} />,
      number: "03",
      title: "Get Insights",
      description:
        "Receive your match score, skill gaps, and actionable recommendations.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />

        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

      </div>

      <main className="relative">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="px-6 pb-20 pt-28 sm:pb-24 sm:pt-36">

          <div className="mx-auto max-w-6xl text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-4 py-2 text-xs font-medium text-indigo-300 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-indigo-400" />

              AI-Powered Resume Intelligence
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Understand How Well Your Resume

              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Matches the Job
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              ResumeAI analyzes your skills, experience, education, and
              keywords to give you a clear picture of your resume's
              compatibility with any job description.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex flex-wrap justify-center gap-4"
            >

              <Link
                to="/compare"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-600/40"
              >
                <Sparkles size={17} />
                Try Resume Analyzer
                <ArrowRight size={17} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                Explore Features
              </a>

            </motion.div>

            {/* Mini Stats */}
            <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-slate-800 border-y border-slate-800/70 py-5">

              <div>
                <p className="text-xl font-bold text-white">AI</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Powered Analysis
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">ATS</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Compatibility
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">100%</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Actionable Insights
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section
          id="features"
          className="border-t border-slate-800/60 px-6 py-20 sm:py-24"
        >

          <div className="mx-auto max-w-7xl">

            {/* Section Heading */}
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  Core Features
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Everything You Need to
                  <span className="text-indigo-400"> Optimize</span>
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Go beyond simple keyword matching and understand what
                actually affects your resume's performance.
              </p>

            </div>

            {/* Feature Grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm"
                >

                  {/* Hover Glow */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-indigo-400 ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-900">
                    {feature.icon}
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>

                  <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold text-indigo-400">
                    Explore capability
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="border-t border-slate-800/60 bg-slate-950/60 px-6 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                How It Works
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                From Resume to Insights
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Three simple steps to understand your resume's
                compatibility with a target role.
              </p>

            </div>

            {/* Steps */}
            <div className="relative mt-14">

              {/* Connecting Line */}
              <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/40 to-indigo-500/30 md:block" />

              <div className="grid gap-6 md:grid-cols-3">

                {steps.map((step, index) => (

                  <motion.div
                    key={step.number}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-600/10"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-indigo-400 ring-1 ring-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </div>

                      <span className="font-mono text-xs font-bold tracking-widest text-slate-600">
                        {step.number}
                      </span>

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="border-t border-slate-800/60 px-6 py-24">

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/40 px-6 py-14 text-center shadow-2xl shadow-indigo-950/30 sm:px-10">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[90px]" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30">
                <Sparkles size={25} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Ready to Improve Your Resume?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Upload your resume and discover exactly how well it
                matches your target job.
              </p>

              <Link
                to="/compare"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-600/40"
              >
                Launch Compare Engine
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Features;