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
