import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/registry")({
  component: Registry,
});

function Registry() {
  useEffect(() => {
    // Observer to inject styles into the iframe once it loads
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector(
        ".zola-registry-iframe",
      ) as HTMLIFrameElement;
      if (iframe) {
        try {
          const iframeDoc =
            iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc && iframeDoc.body) {
            iframeDoc.body.style.backgroundColor = "#f5f1ed";
            observer.disconnect();
          }
        } catch (e) {
          // Cross-origin policy prevents access
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Load Zola widget script
    const script = document.createElement("script");
    script.id = "zola-wjs";
    script.async = true;
    script.src = "https://widget.zola.com/js/widget.js";
    document.body.appendChild(script);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-wrap bg-white flex flex-col justify-center pt-20 gap-25">
      <section className="rounded-2xl p-6 sm:p-8">
        <a
          className="zola-registry-embed"
          href="https://www.zola.com/registry/erinandgreg2027"
          data-registry-key="erinandgreg2027"
        >
          Our Zola Wedding Registry
        </a>
      </section>
    </main>
  );
}
