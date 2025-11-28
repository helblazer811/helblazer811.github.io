---
layout: paper
categories: papers
permalink: papers/manifold-clr
id: manifold-clr
title: "Manifold Contrastive Learning with Variational Lie Group Operators"
authors: 
  - Kion Fallah
  - Alec Helbling
  - Kyle A. Johnsen
  - Christopher J. Rozell
venue: "Transactions on Machine Learning Research"
venue-shorthand: TMLR 
# location: Sydney, Australia
year: 2023
url: /papers/manifold-clr
pdf: https://arxiv.org/abs/2306.13544
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: preprint
figure: /images/papers/manifoldclr.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: manifold-clr
feature-description: We developed a system for self-supervised learning based on manifold operators. 
featured: false
bibtex: |-
  @misc{fallah2023manifold,
      title={Manifold Contrastive Learning with Variational Lie Group Operators}, 
      author={Kion Fallah and Alec Helbling and Kyle A. Johnsen and Christopher J. Rozell},
      year={2023},
      eprint={2306.13544},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
  }
---

Self-supervised learning of deep neural networks has become a prevalent paradigm for learning representations that transfer to a variety of downstream tasks. Similar to proposed models of the ventral stream of biological vision, it is observed that these networks lead to a separation of category manifolds in the representations of the penultimate layer. Although this observation matches the manifold hypothesis of representation learning, current self-supervised approaches are limited in their ability to explicitly model this manifold. Indeed, current approaches often only apply augmentations from a pre-specified set of "positive pairs" during learning. In this work, we propose a contrastive learning approach that directly models the latent manifold using Lie group operators parameterized by coefficients with a sparsity-promoting prior. A variational distribution over these coefficients provides a generative model of the manifold, with samples which provide feature augmentations applicable both during contrastive training and downstream tasks. Additionally, learned coefficient distributions provide a quantification of which transformations are most likely at each point on the manifold while preserving identity. We demonstrate benefits in self-supervised benchmarks for image datasets, as well as a downstream semi-supervised task. In the former case, we demonstrate that the proposed methods can effectively apply manifold feature augmentations and improve learning both with and without a projection head. In the latter case, we demonstrate that feature augmentations sampled from learned Lie group operators can improve classification performance when using few labels.