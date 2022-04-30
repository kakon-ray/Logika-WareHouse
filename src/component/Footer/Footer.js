import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto md:px-20 px-4 bg-gray-800 text-slate-400 pb-1 pt-1 sm:text-justify">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-12 my-20">
        <div>
          <h1 className="text-2xl mb- mt-3">Logika Warehouse</h1>
          <div className="border-2 border-b-red-500 w-16 my-5"></div>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold py-3">QUICK LINK</h2>
          <div className="border-2 border-b-red-500 w-16 mb-5"></div>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Latest News</p>
          <p>Products</p>
          <p>Contect</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold py-3">SERVICE OFFERS</h2>
          <div className="border-2 border-b-red-500 w-16 mb-5 "></div>
          <p>Road Transport</p>
          <p>Sea Freight</p>
          <p>Railway Logistics</p>
          <p>Packaging & Storage</p>
          <p>Ware Housing</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold py-3">CONTACT US</h2>
          <div className="border-2 border-b-red-500 w-16 mb-5"></div>
          <p>Address: 78 Oxfrod Street, Beverly Hill New York, United</p>
          <p>States of America</p>
          <p>Phone: (800) 0123 4567 890</p>
          <p>Fax: (800) 0123 4567 891</p>
          <p>E-mail: email@envato.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
