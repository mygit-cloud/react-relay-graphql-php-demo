import { NextComponentType, NextPageContext } from "next";
import { List } from "../../components/engineer/List";
import { PagedCollection } from "../../types/Collection";
import { Engineer } from "../../types/Engineer";
import { fetch } from "../../utils/dataAccess";
import Head from "next/head";

interface Props {
  collection: PagedCollection<Engineer>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  collection,
}) => (
  <div>
    <div>
      <Head>
        <title>Engineer List</title>
      </Head>
    </div>
    <List engineers={collection["hydra:member"]} />
  </div>
);

Page.getInitialProps = async () => {
  const collection = await fetch("/engineers");

  return { collection };
};

export default Page;
