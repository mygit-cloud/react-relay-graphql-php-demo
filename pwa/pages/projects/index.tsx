import { NextComponentType, NextPageContext } from "next";
import { List } from "../../components/project/List";
import { PagedCollection } from "../../types/Collection";
import { Project } from "../../types/Project";
import { fetch } from "../../utils/dataAccess";
import Head from "next/head";

interface Props {
  collection: PagedCollection<Project>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  collection,
}) => (
  <div>
    <div>
      <Head>
        <title>Project List</title>
      </Head>
    </div>
    <List projects={collection["hydra:member"]} />
  </div>
);

Page.getInitialProps = async () => {
  const collection = await fetch("/projects");

  return { collection };
};

export default Page;
