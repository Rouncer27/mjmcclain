export const Hero_Query = `
    hero: heroComponent {
        heroTitle
        heroContent
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

export const Page_Intro_Query = `
    pageIntro: pageIntroComponent {
        title
        content
        image {
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

export const Services_Query = `
    services: servicesComponent {
        title
        outro
        servicesList {
            title
            description
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
    }
`;

export const Callout_Query = `
    callout: calloutComponent {
        title
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;
