export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-navy leading-tight tracking-tight mb-6">
          Pro<span className="text-deep-blue">Right</span>
        </h1>
        <p className="text-xl md:text-2xl text-navy/60 mb-8 leading-relaxed">
          Professional writing. Strategic voice. Real impact.
        </p>
        <p className="text-navy/40 mb-12">
          Coming soon. From the team behind{" "}
          <a
            href="https://essayright.org"
            className="text-deep-blue hover:text-deep-blue-dark transition-colors font-medium underline underline-offset-4"
          >
            EssayRight
          </a>
          .
        </p>
        <div className="inline-flex items-center gap-2 bg-light-blue rounded-full px-6 py-3 text-sm text-navy/50">
          <svg className="w-4 h-4 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:boocheverjohn@gmail.com" className="text-deep-blue hover:text-deep-blue-dark transition-colors">
            boocheverjohn@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
