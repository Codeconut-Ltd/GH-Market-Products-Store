import { atom } from "recoil"

/**
 * Modal component display state.
 *
 * Initial state: Closed/Hidden modals.
 */
const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
})

export default modalOpenState
