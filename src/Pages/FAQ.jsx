// src/Pages/FAQ.jsx
import React from 'react';

export default function FAQ() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Frequently Asked Questions</h1>
      <div>
        <h3 className="font-semibold">What is Biine?</h3>
        <p>Biine is an online platform for buying and selling goods or services in Zambia.</p>
      </div>
      <div>
        <h3 className="font-semibold mt-4">Is it free to post ads?</h3>
        <p>Yes, posting basic ads is free. Premium placements may have fees.</p>
      </div>
      <div>
        <h3 className="font-semibold mt-4">How do I edit or remove my ad?</h3>
        <p>Log in to your account and go to "My Ads" to manage your listings.</p>
      </div>
      <div>
        <h3 className="font-semibold mt-4">Who can I contact for help?</h3>
        <p>You can reach us via the contact page or email info@biine.app.</p>
      </div>
    </div>
  );
}