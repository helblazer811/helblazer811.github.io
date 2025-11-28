---
layout: paper
categories: papers
permalink: papers/concept_attention
id: concept_attention
title: "ConceptAttention: Diffusion Transformers Learn Highly Interpretable Features"
authors: 
  - Alec Helbling
  - Tuna Han Salih Meral
  - Benjamin Hoover
  - Pinar Yanardag
  - Polo Chau
venue: "International Conference on Machine Learning"
venue-shorthand: ICML
location: Vancouver, Canada
year: 2025
url: /papers/concept_attention
pdf: https://arxiv.org/abs/2502.04320
# video: https://www.youtube.com/watch?v=8fJG87QVceQ
code: https://github.com/helblazer811/ConceptAttention
demo: https://huggingface.co/spaces/helblazer811/ConceptAttention
award: Oral (Top 1% of Submissions)
type: Oral
figure: /images/papers/concept_attention.png
selected: true
feature-title: Concept Attention
feature-description: Visualize Any Concepts in Your Generated Images
featured: false
bibtex: |-
  @inproceedings{helbling2025conceptattentiondiffusiontransformerslearn,
      title={ConceptAttention: Diffusion Transformers Learn Highly Interpretable Features}, 
      author={Alec Helbling and Tuna Han Salih Meral and Ben Hoover and Pinar Yanardag and Duen Horng Chau},
      year={2025},
      url={https://arxiv.org/abs/2502.04320}, 
  }
---

Do the rich representations of multi-modal diffusion transformers (DiTs) exhibit unique properties that enhance their interpretability? We introduce ConceptAttention, a novel method that leverages the expressive power of DiT attention layers to generate high-quality saliency maps that precisely locate textual concepts within images. Without requiring additional training, ConceptAttention repurposes the parameters of DiT attention layers to produce highly contextualized concept embeddings, contributing the major discovery that performing linear projections in the output space of DiT attention layers yields significantly sharper saliency maps compared to commonly used cross-attention maps. ConceptAttention even achieves state-of-the-art performance on zero-shot image segmentation benchmarks, outperforming 15 other zero-shot interpretability methods on the ImageNet-Segmentation dataset. ConceptAttention works for popular image models and even seamlessly generalizes to video generation.  Our work contributes the first evidence that the representations of multi-modal DiTs are highly transferable to vision tasks like segmentation. 