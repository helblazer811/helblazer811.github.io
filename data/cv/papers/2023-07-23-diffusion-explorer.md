---
layout: paper
categories: papers
permalink: papers/diffusion-explorer
id: diffusionexplorer
title: "Diffusion Explorer: Interactive Exploration of Diffusion Models"
authors: 
  - Alec Helbling
  - Duen Horng (Polo) Chau
venue: "IEEE VIS: Visualization Conference"
venue-shorthand: IEEE VIS
location: Vienna, Austria
year: 2025
url: /papers/diffusionexplorer
pdf: https://arxiv.org/pdf/2507.01178
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
code: https://github.com/helblazer811/Diffusion-Explorer
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: poster
figure: /images/papers/DiffusionExplorer.png
selected: true
# doi: "10.1109/TVCG.2020.3030418"
feature-title: DiffusionExplorer
feature-description: Interactive tool for communicating how diffusion models work
featured: false
bibtex: |-
  @misc{helbling2025diffusionexplorerinteractiveexploration,
      title={Diffusion Explorer: Interactive Exploration of Diffusion Models}, 
      author={Alec Helbling and Duen Horng Chau},
      year={2025},
      eprint={2507.01178},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2507.01178},}
---

Diffusion models have been central to the development of recent image, video, and even text generation systems. They posses striking geometric properties that can be faithfully portrayed in low-dimensional settings. However, existing resources for explaining diffusion either require an advanced theoretical foundation or focus on their neural network architectures rather than their rich geometric properties. We introduce Diffusion Explorer, an interactive tool to explain the geometric properties of diffusion models. Users can train 2D diffusion models in the browser and observe the temporal dynamics of their sampling process. Diffusion Explorer leverages interactive animation, which has been shown to be a powerful tool for making engaging visualizations of dynamic systems, making it well suited to explaining diffusion models which represent stochastic processes that evolve over time. 