import {
  Plane,
  Sun,
  Moon,
  Coffee,
  CircleOff,
  Tablets,
  BedSingle,
  AlarmClock,
  type LucideIcon,
} from "lucide-react";

// ── Real app palette (lib/src/theme.dart) ─────────────────────────────────
export const CAT = {
  "SEEK LIGHT": "#F0A500",
  WAKE: "#E8C84A",
  "AVOID LIGHT": "#7C6AEB",
  "NO CAFFEINE": "#E87050",
  CAFFEINE: "#C87941",
  MELATONIN: "#6AB0D4",
  FLIGHT: "#50B8E8",
  SLEEP: "#3D5A99",
  "STAY AWAKE": "#50C8A0",
} as const;

export type Category = keyof typeof CAT;

export const CAT_ICON: Record<Category, LucideIcon> = {
  FLIGHT: Plane,
  WAKE: AlarmClock,
  "STAY AWAKE": Sun,
  "SEEK LIGHT": Sun,
  "AVOID LIGHT": Moon,
  CAFFEINE: Coffee,
  "NO CAFFEINE": CircleOff,
  MELATONIN: Tablets,
  SLEEP: BedSingle,
};

export type Phase = "pre" | "inflight" | "post";

export type Event = {
  category: Category;
  title: string;
  body: string;
  homeTime: string; // departure-tz local time, e.g. "9:30 PM"
  destTime?: string; // arrival-tz local time
  phase: Phase;
  duration?: number;  // window length in hours
  isActive?: boolean; // currently in-window on the demo timeline
};

// Category education content — mirrors mobile's education sheets
export const CAT_EDUCATION: Record<Category, { headline: string; detail: string }> = {
  "SEEK LIGHT": {
    headline: "Get into bright light",
    detail: "Outdoor sunlight is the strongest signal for your body clock. It suppresses melatonin and anchors your circadian rhythm to the destination timezone — faster than anything else.",
  },
  "AVOID LIGHT": {
    headline: "Dim lights & screens",
    detail: "Light at the wrong time delays your body clock. Dimming lights and avoiding screens lets melatonin rise naturally, moving your internal clock toward the target schedule.",
  },
  CAFFEINE: {
    headline: "Strategic caffeine",
    detail: "Caffeine blocks adenosine, the molecule that builds sleep pressure. Timed right, it keeps you sharp during key waking hours without disrupting that night's sleep.",
  },
  "NO CAFFEINE": {
    headline: "Caffeine cutoff",
    detail: "Caffeine has a 5–7 hour half-life. Cutting off here ensures it clears before your target sleep window so you can fall asleep on the new schedule.",
  },
  MELATONIN: {
    headline: "Low-dose melatonin",
    detail: "A small dosage acts as a clock signal, not a sedative. Taken at the right circadian time, it shifts your body clock toward the destination timezone.",
  },
  SLEEP: {
    headline: "Sleep on schedule",
    detail: "Consistent sleep timing is the strongest rhythm anchor. Each night you sleep on destination time, your body locks in the shift more firmly.",
  },
  "STAY AWAKE": {
    headline: "Push through the day",
    detail: "Napping resets your sleep drive and delays nighttime sleep. Staying awake until your target bedtime builds the pressure needed to fall asleep on the new schedule.",
  },
  WAKE: {
    headline: "Wake at destination time",
    detail: "Your wake time sets the anchor for your entire day. Rising at the right hour — even if groggy — resets the clock signals that determine when you feel sleepy that night.",
  },
  FLIGHT: {
    headline: "In the air",
    detail: "The moment you board, start living on destination time. Stay hydrated, avoid alcohol, move when you can, and follow the in-flight events — your body clock is already shifting.",
  },
};

// ── Day groups (mirrors _DayDividerEntry + _dayLabel) ─────────────────────
export type Day = {
  dateLabel: string; // "Sat, 11/15"
  phaseLabel: string; // "1 day before departure"
  events: Event[];
  // index of the "now" line within events; -1 = none
  nowAfterIndex?: number;
};

