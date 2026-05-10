(function () {
  const match = window.location.pathname.match(/\/blog\/([^/]+)\/?$/);
  if (!match) return;
  const slug = match[1];

  function inject() {
    if (document.getElementById("giscus-section")) return;

    const parent =
      document.querySelector(".container") || document.body;

    const textContainer = document.querySelector(".text-container");
    let textWidth = 720;
    let leftOffset = 0;
    if (textContainer && parent.getBoundingClientRect) {
      const textRect = textContainer.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      textWidth = Math.round(textRect.width);
      leftOffset = Math.round(textRect.left - parentRect.left);
    }

    const section = document.createElement("section");
    section.id = "giscus-section";
    section.style.cssText = `width: ${textWidth}px; max-width: 100%; margin: 4rem 0 3rem ${leftOffset}px; box-sizing: border-box;`;

    const heading = document.createElement("h2");
    heading.textContent = "Comments";
    heading.style.cssText = "font-size: 1.5rem; margin-bottom: 1rem;";
    section.appendChild(heading);

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    const attrs = {
      "data-repo": "helblazer811/helblazer811.github.io",
      "data-repo-id": "R_kgDOGRq3jw",
      "data-category": "Comments",
      "data-category-id": "DIC_kwDOGRq3j84C8vCS",
      "data-mapping": "specific",
      "data-term": slug,
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": "light",
      "data-lang": "en",
      "data-loading": "lazy",
    };
    for (const [k, v] of Object.entries(attrs)) script.setAttribute(k, v);

    section.appendChild(script);
    parent.appendChild(section);
  }

  function start() {
    setTimeout(inject, 100);
    setTimeout(() => {
      if (!document.getElementById("giscus-section")) inject();
    }, 1500);
  }

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start);
  }
})();
