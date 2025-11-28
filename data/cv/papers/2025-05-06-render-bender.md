---
layout: paper
categories: papers
permalink: papers/render-bender
id: render-bender
title: "RenderBender: A Survey on Adversarial Attacks Using Differentiable Rendering"
authors: 
  - Matthew Hull
  - Haoran Wang
  - Matthew Lau
  - Alec Helbling
  - Mansi Phute
  - Chao Zhang
  - Zsolt Kira
  - Willian Lunardi
  - Martin Andreoni
  - Wenke Lee
  - Polo Chau
venue: "IJCAI 2025, Survey Track"
venue-shorthand: IJCAI
# location: Sydney, Australia
year: 2025
url: /papers/render-bender
pdf: https://arxiv.org/pdf/2411.09749
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: journal
# figure: /images/papers/protein.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: RenderBender
feature-description: A survey on adversarial attacks using differentiable rendering 
featured: false
bibtex: |-
    @article{hull2025renderbendersurveyadversarialattacks,
      title={RenderBender: A Survey on Adversarial Attacks Using Differentiable Rendering}, 
      author={Matthew Hull and Haoran Wang and Matthew Lau and Alec Helbling and Mansi Phute and Chao Zhang and Zsolt Kira and Willian Lunardi and Martin Andreoni and Wenke Lee and Polo Chau},
      year={2025},
      eprint={2411.09749},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2411.09749},}
---

Differentiable rendering techniques like Gaussian Splatting and Neural Radiance Fields have become powerful tools for generating high-fidelity models of 3D objects and scenes. Their ability to produce both physically plausible and differentiable models of scenes are key ingredient needed to produce physically plausible adversarial attacks on DNNs. However, the adversarial machine learning community has yet to fully explore these capabilities, partly due to differing attack goals (e.g., misclassification, misdetection) and a wide range of possible scene manipulations used to achieve them (e.g., alter texture, mesh). This survey contributes the first framework that unifies diverse goals and tasks, facilitating easy comparison of existing work, identifying research gaps, and highlighting future directions - ranging from expanding attack goals and tasks to account for new modalities, state-of-the-art models, tools, and pipelines, to underscoring the importance of studying real-world threats in complex scenes.