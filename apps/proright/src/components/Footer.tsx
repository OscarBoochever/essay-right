export default function Footer() {
  return (
    <footer className="bg-navy text-white/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold text-white/80">
            Pro<span className="text-deep-blue">Right</span>
          </span>
          <span className="text-sm">
            &copy; {new Date().getFullYear()} VoiceRight LLC
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:boocheverjohn@gmail.com"
            className="hover:text-deep-blue transition-colors"
          >
            boocheverjohn@gmail.com
          </a>
          <span>Washington, D.C.</span>
          <span className="text-white/20">|</span>
          <span>
            For students:{" "}
            <a href="https://essayright.org" className="text-white/60 hover:text-deep-blue transition-colors">
              EssayRight
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
