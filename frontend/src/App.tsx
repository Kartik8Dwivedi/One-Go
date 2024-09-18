import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Login';
import Login from './pages/Login';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './input.css'
import Home from './pages/customised/Home';
import SecondJourney from './pages/customised/SecondJourney';
import JourneyOptions from './pages/customised/JourneyOptions';
import supabase from './utils/supabase';
import { useEffect, useState } from 'react';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { getOtpVerified, getUserId } from './redux/store';
import Otp from './pages/Otp';
import { updateJourney, updateUID } from './redux/states/User';
import Booking from './pages/booking/Booking';
import JourneyDetails from './pages/customised/JourneyDetails';
import ConfirmBooking from './pages/customised/ConfirmBooking';
import BookingPage from './pages/booking/BookingPage';

setupIonicReact();

const App: React.FC = () => {
const dispatch=useDispatch()
  const [session, setSession] = useState<any>(null)
const [uid,setUid]=useState<any>(null)


useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
  })



  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
    dispatch(updateUID(session?.user))
    dispatch(updateJourney("Rail1"))
  })

  if(session && session.user){
    setUid(session?.user.id)
    // dispatch(updateUID(session.user))
  } 

  return () => subscription.unsubscribe()
},[])


console.log(useSelector(getUserId))

const otp= useSelector(getOtpVerified)

console.log(otp)
 return(
<IonApp>
<IonReactRouter>
  <IonTabs>
    <IonRouterOutlet>
    <Route path="/login" component={Login}/>
      <Route path="/custom" component={Home}/>
      <Route path="/custom/secondJourney" component={SecondJourney}/>
      <Route path="/custom/secondJourney/options" component={JourneyOptions}/>
      <Route path="/custom/journeyDetails" component={JourneyDetails}/>
      <Route path="/confirm" component={ConfirmBooking}/>
      <Route path="/booking-page" component={BookingPage}/>
      <Route path="/booking" component={Booking}/>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
          <IonTabButton tab="book" href="/book">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="customised" href="/custom">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
         
        </IonTabBar>
  </IonTabs>
</IonReactRouter>

     
   
   
    
   
    

  </IonApp>
 
)
  
 
};

export default App;
