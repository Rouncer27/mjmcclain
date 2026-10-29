export const Local_Business_Query = `
     localBusiness: siteWideSettings {
        contactInformation {
            address
            phoneNumber
            email
        }
        socialMedia {
            facebookLink
            instagramLink
            linkedinLink
            youtubeLink
        }
        logoOptions {
            mainLogo {
                node {
                    sourceUrl
                }
            }
        }
    }
`;
