let mailData = {
  name: 'Apple Mail',
  mailboxes: {
    drafts: [
      {subject: 'Resignation Notice', message: 'I hate this job. Peace.'},
      {subject: 'To Whom it May Concern', message: 'Hire me. I need money.'}
    ],
    inbox: [
      {subject: 'Win a Free iPhone!!!', message: 'Subscribe now for a chance to win an iPhone!'},
      {subject: 'Check-in for your appointment tomorrow.', message: 'Your appointment is at 8am tomorrow. Please arrive 15 minutes early to fill out paperwork.'}
    ],
    sent: [
      {subject: 'Thank You Letter', message: 'Thank you for inviting me to interview for your company. I enjoyed my time and I hope you did as well.'},
      {subject: 'Urgent - Please Review', message: 'Please review the email previously sent. Thanks.'}
    ],
    junk: [
      {subject: 'Click here to claim your prize!', message: 'I am a Nigerian prince who recently got a lot of money. Send me your bank information so I can wire $1,000,000 to you.'}
    ],
    trash: [
      {subject: 'Job Interview Results', message: 'We would like to regretfully inform you that you were not chosen for the position.'},
      {subject: 'Your Horoscope Reading', message: 'Tomorrow, your sun will be rising from the east. This means you are in great danger. Throw salt over your shoulder.'}
    ]},
  emailaccounts: ['bean@gmail.com', 'meol@yahoo.com', 'chungus@hotmail.com']
};

// prints mailbox names
console.log(Object.keys(mailData.mailboxes));

// prints emails in inbox
console.log(Object.values(mailData.mailboxes));

//prints text of second email
console.log(mailData.mailboxes.drafts[1].message);

// mark email as sent
mailData.mailboxes.sent[1].status = 'sent!';
console.log(mailData.mailboxes.sent[1]);

//add draft email to draft inbox

mailData.mailboxes.drafts[2] = {subject: 'why', message: 'no.'}
console.log(mailData.mailboxes.drafts);