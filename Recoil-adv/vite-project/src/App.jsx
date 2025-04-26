import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom, jobsAtom , notificationAtom, messagingAtom} from './atoms'

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

  return (
    <>
      <button>Home</button>

      <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
    <button>Notification({NotificationAtomCount})</button>
      
      <button>Me</button>
    </>
  )
}

export default App
