(function () {
  const match = window.location.pathname.match(/\/blog\/([^/]+)\/?$/);
  if (!match) return;
  const slug = match[1];

  const layouts = [
    { parent: ".page-container", widthAnchor: ".section-heading" },
    { parent: ".container", widthAnchor: ".text-container" },
  ];

  function buildGiscusScript() {
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
    for (const [key, value] of Object.entries(attrs)) script.setAttribute(key, value);
    return script;
  }

  function inject() {
    if (document.getElementById("giscus-section")) return;

    const existingHeading = document.getElementById("comments");
    const section = document.createElement("section");
    section.id = "giscus-section";

    if (existingHeading) {
      section.style.cssText = "margin: 1rem 0 3rem; width: 100%; box-sizing: border-box;";
      section.appendChild(buildGiscusScript());
      existingHeading.insertAdjacentElement("afterend", section);
      return;
    }

    let parent = null;
    let anchor = null;
    for (const layout of layouts) {
      const candidateParent = document.querySelector(layout.parent);
      const candidateAnchor = document.querySelector(layout.widthAnchor);
      if (candidateParent && candidateAnchor) {
        parent = candidateParent;
        anchor = candidateAnchor;
        break;
      }
    }
    parent = parent || document.body;

    let textWidth = 720;
    let leftOffset = 0;
    if (anchor && parent.getBoundingClientRect) {
      const anchorRect = anchor.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const parentStyle = getComputedStyle(parent);
      const parentContentLeft = parentRect.left
        + (parseFloat(parentStyle.borderLeftWidth) || 0)
        + (parseFloat(parentStyle.paddingLeft) || 0);
      textWidth = Math.round(anchorRect.width);
      leftOffset = Math.max(0, Math.round(anchorRect.left - parentContentLeft));
    }

    section.style.cssText = `width: ${textWidth}px; max-width: 100%; margin: 4rem 0 3rem ${leftOffset}px; box-sizing: border-box;`;

    const heading = document.createElement("h2");
    heading.textContent = "Comments";
    heading.style.cssText = "font-size: 1.5rem; margin-bottom: 1rem;";
    section.appendChild(heading);
    section.appendChild(buildGiscusScript());
    parent.appendChild(section);
  }

  function start() {
    setTimeout(inject, 100);
    setTimeout(() => {
      if (!document.getElementById("giscus-section")) inject();
    }, 1500);
  }

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
