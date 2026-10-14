export const Hero_Query = `
    hero: heroComponent {
        heroTitle
        heroContentBig
        heroContent
        heroButtonText
        heroButtonLink {
            edges {
                node {
                    uri
                }
            }
        }
        heroImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Image_Content_Query = `
    imageContent: imageContentComponent {
        title
        content
        contentBold
        imageMain {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }

        imageSecondary {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Block_Content_Query = `
    blockContent: blockContentComponent {
        content
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        iconContent
        icon {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Callout_Link_Query = `
    calloutLink: calloutLinkComponent {
        title
        content
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        imageOne {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageTwo {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;
