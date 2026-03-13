export default function Footer() {
  return (
    <footer className="bg-navy text-white/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold text-white/80">
            Essay<span className="text-teal">Right</span>
          </span>
          <span className="text-sm">
            &copy; {new Date().getFullYear()} EssayRight LLC
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:boocheverjohn@gmail.com"
            className="hover:text-teal transition-colors"
          >
            boocheverjohn@gmail.com
          </a>
          <span>Washington, D.C.</span>
          <span className="text-white/20">|</span>
          <span>
            For professionals:{" "}
            <a href="https://voiceright.org" className="text-white/60 hover:text-teal transition-colors">
              VoiceRight
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
