
import React from "react";
import ReactGA from "react-ga";

const TRACKING_ID = "G-N9637Z5YRC"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);


const useAnalyticsEventTracker = (category="Blog category") => {

    console.log("This event Tracker has been triggered");
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;