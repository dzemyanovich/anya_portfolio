import * as React from 'react';

import CustomLink from '../custom-link/custom-link';

import arrowTopRight from '../../images/arrow-top-right.svg';
import './contact-links.scss';

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <CustomLink to="https://www.linkedin.com/in/anna-pivunova/">
        <img src={arrowTopRight} alt="" />
        <span className="contact-link-text">LinkedIn</span>
      </CustomLink>
      <CustomLink to="mailto:pivunovaanna@gmail.com">
        <img src={arrowTopRight} alt="" />
        <span className="contact-link-text">Mail</span>
      </CustomLink>
      <CustomLink to="https://www.behance.net/ania_pivunbc2b">
        <img src={arrowTopRight} alt="" />
        <span className="contact-link-text">Behance</span>
      </CustomLink>
      {/* eslint-disable-next-line max-len */}
      <CustomLink to="https://www.dropbox.com/scl/fi/cqcvwoox6uiqbkapbb04c/CV_Anna-Pivunova_Lead-UX-Designer.pdf?rlkey=82w2w4o4qr5l1jbgc29hf0qwb&dl=0">
        <img src={arrowTopRight} alt="" />
        <span className="contact-link-text">CV</span>
      </CustomLink>
    </div>
  );
}
