// Centralized contact info for MiChe Auto Nepal.
// Change the phone number or email HERE ONLY — every page/component below reads from this file.

export const CONTACT = {
  phoneDisplay: "+977-9763610526",
  phoneTel: "+9779763610526",
  whatsapp: "9779763610526",
  email: "micheautonepal@gmail.com",
};

// National distributor — a separate company, supplies MiChe Auto Nepal and other dealers.
export const DISTRIBUTOR = {
  name: "GMC Motors Company Pvt. Ltd.",
  badge: "National Distributor",
  offices: [
    {
      label: "Corporate Office",
      address: "Pashupati Vision Complex, Gaushala, Kathmandu, Nepal",
    },
    {
      label: "Contact Office",
      address: "Pepsicola, Kathmandu, Nepal",
    },
  ],
  phoneDisplay: "+977-9801069098",
  phoneTel: "+9779801069098",
  email: "gmcmotors17@gmail.com",
};

// Dealer-wanted recruitment call — cities MiChe Auto / GMC Motors is looking for dealers in.
export const DEALER_WANTED = {
  insideValley: ["Kathmandu", "Bhaktapur", "Lalitpur"],
  outsideValley: [
    "Chitwan",
    "Hetauda",
    "Surkhet",
    "Butwal",
    "Itahari",
    "Tikapur",
    "Dhangadhi",
    "Pokhara",
    "Biratnagar",
    "Birgunj",
    "Nepalgunj",
  ],
};

export const BRANCHES = [
  {
    name: "MiChe Auto Nepal Pvt. Ltd.",
    badge: "Assembly Plant",
    address: "Tokha-2, Kathmandu, Nepal",
    phone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    hours: "Sunday - Friday, 9:00 AM - 6:00 PM",
    showEmail: true,
  },
  {
    name: DISTRIBUTOR.name,
    badge: DISTRIBUTOR.badge,
    officeLines: DISTRIBUTOR.offices,
    phone: DISTRIBUTOR.phoneDisplay,
    email: DISTRIBUTOR.email,
    showEmail: true,
  },
  {
    name: "Kupondole Branch",
    badge: "Dealer",
    address: "Kupondole, Lalitpur, Nepal",
    phone: "+977-9765015555",
    hours: "Sunday - Friday, 9:00 AM - 6:00 PM",
    showEmail: false,
  },
  {
    name: "Maitidevi Branch",
    badge: "Dealer",
    address: "Maitidevi, Kathmandu, Nepal",
    phone: "+977-9708553077",
    hours: "Sunday - Friday, 9:00 AM - 6:00 PM",
    showEmail: false,
  },
];
