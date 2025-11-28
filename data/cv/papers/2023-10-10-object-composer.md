---
layout: paper
categories: papers
permalink: papers/object-composer
id: object-composer
title: "ObjectComposer: Consistent Generation of Multiple Objects Without Fine-tuning"
authors:
 - Alec Helbling
 - Evan Montoya
 - Duen Horng (Polo) Chau
venue: "NeurIPS 2023, Workshop on Machine Learning for Creativity and Design"
venue-shorthand: NeurIPS 2023 MLCD Workshop
# location: Sydney, Australia
year: 2023
url: /papers/object-composer
pdf: https://arxiv.org/abs/2310.06968
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
# award: IEEE VIS 2023 Best Poster Award
type: preprint
figure: /images/papers/llm-self-defense.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: Object Composer
feature-description: A method for generating images with multiple specific objects
featured: false
bibtex: |-
  @misc{helbling2023objectcomposer,
      title={ObjectComposer: Consistent Generation of Multiple Objects Without Fine-tuning}, 
      author={Alec Helbling and Evan Montoya and Duen Horng Chau},
      year={2023},
      eprint={2310.06968},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
   }

---
Recent text-to-image generative models can generate high-fidelity images from text prompts. However, these models struggle to consistently generate the same objects in different contexts with the same appearance. Consistent object generation is important to many downstream tasks like generating comic book illustrations with consistent characters and setting. Numerous approaches attempt to solve this problem by extending the vocabulary of diffusion models through fine-tuning. However, even lightweight fine-tuning approaches can be prohibitively expensive to run at scale and in real-time. We introduce a method called ObjectComposer for generating compositions of multiple objects that resemble user-specified images. Our approach is training-free, leveraging the abilities of preexisting models. We build upon the recent BLIP-Diffusion model, which can generate images of single objects specified by reference images. ObjectComposer enables the consistent generation of compositions containing multiple specific objects simultaneously, all without modifying the weights of the underlying models.