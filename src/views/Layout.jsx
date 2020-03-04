import React from 'react';

const Layout = (props) => {
  const {
    pageName,
    menu,
    children
  } = props;

  return (
    <main className={`${pageName} layout`}>
      <nav>
        { menu }
      </nav>

      <section>
        { children }
      </section>
    </main>
  );
};

export default Layout;
