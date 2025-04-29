import { useEffect } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { totalNotificationSelector, notifications } from './atoms'

// recoil doesnt work with pre dev verison of react
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNOtificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    //fetch
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])
  // selector approacch is better than memo coz in future you can create another selector using previous selector
  // const totalNOtificationCount = useMemo(() => {
  //   return networkNotificationCount = jobsAtomCount + messagingAtomCount + NotificationAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, messagingAtomCount, NotificationAtomCount])

  return (
    <>
      <button>Home</button>

      <button>My network({networkCount.notificationsT >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messaging({networkCount.messaging})</button>
      <button>Notification({networkCount.notifications})</button>

      <button>Me ({totalNOtificationCount})</button>
    </>
  )
}

export default App
