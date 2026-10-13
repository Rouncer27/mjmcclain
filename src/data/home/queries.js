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
