import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/engineer/Show";
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
          <title>{`Show Engineer ${engineer["@id"]}`}</title>
        </Head>
      </div>
      <Show engineer={engineer} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const engineer = await fetch(asPath);

  return { engineer };
};

export default Page;
