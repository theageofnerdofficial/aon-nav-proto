import React from 'react';

const styleParam = {
  backgroundColor: '343a40',
  padding: 10.4,
};

const Avatar = (o) => {
  if (!o.src) {
    return '';
  }
  return (
    <img
      alt="User avatar"
      src={`https://avatars.dicebear.com/v2/identicon/${o.src}.svg?options[padding]=${styleParam.padding}&options[background]=%23${styleParam.backgroundColor}`}
      className="border shadow-sm"
      style={{ ...o.style, borderRadius: '100%' }}
    />
  );
};

export default Avatar;
