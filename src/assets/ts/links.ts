export interface Link {
  link: string;
  index: number;
  label: string;
}

export const links: Link[] = [
  {
    index: 1,
    link: "/example-1",
    label: "Converting User input on change",
  },
  {
    index: 2,
    link: "/example-2",
    label: "Emitting passed down values from components",
  },
  {
    index: 3,
    link: "/example-3",
    label: "CSS Theme Switcher using localstorage",
  },
  {
    index: 4,
    link: "/example-4",
    label: "Passing components to components as a prop",
  },
  {
    index: 5,
    link: "/example-5",
    label: "Timed Popups with Transitions",
  },
];
