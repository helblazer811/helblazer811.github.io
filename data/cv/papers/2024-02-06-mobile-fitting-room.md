---
layout: paper
categories: papers
permalink: papers/mobile-fitting-room
id: mobile-fitting-room
title: "Mobile Fitting Room: On-device Virtual Try-on via Diffusion Models"
authors:
 - Justin Blalock
 - David Munechika
 - Harsha Karanth
 - Alec Helbling
 - Pratham Mehta 
 - Seongmin Lee 
 - Duen Horng (Polo) Chau
venue: "CVPR 2024, Workshop on Virtual Try-on "
venue-shorthand: CVPR Workshop
# location: Sydney, Australia
year: 2024
url: /papers/mobile-fitting-room
# pdf: https://arxiv.org/abs/2310.06968
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
# code: https://github.com/helblazer811/manimml
# demo: https://poloclub.github.io/wizmap/
award: Invited Talk
type: workshop
figure: /images/papers/PointAndInstruct.png
selected: false
# doi: "10.1109/TVCG.2020.3030418"
feature-title: Mobile Fitting Room
feature-description: A diffusion based fashion virtual tryon demonstration on mobile devices. 
featured: false
bibtex: |-
   @misc{blalock2024mobile,
         title={Mobile Fitting Room: On-device Virtual Try-on via Diffusion Models}, 
         author={Justin Blalock and David Munechika and Harsha Karanth and Alec Helbling and Pratham Mehta and Seongmin Lee and Duen Horng Chau},
         year={2024},
         eprint={2402.01877},
         archivePrefix={arXiv},
         primaryClass={cs.HC}
   }
---
The growing digital landscape of fashion e-commerce calls for interactive and user-friendly interfaces for virtually trying on clothes. Traditional try-on methods grapple with challenges in adapting to diverse backgrounds, poses, and subjects. While newer methods, utilizing the recent advances of diffusion models, have achieved higher-quality image generation, the human-centered dimensions of mobile interface delivery and privacy concerns remain largely unexplored. We present Mobile Fitting Room, the first on-device diffusion-based virtual try-on system. To address multiple inter-related technical challenges such as high-quality garment placement and model compression for mobile devices, we present a novel technical pipeline and an interface design that enables privacy preservation and user customization. A usage scenario highlights how our tool can provide a seamless, interactive virtual try-on experience for customers and provide a valuable service for fashion e-commerce businesses.