import * as React from 'react';

import HomeLink from '../../components/home-link/home-link';
import ContactLinks from '../../components/contact-links/contact-links';

import './contact.scss';

// todo: add more unit tests
export default function Contact() {
  return (
    <div className="contact-container">
      <HomeLink />
      <div className="contact-page">
        <div className="contact-title">Let&apos;s get in touch</div>
        <ContactLinks />
      </div>
    </div>
  );
}
