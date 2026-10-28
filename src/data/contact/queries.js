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

export const Image_Row_Query = `
    imageRow: imageRowComponent {
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
        imageThree {
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
