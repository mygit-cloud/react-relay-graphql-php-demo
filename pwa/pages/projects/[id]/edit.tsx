import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/project/Form";
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
          <title>{project && `Edit Project ${project["@id"]}`}</title>
        </Head>
      </div>
      <Form project={project} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const project = await fetch(asPath.replace("/edit", ""));

  return { project };
};

export default Page;
