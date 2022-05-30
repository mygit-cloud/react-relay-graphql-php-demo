import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/project/Show";
import { Project } from "../../../types/Project";
import { fetch } from "../../../utils/dataAccess";
import Head from "next/head";

interface Props {
  project: Project;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  project,
}) => {
  return (
    <div>
      <div>
        <Head>
          <title>{`Show Project ${project["@id"]}`}</title>
        </Head>
      </div>
      <Show project={project} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const project = await fetch(asPath);

  return { project };
};

export default Page;
