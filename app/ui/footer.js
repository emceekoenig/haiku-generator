export default function Footer() {
  return (
    <div
      className="text-xs text-center text-slate-800 dark:text-slate-400 content-end pb-4 sm:pb-8 px-6"
      role="contentinfo"
    >
      This project was coded by{" "}
      <a
        href="https://github.com/emceekoenig"
        target="_blank"
        class="text-blue-600 dark:text-blue-800"
      >
        Chelsea Koenig
      </a>
      , is open-sourced on{" "}
      <a
        href="https://github.com/emceekoenig/ai-poem-generator"
        target="_blank"
        class="text-blue-600 dark:text-blue-800"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://haiku-poem-generator.netlify.app/"
        target="_blank"
        class="text-blue-600 dark:text-blue-800"
      >
        Netlify
      </a>
      .
    </div>
  );
}
