import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getBlogs = async () => {
    const query = gql`
        query MyQuery {
            blogsConnection {
            edges {
                node {
                title
                excerpt
                slug
                createdAt
                content {
                    html
                    json
                    markdown
                    raw
                    text
                }
                image {
                    url
                }
                author {
                    name
                    photo {
                    url
                    }
                }
                blogCategories {
                    name
                    slug
                }
                }
            }
            }
        }      
    `;

    const result = await request(graphqlAPI, query);
    return result.blogsConnection.edges;
};

export const getBlogDetails = async (slug) => {
    const query = gql`
    query getBlogDetails($slug: String!) {
        blogs(where: {slug: $slug}) {
            title
            excerpt
            slug
            createdAt
            content {
                raw
                html
                markdown
            }
            image {
                url
            }
            author {
                name
                photo {
                url
                }
            }
            blogCategories {
                name
                slug
            }
        }
    }     
    `;
    const result = await request(graphqlAPI, query, { slug });
    return result.blogs;
}

export const getAuthors = async () => {
    const query = gql`
    query getAuthor {
        authors {
          name
          slug
          photo {
            url
          }
        }
      }      
    `;

    const result = await request(graphqlAPI, query);
    return result.authors;
}