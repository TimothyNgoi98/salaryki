import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    let event = ReactGA.event({category, action, label});
    console.log('hello: ', event)
    console.log("Fuck!1")
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;