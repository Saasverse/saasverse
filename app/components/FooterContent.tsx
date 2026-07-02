'use client';

import { useEffect, useState } from 'react';

interface ContactPage {
  acf?: {
    contact_details?: {
      contact_number?: string;
    };
  };
}

export default function FooterContent() {
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    const fetchContactNumber = async () => {
      try {
        const res = await fetch(
          'https://saasverse.in/saasadmin/wp-json/wp/v2/pages?slug=contact-us-page'
        );

        const pages: ContactPage[] = await res.json();
        const number = pages?.[0]?.acf?.contact_details?.contact_number;

        if (number) setContactNumber(number);
      } catch (error) {
        console.error('Error fetching footer contact number:', error);
      }
    };

    fetchContactNumber();
  }, []);

  const formatPhone = (number: string) => {
    let str = number.replace(/\D/g, '');

    if (!str.startsWith('91')) {
      str = `91${str}`;
    }

    return `+${str.slice(0, 2)}-${str.slice(2)}`;
  };

  return (
    <div
      className="
        flex items-center justify-between w-full
        px-5 py-5 md:px-[50px] md:py-[10px]
        bg-[radial-gradient(circle,_rgba(21,108,156,1)_0%,_rgba(0,0,0,1)_100%)]
      "
    >
      <h3
        className="
          relative m-0 font-bold text-white
          text-[17px] md:text-[24px]
          ml-[10px] md:ml-0
          before:content-['']
          before:absolute
          before:top-1/2
          before:-translate-y-1/2
          before:left-[-20px] md:before:left-[-30px]
          before:w-[12px] before:h-[12px]
          md:before:w-[15px] md:before:h-[15px]
          before:rounded-full
          before:bg-green-500
          before:shadow-[0_0_20px_#66ff99]
        "
      >
        Available
      </h3>

      <div
        className="
          text-white font-medium
          text-[17px] md:text-[22px]
          mr-[35px] md:mr-[70px]
        "
      >
        Call On{' '}
        {contactNumber && (
          <a
            href={`tel:+${contactNumber}`}
            className="text-white no-underline"
          >
            {formatPhone(contactNumber)}
          </a>
        )}
      </div>
    </div>
  );
}