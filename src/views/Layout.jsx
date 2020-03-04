import React from 'react';
import Navigation from '../components/Navigation';

const Layout = (props) => {
  const {
    pageName,
    children
  } = props;

  return (
    <main className={`${pageName} layout`}>
      <nav>
        <Navigation />
      </nav>

      <section>
        { children }
      </section>
    </main>
  );
};

export default Layout;
