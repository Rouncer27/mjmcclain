export const Page_Seo_Query = `
   	seoMetaTags {
        seoMetaInformation {
            metaDescription
            metaTitle
            metaImage {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;
