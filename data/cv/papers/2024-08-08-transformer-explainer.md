---
layout: paper
categories: papers
permalink: papers/transformer_explainer
id: transformer_explainer
title: "Transformer Explainer: Interactive Learning of Text-Generative Models"
authors: 
  - Aeree Cho
  - Grace C. Kim
  - Alexander Karpekov
  - Alec Helbling
  - Zijie J. Wang
  - Seongmin Lee
  - Benjamin Hoover
  - Duen Horng (Polo) Chau
venue: "IEEE VIS: Visualization Conference"
venue-shorthand: IEEE VIS
location: Tampa Bay, USA
year: 2024
url: /papers/transformer_explainer
pdf: https://arxiv.org/abs/2408.04619
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
code: https://github.com/poloclub/transformer-explainer
demo: https://poloclub.github.io/transformer-explainer/
award: IEEE VIS 2024 Best Poster Award
type: poster
figure: /images/papers/TransformerExplainer.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: Transformer Explainer
feature-description: Interactive tool for explaining transformer models
featured: false
bibtex: |-
  @misc{cho2024transformerexplainerinteractivelearning,
      title={Transformer Explainer: Interactive Learning of Text-Generative Models}, 
      author={Aeree Cho and Grace C. Kim and Alexander Karpekov and Alec Helbling and Zijie J. Wang and Seongmin Lee and Benjamin Hoover and Duen Horng Chau},
      year={2024},
      eprint={2408.04619},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2408.04619}, 
  }
---

There has been an explosion in interest in machine learning (ML) in recent years due to its applications to science and engineering. However, as ML techniques have advanced, tools for explaining and visualizing novel ML algorithms have lagged behind. Animation has been shown to be a powerful tool for making engaging visualizations of systems that dynamically change over time, which makes it well suited to the task of communicating ML algorithms. However, the current approach to animating ML algorithms is to handcraft applications that highlight specific algorithms or use complex generalized animation software. We developed ManimML, an open-source Python library for easily generating animations of ML algorithms directly from code. We sought to leverage ML practitioners' preexisting knowledge of programming rather than requiring them to learn complex animation software. ManimML has a familiar syntax for specifying neural networks that mimics popular deep learning frameworks like Pytorch. A user can take a preexisting neural network architecture and easily write a specification for an animation in ManimML, which will then automatically compose animations for different components of the system into a final animation of the entire neural network. ManimML is open source and available at this https URL.