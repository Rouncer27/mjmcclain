export const Logo_Options_Query = `
     footerLogo: siteWideSettings {
        logoOptions {
            footerLogo {
                node {
                    altText
                    sourceUrl
                     mediaDetails {
                        height
                        width
                    }
                }
            }
        }
    }
`;

export const Footer_Menu_Query = `
     footerMenu: menu(id: "Footer Menu", idType: NAME) {
        menuItems(first: 99999) {
            nodes {
                label
                uri
                parentId
                cssClasses
                childItems {
                    nodes {
                        label
                        uri
                    }
                }
            }
        }
    }
`;

export const Social_Media_Links_Query = `
     socialMediaLinks: siteWideSettings {
        socialMedia {
            facebookLink
            instagramLink
            linkedinLink
            youtubeLink
        }
    }
`;

export const Phone_Number_Query = `
     phoneNumber: siteWideSettings {
        phoneNumber {
            phoneNumber
            phoneNumberDisplay
        }
    }
`;