export const DAYS: Day[] = [
  {
    dateLabel: "Fri, 11/14",
    phaseLabel: "2 days before departure",
    events: [
      {
        category: "AVOID LIGHT",
        title: "Dim lights, no screens",
        body: "Begin shifting your body clock. Warm lamps only after 21:00.",
        homeTime: "9:00 PM",
        phase: "pre",
        duration: 2,
      },
      {
        category: "SLEEP",
        title: "Sleep early — tonight matters",
        body: "Aim for 30 min earlier than usual. Sets up tomorrow's wake.",
        homeTime: "10:30 PM",
        phase: "pre",
        duration: 7.5,
      },
    ],
  },
  {
    dateLabel: "Sat, 11/15",
    phaseLabel: "1 day before departure",
    events: [
      {
        category: "WAKE",
        title: "Wake & open the blinds",
        body: "Bright light within 15 min anchors the new schedule.",
        homeTime: "6:00 AM",
        phase: "pre",
      },
      {
        category: "SEEK LIGHT",
        title: "Step outside for 20 min",
        body: "Daylight is the strongest reset. Walk if you can.",
        homeTime: "7:30 AM",
        phase: "pre",
        duration: 0.33,
      },
      {
        category: "CAFFEINE",
        title: "Coffee window opens",
        body: "Last cup by 13:00 to protect tonight's sleep.",
        homeTime: "8:00 AM",
        phase: "pre",
        duration: 5,
        isActive: true,
      },
      {
        category: "NO CAFFEINE",
        title: "Cut caffeine",
        body: "Decaf or herbal from now on.",
        homeTime: "1:00 PM",
        phase: "pre",
        duration: 12,
      },
    ],
    nowAfterIndex: 2,
  },
  {
    dateLabel: "Sun, 11/16",
    phaseLabel: "Departure day",
    events: [
      {
        category: "FLIGHT",
        title: "Board UA837 · SFO → HND",
        body: "Set your watch to Tokyo (UTC+9) the moment you sit down.",
        homeTime: "10:55 AM",
        destTime: "3:25 PM",
        phase: "inflight",
        duration: 11.5,
      },
      {
        category: "MELATONIN",
        title: "Take a small dose of melatonin",
        body: "A clock signal — not a sleep pill.",
        homeTime: "2:20 PM",
        destTime: "7:20 AM",
        phase: "inflight",
      },
      {
        category: "AVOID LIGHT",
        title: "Eye mask on",
        body: "Block cabin light. Sleep on Tokyo's clock.",
        homeTime: "5:00 PM",
        destTime: "10:00 AM",
        phase: "inflight",
        duration: 3,
      },
    ],
  },
  {
    dateLabel: "Mon, 11/17",
    phaseLabel: "Day of arrival",
    events: [
      {
        category: "SEEK LIGHT",
        title: "Get bright light, fast",
        body: "Outside or by a window for 30 min.",
        destTime: "7:00 AM",
        homeTime: "",
        phase: "post",
        duration: 0.5,
      },
      {
        category: "STAY AWAKE",
        title: "No naps before 8:00 PM",
        body: "Push through. Your body will thank you tomorrow.",
        destTime: "2:00 PM",
        homeTime: "",
        phase: "post",
        duration: 6,
      },
      {
        category: "SLEEP",
        title: "Sleep on destination time",
        body: "Anchor your body to Tokyo time.",
        destTime: "10:30 PM",
        homeTime: "",
        phase: "post",
        duration: 8,
      },
    ],
  },
];

export const FLIGHT = {
  number: "UA837",
  depIata: "SFO",
  arrIata: "HND",
  arrAirport: "Tokyo Haneda",
  arrTimezone: "Asia/Tokyo",
  depDate: "Sun, 11/16",
  shiftLabel: "+17h",
};
