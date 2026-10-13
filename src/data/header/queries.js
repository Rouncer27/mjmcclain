export const Header_Menu_Query = `
     menuTop: menu(id: "Header Menu", idType: NAME) {
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

export const Mobile_Menu_Query = `
     mobile: menu(id: "Mobile Menu", idType: NAME) {
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

export const Logo_Options_Query = `
     mainLogo: siteWideSettings {
        logoOptions {
            mainLogo {
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
