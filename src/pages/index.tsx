import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the desired path
    history.push('guides/Overview');
  }, [history]);

  return null;
};

export default Home;