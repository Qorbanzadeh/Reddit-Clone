import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <meta name="description" content="An awesome looking Reddit Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box pt={10}>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
