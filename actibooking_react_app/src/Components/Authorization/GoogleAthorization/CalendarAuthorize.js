import { useEffect } from "react";
import { useState } from "react";

const CalendarAuthorize = () => {
    const [tokenClient, setTokenClient] = useState({});

    function GetAccesCalendar() {
        tokenClient.requestAccessToken();
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com", 
            });
            setTokenClient(google.accounts.oauth2.initTokenClient({
                client_id: "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com",
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