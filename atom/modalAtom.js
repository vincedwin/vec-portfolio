import { atom } from "recoil";

export const modalState = atom({
    key: "modalState",
    default: false,
});

export const modalTypeState = atom({
  key: "modalTypeState",
  default: '',
});

export const modalAnimationState =atom({
  key:'modalAnimationState',
  default: '',
})

export const modalDetailState = atom({
  key: "modalDetailState",
  default: {},
})