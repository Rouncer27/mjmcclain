export const Hero_Query = `
    hero: heroComponent {
        heroTitle
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

export const Main_Content_Query = `
    mainContent: mainContentComponent {
        title
        content
    }
`;
