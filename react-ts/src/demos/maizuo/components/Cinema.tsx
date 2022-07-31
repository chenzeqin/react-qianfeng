import React, { useEffect } from 'react';

import axios from 'axios';

export default function Cinema() {
  useEffect(() => {
    axios.get(
      'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5767894',
      {
        headers: {
          'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
          'X-Host': `mall.film-ticket.cinema.list`,
        },
      }
    );
  }, []);
  return <div>Cinema</div>;
}
