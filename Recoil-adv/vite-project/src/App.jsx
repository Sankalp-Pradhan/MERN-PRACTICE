import { useMemo, useState } from 'react'
import { RecoilRoot, selector, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotificationSelector } from './atoms'

// recoil doesnt work with pre dev verison of react
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
   const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const NotificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNOtificationCount = useRecoilValue(totalNotificationSelector)

  // selector approacch is better than memo coz in future you can create another selector using previous selector
  // const totalNOtificationCount = useMemo(() => {
  //   return networkNotificationCount = jobsAtomCount + messagingAtomCount + NotificationAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, messagingAtomCount, NotificationAtomCount])

  return (
    <>
      <button>Home</button>

      <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notification({NotificationAtomCount})</button>

      <button>Me ({totalNOtificationCount})</button>
    </>
  )
}

export default App
