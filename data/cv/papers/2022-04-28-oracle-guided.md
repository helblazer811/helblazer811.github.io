---
layout: paper
categories: papers
permalink: papers/oracle-guidance
id: oracle-guidance
title: "Oracle Guided Image Synthesis with Relative Queries"
authors: 
  - Alec Helbling
  - Christopher John Rozell
  - Matthew O'Shaughnessy
  - Kion Fallah
venue: "ICLR Workshop on Deep Generative Models for Highly Structured Data"
venue-shorthand: ICLR DGMHSD
# location: Sydney, Australia
year: 2022
url: /papers/vis-conv
pdf: https://arxiv.org/abs/2204.14189
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: workshop
figure: /images/papers/oracle_guidance.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: Oracle Guidance
feature-description: We designed a system for searching the latent space of VAEs using pairwise comparisons. 
featured: false
bibtex: |-
    @misc{helbling2022oracle,
        title={Oracle Guided Image Synthesis with Relative Queries}, 
        author={Alec Helbling and Christopher John Rozell and Matthew O'Shaughnessy and Kion Fallah},
        year={2022},
        eprint={2204.14189},
        archivePrefix={arXiv},
        primaryClass={cs.CV}
    }
---

Isolating and controlling specific features in the outputs of generative models in a user-friendly way is a difficult and open-ended problem. We develop techniques that allow an oracle user to generate an image they are envisioning in their head by answering a sequence of relative queries of the form ",do you prefer image a or image b?" Our framework consists of a Conditional VAE that uses the collected relative queries to partition the latent space into preference-relevant features and non-preference-relevant features. We then use the user's responses to relative queries to determine the preference-relevant features that correspond to their envisioned output image. Additionally, we develop techniques for modeling the uncertainty in images' predicted preference-relevant features, allowing our framework to generalize to scenarios in which the relative query training set contains noise.