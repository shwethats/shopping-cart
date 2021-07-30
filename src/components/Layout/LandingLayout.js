import React from 'react';
import Footer from './Footer';

function LandingLayout(props) {
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="landing-bg h-100vh">
          {props.children}
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default LandingLayout;
