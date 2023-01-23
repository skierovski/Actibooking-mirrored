import { useEffect } from "react";
import { useState } from "react";

const CalendarAuthorize = () => {
    const [tokenClient, setTokenClient] = useState({});

    function GetAccesCalendar() {
        tokenClient.requestAccessToken();
    }
    console.log(process.env.REACT_APP_SECRET_KEY)

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_SECRET_KEY, 
            });
            setTokenClient(google.accounts.oauth2.initTokenClient({
                client_id: process.env.REACT_APP_SECRET_KEY,
                scope: 'https://www.googleapis.com/auth/calendar.readonly',
                callback: (response) => {
                  console.log(response)
                }
              })
              );
    }, [])
    return (
        <button onClick={GetAccesCalendar}>Magic</button>
    )
}

export default CalendarAuthorize