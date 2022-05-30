import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/engineer/Form";
import { Engineer } from "../../../types/Engineer";
import { fetch } from "../../../utils/dataAccess";
import Head from "next/head";

interface Props {
  engineer: Engineer;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  engineer,
}) => {
  return (
    <div>
      <div>
        <Head>
          <title>{engineer && `Edit Engineer ${engineer["@id"]}`}</title>
        </Head>
      </div>
      <Form engineer={engineer} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const engineer = await fetch(asPath.replace("/edit", ""));

  return { engineer };
};

export default Page;
