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

export const Contact_Information_Query = `
     contactInformation: siteWideSettings {
        contactInformation {
            address
            phoneNumber
            email
        }
    }
`;
