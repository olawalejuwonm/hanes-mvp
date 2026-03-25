const mockWelshIcons = [
  {
    id: "1",
    name: "Owain Glyndŵr",
    title: "Prince of Wales",
    era: "Medieval",
    era_years: "1349 – 1416",
    description: "The last native Welshman to hold the title Prince of Wales.",
    story_summary:
      "Owain Glyndŵr led the most serious attempt to throw off English rule and restore Welsh independence.",
    image_url: "",
    location_name: "Sycharth",
    difficulty: "intermediate",
  },
  {
    id: "2",
    name: "Llywelyn the Great",
    title: "Prince of Gwynedd",
    era: "Medieval",
    era_years: "1173 – 1240",
    description: "Ruler who unified much of Wales under his control.",
    story_summary:
      "Through military skill and political acumen, Llywelyn united the Welsh princes and created a near-independent Welsh state.",
    image_url: "",
    location_name: "Aberffraw",
    difficulty: "beginner",
  },
  {
    id: "3",
    name: "Aneurin Bevan",
    title: "Founder of the NHS",
    era: "Modern",
    era_years: "1897 – 1960",
    description: "Labour politician who created the National Health Service.",
    story_summary:
      "Born in Tredegar, Bevan rose from a coal miner to become the architect of the NHS.",
    image_url: "",
    location_name: "Tredegar",
    difficulty: "beginner",
  },
];

const mockLocations = [
  {
    id: "1",
    name: "Caernarfon Castle",
    era: "Medieval",
    description:
      "One of the finest examples of medieval castle architecture in Europe, built by Edward I.",
    ar_model_type: "castle",
    image_url: "",
  },
  {
    id: "2",
    name: "Conwy Castle",
    era: "Medieval",
    description:
      "A magnificent medieval fortress on the north Wales coast, a World Heritage Site.",
    ar_model_type: "castle",
    image_url: "",
  },
  {
    id: "3",
    name: "Harlech Castle",
    era: "Medieval",
    description:
      "Dramatically sited on a rocky promontory overlooking Cardigan Bay.",
    ar_model_type: "castle",
    image_url: "",
  },
];

export const base44 = {
  entities: {
    WelshIcon: {
      list: async () => mockWelshIcons,
    },
    Location: {
      list: async () => mockLocations,
    },
  },
  auth: {
    me: async () => {
      throw new Error("Not authenticated");
    },
    logout: (redirectUrl) => {
      console.log("Logout called with redirect:", redirectUrl);
    },
    redirectToLogin: (returnUrl) => {
      console.log("Redirect to login with return URL:", returnUrl);
    },
  },
};
