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

export const Our_Approach_Query = `
    ourApproach: ourApproachComponent {
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

export const Melody_Query = `
    melody: melodyComponent {
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

export const Work_With_Query = `
    workWith: workWithComponent {
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
