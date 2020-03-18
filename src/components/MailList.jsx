import React from 'react';

import Mail from './Mail';

const MailList = ({ list }) => {
  return (
    list.map((mail, index) => {
      return (
        <Mail
          key={`${mail.from}_${index}`}
          from={mail.from}
          title={mail.title}
          text={mail.text}
          date={mail.date}
        />
      )
    })
  );
};

export default MailList;
