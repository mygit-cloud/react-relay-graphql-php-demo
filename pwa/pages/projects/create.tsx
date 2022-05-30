import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../components/project/Form";
import Head from "next/head";

const Page: NextComponentType<NextPageContext> = () => (
  <div>
    <div>
      <Head>
        <title>Create Project </title>
      </Head>
    </div>
    <Form />
  </div>
);

export default Page;
