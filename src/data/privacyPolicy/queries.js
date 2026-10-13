export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
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

export const Main_Content_Query = `
    mainContent: mainContentComponent {
        title
        content
    }
`;
