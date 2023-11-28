import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import ApolloSetting from '../src/components/commons/apollo';

export default function App({ Component }): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
