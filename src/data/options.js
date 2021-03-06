import animationData from "../animations/landinganimation/data";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import estimateAnimation from "../animations/estimateAnimation/data.json";

export const menuOptions = [
  { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
  {
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "iOS/Android App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 3,
  },
];

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const documentsOptions = {
  loop: true,
  autoplay: true,
  animationData: documentsAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const scaleOptions = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const automationOptions = {
  loop: true,
  autoplay: true,
  animationData: automationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const uxOptions = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const mobileOptions = {
  loop: true,
  autoplay: true,
  animationData: integrationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const revolutionOptions = {
  loop: true,
  autoplay: true,
  animationData: technologyAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const estimateOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
