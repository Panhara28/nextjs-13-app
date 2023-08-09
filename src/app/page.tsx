import { client } from "@/apollo";
import HomeScreen from "@/screens/Home";
import { gql } from "@apollo/client";

const session = true;

async function getNewsList() {
  const { data } = await client.query({
    query: gql`
      # Write your query or mutation here
      query publicNewsList($websiteId: Int!) {
        publicNewsList(websiteId: $websiteId) {
          data {
            id
            title
          }
        }
      }
    `,
    variables: {
      websiteId: 1,
    },
  });
  return data.publicNewsList;
}

export default async function Home() {
  if (!session) throw new Error(`Session is invalid!`);
  const newsList = await getNewsList();
  return (
    <>
      <HomeScreen />
    </>
  );
}
