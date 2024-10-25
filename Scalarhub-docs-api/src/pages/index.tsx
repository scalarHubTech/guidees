import React from 'react';
import { Redirect } from '@docusaurus/router';
// import  Link  from '@docusaurus/Link';
           

// Default export for Home component
export default function Home(): JSX.Element {
  return <Redirect to="/guides/Overview" />;
}
