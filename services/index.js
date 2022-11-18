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
                content {
                    html
                    text
                    json
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