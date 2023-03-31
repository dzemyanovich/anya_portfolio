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
      <CustomLink to="https://www.dropbox.com/s/8gmv0n6ikvp1dat/anna_pivunova_cv.pdf?dl=0">
        <img src={arrowTopRight} alt="" />
        <span className="contact-link-text">CV</span>
      </CustomLink>
    </div>
  );
}
