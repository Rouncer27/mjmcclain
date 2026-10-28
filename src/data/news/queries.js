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

export const All_posts_Query = `
    posts: posts(first: 999999) {
        edges {
            node {
                slug
                title
                postType {
                    excerpt
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
        }
    }

`;
