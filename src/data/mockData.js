export const students = [
  {
    id: "stu-001",
    name: "Ali bin Ahmad",
    level: "Form 3",
    parentPhone: "012-3456789",
    status: "Active",
  },
  {
    id: "stu-002",
    name: "Siti Nurhaliza",
    level: "Form 3",
    parentPhone: "013-4567890",
    status: "Active",
  },
  {
    id: "stu-003",
    name: "Kumar Raj",
    level: "Form 3",
    parentPhone: "014-5678901",
    status: "Active",
  },
  {
    id: "stu-004",
    name: "Mei Ling",
    level: "Year 6",
    parentPhone: "015-6789012",
    status: "Active",
  },
  {
    id: "stu-005",
    name: "Aisyah Rahman",
    level: "Year 6",
    parentPhone: "016-7890123",
    status: "Active",
  },
];

export const classes = [
  {
    id: "cls-001",
    name: "Form 3 Mathematics",
    subject: "Mathematics",
    teacher: "Teacher A",
    schedule: "Monday, 8:00 PM",
    studentIds: ["stu-001", "stu-002", "stu-003"],
    status: "Active",
  },
  {
    id: "cls-002",
    name: "Year 6 English",
    subject: "English",
    teacher: "Teacher B",
    schedule: "Wednesday, 5:00 PM",
    studentIds: ["stu-004", "stu-005"],
    status: "Active",
  },
  {
    id: "cls-003",
    name: "Form 4 Science",
    subject: "Science",
    teacher: "Teacher C",
    schedule: "Friday, 7:30 PM",
    studentIds: ["stu-001", "stu-003", "stu-005"],
    status: "Active",
  },
];

export const initialSessions = [
  {
    id: "ses-001",
    classId: "cls-001",
    sessionDate: "2026-07-02",
    startTime: "8:00 PM",
    endTime: "10:00 PM",
    room: "Room 2",
    status: "not_submitted",
  },
  {
    id: "ses-002",
    classId: "cls-002",
    sessionDate: "2026-07-02",
    startTime: "5:00 PM",
    endTime: "6:30 PM",
    room: "Room 1",
    status: "not_submitted",
  },
  {
    id: "ses-003",
    classId: "cls-003",
    sessionDate: "2026-07-03",
    startTime: "7:30 PM",
    endTime: "9:30 PM",
    room: "Room 3",
    status: "not_submitted",
  },
];