interface nav {
  id: number
  link: string
  section: string
  icon: string
  text: string
  subList?: nav[]
}


const sidebarNavAbove: nav[] = [
  {
    id: 0,
    link: "/",
    section: "dashboard",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "Dashboard",
  },
  {
    
    id: 1,
    link: "/inbounds",
    section: "inbounds",
    icon: "mdi:medicine",
    text: "Inbounds",
    subList: [
      {
        id: 0,
        link: "/inbounds",
        section: "dispensary-counter",
        icon: "lucide:layout-dashboard", //width:"20"
        text: "Dispensary Counter",
      },
      {
        id: 1,
        link: "/inbounds/prescriptions",
        section: "dispensary-counter",
        icon: "lucide:layout-dashboard", //width:"20"
        text: "Prescriptions",
      },
      {
        id: 2,
        link: "/inbounds/marketplace",
        section: "dispensary-counter",
        icon: "lucide:layout-dashboard", //width:"20"
        text: "Marketplace",
      },
    ]
  },
  {
    id: 2,
    link: "/manager",
    section: "manager",
    icon: "material-symbols:bookmark-manager",
    text: "Manager",
  },
  {
    id: 3,
    link: "/crm",
    section: "crm",
    icon: "material-symbols:group",
    text: "CRM",
  },
  {
    id: 4,
    link: "/bankOffice",
    section: "bankOffice",
    icon: "solar:chat-round-money-bold",
    text: "Back-office",
  },
  {
    id: 5,
    link: "/settings",
    section: "settings",
    icon: "material-symbols:settings-account-box",
    text: "settings",
  },
  
];

const sidebarNavBelow: nav[] = [
  {
    id: 6,
    link: "/helpDesk",
    section: "helpDesk",
    icon: "streamline:computer-desktop-help-device-help-information-display-computer-desktop-question-info",
    text: "Help Desk",
  },
  {
    id: 7,
    link: "/login",
    section: "logout",
    icon: "tabler:logout",
    text: "Logout",
  },
]

export {sidebarNavAbove, sidebarNavBelow};
