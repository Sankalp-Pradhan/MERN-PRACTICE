import { atom, atomFamily, selector } from 'recoil'

export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
})

export const totalNotificationSelectorall = selector({
    key: totalNotificationSelector,
    get: ({ get }) => {
        const allNOtification = get(notifications);
        return allNOtification.network + allNOtification.jobs + allNOtification.notifications + allNOtification.messaging
    }
})

export const todosAtomFamily = atomFamily({
    key: todosAtomFamily,
    default: id => {
        return todosAtomFamily.find(x => x.id === id)
    },
})



export const networkAtom = atom({
    key: 'networkAtom',
    default: 104
})
export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})
export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return [networkAtomCount, jobsAtomCount, notificationAtomCount, messagingAtomCount]
    }
})
