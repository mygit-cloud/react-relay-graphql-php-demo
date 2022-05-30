import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../components/engineer/Form";
import Head from "next/head";

const Page: NextComponentType<NextPageContext> = () => (
  <div>
    <div>
      <Head>
        <title>Create Engineer </title>
      </Head>
    </div>
    <Form />
  </div>
);

export default Page;
