import React from 'react';
import logo from '../logo.svg';
import './Placeholder.css';

function Placeholder() {
  return (
    <div className="Placeholder">
      <section className="Placeholder-section">
        <img src={logo} className="Placeholder-logo" alt="logo" title="Psi by Nick Novell from the Noun Project" width="240" height="240" />

        <div className="Placeholder-index-panel">
          <div><a href="#shaman"><strong>DJs</strong> are guides</a></div>
          <div><a href="#music"><strong>Rhythm</strong> is breath</a></div>
          <div><a href="#dance"><strong>Dancing</strong> is The Way</a></div>
        </div>

        <div className="Placeholder-call-to-action">
          <a href="#wave"><strong>Sync in</strong></a>
        </div>

        <div className="Placeholder-index-icons">
          <a aria-label="Github" href="https://github.com/psitothepower" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a aria-label="Twitter" href="https://twitter.com/psitothepower" className="last" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </section>

      <section id="shaman" className="Placeholder-section">
        <h1>The Guide</h1>
        <p>We believe that <strong>DJs/Producers</strong> are more than artists.</p>
        <p>They understand and connect with their people beyond music and fashion, constantly checking the pulse of the community and providing relief to social tension.</p>
        <p>The DJ lives art on a constant basis with the ultimate goal of sharing moments of joy with their tribe.</p>
        <p>We celebrate and thank our Shamans</p>
      </section>

      <section id="music" className="Placeholder-section">
        <h1>The Breath</h1>
        <p>Music, like languages and mathematics, is a human form of communication, but unlike them, it is also <strong>Rhythm</strong> and rhythm transcends human limits.</p>
        <p>Time is not linear and everything flows according to multiple simultaneous cycles.</p>
        <p>While most of the media are shrinking their formats trying to compete for attention, electronic music is on a totally different trajectory.</p>
        <p>We believe that a DJ Set is the perfect way to convey complex feelings to a very deep level.</p>
      </section>

      <section id="dance" className="Placeholder-section">
        <h1>The Way</h1>
        <p>We believe in Dance as a form of meditation and self discovery. Mind and body finally give up control and really stand in that beat.</p>
        <p>Every cell of our body contains the memory of this ancestral mating ritual, unregulated and visceral.</p>
        <p>And it is when dancing together, that <strong>we become one</strong>. Literally.</p>
      </section>

      <section id="wave" className="Placeholder-section">
        <h1>Ψ<sup>2</sup></h1>
        <p>The gap between science and eastern spiritual tradition is closing down, more and more people are rejecting the polarization fueled by traditional institutions.</p>
        <p>Regulated access to recreational drugs in a safe environment is also important to achieve personal and collective awareness.</p>
        <p><strong>PSI to the power is the wave that synchronizes compassionate minds to a rhythm and moving bodies to a movement.</strong></p>
      </section>
    </div>
  );
}

export default Placeholder;
