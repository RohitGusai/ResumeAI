import { 
  Sparkles, 
  UploadCloud, 
  FileSearch, 
  CheckCircle2, 
  Target, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";
import heroImage from "../assets/hero.png";
import {Link} from "react-router-dom";

const Home = () => {
  const steps = [
    {
      icon: <UploadCloud className="text-indigo-400" size={28} />,
      step: "Step 01",
      title: "Upload Your Resume",
      description: "Support for PDF, DOCX, and TXT files. We parse your layout without storing sensitive data.",
    },
    {
      icon: <FileSearch className="text-purple-400" size={28} />,
      step: "Step 02",
      title: "Paste Job Description",
      description: "Drop in the target role description, responsibilities, and required qualifications.",
    },
    {
      icon: <CheckCircle2 className="text-emerald-400" size={28} />,
      step: "Step 03",
      title: "Get ATS Matrix & Insights",
      description: "Instantly discover missing keywords, match percentage, and actionable recommendations.",
    },
  ];

  const features = [
    {
      icon: <Target className="text-indigo-400" size={24} />,
      title: "Semantic Keyword Match",
      description: "Goes beyond exact matches. Understands synonyms, related technologies, and domain terminology.",
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: "ATS Compatibility Check",
      description: "Simulates recruiter filters to identify table errors, unreadable formats, or missing essential headers.",
    },
    {
      icon: <TrendingUp className="text-emerald-400" size={24} />,
      title: "Skills Gap Analysis",
      description: "Categorizes what you have vs. what you lack into Must-Have, Nice-to-Have, and Bonus qualifications.",
    },
    {
      icon: <Zap className="text-amber-400" size={24} />,
      title: "Instant Scoring Engine",
      description: "Deterministic matching algorithms combined with AI evaluation for unbiased, actionable scoring.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* <Navbar /> */}

      <main className="relative overflow-hidden ">
        {/* Continuous Page Ambient Mesh Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-600/15 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute top-[30%] right-[-10%] w-[500px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute top-[65%] left-[-10%] w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full" />

        {/* ----------------- 1. HERO SECTION ----------------- */}
        <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-6 py-20 sm:py-28">
  <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">

    {/* Badge */}
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-300 backdrop-blur-md">
      <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
      Next-Gen ATS Semantic Intelligence
    </span>

    {/* Heading */}
    <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
      Tailor Your Resume to Match Any{" "}
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Job Description with AI
      </span>
    </h1>

    {/* Description */}
    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
      Stop guessing why you are not getting callbacks. Run deep semantic
      analysis against job postings to identify keyword gaps, boost ATS
      scores, and secure interviews.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <Link
        to="/compare"
        className="group inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-600/40"
      >
        <Sparkles size={18} />
        Launch Compare Engine
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

      <a
        href="#how-it-works"
        className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/70 px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
      >
        How It Works
      </a>

    </div>

    {/* Metrics */}
    <div className="mt-16 grid w-full max-w-4xl grid-cols-2 divide-x divide-slate-800/80 border-y border-slate-800/80 py-7 sm:grid-cols-4">

      <div className="px-4">
        <p className="text-2xl font-bold text-white sm:text-3xl">98%</p>
        <p className="mt-1 text-xs text-slate-500">
          ATS Simulation Accuracy
        </p>
      </div>

      <div className="px-4">
        <p className="text-2xl font-bold text-indigo-400 sm:text-3xl">
          &lt; 3s
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Analysis Latency
        </p>
      </div>

      <div className="px-4">
        <p className="text-2xl font-bold text-white sm:text-3xl">
          50k+
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Keywords Indexed
        </p>
      </div>

      <div className="px-4">
        <p className="text-2xl font-bold text-purple-400 sm:text-3xl">
          3.5x
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Interview Callback Rate
        </p>
      </div>

    </div>

  </div>
</section>

        {/* ----------------- 4. ABOUT / TECHNOLOGY ----------------- */}
<section
  id="about"
  className="min-h-screen relative overflow-hidden border-t border-slate-800/60 py-20 sm:py-28"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute left-[-15%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[130px]" />
  <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

      {/* ---------------- IMAGE / TECHNOLOGY VISUAL ---------------- */}
      <div className="relative order-2 lg:order-1">

        {/* Main Image Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl">

          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80"
            alt="AI and technology"
            className="h-[380px] w-full rounded-2xl object-cover opacity-80 "
          />

          {/* Image Overlay */}
          <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* AI Technology Label */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-950/70 px-3 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
              AI-Powered Resume Analysis
            </div>

            <h3 className="text-2xl font-bold text-white">
              Intelligent Resume Matching
            </h3>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Combining semantic analysis, NLP, and deterministic scoring
              algorithms to understand how your resume matches a job.
            </p>
          </div>
        </div>

        {/* Floating Technology Card */}
        <div className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-xl backdrop-blur-xl sm:-right-8">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/30">
              <Sparkles className="text-indigo-400" size={20} />
            </div> */}

            {/* <div>
              <p className="text-xs text-slate-500">
                Analysis Engine
              </p>
              <p className="text-sm font-semibold text-white">
                Semantic AI + NLP
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="order-1 lg:order-2">

        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          About The Technology
        </span>

        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Built with modern technology to understand your resume
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
          ResumeAI is an intelligent resume analysis platform designed to
          help candidates understand how well their resume matches a
          particular job description. Instead of relying only on exact
          keyword matching, the system uses Natural Language Processing
          and semantic analysis to understand relationships between skills,
          technologies, experience, and job requirements.
        </p>

        <p className=" mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          The platform combines AI-powered evaluation with deterministic
          scoring logic to generate a transparent match score. It identifies
          matching skills, missing keywords, experience relevance, and
          potential ATS compatibility issues so candidates can improve their
          resume before applying.
        </p>

        {/* Technology Stack */}
        {/* <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Technology Stack
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              React.js
            </span>

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              FastAPI
            </span>

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              Python
            </span>

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              NLP
            </span>

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              AI / LLM
            </span>

            <span className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500/40 hover:text-indigo-300">
              PostgreSQL
            </span>
          </div>
        </div> */}

        {/* Technology Benefits */}
        <div className=" mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-950 text-indigo-400 ring-1 ring-indigo-500/30">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Semantic Understanding
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Understands related skills and technologies beyond exact
                keyword matches.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-950 text-purple-400 ring-1 ring-purple-500/30">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                AI-Powered Insights
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Generates useful recommendations based on the job
                requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 ring-1 ring-emerald-500/30">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Transparent Scoring
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Combines multiple scoring factors to produce an actionable
                match percentage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-950 text-amber-400 ring-1 ring-amber-500/30">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Fast Analysis
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Quickly compares your resume against the target job
                description.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

        {/* ----------------- 2. HOW IT WORKS ----------------- */}
        {/* <section id="how-it-works" className="relative py-20 sm:py-28 border-t border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Workflow</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Three simple steps to beat the ATS
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-400">
                Optimize your application in seconds before submitting it to recruiters.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-slate-700">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">{item.step}</span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ----------------- 3. FEATURES GRID ----------------- */}
        {/* <section id="features" className="relative py-20 sm:py-28 bg-slate-950/60 border-t border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Capabilities</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to stand out
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-400">
                Built specifically to solve the modern recruiter filtering bottleneck.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-slate-700 transition group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ----------------- 4. ABOUT / VALUE PROP ----------------- */}
        <section
  id="about"
  className="relative overflow-hidden border-t border-slate-800/60 py-24 sm:py-32"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT - TEXT */}
      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Why ResumeAI
        </span>

        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your resume deserves more than a keyword check.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          Modern ATS scanners look for semantic relevance, keyword
          frequencies, and standard resume structures. ResumeAI helps
          identify what your resume is missing before you submit your
          application.
        </p>

        {/* Benefits */}
        <div className="mt-10 space-y-5">

          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Zero Guesswork
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Know which keywords and skills are missing before
                clicking apply.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Semantic Understanding
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Understand related technologies and skills instead of
                relying only on exact keyword matches.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Actionable Scoring
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Get a clear match percentage and practical
                recommendations for improvement.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT - VISUAL */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute -inset-6 rounded-[2rem] bg-indigo-600/10 blur-3xl" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-3 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl">

          <img
            src={heroImage}
            alt="ResumeAI Overview"
            className="h-[400px] w-full rounded-[1.5rem] object-cover opacity-90 transition duration-700 hover:scale-[1.03]"
          />

          {/* Overlay */}
          <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Floating content */}
          <div className="absolute bottom-8 left-8 right-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
              AI-Powered Analysis
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">
              Intelligent Resume Matching
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
              Semantic analysis, NLP, and scoring algorithms work
              together to understand how your resume matches a job.
            </p>

          </div>

        </div>

        {/* Floating score card */}
        <div className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-700/80 bg-slate-900/95 px-5 py-4 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:-right-8">

          <p className="text-xs font-medium text-slate-500">
            Resume Match
          </p>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-400">
              98%
            </span>

            <TrendingUp
              size={18}
              className="text-emerald-400"
            />
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

        
        
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;