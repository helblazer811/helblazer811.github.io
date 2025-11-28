---
layout: paper
categories: papers
permalink: papers/click-diffusion
id: click-diffusion
title: "ClickDiffusion: Harnessing LLMs for Interactive Precise Image Editing"
authors:
 - Alec Helbling
 - Seongmin Lee
 - Duen Horng (Polo) Chau
venue: "CVPR, Workshop on AI for Content Creation, 2024"
venue-shorthand: CVPR, Workshop
# location: Sydney, Australia
year: 2024
url: /papers/click-diffusion
# pdf: https://arxiv.org/abs/2310.06968
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: preprint
figure: /images/papers/PointAndInstruct.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: ClickDiffusion
feature-description: ClickDiffusion is an approach to image editing that aggregates a combination of direct manipulation feedback and text instructions.
featured: false
bibtex: |-
  @misc{helbling2024clickdiffusionharnessingllmsinteractive,
      title={ClickDiffusion: Harnessing LLMs for Interactive Precise Image Editing}, 
      author={Alec Helbling and Seongmin Lee and Polo Chau},
      year={2024},
      eprint={2404.04376},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2404.04376}, 
   }

---
Recently, researchers have proposed powerful systems for generating and manipulating images using natural language instructions. However, it is difficult to precisely specify many common classes of image transformations with text alone. For example, a user may wish to change the location and breed of a particular dog in an image with several similar dogs. This task is quite difficult with natural language alone, and would require a user to write a laboriously complex prompt that both disambiguates the target dog and describes the destination. We propose ClickDiffusion, a system for precise image manipulation and generation that combines natural language instructions with visual feedback provided by the user through a direct manipulation interface. We demonstrate that by serializing both an image and a multi-modal instruction into a textual representation it is possible to leverage LLMs to perform precise transformations of the layout and appearance of an image. Code available at this https URL.