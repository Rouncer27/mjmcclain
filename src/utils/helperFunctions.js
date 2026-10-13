import { getImage } from "astro:assets";

export const getOptimizedImages = async function (image, eager = true) {
  const optImage = await getImage({
    src: image,
    format: "webp",
    quality: 100,
    loading: eager ? "eager" : "lazy",
    inferSize: true,
  });

  return optImage;
};

export const optimizeSlider = async function (slider, eager = true) {
  const optimizedSlidersImages = await Promise.all(
    slider.map(
      async (slide) =>
        await getOptimizedImages(slide.image.node.sourceUrl, eager),
    ),
  );

  const newOptimizedHeroSlider = slider.map((slide, index) => {
    return {
      ...slide,
      image: {
        node: {
          sourceUrl: optimizedSlidersImages[index]?.src,
          altText: slide.image.node.altText,
          options: optimizedSlidersImages[index]?.attributes,
        },
      },
    };
  });

  return newOptimizedHeroSlider;
};
