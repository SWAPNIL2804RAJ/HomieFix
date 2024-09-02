import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <div className="fListSection">
          <p className="fListHeader">Geographical Divisions</p>
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
          </ul>
        </div>
        <div className="fListSection">
          <p className="fListHeader">Services</p>
          <ul className="fList">
            <li className="fListItem">Carpenter</li>
            <li className="fListItem">Painter</li>
            <li className="fListItem">Interior Designer</li>
            <li className="fListItem">Plumber</li>
          </ul>
        </div>
        <div className="fListSection">
          <p className="fListHeader">Real Estate</p>
          <ul className="fList">
            <li className="fListItem">House</li>
            <li className="fListItem">Offices</li>
            <li className="fListItem">Apartments</li>
            <li className="fListItem">Hotels</li>
          </ul>
        </div>
        <div className="fListSection">
          <p className="fListHeader">Support</p>
          <ul className="fList">
            <li className="fListItem">About HomieFix.co</li>
            <li className="fListItem">Customer Service help</li>
            <li className="fListItem">Join As a Tradesperson</li>
            <li className="fListItem">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="fText">Copyright © 2024 HomieFix™ . All rights reserved.</div>
    </div>
  );
}

export default Footer;
