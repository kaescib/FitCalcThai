// Helper สำหรับเลือก element จาก id ให้โค้ดสั้นและอ่านง่าย
const getElement = (id) => document.getElementById(id);

const themeToggle = getElement("themeToggle");
const themeIcon = getElement("themeIcon");
const themeText = getElement("themeText");

const ERROR_MESSAGE = "กรุณากรอกข้อมูลให้ครบและมากกว่า 0";
const THAI_LOCALE = "th-TH";
const WEIGHT_HISTORY_KEY = "fitcalc-weight-history";
const BODY_MEASUREMENT_KEY = "fitcalc-body-measurements";
const GOALS_KEY = "fitcalc-goals";
const ACHIEVEMENTS_KEY = "fitcalc-achievements";
const LAST_BACKUP_EXPORT_KEY = "fitcalc-last-backup-export";
const USER_PROFILE_KEY = "fitcalc-user-profile";
const APP_SETTINGS_KEY = "fitcalc-app-settings";
const WORKOUT_HISTORY_KEY = "fitcalc-workout-history";
const WEEKLY_WORKOUT_GOAL_KEY = "fitcalc-weekly-workout-goal";
const WORKOUT_TEMPLATE_KEY = "fitcalc-workout-templates";
const CUSTOM_EXERCISE_KEY = "fitcalc-custom-exercises";
const FITCALC_KNOWN_STORAGE_KEYS = [
  WEIGHT_HISTORY_KEY,
  BODY_MEASUREMENT_KEY,
  WORKOUT_HISTORY_KEY,
  WORKOUT_TEMPLATE_KEY,
  CUSTOM_EXERCISE_KEY,
  WEEKLY_WORKOUT_GOAL_KEY,
  GOALS_KEY,
  ACHIEVEMENTS_KEY,
  LAST_BACKUP_EXPORT_KEY,
  USER_PROFILE_KEY,
  APP_SETTINGS_KEY,
];
const WORKOUT_NAME_OPTIONS = [
  "Push Day",
  "Pull Day",
  "Leg Day",
  "Upper Body",
  "Lower Body",
  "Full Body",
  "Cardio",
  "HIIT",
  "Recovery",
  "Other",
];
const EXERCISE_GROUPS = {
  Chest: ["Bench Press", "Incline Bench Press", "Incline Dumbbell Press", "Dumbbell Press", "Push Up", "Dips"],
  Back: ["Pull Up", "Chin Up", "Lat Pulldown", "Barbell Row", "Dumbbell Row"],
  Legs: ["Squat", "Goblet Squat", "Bulgarian Split Squat", "Romanian Deadlift", "Deadlift", "Calf Raise"],
  Shoulders: ["Overhead Press", "Lateral Raise", "Reverse Fly"],
  Biceps: ["Bicep Curl", "Hammer Curl"],
  Triceps: ["Tricep Extension", "Close Grip Push Up"],
  Core: ["Plank", "Crunch", "Leg Raise", "Russian Twist"],
  Other: ["Other"],
};
const BODY_MEASUREMENT_FIELDS = [
  { key: "weight", inputId: "measurementWeight", label: "Weight", unit: "kg" },
  { key: "chest", inputId: "measurementChest", label: "Chest", unit: "cm" },
  { key: "waist", inputId: "measurementWaist", label: "Waist", unit: "cm" },
  { key: "hips", inputId: "measurementHips", label: "Hips", unit: "cm" },
  { key: "shoulder", inputId: "measurementShoulder", label: "Shoulder", unit: "cm" },
  { key: "neck", inputId: "measurementNeck", label: "Neck", unit: "cm" },
  { key: "upperArmLeft", inputId: "measurementUpperArmLeft", label: "Upper Arm Left", unit: "cm" },
  { key: "upperArmRight", inputId: "measurementUpperArmRight", label: "Upper Arm Right", unit: "cm" },
  { key: "thighLeft", inputId: "measurementThighLeft", label: "Thigh Left", unit: "cm" },
  { key: "thighRight", inputId: "measurementThighRight", label: "Thigh Right", unit: "cm" },
  { key: "calfLeft", inputId: "measurementCalfLeft", label: "Calf Left", unit: "cm" },
  { key: "calfRight", inputId: "measurementCalfRight", label: "Calf Right", unit: "cm" },
];
const BUILT_IN_EXERCISES = [
  createBuiltInExercise("bench-press", "Bench Press", "Chest", ["Triceps", "Shoulders"], "Barbell", "Push", "Beginner", "Main chest pressing movement"),
  createBuiltInExercise("incline-bench-press", "Incline Bench Press", "Chest", ["Triceps", "Shoulders"], "Barbell", "Push", "Intermediate", "Incline press for upper chest strength"),
  createBuiltInExercise("incline-dumbbell-press", "Incline Dumbbell Press", "Chest", ["Triceps", "Shoulders"], "Dumbbell", "Push", "Beginner", "Upper chest pressing movement with a natural range of motion"),
  createBuiltInExercise("dumbbell-press", "Dumbbell Press", "Chest", ["Triceps", "Shoulders"], "Dumbbell", "Push", "Beginner", "Chest press variation that trains each side independently"),
  createBuiltInExercise("push-up", "Push Up", "Chest", ["Triceps", "Shoulders", "Core"], "Bodyweight", "Push", "Beginner", "Bodyweight pressing movement for chest and triceps"),
  createBuiltInExercise("chest-dip", "Chest Dip", "Chest", ["Triceps", "Shoulders"], "Bodyweight", "Push", "Intermediate", "Dip variation that emphasizes the chest"),
  createBuiltInExercise("dips", "Dips", "Chest", ["Triceps", "Shoulders"], "Bodyweight", "Push", "Intermediate", "Bodyweight pressing movement for chest and arms"),
  createBuiltInExercise("pull-up", "Pull Up", "Back", ["Biceps", "Core"], "Bodyweight", "Pull", "Intermediate", "Vertical pulling movement for back strength"),
  createBuiltInExercise("chin-up", "Chin Up", "Back", ["Biceps"], "Bodyweight", "Pull", "Intermediate", "Underhand vertical pull with more biceps involvement"),
  createBuiltInExercise("dumbbell-row", "Dumbbell Row", "Back", ["Biceps", "Rear Delts"], "Dumbbell", "Pull", "Beginner", "Single-arm row for lats and upper back"),
  createBuiltInExercise("barbell-row", "Barbell Row", "Back", ["Biceps", "Rear Delts"], "Barbell", "Pull", "Intermediate", "Horizontal pulling movement for back thickness"),
  createBuiltInExercise("lat-pulldown", "Lat Pulldown", "Back", ["Biceps"], "Machine", "Pull", "Beginner", "Cable vertical pull for lats"),
  createBuiltInExercise("inverted-row", "Inverted Row", "Back", ["Biceps", "Core"], "Bodyweight", "Pull", "Beginner", "Horizontal bodyweight row"),
  createBuiltInExercise("overhead-press", "Overhead Press", "Shoulders", ["Triceps", "Core"], "Barbell", "Push", "Intermediate", "Main vertical pressing movement"),
  createBuiltInExercise("lateral-raise", "Lateral Raise", "Shoulders", ["Upper Traps"], "Dumbbell", "Push", "Beginner", "Isolation movement for side delts"),
  createBuiltInExercise("reverse-fly", "Reverse Fly", "Shoulders", ["Upper Back"], "Dumbbell", "Pull", "Beginner", "Rear delt and upper back isolation movement"),
  createBuiltInExercise("dumbbell-shrug", "Dumbbell Shrug", "Shoulders", ["Upper Back"], "Dumbbell", "Pull", "Beginner", "Upper trap strengthening movement"),
  createBuiltInExercise("hammer-curl", "Hammer Curl", "Arms", ["Forearms"], "Dumbbell", "Pull", "Beginner", "Neutral-grip curl for biceps and forearms"),
  createBuiltInExercise("biceps-curl", "Biceps Curl", "Arms", ["Forearms"], "Dumbbell", "Pull", "Beginner", "Classic curl for biceps strength"),
  createBuiltInExercise("bicep-curl", "Bicep Curl", "Arms", ["Forearms"], "Dumbbell", "Pull", "Beginner", "Classic curl for biceps strength"),
  createBuiltInExercise("tricep-extension", "Tricep Extension", "Arms", ["Shoulders"], "Cable", "Push", "Beginner", "Isolation movement for triceps"),
  createBuiltInExercise("close-grip-push-up", "Close Grip Push Up", "Arms", ["Chest", "Shoulders"], "Bodyweight", "Push", "Beginner", "Bodyweight triceps-focused push movement"),
  createBuiltInExercise("squat", "Squat", "Legs", ["Glutes", "Core"], "Barbell", "Legs", "Intermediate", "Main lower-body strength movement"),
  createBuiltInExercise("goblet-squat", "Goblet Squat", "Legs", ["Glutes", "Core"], "Dumbbell", "Legs", "Beginner", "Beginner-friendly squat variation"),
  createBuiltInExercise("romanian-deadlift", "Romanian Deadlift", "Legs", ["Hamstrings", "Glutes", "Back"], "Barbell", "Legs", "Intermediate", "Hip hinge for hamstrings and glutes"),
  createBuiltInExercise("deadlift", "Deadlift", "Legs", ["Back", "Glutes", "Core"], "Barbell", "Legs", "Advanced", "Heavy hinge movement for total-body strength"),
  createBuiltInExercise("bulgarian-split-squat", "Bulgarian Split Squat", "Legs", ["Glutes", "Core"], "Dumbbell", "Legs", "Intermediate", "Single-leg squat variation"),
  createBuiltInExercise("calf-raise", "Calf Raise", "Legs", ["Ankles"], "Machine", "Legs", "Beginner", "Calf isolation movement"),
  createBuiltInExercise("glute-bridge", "Glute Bridge", "Legs", ["Hamstrings", "Core"], "Bodyweight", "Legs", "Beginner", "Glute-focused hip extension"),
  createBuiltInExercise("plank", "Plank", "Core", ["Shoulders", "Glutes"], "Bodyweight", "Core", "Beginner", "Core stability hold"),
  createBuiltInExercise("hanging-knee-raise", "Hanging Knee Raise", "Core", ["Hip Flexors"], "Bodyweight", "Core", "Intermediate", "Hanging core movement for lower abs"),
  createBuiltInExercise("crunch", "Crunch", "Core", ["Hip Flexors"], "Bodyweight", "Core", "Beginner", "Basic abdominal flexion movement"),
  createBuiltInExercise("leg-raise", "Leg Raise", "Core", ["Hip Flexors"], "Bodyweight", "Core", "Beginner", "Lower-ab focused leg raise"),
  createBuiltInExercise("russian-twist", "Russian Twist", "Core", ["Obliques"], "Bodyweight", "Core", "Beginner", "Rotational core movement"),
  createBuiltInExercise("dead-bug", "Dead Bug", "Core", ["Hip Flexors"], "Bodyweight", "Core", "Beginner", "Core stability drill that trains control"),
];
const BUILT_IN_WORKOUT_TEMPLATES = [
  {
    id: "builtin-push-day",
    name: "Push Day",
    exercises: ["Bench Press", "Incline Dumbbell Press", "Overhead Press", "Lateral Raise", "Tricep Extension"],
  },
  {
    id: "builtin-pull-day",
    name: "Pull Day",
    exercises: ["Pull Up", "Dumbbell Row", "Lat Pulldown", "Reverse Fly", "Hammer Curl"],
  },
  {
    id: "builtin-leg-day",
    name: "Leg Day",
    exercises: ["Squat", "Romanian Deadlift", "Bulgarian Split Squat", "Calf Raise", "Plank"],
  },
  {
    id: "builtin-upper-body",
    name: "Upper Body",
    exercises: ["Bench Press", "Pull Up", "Overhead Press", "Dumbbell Row", "Bicep Curl"],
  },
  {
    id: "builtin-lower-body",
    name: "Lower Body",
    exercises: ["Squat", "Romanian Deadlift", "Bulgarian Split Squat", "Calf Raise", "Leg Raise"],
  },
  {
    id: "builtin-full-body",
    name: "Full Body",
    exercises: ["Squat", "Bench Press", "Barbell Row", "Overhead Press", "Plank"],
  },
];
const ACHIEVEMENT_DEFINITIONS = [
  createAchievementDefinition("first-workout", "Workout", "workoutCount", 1, "First Workout", "บันทึก Workout แรก", "บันทึก Workout ครั้งแรกเพื่อเริ่มต้นเส้นทางฟิตเนส", "🏁"),
  createAchievementDefinition("three-workouts", "Workout", "workoutCount", 3, "3 Workouts", "บันทึก Workout ครบ 3 ครั้ง", "สร้างจังหวะการออกกำลังกายให้เริ่มต่อเนื่อง", "💪"),
  createAchievementDefinition("ten-workouts", "Workout", "workoutCount", 10, "10 Workouts", "บันทึก Workout ครบ 10 ครั้ง", "เริ่มเห็นภาพรวมการฝึกของตัวเองชัดขึ้น", "🔥"),
  createAchievementDefinition("twenty-five-workouts", "Workout", "workoutCount", 25, "25 Workouts", "บันทึก Workout ครบ 25 ครั้ง", "ความสม่ำเสมอเริ่มกลายเป็นนิสัย", "🏋️"),
  createAchievementDefinition("fifty-workouts", "Workout", "workoutCount", 50, "50 Workouts", "บันทึก Workout ครบ 50 ครั้ง", "ฐานข้อมูลการฝึกของคุณแน่นขึ้นมาก", "🏆"),
  createAchievementDefinition("hundred-workouts", "Workout", "workoutCount", 100, "100 Workouts", "บันทึก Workout ครบ 100 ครั้ง", "ระดับจริงจังกับระบบติดตามการฝึก", "👑"),
  createAchievementDefinition("three-day-workout-streak", "Workout", "workoutStreak", 3, "3-Day Workout Streak", "Workout ต่อเนื่อง 3 วัน", "รักษาวินัยการซ้อมต่อเนื่อง 3 วัน", "⚡"),
  createAchievementDefinition("seven-day-workout-streak", "Workout", "workoutStreak", 7, "7-Day Workout Streak", "Workout ต่อเนื่อง 7 วัน", "หนึ่งสัปดาห์เต็มของความสม่ำเสมอ", "🌟"),
  createAchievementDefinition("fourteen-day-workout-streak", "Workout", "workoutStreak", 14, "14-Day Workout Streak", "Workout ต่อเนื่อง 14 วัน", "สองสัปดาห์ที่น่าภูมิใจ", "🚀"),
  createAchievementDefinition("thirty-day-workout-streak", "Workout", "workoutStreak", 30, "30-Day Workout Streak", "Workout ต่อเนื่อง 30 วัน", "หนึ่งเดือนของความต่อเนื่อง", "🥇"),
  createAchievementDefinition("first-weight-record", "Weight", "weightCount", 1, "First Weight Record", "บันทึกน้ำหนักครั้งแรก", "เริ่มติดตามน้ำหนักอย่างเป็นระบบ", "⚖️"),
  createAchievementDefinition("seven-weight-records", "Weight", "weightCount", 7, "7 Weight Records", "บันทึกน้ำหนักครบ 7 ครั้ง", "มีข้อมูลพอเห็นแนวโน้มเบื้องต้น", "📈"),
  createAchievementDefinition("thirty-weight-records", "Weight", "weightCount", 30, "30 Weight Records", "บันทึกน้ำหนักครบ 30 ครั้ง", "สร้างประวัติน้ำหนักที่ใช้วิเคราะห์ได้ดี", "📊"),
  createAchievementDefinition("seven-day-weight-streak", "Weight", "weightStreak", 7, "7-Day Weight Logging Streak", "บันทึกน้ำหนักต่อเนื่อง 7 วัน", "เช็กน้ำหนักสม่ำเสมอครบหนึ่งสัปดาห์", "🗓️"),
  createAchievementDefinition("first-body-measurement", "Measurements", "measurementCount", 1, "First Body Measurement", "บันทึกสัดส่วนครั้งแรก", "เริ่มติดตามรูปร่างนอกเหนือจากน้ำหนัก", "📏"),
  createAchievementDefinition("five-body-measurements", "Measurements", "measurementCount", 5, "5 Body Measurement Records", "บันทึกสัดส่วนครบ 5 ครั้ง", "มีข้อมูลสัดส่วนให้เทียบความเปลี่ยนแปลง", "🧭"),
  createAchievementDefinition("ten-body-measurements", "Measurements", "measurementCount", 10, "10 Body Measurement Records", "บันทึกสัดส่วนครบ 10 ครั้ง", "ติดตามรูปร่างได้ต่อเนื่องขึ้น", "✨"),
  createAchievementDefinition("first-goal-created", "Goals", "goalsCreated", 1, "First Goal Created", "สร้างเป้าหมายแรก", "เปลี่ยนความตั้งใจให้เป็นเป้าหมายที่ติดตามได้", "🎯"),
  createAchievementDefinition("first-goal-completed", "Goals", "goalsCompleted", 1, "First Goal Completed", "ทำเป้าหมายแรกสำเร็จ", "ปิดเป้าหมายแรกได้สำเร็จ", "✅"),
  createAchievementDefinition("three-goals-completed", "Goals", "goalsCompleted", 3, "3 Goals Completed", "ทำเป้าหมายสำเร็จ 3 รายการ", "เก็บชัยชนะเล็ก ๆ ได้ต่อเนื่อง", "🏅"),
  createAchievementDefinition("five-goals-completed", "Goals", "goalsCompleted", 5, "5 Goals Completed", "ทำเป้าหมายสำเร็จ 5 รายการ", "พิสูจน์ระบบเป้าหมายของคุณแล้ว", "🌈"),
  createAchievementDefinition("first-custom-template", "Templates", "customTemplates", 1, "First Custom Workout Template", "สร้าง Workout Template แรก", "ทำเทมเพลตส่วนตัวเพื่อบันทึกเร็วขึ้น", "🧩"),
  createAchievementDefinition("first-custom-exercise", "Templates", "customExercises", 1, "First Custom Exercise", "สร้างท่าออกกำลังกายเองครั้งแรก", "เพิ่มท่าที่เหมาะกับการฝึกของคุณ", "🛠️"),
  createAchievementDefinition("five-custom-exercises", "Templates", "customExercises", 5, "5 Custom Exercises", "สร้างท่าออกกำลังกายเองครบ 5 ท่า", "ฐานข้อมูลท่าส่วนตัวเริ่มเป็นของคุณจริง ๆ", "📚"),
];
let weightProgressChart = null;
let pendingBackupImport = null;

initializeTheme();
initializeNavbarDropdowns();
initializeSmoothAnchorScrolling();
bindCalculatorForms();
initializeHomeDashboard();
initializeAchievementSection();
initializeDataBackupSection();
initializeProfileAndSettings();
initializeWeightTracker();
initializeBodyMeasurements();
initializeGoalTracking();
initializeWorkoutTracker();

function initializeHomeDashboard() {
  if (!getElement("dashboardSummaryCards")) {
    return;
  }

  const dashboardData = getHomeDashboardData();
  renderDashboardBeginnerPanel(dashboardData);
  renderDashboardSummaryCards(dashboardData);
  renderDashboardProfileSummary(dashboardData);
  renderDashboardWeightSummary(dashboardData);
  renderDashboardWorkoutSummary(dashboardData);
  renderDashboardWeeklyGoal(dashboardData);
  renderDashboardLibrarySummary(dashboardData);
  renderDashboardAchievementSummary(dashboardData);
  renderDashboardBackupSummary(dashboardData);
  renderDashboardRecentActivity(dashboardData);
  renderAchievementSection(dashboardData);
}

function getHomeDashboardData() {
  const weightHistory = sortWeightHistory(readDashboardArray(WEIGHT_HISTORY_KEY).map(normalizeDashboardWeightEntry).filter(Boolean));
  const bodyMeasurements = sortBodyMeasurements(readDashboardArray(BODY_MEASUREMENT_KEY).map(normalizeBodyMeasurementRecord).filter(Boolean));
  const goals = sortGoals(readDashboardArray(GOALS_KEY).map(normalizeGoalRecord).filter(Boolean));
  const workoutHistory = sortWorkoutHistory(readDashboardArray(WORKOUT_HISTORY_KEY).map(normalizeDashboardWorkoutEntry).filter(Boolean));
  const templateStore = normalizeWorkoutTemplateStore(readDashboardValue(WORKOUT_TEMPLATE_KEY) || {});
  const customExercises = normalizeCustomExercises(readDashboardArray(CUSTOM_EXERCISE_KEY));
  const userProfile = getUserProfile();
  const appSettings = getAppSettings();
  const weeklyGoalRaw = localStorage.getItem(WEEKLY_WORKOUT_GOAL_KEY);
  const weeklyGoal = Number(weeklyGoalRaw);
  const hasWeeklyGoal = weeklyGoalRaw !== null && Number.isInteger(weeklyGoal) && weeklyGoal >= 1 && weeklyGoal <= 7;
  const backupSummary = getBackupSummary();

  const dashboardData = {
    weightHistory,
    bodyMeasurements,
    goals,
    workoutHistory,
    templateStore,
    customExercises,
    userProfile,
    appSettings,
    weeklyGoal: hasWeeklyGoal ? weeklyGoal : null,
    backupSummary,
  };

  dashboardData.achievements = evaluateAchievements(dashboardData);
  return dashboardData;
}

function readDashboardValue(storageKey) {
  const savedValue = localStorage.getItem(storageKey);

  if (!savedValue) {
    return null;
  }

  try {
    return JSON.parse(savedValue);
  } catch {
    return null;
  }
}

function readDashboardArray(storageKey) {
  const value = readDashboardValue(storageKey);
  return Array.isArray(value) ? value : [];
}

function normalizeDashboardWeightEntry(entry) {
  const date = parseDisplayDate(entry?.date);
  const weightKg = parseFloat(entry?.weightKg);

  return date && areValidNumbers(weightKg) ? { date, weightKg } : null;
}

function normalizeDashboardWorkoutEntry(workout) {
  const date = parseDisplayDate(workout?.date);
  const name = String(workout?.name || "").trim();
  const exercises = Array.isArray(workout?.exercises) ? normalizeWorkoutExercises(workout.exercises) : [];

  if (!date || !name || exercises.length === 0) {
    return null;
  }

  return {
    id: workout.id || "",
    date,
    name,
    exercises,
    createdAt: workout.createdAt || `${date}T00:00:00.000Z`,
  };
}

function renderDashboardBeginnerPanel(data) {
  const panel = getElement("dashboardBeginnerPanel");

  if (!panel) {
    return;
  }

  const hasAnyData = data.weightHistory.length > 0 ||
    data.bodyMeasurements.length > 0 ||
    data.goals.length > 0 ||
    data.workoutHistory.length > 0 ||
    data.templateStore.customTemplates.length > 0 ||
    data.customExercises.length > 0 ||
    data.weeklyGoal !== null;

  panel.classList.toggle("is-hidden", hasAnyData);
}

function renderDashboardSummaryCards(data) {
  const summaryCards = getElement("dashboardSummaryCards");
  const weightSummary = getDashboardWeightSummary(data.weightHistory);
  const measurementSummary = getDashboardMeasurementSummary(data.bodyMeasurements);
  const workoutSummary = getDashboardWorkoutSummary(data.workoutHistory);
  const weeklyGoal = getDashboardWeeklyGoalSummary(data.workoutHistory, data.weeklyGoal);
  const goalSummary = getDashboardGoalSummary(data.goals);
  const achievementSummary = data.achievements.summary;
  const backupSummary = data.backupSummary;
  const profileSummary = getProfileSummary(data.userProfile);
  const librarySummary = getDashboardLibrarySummary(data.templateStore, data.customExercises);

  summaryCards.innerHTML = [
    createDashboardSummaryCard("น้ำหนักล่าสุด", weightSummary.latestText, weightSummary.latestSubtext),
    createDashboardSummaryCard("น้ำหนักเฉลี่ย 7 วัน", weightSummary.averageText, weightSummary.trendText),
    createDashboardSummaryCard("การเปลี่ยนแปลงน้ำหนัก", weightSummary.changeText, weightSummary.previousText),
    createDashboardSummaryCard("สัดส่วนล่าสุด", measurementSummary.latestWaistText, measurementSummary.changeText),
    createDashboardSummaryCard("Workout สัปดาห์นี้", `${workoutSummary.thisWeek} ครั้ง`, `สัปดาห์ก่อน ${workoutSummary.lastWeek} ครั้ง`),
    createDashboardSummaryCard("เป้าหมายรายสัปดาห์", weeklyGoal.progressText, weeklyGoal.statusText),
    createDashboardSummaryCard("เป้าหมาย", `${goalSummary.activeGoals} กำลังทำ`, `${goalSummary.completedGoals} สำเร็จแล้ว`),
    createDashboardSummaryCard("Workout ล่าสุด", workoutSummary.lastWorkoutText, workoutSummary.lastWorkoutDateText),
    createDashboardSummaryCard("Templates ทั้งหมด", `${librarySummary.totalTemplates} รายการ`, `${librarySummary.favoriteTemplates} favorite`),
    createDashboardSummaryCard("Exercises ทั้งหมด", `${librarySummary.totalExercises} ท่า`, `${librarySummary.customExercises} custom`),
    createDashboardSummaryCard("Achievements", `${achievementSummary.unlockedCount} ปลดล็อก`, `Streak ${achievementSummary.currentWorkoutStreak} วัน`),
  ].join("");
  summaryCards.innerHTML += createDashboardSummaryCard("Backup", `${backupSummary.totalKeys} keys`, backupSummary.lastExportText);
  summaryCards.innerHTML += createDashboardSummaryCard("Profile", `${profileSummary.completionPercent}% complete`, profileSummary.mainGoalText);
}

function createDashboardSummaryCard(label, value, detail) {
  return `
    <article class="dashboard-summary-card">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(detail)}</p>
    </article>
  `;
}

function renderDashboardWeightSummary(data) {
  const panel = getElement("dashboardWeightSummary");
  const summary = getDashboardWeightSummary(data.weightHistory);
  const measurementSummary = getDashboardMeasurementSummary(data.bodyMeasurements);

  if (data.weightHistory.length === 0 && data.bodyMeasurements.length === 0) {
    panel.innerHTML = '<p class="empty-state">ยังไม่มีข้อมูลน้ำหนักหรือสัดส่วน</p>';
    return;
  }

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("ล่าสุด", summary.latestText)}
      ${createDashboardMetric("ก่อนหน้า", summary.previousValueText)}
      ${createDashboardMetric("เปลี่ยนแปลง", summary.changeText)}
      ${createDashboardMetric("เฉลี่ย 7 วัน", summary.averageText)}
      ${createDashboardMetric("แนวโน้ม", summary.trendText)}
      ${createDashboardMetric("เอวล่าสุด", measurementSummary.latestWaistText)}
      ${createDashboardMetric("เอวเปลี่ยนแปลง", measurementSummary.changeText)}
      ${createDashboardMetric("วันที่วัดล่าสุด", measurementSummary.latestDateText)}
    </div>
  `;
}

function renderDashboardWorkoutSummary(data) {
  const panel = getElement("dashboardWorkoutSummary");
  const summary = getDashboardWorkoutSummary(data.workoutHistory);

  if (data.workoutHistory.length === 0) {
    panel.innerHTML = '<p class="empty-state">ยังไม่มีประวัติการออกกำลังกาย</p>';
    return;
  }

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("สัปดาห์นี้", `${summary.thisWeek} ครั้ง`)}
      ${createDashboardMetric("สัปดาห์ก่อน", `${summary.lastWeek} ครั้ง`)}
      ${createDashboardMetric("รวมทั้งหมด", `${summary.totalWorkouts} ครั้ง`)}
      ${createDashboardMetric("ล่าสุด", summary.lastWorkoutText)}
      ${createDashboardMetric("วันที่ล่าสุด", summary.lastWorkoutDateText)}
      ${createDashboardMetric("Volume รวม", summary.totalVolumeText)}
    </div>
  `;
}

function renderDashboardWeeklyGoal(data) {
  const panel = getElement("dashboardWeeklyGoal");
  const summary = getDashboardWeeklyGoalSummary(data.workoutHistory, data.weeklyGoal);
  const goalSummary = getDashboardGoalSummary(data.goals);

  if (data.weeklyGoal === null) {
    panel.innerHTML = `
      <p class="empty-state">ยังไม่ได้ตั้งเป้าหมายรายสัปดาห์</p>
      <div class="dashboard-mini-grid">
        ${createDashboardMetric("เป้าหมายที่กำลังทำ", `${goalSummary.activeGoals}`)}
        ${createDashboardMetric("เป้าหมายที่สำเร็จ", `${goalSummary.completedGoals}`)}
        ${createDashboardMetric("วันเป้าหมายถัดไป", goalSummary.nextTargetText)}
        ${createDashboardMetric("เป้าหมายที่ใกล้สำเร็จ", goalSummary.closestGoalText)}
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="dashboard-goal-widget">
      <div>
        <strong>${summary.completed} / ${summary.target} ครั้ง</strong>
        <span>${summary.statusText}</span>
      </div>
      <div class="dashboard-progress-bar" aria-label="Weekly goal progress ${summary.percent}%">
        <span style="width: ${summary.percent}%"></span>
      </div>
      <p>${summary.percent}% สำเร็จแล้ว</p>
    </div>
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("เป้าหมายที่กำลังทำ", `${goalSummary.activeGoals}`)}
      ${createDashboardMetric("เป้าหมายที่สำเร็จ", `${goalSummary.completedGoals}`)}
      ${createDashboardMetric("วันเป้าหมายถัดไป", goalSummary.nextTargetText)}
      ${createDashboardMetric("เป้าหมายที่ใกล้สำเร็จ", goalSummary.closestGoalText)}
    </div>
  `;
}

function renderDashboardLibrarySummary(data) {
  const panel = getElement("dashboardLibrarySummary");
  const summary = getDashboardLibrarySummary(data.templateStore, data.customExercises);

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("Templates ทั้งหมด", `${summary.totalTemplates} รายการ`)}
      ${createDashboardMetric("Favorite Templates", `${summary.favoriteTemplates} รายการ`)}
      ${createDashboardMetric("Custom Templates", `${summary.customTemplates} รายการ`)}
      ${createDashboardMetric("Exercises ทั้งหมด", `${summary.totalExercises} ท่า`)}
      ${createDashboardMetric("Custom Exercises", `${summary.customExercises} ท่า`)}
    </div>
  `;
}

function renderDashboardAchievementSummary(data) {
  const panel = getElement("dashboardAchievementSummary");

  if (!panel) {
    return;
  }

  const summary = data.achievements.summary;

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("Workout Streak", `${summary.currentWorkoutStreak} วัน`)}
      ${createDashboardMetric("Best Streak", `${summary.bestWorkoutStreak} วัน`)}
      ${createDashboardMetric("ปลดล็อกแล้ว", `${summary.unlockedCount} / ${summary.totalAchievements}`)}
      ${createDashboardMetric("ล่าสุด", summary.latestUnlockedTitle)}
    </div>
  `;
}

function renderDashboardBackupSummary(data) {
  const panel = getElement("dashboardBackupSummary");

  if (!panel) {
    return;
  }

  const summary = data.backupSummary;

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("FitCalc keys", `${summary.totalKeys} keys`)}
      ${createDashboardMetric("Data items", `${summary.totalRecords} records`)}
      ${createDashboardMetric("Last export", summary.lastExportText)}
      ${createDashboardMetric("Status", summary.statusText)}
    </div>
  `;
}

function renderDashboardRecentActivity(data) {
  const panel = getElement("dashboardRecentActivity");
  const activities = getDashboardRecentActivities(data).slice(0, 5);

  if (activities.length === 0) {
    panel.innerHTML = '<p class="empty-state">ยังไม่มีกิจกรรมล่าสุด</p>';
    return;
  }

  panel.innerHTML = `
    <ul class="dashboard-activity-list">
      ${activities.map((activity) => `
        <li>
          <span>${escapeHtml(activity.type)}</span>
          <strong>${escapeHtml(activity.title)}</strong>
          <time>${formatThaiDate(activity.date)}</time>
        </li>
      `).join("")}
    </ul>
  `;
}

function createDashboardMetric(label, value) {
  return `
    <div class="dashboard-mini-metric">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function getDashboardWeightSummary(weightHistory) {
  if (weightHistory.length === 0) {
    return {
      latestText: "ยังไม่มีข้อมูล",
      latestSubtext: "เริ่มบันทึกน้ำหนัก",
      averageText: "ยังไม่มีข้อมูล",
      changeText: "ยังไม่มีข้อมูล",
      previousText: "ไม่มีข้อมูลก่อนหน้า",
      previousValueText: "ยังไม่มีข้อมูล",
      trendText: "ยังไม่มีข้อมูลน้ำหนัก",
    };
  }

  const latest = weightHistory[0];
  const previous = weightHistory[1] || null;
  const change = previous ? latest.weightKg - previous.weightKg : 0;
  const sevenDaysAgo = getDateTime(latest.date) - 6 * 24 * 60 * 60 * 1000;
  const recentEntries = weightHistory.filter((entry) => getDateTime(entry.date) >= sevenDaysAgo);
  const averageWeight = recentEntries.reduce((total, entry) => total + entry.weightKg, 0) / recentEntries.length;
  const trendText = getWeightTrendText(change);

  return {
    latestText: `${formatWeight(latest.weightKg)} kg`,
    latestSubtext: `ล่าสุด ${formatThaiDate(latest.date)}`,
    averageText: `${formatWeight(averageWeight)} kg`,
    changeText: previous ? `${change > 0 ? "+" : ""}${formatWeight(change)} kg` : "ยังไม่มีข้อมูลก่อนหน้า",
    previousText: previous ? `เทียบกับ ${formatThaiDate(previous.date)}` : "ไม่มีข้อมูลก่อนหน้า",
    previousValueText: previous ? `${formatWeight(previous.weightKg)} kg` : "ยังไม่มีข้อมูล",
    trendText,
  };
}

function getDashboardMeasurementSummary(measurements) {
  if (measurements.length === 0) {
    return {
      latestWaistText: "ยังไม่มีข้อมูล",
      changeText: "ยังไม่มีข้อมูลสัดส่วน",
      latestDateText: "ยังไม่มีข้อมูล",
    };
  }

  const latest = measurements[0];
  const previous = measurements[1] || null;
  const waistChange = previous && hasMeasurementValue(latest.waist) && hasMeasurementValue(previous.waist)
    ? latest.waist - previous.waist
    : null;

  return {
    latestWaistText: hasMeasurementValue(latest.waist) ? `${formatMeasurementValue(latest.waist)} cm` : "ไม่มีค่าเอว",
    changeText: waistChange === null ? "ยังไม่มีข้อมูลเปรียบเทียบ" : `${waistChange > 0 ? "+" : ""}${formatMeasurementValue(waistChange)} cm`,
    latestDateText: formatThaiDate(latest.date),
  };
}

function getWeightTrendText(change) {
  if (Math.abs(change) < 0.05) {
    return "ทรงตัว";
  }

  return change > 0 ? "เพิ่มขึ้น" : "ลดลง";
}

function getDashboardWorkoutSummary(workoutHistory) {
  const lastWorkout = workoutHistory[0] || null;
  const totalVolume = workoutHistory.reduce((total, workout) => total + calculateWorkoutVolume(workout), 0);

  return {
    thisWeek: countDashboardWorkoutsThisWeek(workoutHistory),
    lastWeek: countDashboardWorkoutsLastWeek(workoutHistory),
    totalWorkouts: workoutHistory.length,
    lastWorkoutText: lastWorkout ? lastWorkout.name : "ยังไม่มีข้อมูล",
    lastWorkoutDateText: lastWorkout ? formatThaiDate(lastWorkout.date) : "ยังไม่มีประวัติ",
    totalVolumeText: workoutHistory.length > 0 ? `${formatVolume(totalVolume)} kg` : "ยังไม่มีข้อมูล",
  };
}

function countDashboardWorkoutsThisWeek(workoutHistory) {
  const startOfWeek = getStartOfWeek().getTime();
  return workoutHistory.filter((workout) => getDateTime(workout.date) >= startOfWeek).length;
}

function countDashboardWorkoutsLastWeek(workoutHistory) {
  const startOfThisWeek = getStartOfWeek();
  const startOfLastWeek = new Date(startOfThisWeek);
  startOfLastWeek.setDate(startOfThisWeek.getDate() - 7);
  const startTime = startOfLastWeek.getTime();
  const endTime = startOfThisWeek.getTime();

  return workoutHistory.filter((workout) => {
    const workoutTime = getDateTime(workout.date);
    return workoutTime >= startTime && workoutTime < endTime;
  }).length;
}

function getDashboardWeeklyGoalSummary(workoutHistory, weeklyGoal) {
  if (weeklyGoal === null) {
    return {
      target: 0,
      completed: countDashboardWorkoutsThisWeek(workoutHistory),
      percent: 0,
      progressText: "ยังไม่ได้ตั้ง",
      statusText: "ยังไม่ได้ตั้งเป้าหมายรายสัปดาห์",
    };
  }

  const completed = countDashboardWorkoutsThisWeek(workoutHistory);
  const percent = Math.min(Math.round((completed / weeklyGoal) * 100), 100);

  return {
    target: weeklyGoal,
    completed,
    percent,
    progressText: `${completed} / ${weeklyGoal} ครั้ง`,
    statusText: getWeeklyGoalStatusText(completed, weeklyGoal, percent),
  };
}

function getWeeklyGoalStatusText(completed, target, percent) {
  if (completed === 0) {
    return "ยังไม่เริ่ม";
  }

  if (completed >= target) {
    return "สำเร็จแล้ว";
  }

  if (percent >= 75) {
    return "ใกล้ถึงเป้าหมาย";
  }

  return "กำลังไปได้ดี";
}

function getDashboardLibrarySummary(templateStore, customExercises) {
  return {
    totalTemplates: BUILT_IN_WORKOUT_TEMPLATES.length + templateStore.customTemplates.length,
    favoriteTemplates: templateStore.favoriteTemplateIds.length,
    customTemplates: templateStore.customTemplates.length,
    totalExercises: BUILT_IN_EXERCISES.length + customExercises.length,
    customExercises: customExercises.length,
  };
}

function getDashboardRecentActivities(data) {
  const activities = [];

  data.weightHistory.forEach((entry) => {
    activities.push({
      type: "น้ำหนัก",
      title: `${formatWeight(entry.weightKg)} kg`,
      date: entry.date,
      time: getDateTime(entry.date),
    });
  });

  data.workoutHistory.forEach((workout) => {
    activities.push({
      type: "Workout",
      title: workout.name,
      date: workout.date,
      time: getDateTime(workout.date),
    });
  });

  data.bodyMeasurements.forEach((record) => {
    activities.push({
      type: "Body Measurement",
      title: "บันทึกสัดส่วนร่างกาย",
      date: record.date,
      time: getDateTime(record.date),
    });
  });

  data.goals.forEach((goal) => {
    const createdDate = parseDisplayDate(String(goal.createdAt || "").slice(0, 10));
    const updatedDate = parseDisplayDate(String(goal.updatedAt || "").slice(0, 10));

    if (createdDate) {
      activities.push({
        type: "Goal",
        title: `สร้างเป้าหมาย: ${goal.title}`,
        date: createdDate,
        time: getDateTime(createdDate),
      });
    }

    if (updatedDate && updatedDate !== createdDate) {
      activities.push({
        type: "Goal",
        title: goal.status === "Completed" ? `ทำเป้าหมายสำเร็จ: ${goal.title}` : `อัปเดตเป้าหมาย: ${goal.title}`,
        date: updatedDate,
        time: getDateTime(updatedDate),
      });
    }
  });

  data.templateStore.customTemplates.forEach((template) => {
    const date = parseDisplayDate(String(template.updatedAt || "").slice(0, 10));
    if (date) {
      activities.push({
        type: "Template",
        title: template.name,
        date,
        time: getDateTime(date),
      });
    }
  });

  data.customExercises.forEach((exercise) => {
    const date = parseDisplayDate(String(exercise.updatedAt || exercise.createdAt || "").slice(0, 10));
    if (date) {
      activities.push({
        type: "Exercise",
        title: exercise.name,
        date,
        time: getDateTime(date),
      });
    }
  });

  if (data.userProfile?.updatedAt) {
    const date = parseDisplayDate(String(data.userProfile.updatedAt).slice(0, 10));
    if (date) {
      activities.push({
        type: "Profile",
        title: "อัปเดตโปรไฟล์",
        date,
        time: getDateTime(date),
      });
    }
  }

  if (data.appSettings?.updatedAt) {
    const date = parseDisplayDate(String(data.appSettings.updatedAt).slice(0, 10));
    if (date) {
      activities.push({
        type: "Settings",
        title: "อัปเดตการตั้งค่า",
        date,
        time: getDateTime(date),
      });
    }
  }

  data.achievements.unlockedList.forEach((achievement) => {
    const date = parseDisplayDate(String(achievement.unlockedAt || "").slice(0, 10));

    if (date) {
      activities.push({
        type: "Achievement",
        title: `ปลดล็อก: ${achievement.title}`,
        date,
        time: getDateTime(date),
      });
    }
  });

  if (data.backupSummary.lastExportDate) {
    activities.push({
      type: "Backup",
      title: "สำรองข้อมูล FitCalc Thai",
      date: data.backupSummary.lastExportDate,
      time: getDateTime(data.backupSummary.lastExportDate),
    });
  }

  return activities.sort((first, second) => second.time - first.time);
}

function initializeSmoothAnchorScrolling() {
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetUrl = new URL(link.href, window.location.href);

      if (targetUrl.pathname !== window.location.pathname || !targetUrl.hash) {
        return;
      }

      const target = getScrollTarget(targetUrl.hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToHashTarget(targetUrl.hash, true);
    });
  });

  if (window.location.hash && getScrollTarget(window.location.hash)) {
    window.requestAnimationFrame(() => scrollToHashTarget(window.location.hash, false));
    window.setTimeout(() => scrollToHashTarget(window.location.hash, false), 120);
  }
}

function getScrollTarget(hash) {
  const targetId = decodeURIComponent(hash.replace("#", ""));
  const anchorAliases = {
    workoutForm: "workoutTrackerSection",
    workoutTemplateList: "workoutTemplatesSection",
    exerciseDatabaseList: "exerciseDatabaseSection",
    weeklyWorkoutGoal: "weeklyGoalSection",
  };
  const target = document.getElementById(anchorAliases[targetId] || targetId);

  return target?.closest(".card") || target;
}

function scrollToHashTarget(hash, shouldUpdateHash) {
  const target = getScrollTarget(hash);

  if (!target) {
    return;
  }

  const navbarHeight = document.querySelector(".site-nav")?.offsetHeight || 0;
  const topOffset = navbarHeight + 34;
  const targetTop = target.getBoundingClientRect().top + window.pageYOffset - topOffset;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth",
  });

  if (shouldUpdateHash) {
    window.history.pushState(null, "", hash);
  }
}

function initializeNavbarDropdowns() {
  const navbar = document.querySelector(".site-nav");
  const navInner = navbar?.querySelector(".nav-inner");
  const navLinks = navbar?.querySelector(".nav-links");
  const dropdowns = Array.from(document.querySelectorAll(".nav-dropdown"));

  if (!navbar || !navInner || !navLinks || dropdowns.length === 0) {
    return;
  }

  const menuToggle = createMobileMenuToggle(navbar, navInner, navLinks);

  dropdowns.forEach((dropdown) => {
    const summary = dropdown.querySelector("summary");

    summary?.addEventListener("click", (event) => {
      event.preventDefault();

      const shouldOpen = !dropdown.open;
      closeNavbarDropdowns(dropdowns);
      dropdown.open = shouldOpen;

      if (shouldOpen) {
        keepDropdownInViewport(dropdown);
      }
    });

    dropdown.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");

      if (clickedLink) {
        closeNavbarDropdowns(dropdowns);
        closeMobileMenu(navbar, menuToggle);
      }
    });
  });

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = navbar.classList.toggle("is-menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      closeNavbarDropdowns(dropdowns);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-nav")) {
      closeNavbarDropdowns(dropdowns);
      closeMobileMenu(navbar, menuToggle);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavbarDropdowns(dropdowns);
      closeMobileMenu(navbar, menuToggle);
    }
  });
}

function createMobileMenuToggle(navbar, navInner, navLinks) {
  const existingToggle = navbar.querySelector(".nav-menu-toggle");

  if (existingToggle) {
    return existingToggle;
  }

  const menuToggle = document.createElement("button");
  menuToggle.className = "nav-menu-toggle";
  menuToggle.type = "button";
  menuToggle.setAttribute("aria-controls", "primaryNavigation");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "เปิดเมนูหลัก");
  menuToggle.innerHTML = "<span></span><span></span><span></span>";
  navLinks.id = navLinks.id || "primaryNavigation";
  navInner.insertBefore(menuToggle, navLinks);

  return menuToggle;
}

function closeMobileMenu(navbar, menuToggle) {
  navbar.classList.remove("is-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function closeNavbarDropdowns(dropdowns, activeDropdown = null) {
  dropdowns.forEach((dropdown) => {
    if (dropdown !== activeDropdown) {
      dropdown.open = false;
    }
  });
}

function keepDropdownInViewport(dropdown) {
  window.requestAnimationFrame(() => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    if (!dropdownMenu || !window.matchMedia("(max-width: 760px)").matches) {
      return;
    }

    const menuRect = dropdownMenu.getBoundingClientRect();
    const viewportPadding = 16;
    const overflowBottom = menuRect.bottom - (window.innerHeight - viewportPadding);

    if (overflowBottom > 0) {
      window.scrollBy({
        top: overflowBottom + viewportPadding,
        behavior: "smooth",
      });
    }
  });
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("fitcalc-theme");
  const settings = getAppSettings();
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches || false;
  const shouldUseDarkMode = settings.theme === "Dark" || (settings.theme === "System" ? prefersDark || savedTheme === "dark" : savedTheme === "dark");

  document.body.classList.toggle("dark", shouldUseDarkMode);
  updateThemeButton(shouldUseDarkMode);

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    localStorage.setItem("fitcalc-theme", isDarkMode ? "dark" : "light");
    syncSettingsThemeFromToggle(isDarkMode);
    updateThemeButton(isDarkMode);
    if (getElement("weightProgressChart")) {
      renderWeightProgressChart(getWeightHistory());
    }
  });
}

function updateThemeButton(isDarkMode) {
  if (!themeIcon || !themeText) {
    return;
  }

  themeIcon.textContent = isDarkMode ? "☀" : "☾";
  themeText.textContent = isDarkMode ? "Light" : "Dark";
}

function bindCalculatorForms() {
  bindSubmitHandler("bmiForm", handleBmiSubmit);
  bindSubmitHandler("tdeeForm", handleTdeeSubmit);
  bindSubmitHandler("proteinForm", handleProteinSubmit);
  bindSubmitHandler("macroForm", handleMacroSubmit);
  bindSubmitHandler("oneRmForm", handleOneRepMaxSubmit);
}

function initializeWeightTracker() {
  if (!getElement("weightTrackerForm")) {
    return;
  }

  getElement("trackerDate").value = getTodayDateValue();
  getElement("weightTrackerForm").addEventListener("submit", handleWeightTrackerSubmit);
  getElement("clearTrackerButton").addEventListener("click", clearWeightHistory);
  getElement("exportCsvButton").addEventListener("click", exportWeightHistoryCsv);
  getElement("importCsvInput").addEventListener("change", handleCsvImport);
  renderWeightHistory();
}

function bindSubmitHandler(formId, handler) {
  const form = getElement(formId);

  if (form) {
    form.addEventListener("submit", handler);
  }
}

function handleBmiSubmit(event) {
  event.preventDefault();

  const weightKg = getPositiveNumber("bmiWeight");
  const heightCm = getPositiveNumber("bmiHeight");

  if (!areValidNumbers(weightKg, heightCm)) {
    showError("bmiResult");
    return;
  }

  const bmi = calculateBmi(weightKg, heightCm);
  const category = getBmiCategory(bmi);

  showResult("bmiResult", `
    <strong>${formatNumber(bmi)} BMI</strong>
    อยู่ในเกณฑ์ <span>${category}</span>
  `);
  trackAnalyticsEvent("bmi_calculated", {
    bmi_value: Number(bmi.toFixed(1)),
    bmi_category: category,
  });
}

function handleTdeeSubmit(event) {
  event.preventDefault();

  const gender = getElement("tdeeGender").value;
  const age = getPositiveNumber("tdeeAge");
  const weightKg = getPositiveNumber("tdeeWeight");
  const heightCm = getPositiveNumber("tdeeHeight");
  const activityMultiplier = Number(getElement("tdeeActivity").value);

  if (!areValidNumbers(age, weightKg, heightCm, activityMultiplier)) {
    showError("tdeeResult");
    return;
  }

  const bmr = calculateBmr(gender, age, weightKg, heightCm);
  const tdee = calculateTdee(bmr, activityMultiplier);

  showResult("tdeeResult", `
    <strong>${formatNumber(tdee, 0)} kcal/วัน</strong>
    BMR ประมาณ <span>${formatNumber(bmr, 0)} kcal/วัน</span>
  `);
  trackAnalyticsEvent("tdee_calculated", {
    bmr_value: Math.round(bmr),
    tdee_value: Math.round(tdee),
    activity_multiplier: activityMultiplier,
  });
}

function handleProteinSubmit(event) {
  event.preventDefault();

  const weightKg = getPositiveNumber("proteinWeight");
  const proteinMultiplier = Number(getElement("proteinGoal").value);

  if (!areValidNumbers(weightKg, proteinMultiplier)) {
    showError("proteinResult");
    return;
  }

  const proteinGrams = calculateDailyProtein(weightKg, proteinMultiplier);

  showResult("proteinResult", `
    <strong>${formatNumber(proteinGrams, 0)} กรัม/วัน</strong>
    คิดจาก <span>${proteinMultiplier} กรัมต่อน้ำหนักตัว 1 กก.</span>
  `);
  trackAnalyticsEvent("protein_calculated", {
    protein_grams: Math.round(proteinGrams),
    protein_multiplier: proteinMultiplier,
  });
}

function handleMacroSubmit(event) {
  event.preventDefault();

  const weightKg = getPositiveNumber("macroWeight");
  const goal = getElement("macroGoal").value;

  if (!areValidNumbers(weightKg)) {
    showError("macroResult");
    return;
  }

  const macros = calculateMacros(weightKg, goal);
  const goalText = getMacroGoalLabel(goal);

  showResult("macroResult", `
    <strong>เป้าหมาย: ${goalText}</strong>
    แคลอรี <span>${formatNumber(macros.calories, 0)} kcal</span> |
    โปรตีน <span>${formatNumber(macros.protein, 0)}g</span> |
    ไขมัน <span>${formatNumber(macros.fat, 0)}g</span> |
    คาร์บ <span>${formatNumber(macros.carbs, 0)}g</span>
  `);
}

function handleOneRepMaxSubmit(event) {
  event.preventDefault();

  const liftedWeightKg = getPositiveNumber("oneRmWeight");
  const reps = getPositiveNumber("oneRmReps");

  if (!areValidNumbers(liftedWeightKg, reps)) {
    showError("oneRmResult");
    return;
  }

  const oneRepMax = calculateOneRepMax(liftedWeightKg, reps);
  const trainingWeight = oneRepMax * 0.8;

  showResult("oneRmResult", `
    <strong>${formatNumber(oneRepMax)} กก.</strong>
    น้ำหนักซ้อม 80% ประมาณ <span>${formatNumber(trainingWeight)} กก.</span>
  `);
}

function handleWeightTrackerSubmit(event) {
  event.preventDefault();

  const date = parseDisplayDate(getElement("trackerDate").value);
  const weightKg = getPositiveNumber("trackerWeight");

  if (!date || !areValidNumbers(weightKg)) {
    getElement("trackerSummary").textContent = ERROR_MESSAGE;
    return;
  }

  saveWeeklyWeight(date, weightKg);
  getElement("trackerWeight").value = "";
  renderWeightHistory();
  initializeHomeDashboard();
  trackAnalyticsEvent("weight_saved", {
    entry_date: date,
    weight_kg: weightKg,
  });
}

function getPositiveNumber(id) {
  const value = parseFloat(getElement(id).value);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function areValidNumbers(...values) {
  return values.every((value) => Number.isFinite(value) && value > 0);
}

function showError(resultId) {
  showResult(resultId, ERROR_MESSAGE);
}

function showResult(resultId, html) {
  getElement(resultId).innerHTML = html;
}

function trackAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      app_name: "FitCalc Thai",
      ...parameters,
    });
  }
}

function formatNumber(value, digits = 1) {
  return Number(value.toFixed(digits)).toLocaleString(THAI_LOCALE);
}

function formatWeight(value) {
  return value.toLocaleString(THAI_LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calculateBmi(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) return "น้ำหนักน้อย";
  if (bmi < 23) return "ปกติ";
  if (bmi < 25) return "น้ำหนักเกิน";
  if (bmi < 30) return "อ้วนระดับ 1";
  return "อ้วนระดับ 2";
}

function calculateBmr(gender, age, weightKg, heightCm) {
  // สูตร Mifflin-St Jeor: ชาย +5, หญิง -161
  const genderOffset = gender === "male" ? 5 : -161;
  return 10 * weightKg + 6.25 * heightCm - 5 * age + genderOffset;
}

function calculateTdee(bmr, activityMultiplier) {
  return bmr * activityMultiplier;
}

function calculateDailyProtein(weightKg, proteinMultiplier) {
  return weightKg * proteinMultiplier;
}

function calculateMacros(weightKg, goal) {
  const macroPlans = {
    fatLoss: {
      caloriesPerKg: 28,
      proteinPerKg: 2,
      fatPerKg: 0.8,
    },
    maintenance: {
      caloriesPerKg: 33,
      proteinPerKg: 1.6,
      fatPerKg: 0.9,
    },
    muscleGain: {
      caloriesPerKg: 38,
      proteinPerKg: 1.8,
      fatPerKg: 1,
    },
  };
  const plan = macroPlans[goal] || macroPlans.maintenance;
  const calories = weightKg * plan.caloriesPerKg;
  const protein = weightKg * plan.proteinPerKg;
  const fat = weightKg * plan.fatPerKg;
  const carbCalories = calories - protein * 4 - fat * 9;
  const carbs = Math.max(carbCalories / 4, 0);

  return {
    calories,
    protein,
    fat,
    carbs,
  };
}

function getMacroGoalLabel(goal) {
  const goalLabels = {
    fatLoss: "ลดไขมัน",
    maintenance: "รักษาน้ำหนัก",
    muscleGain: "เพิ่มกล้ามเนื้อ",
  };

  return goalLabels[goal] || goalLabels.maintenance;
}

function calculateOneRepMax(liftedWeightKg, reps) {
  // สูตร Epley: 1RM = weight x (1 + reps / 30)
  return reps === 1 ? liftedWeightKg : liftedWeightKg * (1 + reps / 30);
}

function getTodayDateValue() {
  return new Date().toISOString().slice(0, 10);
}

function getWeightHistory() {
  const savedHistory = localStorage.getItem(WEIGHT_HISTORY_KEY);

  try {
    return savedHistory ? normalizeWeightHistory(JSON.parse(savedHistory)) : [];
  } catch {
    localStorage.removeItem(WEIGHT_HISTORY_KEY);
    return [];
  }
}

function saveWeightHistory(history) {
  localStorage.setItem(WEIGHT_HISTORY_KEY, JSON.stringify(history));
}

function saveWeeklyWeight(date, weightKg) {
  const history = getWeightHistory();
  const entry = { date, weightKg };
  const existingIndex = history.findIndex((item) => item.date === date);

  // ถ้าบันทึกวันเดิมซ้ำ ให้แทนค่าล่าสุดแทนการเพิ่มแถวซ้ำ
  if (existingIndex >= 0) {
    history[existingIndex] = entry;
  } else {
    history.push(entry);
  }

  const sortedHistory = sortWeightHistory(history);
  saveWeightHistory(sortedHistory);
}

function clearWeightHistory() {
  localStorage.removeItem(WEIGHT_HISTORY_KEY);
  renderWeightHistory();
  initializeHomeDashboard();
}

function sortWeightHistory(history) {
  return history.sort((first, second) => getDateTime(second.date) - getDateTime(first.date));
}

function renderWeightHistory() {
  const history = getWeightHistory();
  const historyList = getElement("weightHistoryList");
  const summary = getElement("trackerSummary");

  if (history.length === 0) {
    summary.textContent = "ยังไม่มีประวัติน้ำหนัก";
    historyList.innerHTML = "";
    renderWeightProgressChart(history);
    renderWeightTrend();
    return;
  }

  const latest = history[0];
  summary.textContent = `บันทึกแล้ว ${history.length} รายการ | ล่าสุด ${formatWeight(latest.weightKg)} กก.`;
  historyList.innerHTML = history.slice(0, 7).map(createWeightHistoryItem).join("");
  renderWeightProgressChart(history);
  renderWeightTrend();
}

function createWeightHistoryItem(entry) {
  return `
    <li class="history-item">
      <div>
        <strong>${formatThaiDate(entry.date)}</strong>
        <span>บันทึกรายสัปดาห์</span>
      </div>
      <strong>${formatWeight(entry.weightKg)} กก.</strong>
    </li>
  `;
}

function formatThaiDate(dateValue) {
  return formatDisplayDate(dateValue);
}

function renderWeightProgressChart(history) {
  const chartPanel = getElement("weightProgressChart").parentElement;
  const hasData = history.length > 0;

  chartPanel.classList.toggle("has-data", hasData);

  if (!window.Chart) {
    return;
  }

  if (!hasData) {
    if (weightProgressChart) {
      weightProgressChart.destroy();
      weightProgressChart = null;
    }
    return;
  }

  const chartData = [...history].reverse();
  const labels = chartData.map((entry) => formatThaiDate(entry.date));
  const weights = chartData.map((entry) => entry.weightKg);

  if (weightProgressChart) {
    weightProgressChart.data.labels = labels;
    weightProgressChart.data.datasets[0].data = weights;
    updateChartThemeColors();
    weightProgressChart.update();
    return;
  }

  const chartContext = getElement("weightProgressChart").getContext("2d");

  weightProgressChart = new Chart(chartContext, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "น้ำหนัก (กก.)",
          data: weights,
          borderColor: "#62c7e6",
          backgroundColor: "rgba(98, 199, 230, 0.18)",
          borderWidth: 3,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.32,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getChartTextColor(),
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => `น้ำหนัก ${formatWeight(context.parsed.y)} กก.`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: getChartTextColor(),
          },
          grid: {
            color: getChartGridColor(),
          },
        },
        y: {
          ticks: {
            color: getChartTextColor(),
            callback: (value) => `${formatNumber(value)} กก.`,
          },
          grid: {
            color: getChartGridColor(),
          },
        },
      },
    },
  });
}

function updateChartThemeColors() {
  const textColor = getChartTextColor();
  const gridColor = getChartGridColor();

  weightProgressChart.options.plugins.legend.labels.color = textColor;
  weightProgressChart.options.scales.x.ticks.color = textColor;
  weightProgressChart.options.scales.x.grid.color = gridColor;
  weightProgressChart.options.scales.y.ticks.color = textColor;
  weightProgressChart.options.scales.y.grid.color = gridColor;
}

function getChartTextColor() {
  return getComputedStyle(document.body).getPropertyValue("--text").trim();
}

function getChartGridColor() {
  return getComputedStyle(document.body).getPropertyValue("--border").trim();
}

function exportWeightHistoryCsv() {
  const history = getWeightHistory();

  if (history.length === 0) {
    getElement("trackerSummary").textContent = "ยังไม่มีข้อมูล";
    return;
  }

  const csvRows = ["date,weight_kg", ...history.map((entry) => `${formatDisplayDate(entry.date)},${entry.weightKg.toFixed(2)}`)];
  const csvBlob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(csvBlob);
  const downloadLink = document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download = `fitcalc-weight-history-${getTodayDateValue()}.csv`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
  trackAnalyticsEvent("csv_exported", {
    record_count: history.length,
  });
}

function handleCsvImport(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    importWeightHistoryCsv(String(reader.result || ""));
    event.target.value = "";
  });
  reader.readAsText(file);
}

function importWeightHistoryCsv(csvText) {
  const importedHistory = parseWeightHistoryCsv(csvText);

  if (importedHistory.length === 0) {
    getElement("trackerSummary").textContent = "ยังไม่มีข้อมูล";
    return;
  }

  const mergedHistory = mergeWeightHistory(getWeightHistory(), importedHistory);
  saveWeightHistory(mergedHistory);
  renderWeightHistory();
  initializeHomeDashboard();
  trackAnalyticsEvent("csv_imported", {
    imported_count: importedHistory.length,
    total_count: mergedHistory.length,
  });
}

function parseWeightHistoryCsv(csvText) {
  const rows = csvText
    .split(/\r?\n/)
    .map((row) => row.trim())
    .filter(Boolean);

  return rows
    .slice(rows[0]?.toLowerCase().includes("date") ? 1 : 0)
    .map(parseWeightHistoryCsvRow)
    .filter(Boolean);
}

function parseWeightHistoryCsvRow(row) {
  const [date, weightText] = row.split(",").map((cell) => cell.trim());
  const weightKg = parseFloat(weightText);
  const normalizedDate = parseDisplayDate(date);

  if (!normalizedDate || !areValidNumbers(weightKg)) {
    return null;
  }

  return { date: normalizedDate, weightKg };
}

function mergeWeightHistory(currentHistory, importedHistory) {
  const historyByDate = new Map();

  [...currentHistory, ...importedHistory].forEach((entry) => {
    historyByDate.set(entry.date, entry);
  });

  return sortWeightHistory([...historyByDate.values()]);
}

function normalizeWeightHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return sortWeightHistory(
    history
      .map((entry) => {
        const date = parseDisplayDate(entry.date);
        const weightKg = parseFloat(entry.weightKg);

        if (!date || !areValidNumbers(weightKg)) {
          return null;
        }

        return { date, weightKg };
      })
      .filter(Boolean)
  );
}

function initializeBodyMeasurements() {
  const measurementForm = getElement("bodyMeasurementForm");
  const measurementHistoryList = getElement("measurementHistoryList");

  if (!measurementForm || !measurementHistoryList) {
    return;
  }

  getElement("measurementDate").value = getTodayDateValue();
  measurementForm.addEventListener("submit", handleBodyMeasurementSubmit);
  measurementHistoryList.addEventListener("click", handleMeasurementHistoryClick);
  getElement("cancelMeasurementEditButton")?.addEventListener("click", resetBodyMeasurementForm);
  renderBodyMeasurements();
}

function handleBodyMeasurementSubmit(event) {
  event.preventDefault();

  const record = collectBodyMeasurementForm();

  if (!record) {
    updateMeasurementStatus("กรุณากรอกวันที่ และกรอกค่าสัดส่วนอย่างน้อย 1 ช่อง โดยต้องไม่ติดลบ");
    return;
  }

  const history = getBodyMeasurements();
  const editingId = getElement("measurementEditingId").value;
  const editingIndex = history.findIndex((item) => item.id === editingId);
  const sameDateIndex = history.findIndex((item) => item.date === record.date);
  const existingIndex = editingIndex >= 0 ? editingIndex : sameDateIndex;

  if (sameDateIndex >= 0 && sameDateIndex !== editingIndex) {
    const shouldOverwrite = window.confirm("มีข้อมูลสัดส่วนของวันที่นี้อยู่แล้ว ต้องการอัปเดตข้อมูลเดิมหรือไม่?");

    if (!shouldOverwrite) {
      updateMeasurementStatus("ยกเลิกการบันทึกเพื่อป้องกันข้อมูลซ้ำ");
      return;
    }

    if (editingIndex >= 0) {
      history.splice(editingIndex, 1);
    }
  }

  const targetIndex = sameDateIndex >= 0 && sameDateIndex !== editingIndex ? history.findIndex((item) => item.date === record.date) : existingIndex;

  if (targetIndex >= 0) {
    history[targetIndex] = {
      ...history[targetIndex],
      ...record,
      id: history[targetIndex].id,
      createdAt: history[targetIndex].createdAt || record.createdAt,
      updatedAt: new Date().toISOString(),
    };
  } else {
    history.push(record);
  }

  saveBodyMeasurements(sortBodyMeasurements(history));
  resetBodyMeasurementForm();
  renderBodyMeasurements();
  initializeHomeDashboard();
  updateMeasurementStatus("บันทึกสัดส่วนเรียบร้อยแล้ว");
}

function collectBodyMeasurementForm() {
  const date = parseDisplayDate(getElement("measurementDate").value);

  if (!date) {
    return null;
  }

  const record = {
    id: `measurement-${date}`,
    date,
    notes: getElement("measurementNotes").value.trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  let hasMeasurement = false;

  for (const field of BODY_MEASUREMENT_FIELDS) {
    const input = getElement(field.inputId);
    const rawValue = String(input.value || "").trim();

    if (rawValue === "") {
      record[field.key] = null;
      continue;
    }

    const value = parseFloat(rawValue);

    if (!Number.isFinite(value) || value < 0) {
      return null;
    }

    record[field.key] = value;
    hasMeasurement = true;
  }

  return hasMeasurement ? record : null;
}

function getBodyMeasurements() {
  const savedMeasurements = localStorage.getItem(BODY_MEASUREMENT_KEY);

  try {
    return savedMeasurements ? sortBodyMeasurements(JSON.parse(savedMeasurements).map(normalizeBodyMeasurementRecord).filter(Boolean)) : [];
  } catch {
    localStorage.removeItem(BODY_MEASUREMENT_KEY);
    return [];
  }
}

function saveBodyMeasurements(measurements) {
  localStorage.setItem(BODY_MEASUREMENT_KEY, JSON.stringify(sortBodyMeasurements(measurements)));
}

function normalizeBodyMeasurementRecord(record) {
  const date = parseDisplayDate(record?.date);

  if (!date) {
    return null;
  }

  const normalizedRecord = {
    id: record.id || `measurement-${date}`,
    date,
    notes: String(record.notes || "").trim(),
    createdAt: record.createdAt || `${date}T00:00:00.000Z`,
    updatedAt: record.updatedAt || record.createdAt || `${date}T00:00:00.000Z`,
  };

  BODY_MEASUREMENT_FIELDS.forEach((field) => {
    const value = parseFloat(record[field.key]);
    normalizedRecord[field.key] = Number.isFinite(value) && value >= 0 ? value : null;
  });

  const hasMeasurement = BODY_MEASUREMENT_FIELDS.some((field) => hasMeasurementValue(normalizedRecord[field.key]));
  return hasMeasurement ? normalizedRecord : null;
}

function sortBodyMeasurements(measurements) {
  return measurements.sort((first, second) => getDateTime(second.date) - getDateTime(first.date));
}

function renderBodyMeasurements() {
  const measurements = getBodyMeasurements();
  renderMeasurementSummary(measurements);
  renderMeasurementHistory(measurements);
}

function renderMeasurementSummary(measurements) {
  const summary = getElement("measurementSummary");

  if (!summary) {
    return;
  }

  if (measurements.length === 0) {
    summary.innerHTML = '<p class="empty-state">ยังไม่มีข้อมูลสัดส่วนร่างกาย</p>';
    return;
  }

  const latest = measurements[0];
  const previous = measurements[1] || null;
  const latestArmAverage = calculateMeasurementAverage(latest.upperArmLeft, latest.upperArmRight);
  const latestThighAverage = calculateMeasurementAverage(latest.thighLeft, latest.thighRight);

  summary.innerHTML = `
    ${createMeasurementSummaryCard("Latest waist", latest.waist, "cm", getMeasurementTrend(latest.waist, previous?.waist))}
    ${createMeasurementSummaryCard("Waist change", calculateMeasurementChange(latest.waist, previous?.waist), "cm", previous ? "เทียบครั้งก่อน" : "ยังไม่มีข้อมูลเปรียบเทียบ", true)}
    ${createMeasurementSummaryCard("Latest chest", latest.chest, "cm", getMeasurementTrend(latest.chest, previous?.chest))}
    ${createMeasurementSummaryCard("Latest hips", latest.hips, "cm", getMeasurementTrend(latest.hips, previous?.hips))}
    ${createMeasurementSummaryCard("Arm average", latestArmAverage, "cm", getMeasurementTrend(latestArmAverage, calculateMeasurementAverage(previous?.upperArmLeft, previous?.upperArmRight)))}
    ${createMeasurementSummaryCard("Thigh average", latestThighAverage, "cm", getMeasurementTrend(latestThighAverage, calculateMeasurementAverage(previous?.thighLeft, previous?.thighRight)))}
    ${createMeasurementTextCard("Total records", `${measurements.length} records`, "จำนวนข้อมูลสัดส่วน")}
    ${createMeasurementTextCard("Last measurement", formatThaiDate(latest.date), "วันที่วัดล่าสุด")}
  `;
}

function createMeasurementSummaryCard(label, value, unit, detail, isChange = false) {
  const valueText = hasMeasurementValue(value)
    ? `${isChange && value > 0 ? "+" : ""}${formatMeasurementValue(value)} ${unit}`
    : "ยังไม่มีข้อมูล";

  return createMeasurementTextCard(label, valueText, detail);
}

function createMeasurementTextCard(label, value, detail) {
  return `
    <article class="measurement-summary-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(detail)}</p>
    </article>
  `;
}

function renderMeasurementHistory(measurements) {
  const historyList = getElement("measurementHistoryList");

  if (!historyList) {
    return;
  }

  if (measurements.length === 0) {
    historyList.innerHTML = '<p class="empty-state">ยังไม่มีข้อมูลสัดส่วนร่างกาย</p>';
    return;
  }

  historyList.innerHTML = measurements.map(createMeasurementHistoryCard).join("");
}

function createMeasurementHistoryCard(record) {
  return `
    <article class="measurement-history-card">
      <div class="measurement-history-header">
        <div>
          <span>${formatThaiDate(record.date)}</span>
          <strong>${formatMeasurementOptional(record.weight, "kg", "Weight")}</strong>
        </div>
        <div class="measurement-actions">
          <button class="secondary-button compact-button" type="button" data-measurement-action="edit" data-measurement-id="${escapeHtml(record.id)}">Edit</button>
          <button class="danger-button compact-button" type="button" data-measurement-action="delete" data-measurement-id="${escapeHtml(record.id)}">Delete</button>
        </div>
      </div>
      <div class="measurement-history-grid">
        ${createMeasurementHistoryMetric("Chest", record.chest)}
        ${createMeasurementHistoryMetric("Waist", record.waist)}
        ${createMeasurementHistoryMetric("Hips", record.hips)}
        ${createMeasurementHistoryMetric("Shoulder", record.shoulder)}
        ${createMeasurementHistoryMetric("Arms average", calculateMeasurementAverage(record.upperArmLeft, record.upperArmRight))}
        ${createMeasurementHistoryMetric("Thighs average", calculateMeasurementAverage(record.thighLeft, record.thighRight))}
      </div>
      ${record.notes ? `<p class="measurement-note">${escapeHtml(record.notes)}</p>` : ""}
    </article>
  `;
}

function createMeasurementHistoryMetric(label, value) {
  return `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${hasMeasurementValue(value) ? `${formatMeasurementValue(value)} cm` : "-"}</strong>
    </div>
  `;
}

function handleMeasurementHistoryClick(event) {
  const actionButton = event.target.closest("[data-measurement-action]");

  if (!actionButton) {
    return;
  }

  const measurementId = actionButton.dataset.measurementId;
  const measurement = getBodyMeasurements().find((record) => record.id === measurementId);

  if (!measurement) {
    return;
  }

  if (actionButton.dataset.measurementAction === "edit") {
    loadMeasurementIntoForm(measurement);
  } else if (actionButton.dataset.measurementAction === "delete") {
    deleteMeasurementRecord(measurement);
  }
}

function loadMeasurementIntoForm(record) {
  getElement("measurementEditingId").value = record.id;
  getElement("measurementDate").value = record.date;
  BODY_MEASUREMENT_FIELDS.forEach((field) => {
    getElement(field.inputId).value = hasMeasurementValue(record[field.key]) ? record[field.key] : "";
  });
  getElement("measurementNotes").value = record.notes || "";
  updateMeasurementStatus(`Editing measurement from ${formatThaiDate(record.date)}`);
  getElement("bodyMeasurementForm").scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteMeasurementRecord(record) {
  const shouldDelete = window.confirm(`ลบข้อมูลสัดส่วนวันที่ ${formatThaiDate(record.date)} หรือไม่?`);

  if (!shouldDelete) {
    return;
  }

  saveBodyMeasurements(getBodyMeasurements().filter((item) => item.id !== record.id));
  renderBodyMeasurements();
  initializeHomeDashboard();
  updateMeasurementStatus("ลบข้อมูลสัดส่วนเรียบร้อยแล้ว");
}

function resetBodyMeasurementForm() {
  getElement("bodyMeasurementForm").reset();
  getElement("measurementEditingId").value = "";
  getElement("measurementDate").value = getTodayDateValue();
  updateMeasurementStatus("พร้อมบันทึกข้อมูลสัดส่วนใหม่");
}

function updateMeasurementStatus(message) {
  const status = getElement("measurementStatus");

  if (status) {
    status.textContent = message;
  }
}

function calculateMeasurementAverage(firstValue, secondValue) {
  const values = [firstValue, secondValue].filter(hasMeasurementValue);

  if (values.length === 0) {
    return null;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}

function calculateMeasurementChange(latestValue, previousValue) {
  return hasMeasurementValue(latestValue) && hasMeasurementValue(previousValue) ? latestValue - previousValue : null;
}

function getMeasurementTrend(latestValue, previousValue) {
  const change = calculateMeasurementChange(latestValue, previousValue);

  if (change === null) {
    return "ยังไม่มีข้อมูลเปรียบเทียบ";
  }

  if (Math.abs(change) < 0.1) {
    return "ทรงตัว";
  }

  return change > 0 ? "เพิ่มขึ้น" : "ลดลง";
}

function hasMeasurementValue(value) {
  return Number.isFinite(value);
}

function formatMeasurementValue(value) {
  return Number(value.toFixed(2)).toLocaleString(THAI_LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function formatMeasurementOptional(value, unit, label) {
  return hasMeasurementValue(value) ? `${label}: ${formatMeasurementValue(value)} ${unit}` : `${label}: -`;
}

function initializeGoalTracking() {
  const goalForm = getElement("goalForm");
  const goalList = getElement("goalList");

  if (!goalForm || !goalList) {
    return;
  }

  getElement("goalStartDate").value = getTodayDateValue();
  getElement("goalType").addEventListener("change", updateGoalUnitFromType);
  goalForm.addEventListener("submit", handleGoalSubmit);
  goalList.addEventListener("click", handleGoalListClick);
  getElement("cancelGoalEditButton")?.addEventListener("click", resetGoalForm);
  updateGoalUnitFromType();
  applyGoalDefaults();
  renderGoals();
}

function handleGoalSubmit(event) {
  event.preventDefault();

  const goal = collectGoalForm();

  if (!goal) {
    updateGoalStatus("กรุณากรอกข้อมูลเป้าหมายให้ครบ และตรวจสอบวันที่/ค่าเป้าหมาย");
    return;
  }

  const goals = getGoals();
  const editingId = getElement("goalEditingId").value;
  const existingIndex = goals.findIndex((item) => item.id === editingId);

  if (existingIndex >= 0) {
    goals[existingIndex] = {
      ...goals[existingIndex],
      ...goal,
      id: goals[existingIndex].id,
      startValue: goals[existingIndex].startValue,
      createdAt: goals[existingIndex].createdAt,
      updatedAt: new Date().toISOString(),
    };
  } else {
    goals.push(goal);
  }

  saveGoals(goals);
  resetGoalForm();
  renderGoals();
  initializeHomeDashboard();
  updateGoalStatus("บันทึกเป้าหมายเรียบร้อยแล้ว");
}

function collectGoalForm() {
  const type = getElement("goalType").value;
  const title = getElement("goalTitle").value.trim();
  const targetValue = parseFloat(getElement("goalTargetValue").value);
  const unit = getElement("goalUnit").value.trim();
  const startDate = parseDisplayDate(getElement("goalStartDate").value);
  const targetDate = parseDisplayDate(getElement("goalTargetDate").value);
  const status = getElement("goalStatus").value;
  const notes = getElement("goalNotes").value.trim();
  const measurementField = type === "bodyMeasurement" ? getElement("goalMeasurementField").value : "";

  if (!type || !title || !unit || !startDate || !areValidNumbers(targetValue)) {
    return null;
  }

  if (targetDate && getDateTime(targetDate) < getDateTime(startDate)) {
    return null;
  }

  const currentValue = getCurrentGoalValue({ type, measurementField });

  return {
    id: createGoalId(startDate),
    type,
    title,
    targetValue,
    unit,
    startDate,
    targetDate: targetDate || "",
    status,
    notes,
    measurementField,
    startValue: currentValue.value,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function getGoals() {
  const savedGoals = localStorage.getItem(GOALS_KEY);

  try {
    return savedGoals ? sortGoals(JSON.parse(savedGoals).map(normalizeGoalRecord).filter(Boolean)) : [];
  } catch {
    localStorage.removeItem(GOALS_KEY);
    return [];
  }
}

function saveGoals(goals) {
  localStorage.setItem(GOALS_KEY, JSON.stringify(sortGoals(goals.map(normalizeGoalRecord).filter(Boolean))));
}

function normalizeGoalRecord(goal) {
  const type = String(goal?.type || "").trim();
  const title = String(goal?.title || "").trim();
  const targetValue = parseFloat(goal?.targetValue);
  const startDate = parseDisplayDate(goal?.startDate);
  const targetDate = goal?.targetDate ? parseDisplayDate(goal.targetDate) : "";
  const status = ["Active", "Completed", "Paused"].includes(goal?.status) ? goal.status : "Active";

  if (!type || !title || !areValidNumbers(targetValue) || !startDate) {
    return null;
  }

  return {
    id: goal.id || createGoalId(startDate),
    type,
    title,
    targetValue,
    unit: String(goal.unit || getDefaultGoalUnit(type)).trim(),
    startDate,
    targetDate: targetDate || "",
    status,
    notes: String(goal.notes || "").trim(),
    measurementField: String(goal.measurementField || "").trim(),
    startValue: Number.isFinite(parseFloat(goal.startValue)) ? parseFloat(goal.startValue) : null,
    createdAt: goal.createdAt || `${startDate}T00:00:00.000Z`,
    updatedAt: goal.updatedAt || goal.createdAt || `${startDate}T00:00:00.000Z`,
  };
}

function sortGoals(goals) {
  return goals.sort((first, second) => getDateTime(second.updatedAt?.slice(0, 10) || second.startDate) - getDateTime(first.updatedAt?.slice(0, 10) || first.startDate));
}

function renderGoals() {
  const goalList = getElement("goalList");

  if (!goalList) {
    return;
  }

  const goals = getGoals();

  if (goals.length === 0) {
    goalList.innerHTML = '<p class="empty-state">ยังไม่มีเป้าหมายที่บันทึกไว้</p>';
    return;
  }

  goalList.innerHTML = goals.map(createGoalCard).join("");
}

function createGoalCard(goal) {
  const progress = calculateGoalProgress(goal);
  const pauseAction = goal.status === "Paused" ? "resume" : "pause";
  const pauseLabel = goal.status === "Paused" ? "ทำต่อ" : "พักไว้ก่อน";

  return `
    <article class="goal-card">
      <div class="goal-card-header">
        <div>
          <span>${escapeHtml(getGoalTypeLabel(goal))}</span>
          <h3>${escapeHtml(goal.title)}</h3>
        </div>
        <strong>${escapeHtml(getGoalStatusLabel(goal.status))}</strong>
      </div>
      <div class="goal-progress-grid">
        ${createDashboardMetric("ปัจจุบัน", progress.currentText)}
        ${createDashboardMetric("เป้าหมาย", `${formatGoalNumber(goal.targetValue)} ${goal.unit}`)}
        ${createDashboardMetric("เหลืออีก", progress.remainingText)}
        ${createDashboardMetric("ความคืบหน้า", `${progress.percent}%`)}
      </div>
      <div class="dashboard-progress-bar" aria-label="Goal progress ${progress.percent}%">
        <span style="width: ${progress.percent}%"></span>
      </div>
      <p class="goal-status-text">${escapeHtml(progress.statusText)}</p>
      ${goal.targetDate ? `<p>วันที่เป้าหมาย: <strong>${formatThaiDate(goal.targetDate)}</strong></p>` : ""}
      ${goal.notes ? `<p>${escapeHtml(goal.notes)}</p>` : ""}
      <div class="goal-card-actions">
        <button class="secondary-button compact-button" type="button" data-goal-action="edit" data-goal-id="${escapeHtml(goal.id)}">แก้ไข</button>
        <button class="secondary-button compact-button" type="button" data-goal-action="complete" data-goal-id="${escapeHtml(goal.id)}">ทำสำเร็จ</button>
        <button class="secondary-button compact-button" type="button" data-goal-action="${pauseAction}" data-goal-id="${escapeHtml(goal.id)}">${pauseLabel}</button>
        <button class="danger-button compact-button" type="button" data-goal-action="delete" data-goal-id="${escapeHtml(goal.id)}">ลบ</button>
      </div>
    </article>
  `;
}

function calculateGoalProgress(goal) {
  const current = getCurrentGoalValue(goal);

  if (!current.hasData) {
    return {
      currentText: current.emptyText,
      remainingText: "ยังไม่มีข้อมูล",
      percent: goal.status === "Completed" ? 100 : 0,
      statusText: "ยังไม่มีข้อมูล",
    };
  }

  const startValue = Number.isFinite(goal.startValue) ? goal.startValue : getStartGoalValue(goal);
  const targetValue = goal.targetValue;
  const currentValue = current.value;
  const direction = Number.isFinite(startValue) && startValue !== targetValue
    ? Math.sign(targetValue - startValue)
    : Math.sign(targetValue - currentValue) || 1;
  const remaining = Math.abs(targetValue - currentValue);
  const isReached = direction >= 0 ? currentValue >= targetValue : currentValue <= targetValue;
  let percent = isReached ? 100 : 0;

  if (Number.isFinite(startValue) && startValue !== targetValue) {
    percent = Math.min(Math.max(Math.round((Math.abs(currentValue - startValue) / Math.abs(targetValue - startValue)) * 100), 0), 100);
  }

  if (goal.status === "Completed") {
    percent = 100;
  }

  return {
    currentText: `${formatGoalNumber(currentValue)} ${goal.unit}`,
    remainingText: `${formatGoalNumber(remaining)} ${goal.unit}`,
    percent,
    statusText: goal.status === "Completed" || isReached ? "สำเร็จแล้ว" : getGoalProgressStatusText(percent),
  };
}

function getCurrentGoalValue(goal) {
  if (goal.type === "weight") {
    const latest = getWeightHistory()[0];
    return latest ? { hasData: true, value: latest.weightKg } : { hasData: false, value: null, emptyText: "ยังไม่มีข้อมูลน้ำหนักสำหรับคำนวณเป้าหมาย" };
  }

  if (goal.type === "waist") {
    const latest = getBodyMeasurements().find((record) => hasMeasurementValue(record.waist));
    return latest ? { hasData: true, value: latest.waist } : { hasData: false, value: null, emptyText: "ยังไม่มีข้อมูลเอวสำหรับคำนวณเป้าหมาย" };
  }

  if (goal.type === "weeklyWorkout") {
    return { hasData: true, value: countDashboardWorkoutsThisWeek(getWorkoutHistory()) };
  }

  if (goal.type === "bodyMeasurement") {
    const value = getLatestMeasurementFieldValue(goal.measurementField);
    return hasMeasurementValue(value) ? { hasData: true, value } : { hasData: false, value: null, emptyText: "ยังไม่มีข้อมูลสัดส่วนสำหรับคำนวณเป้าหมาย" };
  }

  return { hasData: false, value: null, emptyText: "ยังไม่มีข้อมูล" };
}

function getStartGoalValue(goal) {
  if (Number.isFinite(goal.startValue)) {
    return goal.startValue;
  }

  const records = goal.type === "weight" ? getWeightHistory() : getBodyMeasurements();
  const matchingRecord = [...records]
    .reverse()
    .find((record) => getDateTime(record.date) >= getDateTime(goal.startDate));

  if (!matchingRecord) {
    return null;
  }

  if (goal.type === "weight") return matchingRecord.weightKg;
  if (goal.type === "waist") return matchingRecord.waist;
  if (goal.type === "bodyMeasurement") return getMeasurementFieldValue(matchingRecord, goal.measurementField);
  return null;
}

function getLatestMeasurementFieldValue(fieldName) {
  const record = getBodyMeasurements().find((item) => hasMeasurementValue(getMeasurementFieldValue(item, fieldName)));
  return record ? getMeasurementFieldValue(record, fieldName) : null;
}

function getMeasurementFieldValue(record, fieldName) {
  if (!record) return null;
  if (fieldName === "upperArmAverage") return calculateMeasurementAverage(record.upperArmLeft, record.upperArmRight);
  if (fieldName === "thighAverage") return calculateMeasurementAverage(record.thighLeft, record.thighRight);
  return record[fieldName];
}

function getGoalProgressStatusText(percent) {
  if (percent <= 0) return "เริ่มต้นแล้ว";
  if (percent >= 90) return "ใกล้ถึงเป้าหมาย";
  if (percent >= 40) return "กำลังไปได้ดี";
  return "เริ่มต้นแล้ว";
}

function handleGoalListClick(event) {
  const button = event.target.closest("[data-goal-action]");

  if (!button) return;

  const goalId = button.dataset.goalId;
  const action = button.dataset.goalAction;
  const goal = getGoals().find((item) => item.id === goalId);

  if (!goal) return;

  if (action === "edit") loadGoalIntoForm(goal);
  if (action === "delete") deleteGoal(goal);
  if (action === "complete") updateGoalStatusValue(goal.id, "Completed");
  if (action === "pause") updateGoalStatusValue(goal.id, "Paused");
  if (action === "resume") updateGoalStatusValue(goal.id, "Active");
}

function loadGoalIntoForm(goal) {
  getElement("goalEditingId").value = goal.id;
  getElement("goalType").value = goal.type;
  getElement("goalTitle").value = goal.title;
  getElement("goalMeasurementField").value = goal.measurementField || "chest";
  getElement("goalTargetValue").value = goal.targetValue;
  getElement("goalUnit").value = goal.unit;
  getElement("goalStartDate").value = goal.startDate;
  getElement("goalTargetDate").value = goal.targetDate || "";
  getElement("goalStatus").value = goal.status;
  getElement("goalNotes").value = goal.notes || "";
  updateGoalStatus("กำลังแก้ไขเป้าหมาย");
  getElement("goalForm").scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteGoal(goal) {
  if (!window.confirm(`ลบเป้าหมาย: ${goal.title}?`)) return;
  saveGoals(getGoals().filter((item) => item.id !== goal.id));
  renderGoals();
  initializeHomeDashboard();
  updateGoalStatus("ลบเป้าหมายเรียบร้อยแล้ว");
}

function updateGoalStatusValue(goalId, status) {
  const goals = getGoals();
  const goalIndex = goals.findIndex((goal) => goal.id === goalId);

  if (goalIndex < 0) return;

  goals[goalIndex].status = status;
  goals[goalIndex].updatedAt = new Date().toISOString();
  saveGoals(goals);
  renderGoals();
  initializeHomeDashboard();
}

function resetGoalForm() {
  getElement("goalForm").reset();
  getElement("goalEditingId").value = "";
  getElement("goalStartDate").value = getTodayDateValue();
  getElement("goalStatus").value = "Active";
  updateGoalUnitFromType();
  applyGoalDefaults();
  updateGoalStatus("พร้อมบันทึกเป้าหมายใหม่");
}

function updateGoalUnitFromType() {
  const type = getElement("goalType")?.value || "";
  const unit = getElement("goalUnit");

  if (unit) {
    unit.value = getDefaultGoalUnit(type);
  }

  const target = getElement("goalTargetValue");
  const settings = getAppSettings();
  const profile = getUserProfile();

  if (target && !target.value) {
    if (type === "weight" && profile?.targetWeight) {
      target.value = profile.targetWeight;
    }
    if (type === "weeklyWorkout" && settings.defaultWorkoutGoalPerWeek) {
      target.value = settings.defaultWorkoutGoalPerWeek;
    }
  }
}

function getDefaultGoalUnit(type) {
  if (type === "weight") return "kg";
  if (type === "weeklyWorkout") return "workouts/week";
  if (type === "waist" || type === "bodyMeasurement") return "cm";
  return "";
}

function getGoalTypeLabel(goal) {
  const labels = {
    weight: "เป้าหมายน้ำหนัก",
    waist: "เป้าหมายรอบเอว",
    weeklyWorkout: "เป้าหมาย Workout รายสัปดาห์",
    bodyMeasurement: "เป้าหมายสัดส่วนร่างกาย",
  };

  return labels[goal.type] || "เป้าหมาย";
}

function getGoalStatusLabel(status) {
  const labels = {
    Active: "กำลังทำ",
    Completed: "สำเร็จแล้ว",
    Paused: "พักไว้ก่อน",
  };

  return labels[status] || "กำลังทำ";
}

function getDashboardGoalSummary(goals) {
  const activeGoals = goals.filter((goal) => goal.status === "Active");
  const completedGoals = goals.filter((goal) => goal.status === "Completed");
  const nextTarget = activeGoals
    .filter((goal) => goal.targetDate)
    .sort((first, second) => getDateTime(first.targetDate) - getDateTime(second.targetDate))[0];
  const closestGoal = activeGoals
    .map((goal) => ({ goal, progress: calculateGoalProgress(goal) }))
    .sort((first, second) => second.progress.percent - first.progress.percent)[0]?.goal;

  return {
    activeGoals: activeGoals.length,
    completedGoals: completedGoals.length,
    nextTargetText: nextTarget ? formatThaiDate(nextTarget.targetDate) : "ยังไม่มีวันที่เป้าหมาย",
    closestGoalText: closestGoal ? closestGoal.title : "ยังไม่มีเป้าหมายที่กำลังทำ",
  };
}

function updateGoalStatus(message) {
  const status = getElement("goalStatusMessage");

  if (status) {
    status.textContent = message;
  }
}

function createGoalId(startDate) {
  return `goal-${startDate}-${Math.random().toString(16).slice(2)}`;
}

function formatGoalNumber(value) {
  return Number(value.toFixed(2)).toLocaleString(THAI_LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function createAchievementDefinition(id, category, metricKey, target, title, thaiTitle, description, icon) {
  return { id, category, metricKey, target, title, thaiTitle, description, icon };
}

function initializeAchievementSection() {
  const filter = getElement("achievementFilter");

  if (!filter) {
    return;
  }

  filter.addEventListener("change", () => {
    renderAchievementSection(getHomeDashboardData());
  });
  renderAchievementSection(getHomeDashboardData());
}

function evaluateAchievements(data) {
  const currentState = getAchievementState();
  const metrics = getAchievementMetrics(data, currentState);
  const unlocked = { ...currentState.unlocked };
  const now = new Date().toISOString();

  ACHIEVEMENT_DEFINITIONS.forEach((achievement) => {
    if (!unlocked[achievement.id] && metrics[achievement.metricKey] >= achievement.target) {
      unlocked[achievement.id] = {
        id: achievement.id,
        unlockedAt: now,
      };
    }
  });

  const nextState = {
    unlocked,
    bestWorkoutStreak: Math.max(currentState.bestWorkoutStreak, metrics.workoutStreak),
    bestWeightStreak: Math.max(currentState.bestWeightStreak, metrics.weightStreak),
    lastUpdated: now,
  };

  saveAchievementState(nextState);

  return buildAchievementViewModel(nextState, metrics);
}

function getAchievementState() {
  const fallbackState = {
    unlocked: {},
    bestWorkoutStreak: 0,
    bestWeightStreak: 0,
    lastUpdated: "",
  };
  const savedState = readDashboardValue(ACHIEVEMENTS_KEY);

  if (!savedState || typeof savedState !== "object" || Array.isArray(savedState)) {
    return fallbackState;
  }

  const unlocked = {};
  Object.values(savedState.unlocked || {}).forEach((item) => {
    const id = String(item?.id || "").trim();
    const unlockedDate = item?.unlockedAt ? new Date(item.unlockedAt) : null;
    const unlockedAt = unlockedDate && Number.isFinite(unlockedDate.getTime()) ? unlockedDate.toISOString() : "";

    if (id && ACHIEVEMENT_DEFINITIONS.some((achievement) => achievement.id === id) && unlockedAt) {
      unlocked[id] = { id, unlockedAt };
    }
  });

  return {
    unlocked,
    bestWorkoutStreak: Math.max(parseInt(savedState.bestWorkoutStreak, 10) || 0, 0),
    bestWeightStreak: Math.max(parseInt(savedState.bestWeightStreak, 10) || 0, 0),
    lastUpdated: savedState.lastUpdated || "",
  };
}

function saveAchievementState(state) {
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify({
    unlocked: state.unlocked,
    bestWorkoutStreak: state.bestWorkoutStreak,
    bestWeightStreak: state.bestWeightStreak,
    lastUpdated: state.lastUpdated,
  }));
}

function getAchievementMetrics(data, state) {
  const workoutStreak = calculateDailyStreak(data.workoutHistory.map((workout) => workout.date));
  const weightStreak = calculateDailyStreak(data.weightHistory.map((entry) => entry.date));
  const measurementStreak = calculateDailyStreak(data.bodyMeasurements.map((record) => record.date));
  const completedGoals = data.goals.filter((goal) => goal.status === "Completed").length;

  return {
    workoutCount: data.workoutHistory.length,
    workoutStreak: workoutStreak.current,
    bestWorkoutStreak: Math.max(state.bestWorkoutStreak, workoutStreak.best),
    lastWorkoutDate: workoutStreak.lastDate,
    weightCount: data.weightHistory.length,
    weightStreak: weightStreak.current,
    bestWeightStreak: Math.max(state.bestWeightStreak, weightStreak.best),
    lastWeightDate: weightStreak.lastDate,
    measurementCount: data.bodyMeasurements.length,
    measurementStreak: measurementStreak.current,
    latestMeasurementDate: measurementStreak.lastDate,
    goalsCreated: data.goals.length,
    goalsCompleted: completedGoals,
    customTemplates: data.templateStore.customTemplates.length,
    customExercises: data.customExercises.length,
  };
}

function buildAchievementViewModel(state, metrics) {
  const cards = ACHIEVEMENT_DEFINITIONS.map((achievement) => {
    const unlockedState = state.unlocked[achievement.id] || null;
    const current = Math.max(metrics[achievement.metricKey] || 0, 0);
    const progressPercent = Math.min(Math.round((current / achievement.target) * 100), 100);

    return {
      ...achievement,
      unlocked: Boolean(unlockedState),
      unlockedAt: unlockedState?.unlockedAt || "",
      current: Math.min(current, achievement.target),
      progressText: `${Math.min(current, achievement.target)} / ${achievement.target}`,
      progressPercent,
    };
  });
  const unlockedList = cards
    .filter((achievement) => achievement.unlocked)
    .sort((first, second) => new Date(second.unlockedAt).getTime() - new Date(first.unlockedAt).getTime());
  const latestUnlocked = unlockedList[0] || null;

  return {
    cards,
    unlockedList,
    metrics,
    summary: {
      currentWorkoutStreak: metrics.workoutStreak,
      bestWorkoutStreak: Math.max(state.bestWorkoutStreak, metrics.bestWorkoutStreak),
      currentWeightStreak: metrics.weightStreak,
      bestWeightStreak: Math.max(state.bestWeightStreak, metrics.bestWeightStreak),
      measurementStreak: metrics.measurementStreak,
      measurementRecords: metrics.measurementCount,
      latestMeasurementDateText: metrics.latestMeasurementDate ? formatThaiDate(metrics.latestMeasurementDate) : "ยังไม่มีข้อมูล",
      lastWorkoutDateText: metrics.lastWorkoutDate ? formatThaiDate(metrics.lastWorkoutDate) : "ยังไม่มีข้อมูล",
      unlockedCount: unlockedList.length,
      totalAchievements: ACHIEVEMENT_DEFINITIONS.length,
      latestUnlockedTitle: latestUnlocked ? latestUnlocked.thaiTitle : "ยังไม่มี Achievement",
    },
  };
}

function calculateDailyStreak(dateValues) {
  const uniqueDates = [...new Set(dateValues.map(parseDisplayDate).filter(Boolean))]
    .sort((first, second) => getDateTime(second) - getDateTime(first));

  if (uniqueDates.length === 0) {
    return { current: 0, best: 0, lastDate: "" };
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const todayTime = getDateTime(getTodayDateValue());
  const latestTime = getDateTime(uniqueDates[0]);
  const isActive = todayTime - latestTime <= oneDay;
  let current = isActive ? 1 : 0;

  if (isActive) {
    for (let index = 1; index < uniqueDates.length; index += 1) {
      const previousTime = getDateTime(uniqueDates[index - 1]);
      const currentTime = getDateTime(uniqueDates[index]);

      if (previousTime - currentTime === oneDay) {
        current += 1;
      } else {
        break;
      }
    }
  }

  let best = 1;
  let running = 1;

  for (let index = 1; index < uniqueDates.length; index += 1) {
    const previousTime = getDateTime(uniqueDates[index - 1]);
    const currentTime = getDateTime(uniqueDates[index]);

    if (previousTime - currentTime === oneDay) {
      running += 1;
    } else {
      best = Math.max(best, running);
      running = 1;
    }
  }

  return {
    current,
    best: Math.max(best, running),
    lastDate: uniqueDates[0],
  };
}

function renderAchievementSection(data) {
  const section = getElement("achievementsSection");
  const summaryGrid = getElement("achievementSummaryGrid");
  const cardList = getElement("achievementCardList");
  const emptyState = getElement("achievementEmptyState");

  if (!section || !summaryGrid || !cardList || !emptyState || !data?.achievements) {
    return;
  }

  const achievements = data.achievements;
  const summary = achievements.summary;
  const hasUserData = data.workoutHistory.length > 0 ||
    data.weightHistory.length > 0 ||
    data.bodyMeasurements.length > 0 ||
    data.goals.length > 0 ||
    data.templateStore.customTemplates.length > 0 ||
    data.customExercises.length > 0;

  summaryGrid.innerHTML = `
    ${createDashboardMetric("Workout Streak", `${summary.currentWorkoutStreak} วัน`)}
    ${createDashboardMetric("Best Workout Streak", `${summary.bestWorkoutStreak} วัน`)}
    ${createDashboardMetric("Weight Logging Streak", `${summary.currentWeightStreak} วัน`)}
    ${createDashboardMetric("Measurement Streak", `${summary.measurementStreak} วัน`)}
    ${createDashboardMetric("Measurement Records", `${summary.measurementRecords} รายการ`)}
    ${createDashboardMetric("Latest Measurement", summary.latestMeasurementDateText)}
    ${createDashboardMetric("Achievements", `${summary.unlockedCount} / ${summary.totalAchievements}`)}
    ${createDashboardMetric("Last Workout", summary.lastWorkoutDateText)}
  `;
  emptyState.classList.toggle("is-hidden", hasUserData);
  cardList.innerHTML = filterAchievementCards(achievements.cards).map(createAchievementCard).join("");
}

function filterAchievementCards(cards) {
  const filterValue = getElement("achievementFilter")?.value || "all";

  if (filterValue === "unlocked") {
    return cards.filter((achievement) => achievement.unlocked);
  }

  if (filterValue === "locked") {
    return cards.filter((achievement) => !achievement.unlocked);
  }

  if (filterValue !== "all") {
    return cards.filter((achievement) => achievement.category === filterValue);
  }

  return cards;
}

function createAchievementCard(achievement) {
  const statusText = achievement.unlocked ? "ปลดล็อกแล้ว" : "ยังไม่ปลดล็อก";
  const unlockDate = achievement.unlockedAt ? formatThaiDate(achievement.unlockedAt.slice(0, 10)) : "";

  return `
    <article class="achievement-card ${achievement.unlocked ? "is-unlocked" : "is-locked"}">
      <div class="achievement-card-header">
        <span class="achievement-icon" aria-hidden="true">${achievement.icon}</span>
        <div>
          <span>${escapeHtml(achievement.category)}</span>
          <h3>${escapeHtml(achievement.thaiTitle)}</h3>
        </div>
        <strong>${statusText}</strong>
      </div>
      <p>${escapeHtml(achievement.description)}</p>
      <div class="dashboard-progress-bar" aria-label="Achievement progress ${achievement.progressPercent}%">
        <span style="width: ${achievement.progressPercent}%"></span>
      </div>
      <div class="achievement-card-footer">
        <span>${escapeHtml(achievement.progressText)}</span>
        <span>${achievement.unlocked ? `ปลดล็อก ${unlockDate}` : "ทำต่ออีกนิด"}</span>
      </div>
    </article>
  `;
}

function initializeProfileAndSettings() {
  const profileForm = getElement("userProfileForm");
  const settingsForm = getElement("appSettingsForm");

  if (profileForm) {
    profileForm.addEventListener("submit", handleProfileSubmit);
    getElement("clearProfileButton")?.addEventListener("click", clearUserProfile);
    populateProfileForm();
    renderProfileSectionSummary();
  }

  if (settingsForm) {
    settingsForm.addEventListener("submit", handleSettingsSubmit);
    populateSettingsForm();
  }

  autoFillCalculatorDefaults();
}

function getUserProfile() {
  return normalizeUserProfile(readDashboardValue(USER_PROFILE_KEY));
}

function normalizeUserProfile(rawProfile) {
  if (!rawProfile || typeof rawProfile !== "object" || Array.isArray(rawProfile)) {
    return null;
  }

  const profile = {
    displayName: String(rawProfile.displayName || "").trim(),
    gender: ["male", "female", "other"].includes(rawProfile.gender) ? rawProfile.gender : "",
    birthYear: normalizeOptionalInteger(rawProfile.birthYear),
    age: normalizeOptionalInteger(rawProfile.age),
    height: normalizeOptionalPositiveNumber(rawProfile.height),
    currentWeight: normalizeOptionalPositiveNumber(rawProfile.currentWeight),
    targetWeight: normalizeOptionalPositiveNumber(rawProfile.targetWeight),
    mainGoal: String(rawProfile.mainGoal || "").trim(),
    activityLevel: String(rawProfile.activityLevel || "").trim(),
    trainingDaysPerWeek: normalizeOptionalInteger(rawProfile.trainingDaysPerWeek),
    notes: String(rawProfile.notes || "").trim(),
    createdAt: rawProfile.createdAt || new Date().toISOString(),
    updatedAt: rawProfile.updatedAt || rawProfile.createdAt || new Date().toISOString(),
  };

  if (profile.birthYear !== null && !isRealisticBirthYear(profile.birthYear)) profile.birthYear = null;
  if (profile.age !== null && !isRealisticAge(profile.age)) profile.age = null;
  if (profile.trainingDaysPerWeek !== null && (profile.trainingDaysPerWeek < 1 || profile.trainingDaysPerWeek > 7)) profile.trainingDaysPerWeek = null;

  return profile;
}

function getAppSettings() {
  return normalizeAppSettings(readDashboardValue(APP_SETTINGS_KEY));
}

function normalizeAppSettings(rawSettings) {
  const settings = rawSettings && typeof rawSettings === "object" && !Array.isArray(rawSettings) ? rawSettings : {};
  const workoutGoal = normalizeOptionalInteger(settings.defaultWorkoutGoalPerWeek);

  return {
    theme: ["System", "Dark", "Light"].includes(settings.theme) ? settings.theme : "System",
    unit: "Metric",
    dateDisplay: "DD/MM/YYYY",
    dashboardMode: ["Show all sections", "Compact summary"].includes(settings.dashboardMode) ? settings.dashboardMode : "Show all sections",
    defaultWorkoutGoalPerWeek: workoutGoal !== null && workoutGoal >= 1 && workoutGoal <= 7 ? workoutGoal : null,
    defaultGoalType: ["weight", "waist", "weeklyWorkout", "bodyMeasurement"].includes(settings.defaultGoalType) ? settings.defaultGoalType : "weight",
    motivationalMessages: settings.motivationalMessages !== false,
    updatedAt: settings.updatedAt || "",
  };
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const profile = collectProfileForm();

  if (!profile) {
    updateProfileStatus("กรุณาตรวจสอบข้อมูลโปรไฟล์อีกครั้ง");
    return;
  }

  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  updateProfileStatus("บันทึกโปรไฟล์เรียบร้อยแล้ว");
  renderProfileSectionSummary();
  initializeHomeDashboard();
  autoFillCalculatorDefaults();
  trackAnalyticsEvent("profile_saved", { has_display_name: Boolean(profile.displayName) });
}

function collectProfileForm() {
  const existingProfile = getUserProfile();
  const now = new Date().toISOString();
  const heightText = getElement("profileHeight").value.trim();
  const currentWeightText = getElement("profileCurrentWeight").value.trim();
  const targetWeightText = getElement("profileTargetWeight").value.trim();
  const birthYearText = getElement("profileBirthYear").value.trim();
  const ageText = getElement("profileAge").value.trim();
  const trainingDaysText = getElement("profileTrainingDays").value.trim();

  if (
    (heightText && normalizeOptionalPositiveNumber(heightText) === null) ||
    (currentWeightText && normalizeOptionalPositiveNumber(currentWeightText) === null) ||
    (targetWeightText && normalizeOptionalPositiveNumber(targetWeightText) === null) ||
    (birthYearText && normalizeOptionalInteger(birthYearText) === null) ||
    (ageText && normalizeOptionalInteger(ageText) === null) ||
    (trainingDaysText && normalizeOptionalInteger(trainingDaysText) === null)
  ) {
    return null;
  }

  const profile = {
    displayName: getElement("profileDisplayName").value.trim(),
    gender: getElement("profileGender").value,
    birthYear: normalizeOptionalInteger(birthYearText),
    age: normalizeOptionalInteger(ageText),
    height: normalizeOptionalPositiveNumber(heightText),
    currentWeight: normalizeOptionalPositiveNumber(currentWeightText),
    targetWeight: normalizeOptionalPositiveNumber(targetWeightText),
    mainGoal: getElement("profileMainGoal").value,
    activityLevel: getElement("profileActivityLevel").value,
    trainingDaysPerWeek: normalizeOptionalInteger(trainingDaysText),
    notes: getElement("profileNotes").value.trim(),
    createdAt: existingProfile?.createdAt || now,
    updatedAt: now,
  };

  if (profile.birthYear !== null && !isRealisticBirthYear(profile.birthYear)) return null;
  if (profile.age !== null && !isRealisticAge(profile.age)) return null;
  if (profile.trainingDaysPerWeek !== null && (profile.trainingDaysPerWeek < 1 || profile.trainingDaysPerWeek > 7)) return null;

  return profile;
}

function populateProfileForm() {
  const profile = getUserProfile();

  if (!profile) {
    updateProfileStatus("ยังไม่ได้ตั้งค่าโปรไฟล์");
    return;
  }

  setElementValue("profileDisplayName", profile.displayName);
  setElementValue("profileGender", profile.gender);
  setElementValue("profileBirthYear", profile.birthYear);
  setElementValue("profileAge", profile.age);
  setElementValue("profileHeight", profile.height);
  setElementValue("profileCurrentWeight", profile.currentWeight);
  setElementValue("profileTargetWeight", profile.targetWeight);
  setElementValue("profileMainGoal", profile.mainGoal);
  setElementValue("profileActivityLevel", profile.activityLevel);
  setElementValue("profileTrainingDays", profile.trainingDaysPerWeek);
  setElementValue("profileNotes", profile.notes);
  updateProfileStatus("โหลดโปรไฟล์ที่บันทึกไว้แล้ว");
}

function clearUserProfile() {
  if (!window.confirm("ลบโปรไฟล์ที่บันทึกไว้หรือไม่? ข้อมูลน้ำหนัก Workout Goals และ Backup จะไม่ถูกลบ")) {
    return;
  }

  localStorage.removeItem(USER_PROFILE_KEY);
  getElement("userProfileForm")?.reset();
  updateProfileStatus("ลบโปรไฟล์เรียบร้อยแล้ว");
  renderProfileSectionSummary();
  initializeHomeDashboard();
}

function handleSettingsSubmit(event) {
  event.preventDefault();
  const settings = collectSettingsForm();

  if (!settings) {
    updateSettingsStatus("กรุณาตรวจสอบการตั้งค่าอีกครั้ง");
    return;
  }

  localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(settings));
  applyThemePreference(settings.theme);
  updateSettingsStatus("บันทึกการตั้งค่าเรียบร้อยแล้ว");
  initializeHomeDashboard();
  applyGoalDefaults();
  trackAnalyticsEvent("settings_saved", { theme: settings.theme });
}

function collectSettingsForm() {
  const workoutGoalText = getElement("settingsWorkoutGoal").value.trim();
  const workoutGoal = normalizeOptionalInteger(workoutGoalText);

  if ((workoutGoalText && workoutGoal === null) || (workoutGoal !== null && (workoutGoal < 1 || workoutGoal > 7))) {
    return null;
  }

  return {
    theme: getElement("settingsTheme").value,
    unit: "Metric",
    dateDisplay: "DD/MM/YYYY",
    dashboardMode: getElement("settingsDashboardMode").value,
    defaultWorkoutGoalPerWeek: workoutGoal,
    defaultGoalType: getElement("settingsDefaultGoalType").value,
    motivationalMessages: getElement("settingsMotivation").checked,
    updatedAt: new Date().toISOString(),
  };
}

function populateSettingsForm() {
  const settings = getAppSettings();

  setElementValue("settingsTheme", settings.theme);
  setElementValue("settingsUnit", settings.unit);
  setElementValue("settingsDateDisplay", settings.dateDisplay);
  setElementValue("settingsDashboardMode", settings.dashboardMode);
  setElementValue("settingsWorkoutGoal", settings.defaultWorkoutGoalPerWeek);
  setElementValue("settingsDefaultGoalType", settings.defaultGoalType);
  const motivation = getElement("settingsMotivation");
  if (motivation) motivation.checked = settings.motivationalMessages;
}

function renderDashboardProfileSummary(data) {
  const panel = getElement("dashboardProfileSummary");

  if (!panel) {
    return;
  }

  const summary = getProfileSummary(data.userProfile);

  if (!data.userProfile) {
    panel.innerHTML = `
      <p class="empty-state">ยังไม่ได้ตั้งค่าโปรไฟล์</p>
      <div class="dashboard-quick-actions">
        <a class="calculator-link" href="#userProfileSection">สร้างโปรไฟล์</a>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="dashboard-goal-widget">
      <strong>${escapeHtml(summary.greeting)}</strong>
      <span>${escapeHtml(summary.mainGoalText)}</span>
      <div class="dashboard-progress-bar" aria-label="Profile completion ${summary.completionPercent}%">
        <span style="width: ${summary.completionPercent}%"></span>
      </div>
      <p>${summary.completionPercent}% complete</p>
    </div>
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("Height", summary.heightText)}
      ${createDashboardMetric("Target Weight", summary.targetWeightText)}
      ${createDashboardMetric("Training Days", summary.trainingDaysText)}
      ${createDashboardMetric("Activity", summary.activityText)}
    </div>
  `;
}

function renderProfileSectionSummary() {
  const grid = getElement("profileSummaryGrid");

  if (!grid) {
    return;
  }

  const profile = getUserProfile();
  const summary = getProfileSummary(profile);

  grid.innerHTML = `
    ${createDashboardMetric("Greeting", summary.greeting)}
    ${createDashboardMetric("Main Goal", summary.mainGoalText)}
    ${createDashboardMetric("Height", summary.heightText)}
    ${createDashboardMetric("Current Weight", summary.currentWeightText)}
    ${createDashboardMetric("Target Weight", summary.targetWeightText)}
    ${createDashboardMetric("Training Days", summary.trainingDaysText)}
    ${createDashboardMetric("Completion", `${summary.completionPercent}%`)}
    ${createDashboardMetric("Updated", summary.updatedText)}
  `;
}

function getProfileSummary(profile) {
  if (!profile) {
    return {
      greeting: "สวัสดีครับ",
      mainGoalText: "ยังไม่ได้ตั้งเป้าหมายหลัก",
      heightText: "ยังไม่มีข้อมูล",
      currentWeightText: "ยังไม่มีข้อมูล",
      targetWeightText: "ยังไม่มีข้อมูล",
      trainingDaysText: "ยังไม่มีข้อมูล",
      activityText: "ยังไม่มีข้อมูล",
      updatedText: "ยังไม่มีข้อมูล",
      completionPercent: 0,
    };
  }

  return {
    greeting: profile.displayName ? `สวัสดี, ${profile.displayName}` : "สวัสดีครับ",
    mainGoalText: profile.mainGoal || "ยังไม่ได้ตั้งเป้าหมายหลัก",
    heightText: profile.height ? `${formatMeasurementValue(profile.height)} cm` : "ยังไม่มีข้อมูล",
    currentWeightText: profile.currentWeight ? `${formatWeight(profile.currentWeight)} kg` : "ยังไม่มีข้อมูล",
    targetWeightText: profile.targetWeight ? `${formatWeight(profile.targetWeight)} kg` : "ยังไม่มีข้อมูล",
    trainingDaysText: profile.trainingDaysPerWeek ? `${profile.trainingDaysPerWeek} วัน/สัปดาห์` : "ยังไม่มีข้อมูล",
    activityText: profile.activityLevel || "ยังไม่มีข้อมูล",
    updatedText: profile.updatedAt ? formatBackupDateTime(profile.updatedAt) : "ยังไม่มีข้อมูล",
    completionPercent: calculateProfileCompletion(profile),
  };
}

function calculateProfileCompletion(profile) {
  const fields = ["displayName", "gender", "birthYear", "age", "height", "currentWeight", "targetWeight", "mainGoal", "activityLevel", "trainingDaysPerWeek"];
  const completedFields = fields.filter((field) => profile[field] !== null && profile[field] !== "").length;
  return Math.round((completedFields / fields.length) * 100);
}

function autoFillCalculatorDefaults() {
  const profile = getUserProfile();
  const latestWeight = getLatestWeightForDefaults();
  const defaultWeight = latestWeight || profile?.currentWeight || "";
  const defaultAge = getProfileAge(profile);

  fillInputIfEmpty("bmiWeight", defaultWeight);
  fillInputIfEmpty("bmiHeight", profile?.height || "");
  fillInputIfEmpty("tdeeWeight", defaultWeight);
  fillInputIfEmpty("tdeeHeight", profile?.height || "");
  fillInputIfEmpty("tdeeAge", defaultAge || "");
  fillInputIfEmpty("proteinWeight", defaultWeight);
  fillInputIfEmpty("macroWeight", defaultWeight);

  const tdeeGender = getElement("tdeeGender");
  if (tdeeGender && profile?.gender && ["male", "female"].includes(profile.gender) && !tdeeGender.dataset.userChanged) {
    tdeeGender.value = profile.gender;
  }
}

function getLatestWeightForDefaults() {
  const weights = sortWeightHistory(readDashboardArray(WEIGHT_HISTORY_KEY).map(normalizeDashboardWeightEntry).filter(Boolean));
  return weights[0]?.weightKg || null;
}

function getProfileAge(profile) {
  if (!profile) return null;
  if (profile.birthYear) return new Date().getFullYear() - profile.birthYear;
  return profile.age;
}

function applyGoalDefaults() {
  const goalForm = getElement("goalForm");

  if (!goalForm || getElement("goalEditingId")?.value) {
    return;
  }

  const settings = getAppSettings();
  const profile = getUserProfile();
  const goalType = getElement("goalType");
  const target = getElement("goalTargetValue");

  if (goalType && !goalType.value) {
    goalType.value = settings.defaultGoalType;
  }

  updateGoalUnitFromType();

  if (target && !target.value) {
    if (goalType?.value === "weight" && profile?.targetWeight) {
      target.value = profile.targetWeight;
    }
    if (goalType?.value === "weeklyWorkout" && settings.defaultWorkoutGoalPerWeek) {
      target.value = settings.defaultWorkoutGoalPerWeek;
    }
  }
}

function applyThemePreference(theme) {
  const normalizedTheme = ["System", "Dark", "Light"].includes(theme) ? theme : "System";
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches || false;
  const shouldUseDarkMode = normalizedTheme === "Dark" || (normalizedTheme === "System" && prefersDark);

  document.body.classList.toggle("dark", shouldUseDarkMode);
  if (normalizedTheme === "System") {
    localStorage.removeItem("fitcalc-theme");
  } else {
    localStorage.setItem("fitcalc-theme", shouldUseDarkMode ? "dark" : "light");
  }
  updateThemeButton(shouldUseDarkMode);
  if (getElement("weightProgressChart")) {
    renderWeightProgressChart(getWeightHistory());
  }
}

function syncSettingsThemeFromToggle(isDarkMode) {
  const settings = readDashboardValue(APP_SETTINGS_KEY);

  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    return;
  }

  localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify({
    ...normalizeAppSettings(settings),
    theme: isDarkMode ? "Dark" : "Light",
    updatedAt: new Date().toISOString(),
  }));
  populateSettingsForm();
}

function normalizeOptionalPositiveNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const numberValue = parseFloat(value);
  return Number.isFinite(numberValue) && numberValue > 0 ? numberValue : null;
}

function normalizeOptionalInteger(value) {
  if (value === "" || value === null || value === undefined) return null;
  const numberValue = Number(value);
  return Number.isInteger(numberValue) ? numberValue : null;
}

function isRealisticAge(age) {
  return Number.isInteger(age) && age >= 10 && age <= 100;
}

function isRealisticBirthYear(year) {
  const currentYear = new Date().getFullYear();
  return Number.isInteger(year) && year >= currentYear - 100 && year <= currentYear - 10;
}

function setElementValue(id, value) {
  const element = getElement(id);
  if (element) element.value = value ?? "";
}

function fillInputIfEmpty(id, value) {
  const input = getElement(id);
  if (input && !input.value && value !== null && value !== undefined && value !== "") {
    input.value = value;
  }
}

function updateProfileStatus(message) {
  const status = getElement("profileStatusMessage");
  if (status) status.textContent = message;
}

function updateSettingsStatus(message) {
  const status = getElement("settingsStatusMessage");
  if (status) status.textContent = message;
}

function initializeDataBackupSection() {
  if (!getElement("dataBackupSection")) {
    return;
  }

  getElement("exportBackupButton")?.addEventListener("click", exportFitCalcBackup);
  getElement("copyBackupButton")?.addEventListener("click", copyFitCalcBackupJson);
  getElement("importBackupFile")?.addEventListener("change", handleBackupFileSelection);
  getElement("mergeImportButton")?.addEventListener("click", () => importPendingBackup("merge"));
  getElement("replaceImportButton")?.addEventListener("click", () => importPendingBackup("replace"));
  renderBackupSectionSummary();
}

function getFitCalcStorageKeys() {
  const keys = new Set(FITCALC_KNOWN_STORAGE_KEYS);

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key && key.startsWith("fitcalc-")) {
      keys.add(key);
    }
  }

  return [...keys].sort();
}

function getSafeEmptyStorageValue(key) {
  if ([WEIGHT_HISTORY_KEY, BODY_MEASUREMENT_KEY, WORKOUT_HISTORY_KEY, CUSTOM_EXERCISE_KEY, GOALS_KEY].includes(key)) {
    return [];
  }

  if (key === WORKOUT_TEMPLATE_KEY) {
    return { customTemplates: [], favoriteTemplateIds: [] };
  }

  if (key === ACHIEVEMENTS_KEY) {
    return { unlocked: {}, bestWorkoutStreak: 0, bestWeightStreak: 0, lastUpdated: "" };
  }

  if (key === USER_PROFILE_KEY) {
    return {};
  }

  if (key === APP_SETTINGS_KEY) {
    return normalizeAppSettings({});
  }

  if (key === WEEKLY_WORKOUT_GOAL_KEY) {
    return "";
  }

  return "";
}

function readStorageValueForBackup(key) {
  const rawValue = localStorage.getItem(key);

  if (rawValue === null) {
    return getSafeEmptyStorageValue(key);
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    if (key === LAST_BACKUP_EXPORT_KEY) {
      return rawValue;
    }

    return {
      __warning: "Malformed JSON value was exported as raw string.",
      __raw: rawValue,
    };
  }
}

function createFitCalcBackupPayload() {
  const data = {};
  const keys = getFitCalcStorageKeys();

  keys.forEach((key) => {
    data[key] = readStorageValueForBackup(key);
  });

  const totalRecords = countBackupRecords(data);

  return {
    app: "FitCalc Thai",
    backupVersion: "1.0",
    exportedAt: new Date().toISOString(),
    source: "localStorage",
    data,
    metadata: {
      totalKeys: keys.length,
      totalRecords,
      generatedBy: "FitCalc Thai",
    },
  };
}

function exportFitCalcBackup() {
  const backup = createFitCalcBackupPayload();
  const backupText = JSON.stringify(backup, null, 2);
  const blob = new Blob([backupText], { type: "application/json;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  const exportedAt = new Date(backup.exportedAt);

  downloadLink.href = downloadUrl;
  downloadLink.download = `fitcalc-thai-backup-${formatBackupFileTimestamp(exportedAt)}.json`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
  localStorage.setItem(LAST_BACKUP_EXPORT_KEY, backup.exportedAt);
  updateBackupStatus(`สำรองข้อมูลเรียบร้อยแล้ว | ${formatBackupDateTime(backup.exportedAt)} | ${backup.metadata.totalKeys} keys | ${backup.metadata.totalRecords} records`);
  refreshAfterBackupChange();
  trackAnalyticsEvent("backup_exported", {
    total_keys: backup.metadata.totalKeys,
    total_records: backup.metadata.totalRecords,
  });
}

async function copyFitCalcBackupJson() {
  const backupText = JSON.stringify(createFitCalcBackupPayload(), null, 2);

  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error("Clipboard unavailable");
    }

    await navigator.clipboard.writeText(backupText);
    updateBackupStatus("คัดลอก Backup JSON เรียบร้อยแล้ว");
  } catch {
    updateBackupStatus("ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาใช้ปุ่ม Export Backup แทน");
  }
}

function handleBackupFileSelection(event) {
  const file = event.target.files?.[0];
  pendingBackupImport = null;
  toggleImportButtons(false);

  if (!file) {
    renderBackupPreviewMessage("ยังไม่ได้เลือกไฟล์สำรองข้อมูล");
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const validation = validateBackupText(String(reader.result || ""));

    if (!validation.valid) {
      renderBackupPreviewMessage("ไฟล์สำรองข้อมูลไม่ถูกต้อง หรือไม่ใช่ไฟล์ของ FitCalc Thai", true);
      updateBackupStatus(validation.message);
      return;
    }

    pendingBackupImport = validation.backup;
    renderBackupImportPreview(validation.backup);
    toggleImportButtons(true);
    updateBackupStatus("ตรวจพบไฟล์สำรองข้อมูล กรุณาตรวจ preview ก่อนนำเข้า");
  });
  reader.addEventListener("error", () => {
    renderBackupPreviewMessage("อ่านไฟล์สำรองข้อมูลไม่สำเร็จ", true);
    updateBackupStatus("อ่านไฟล์สำรองข้อมูลไม่สำเร็จ");
  });
  reader.readAsText(file);
}

function validateBackupText(text) {
  let backup;

  try {
    backup = JSON.parse(text);
  } catch {
    return { valid: false, message: "ไฟล์ JSON ไม่ถูกต้อง" };
  }

  if (!backup || typeof backup !== "object" || Array.isArray(backup) || !backup.data || typeof backup.data !== "object" || Array.isArray(backup.data)) {
    return { valid: false, message: "ไม่พบ data object ในไฟล์ backup" };
  }

  const fitCalcKeys = Object.keys(backup.data).filter((key) => key.startsWith("fitcalc-"));
  const looksLikeFitCalc = backup.app === "FitCalc Thai" || fitCalcKeys.length > 0;

  if (!looksLikeFitCalc || fitCalcKeys.length === 0) {
    return { valid: false, message: "ไม่พบข้อมูล FitCalc Thai ในไฟล์ backup" };
  }

  return {
    valid: true,
    backup: {
      app: backup.app || "FitCalc Thai",
      backupVersion: String(backup.backupVersion || "unknown"),
      exportedAt: backup.exportedAt || "",
      source: backup.source || "localStorage",
      data: sanitizeBackupData(backup.data),
      metadata: backup.metadata || {},
    },
  };
}

function sanitizeBackupData(data) {
  const safeData = {};

  Object.entries(data || {}).forEach(([key, value]) => {
    if (String(key).startsWith("fitcalc-")) {
      safeData[key] = value;
    }
  });

  return safeData;
}

function renderBackupImportPreview(backup) {
  const preview = getElement("backupImportPreview");
  const counts = getBackupPreviewCounts(backup.data);
  const keys = Object.keys(backup.data).sort();
  const missingKeys = FITCALC_KNOWN_STORAGE_KEYS.filter((key) => !keys.includes(key));
  const existingKeys = keys.filter((key) => localStorage.getItem(key) !== null);
  const warnings = [
    ...missingKeys.map((key) => `ไม่พบ key ในไฟล์: ${key}`),
    ...(existingKeys.length > 0 ? [`มีข้อมูลในเครื่องอยู่แล้ว ${existingKeys.length} keys`] : []),
  ];

  preview.innerHTML = `
    <div class="backup-preview-grid">
      ${createDashboardMetric("Exported", backup.exportedAt ? formatBackupDateTime(backup.exportedAt) : "ไม่ระบุ")}
      ${createDashboardMetric("Version", backup.backupVersion)}
      ${createDashboardMetric("Keys found", `${keys.length}`)}
      ${createDashboardMetric("Records", `${countBackupRecords(backup.data)}`)}
      ${createDashboardMetric("Weight records", `${counts.weightRecords}`)}
      ${createDashboardMetric("Body measurements", `${counts.measurementRecords}`)}
      ${createDashboardMetric("Workout records", `${counts.workoutRecords}`)}
      ${createDashboardMetric("Templates", `${counts.templates}`)}
      ${createDashboardMetric("Custom exercises", `${counts.customExercises}`)}
      ${createDashboardMetric("Goals", `${counts.goals}`)}
      ${createDashboardMetric("Achievements", `${counts.achievements}`)}
      ${createDashboardMetric("Profile", counts.profile ? "มีข้อมูล" : "ไม่มีข้อมูล")}
      ${createDashboardMetric("Settings", counts.settings ? "มีข้อมูล" : "ไม่มีข้อมูล")}
    </div>
    ${warnings.length > 0 ? `<ul class="backup-warning-list">${warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>` : '<p class="workout-status">ไฟล์ backup พร้อมนำเข้า</p>'}
  `;
}

function renderBackupPreviewMessage(message, isError = false) {
  const preview = getElement("backupImportPreview");
  if (preview) {
    preview.innerHTML = `<p class="${isError ? "backup-error" : "empty-state"}">${escapeHtml(message)}</p>`;
  }
}

function toggleImportButtons(enabled) {
  const mergeButton = getElement("mergeImportButton");
  const replaceButton = getElement("replaceImportButton");

  if (mergeButton) mergeButton.disabled = !enabled;
  if (replaceButton) replaceButton.disabled = !enabled;
}

function importPendingBackup(mode) {
  if (!pendingBackupImport) {
    updateBackupStatus("กรุณาเลือกไฟล์ backup ก่อนนำเข้า");
    return;
  }

  if (mode === "replace" && !window.confirm("การแทนที่ข้อมูลจะลบข้อมูล FitCalc Thai ปัจจุบันและใช้ข้อมูลจากไฟล์สำรองแทน ต้องการดำเนินการต่อหรือไม่?")) {
    return;
  }

  const result = mode === "replace"
    ? replaceBackupData(pendingBackupImport.data)
    : mergeBackupData(pendingBackupImport.data);

  updateBackupStatus(`นำเข้าข้อมูลเรียบร้อยแล้ว | Mode: ${mode === "replace" ? "Replace" : "Merge"} | ${result.keysImported} keys | เพิ่ม ${result.added} | อัปเดต ${result.updated} | ข้าม ${result.skipped}`);
  renderBackupImportResult(result, mode);
  pendingBackupImport = null;
  toggleImportButtons(false);
  const fileInput = getElement("importBackupFile");
  if (fileInput) fileInput.value = "";
  refreshAfterBackupChange();
  trackAnalyticsEvent("backup_imported", {
    mode,
    keys_imported: result.keysImported,
    records_added: result.added,
    records_updated: result.updated,
    records_skipped: result.skipped,
  });
}

function replaceBackupData(data) {
  const result = createImportResult();

  Object.entries(data).forEach(([key, value]) => {
    if (!key.startsWith("fitcalc-")) {
      result.skipped += 1;
      return;
    }

    writeFitCalcStorageValue(key, value);
    result.keysImported += 1;
    result.updated += countBackupValueRecords(value);
  });

  return result;
}

function writeFitCalcStorageValue(key, value) {
  if (key === LAST_BACKUP_EXPORT_KEY && typeof value === "string") {
    localStorage.setItem(key, value);
    return;
  }

  if (key === WEEKLY_WORKOUT_GOAL_KEY && (typeof value === "number" || typeof value === "string")) {
    localStorage.setItem(key, String(value));
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

function mergeBackupData(data) {
  const result = createImportResult();

  Object.entries(data).forEach(([key, importedValue]) => {
    if (!key.startsWith("fitcalc-")) {
      result.skipped += 1;
      return;
    }

    const existingValue = readDashboardValue(key);
    const mergeResult = mergeStorageValueByKey(key, existingValue, importedValue);

    if (mergeResult.shouldWrite) {
      writeFitCalcStorageValue(key, mergeResult.value);
      result.keysImported += 1;
    }

    result.added += mergeResult.added;
    result.updated += mergeResult.updated;
    result.skipped += mergeResult.skipped;
    result.warnings.push(...mergeResult.warnings);
  });

  return result;
}

function mergeStorageValueByKey(key, existingValue, importedValue) {
  if (key === WEIGHT_HISTORY_KEY) return mergeRecordsByDate(existingValue, importedValue, normalizeDashboardWeightEntry, sortWeightHistory);
  if (key === BODY_MEASUREMENT_KEY) return mergeRecordsByDate(existingValue, importedValue, normalizeBodyMeasurementRecord, sortBodyMeasurements);
  if (key === WORKOUT_HISTORY_KEY) return mergeWorkoutBackupRecords(existingValue, importedValue);
  if (key === WORKOUT_TEMPLATE_KEY) return mergeWorkoutTemplateBackup(existingValue, importedValue);
  if (key === CUSTOM_EXERCISE_KEY) return mergeCustomExerciseBackup(existingValue, importedValue);
  if (key === GOALS_KEY) return mergeGoalBackup(existingValue, importedValue);
  if (key === ACHIEVEMENTS_KEY) return mergeAchievementBackup(existingValue, importedValue);
  if (key === USER_PROFILE_KEY) return mergeSingleObjectByUpdatedAt(existingValue, importedValue, normalizeUserProfile);
  if (key === APP_SETTINGS_KEY) return mergeSingleObjectByUpdatedAt(existingValue, importedValue, normalizeAppSettings);
  if (key === WEEKLY_WORKOUT_GOAL_KEY || key === LAST_BACKUP_EXPORT_KEY) {
    return existingValue === null || existingValue === undefined
      ? { value: importedValue, shouldWrite: true, added: importedValue ? 1 : 0, updated: 0, skipped: 0, warnings: [] }
      : { value: existingValue, shouldWrite: false, added: 0, updated: 0, skipped: importedValue ? 1 : 0, warnings: [] };
  }

  return mergeUnknownFitCalcValue(existingValue, importedValue);
}

function mergeRecordsByDate(existingValue, importedValue, normalizer, sorter) {
  const existingRecords = Array.isArray(existingValue) ? existingValue.map(normalizer).filter(Boolean) : [];
  const importedRecords = Array.isArray(importedValue) ? importedValue.map(normalizer).filter(Boolean) : [];
  const recordsByDate = new Map(existingRecords.map((record) => [record.date, record]));
  let added = 0;
  let updated = 0;
  let skipped = 0;

  importedRecords.forEach((record) => {
    const existing = recordsByDate.get(record.date);

    if (!existing) {
      recordsByDate.set(record.date, record);
      added += 1;
      return;
    }

    if (isImportedRecordNewer(existing, record)) {
      recordsByDate.set(record.date, { ...existing, ...record });
      updated += 1;
    } else {
      skipped += 1;
    }
  });

  return { value: sorter([...recordsByDate.values()]), shouldWrite: added + updated > 0, added, updated, skipped, warnings: [] };
}

function mergeWorkoutBackupRecords(existingValue, importedValue) {
  const existingRecords = Array.isArray(existingValue) ? existingValue.map(normalizeDashboardWorkoutEntry).filter(Boolean) : [];
  const importedRecords = Array.isArray(importedValue) ? importedValue.map(normalizeDashboardWorkoutEntry).filter(Boolean) : [];
  const recordsByKey = new Map(existingRecords.map((record) => [getWorkoutMergeKey(record), record]));
  let added = 0;
  let updated = 0;
  let skipped = 0;

  importedRecords.forEach((record) => {
    const key = getWorkoutMergeKey(record);
    const existing = recordsByKey.get(key);

    if (!existing) {
      recordsByKey.set(key, record);
      added += 1;
    } else if (isImportedRecordNewer(existing, record)) {
      recordsByKey.set(key, { ...existing, ...record });
      updated += 1;
    } else {
      skipped += 1;
    }
  });

  return { value: sortWorkoutHistory([...recordsByKey.values()]), shouldWrite: added + updated > 0, added, updated, skipped, warnings: [] };
}

function mergeWorkoutTemplateBackup(existingValue, importedValue) {
  const existing = normalizeWorkoutTemplateStore(existingValue || {});
  const imported = normalizeWorkoutTemplateStore(importedValue || {});
  const templatesById = new Map(existing.customTemplates.map((template) => [template.id, template]));
  let added = 0;
  let updated = 0;
  let skipped = 0;

  imported.customTemplates.forEach((template) => {
    const current = templatesById.get(template.id);

    if (!current) {
      templatesById.set(template.id, template);
      added += 1;
    } else if (isImportedRecordNewer(current, template)) {
      templatesById.set(template.id, { ...current, ...template });
      updated += 1;
    } else {
      skipped += 1;
    }
  });

  const favoriteTemplateIds = [...new Set([...existing.favoriteTemplateIds, ...imported.favoriteTemplateIds])];
  return {
    value: { customTemplates: [...templatesById.values()], favoriteTemplateIds },
    shouldWrite: added + updated > 0 || favoriteTemplateIds.length !== existing.favoriteTemplateIds.length,
    added,
    updated,
    skipped,
    warnings: [],
  };
}

function mergeCustomExerciseBackup(existingValue, importedValue) {
  const existing = normalizeCustomExercises(Array.isArray(existingValue) ? existingValue : []);
  const imported = normalizeCustomExercises(Array.isArray(importedValue) ? importedValue : []);
  const recordsByKey = new Map(existing.map((exercise) => [exercise.id || normalizeTextKey(exercise.name), exercise]));
  let added = 0;
  let updated = 0;
  let skipped = 0;

  imported.forEach((exercise) => {
    const key = exercise.id || normalizeTextKey(exercise.name);
    const nameKey = normalizeTextKey(exercise.name);
    const existingByName = [...recordsByKey.values()].find((item) => normalizeTextKey(item.name) === nameKey);
    const current = recordsByKey.get(key) || existingByName;

    if (!current) {
      recordsByKey.set(key, exercise);
      added += 1;
    } else if (isImportedRecordNewer(current, exercise)) {
      recordsByKey.set(current.id || key, { ...current, ...exercise });
      updated += 1;
    } else {
      skipped += 1;
    }
  });

  return { value: [...recordsByKey.values()], shouldWrite: added + updated > 0, added, updated, skipped, warnings: [] };
}

function mergeGoalBackup(existingValue, importedValue) {
  const existing = Array.isArray(existingValue) ? existingValue.map(normalizeGoalRecord).filter(Boolean) : [];
  const imported = Array.isArray(importedValue) ? importedValue.map(normalizeGoalRecord).filter(Boolean) : [];
  const goalsById = new Map(existing.map((goal) => [goal.id, goal]));
  let added = 0;
  let updated = 0;
  let skipped = 0;

  imported.forEach((goal) => {
    const current = goalsById.get(goal.id);

    if (!current) {
      goalsById.set(goal.id, goal);
      added += 1;
    } else if (isImportedRecordNewer(current, goal)) {
      goalsById.set(goal.id, { ...current, ...goal });
      updated += 1;
    } else {
      skipped += 1;
    }
  });

  return { value: sortGoals([...goalsById.values()]), shouldWrite: added + updated > 0, added, updated, skipped, warnings: [] };
}

function mergeSingleObjectByUpdatedAt(existingValue, importedValue, normalizer) {
  const existing = normalizer(existingValue);
  const imported = normalizer(importedValue);

  if (!imported) {
    return { value: existingValue, shouldWrite: false, added: 0, updated: 0, skipped: 1, warnings: [] };
  }

  if (!existing) {
    return { value: imported, shouldWrite: true, added: 1, updated: 0, skipped: 0, warnings: [] };
  }

  if (isImportedRecordNewer(existing, imported)) {
    return { value: imported, shouldWrite: true, added: 0, updated: 1, skipped: 0, warnings: [] };
  }

  return { value: existing, shouldWrite: false, added: 0, updated: 0, skipped: 1, warnings: [] };
}

function mergeAchievementBackup(existingValue, importedValue) {
  const existing = normalizeAchievementBackup(existingValue);
  const imported = normalizeAchievementBackup(importedValue);
  const unlocked = { ...existing.unlocked };
  let added = 0;
  let updated = 0;

  Object.values(imported.unlocked).forEach((achievement) => {
    const current = unlocked[achievement.id];

    if (!current) {
      unlocked[achievement.id] = achievement;
      added += 1;
    } else if (new Date(achievement.unlockedAt).getTime() < new Date(current.unlockedAt).getTime()) {
      unlocked[achievement.id] = achievement;
      updated += 1;
    }
  });

  return {
    value: {
      unlocked,
      bestWorkoutStreak: Math.max(existing.bestWorkoutStreak, imported.bestWorkoutStreak),
      bestWeightStreak: Math.max(existing.bestWeightStreak, imported.bestWeightStreak),
      lastUpdated: new Date().toISOString(),
    },
    shouldWrite: added + updated > 0 || imported.bestWorkoutStreak > existing.bestWorkoutStreak || imported.bestWeightStreak > existing.bestWeightStreak,
    added,
    updated,
    skipped: Math.max(Object.keys(imported.unlocked).length - added - updated, 0),
    warnings: [],
  };
}

function mergeUnknownFitCalcValue(existingValue, importedValue) {
  if (existingValue === null || existingValue === undefined) {
    return { value: importedValue, shouldWrite: true, added: countBackupValueRecords(importedValue), updated: 0, skipped: 0, warnings: [] };
  }

  return { value: existingValue, shouldWrite: false, added: 0, updated: 0, skipped: countBackupValueRecords(importedValue), warnings: [`ข้าม key ที่ไม่รู้จักเพราะมีข้อมูลเดิมอยู่แล้ว`] };
}

function normalizeAchievementBackup(value) {
  const state = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const unlocked = {};

  Object.values(state.unlocked || {}).forEach((item) => {
    const id = String(item?.id || "").trim();
    const date = item?.unlockedAt ? new Date(item.unlockedAt) : null;

    if (id && date && Number.isFinite(date.getTime())) {
      unlocked[id] = { id, unlockedAt: date.toISOString() };
    }
  });

  return {
    unlocked,
    bestWorkoutStreak: Math.max(parseInt(state.bestWorkoutStreak, 10) || 0, 0),
    bestWeightStreak: Math.max(parseInt(state.bestWeightStreak, 10) || 0, 0),
  };
}

function isImportedRecordNewer(existing, imported) {
  const existingTime = getRecordUpdatedTime(existing);
  const importedTime = getRecordUpdatedTime(imported);
  return importedTime > existingTime;
}

function getRecordUpdatedTime(record) {
  const dateText = String(record?.updatedAt || record?.createdAt || record?.date || "").slice(0, 10);
  return getDateTime(dateText);
}

function getWorkoutMergeKey(workout) {
  return workout.id || `${workout.date}-${normalizeTextKey(workout.name)}`;
}

function normalizeTextKey(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "-");
}

function createImportResult() {
  return { keysImported: 0, added: 0, updated: 0, skipped: 0, warnings: [] };
}

function renderBackupImportResult(result, mode) {
  const preview = getElement("backupImportPreview");

  if (!preview) {
    return;
  }

  preview.innerHTML = `
    <div class="backup-result">
      <h3>นำเข้าข้อมูลเรียบร้อยแล้ว</h3>
      <div class="backup-preview-grid">
        ${createDashboardMetric("Mode", mode === "replace" ? "Replace" : "Merge")}
        ${createDashboardMetric("Keys imported", `${result.keysImported}`)}
        ${createDashboardMetric("Added", `${result.added}`)}
        ${createDashboardMetric("Updated", `${result.updated}`)}
        ${createDashboardMetric("Skipped", `${result.skipped}`)}
      </div>
      ${result.warnings.length > 0 ? `<ul class="backup-warning-list">${result.warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function getBackupSummary() {
  const backup = createBackupSummaryFromStorage();
  const lastExportRaw = localStorage.getItem(LAST_BACKUP_EXPORT_KEY);
  const lastExportDate = parseDisplayDate(String(lastExportRaw || "").slice(0, 10));

  return {
    ...backup,
    lastExportDate,
    lastExportText: lastExportDate ? formatBackupDateTime(lastExportRaw) : "ยังไม่เคย export",
    statusText: backup.totalKeys > 0 ? "พร้อมสำรองข้อมูล" : "ยังไม่มีข้อมูล FitCalc",
  };
}

function createBackupSummaryFromStorage() {
  const data = {};
  const keys = getFitCalcStorageKeys().filter((key) => localStorage.getItem(key) !== null);

  keys.forEach((key) => {
    data[key] = readStorageValueForBackup(key);
  });

  return {
    totalKeys: keys.length,
    totalRecords: countBackupRecords(data),
  };
}

function renderBackupSectionSummary() {
  const grid = getElement("backupSummaryGrid");

  if (!grid) {
    return;
  }

  const summary = getBackupSummary();

  grid.innerHTML = `
    ${createDashboardMetric("Backup status", summary.statusText)}
    ${createDashboardMetric("FitCalc keys", `${summary.totalKeys} keys`)}
    ${createDashboardMetric("Total data items", `${summary.totalRecords} records`)}
    ${createDashboardMetric("Last export", summary.lastExportText)}
  `;
}

function countBackupRecords(data) {
  return Object.values(data || {}).reduce((total, value) => total + countBackupValueRecords(value), 0);
}

function countBackupValueRecords(value) {
  if (Array.isArray(value)) return value.length;
  if (value && typeof value === "object") {
    if (value.__raw) return 1;
    if (Array.isArray(value.customTemplates)) return value.customTemplates.length;
    if (value.unlocked && typeof value.unlocked === "object") return Object.keys(value.unlocked).length;
    return Object.keys(value).length > 0 ? 1 : 0;
  }
  return value ? 1 : 0;
}

function getBackupPreviewCounts(data) {
  const templates = data[WORKOUT_TEMPLATE_KEY];
  const achievements = data[ACHIEVEMENTS_KEY];

  return {
    weightRecords: Array.isArray(data[WEIGHT_HISTORY_KEY]) ? data[WEIGHT_HISTORY_KEY].length : 0,
    measurementRecords: Array.isArray(data[BODY_MEASUREMENT_KEY]) ? data[BODY_MEASUREMENT_KEY].length : 0,
    workoutRecords: Array.isArray(data[WORKOUT_HISTORY_KEY]) ? data[WORKOUT_HISTORY_KEY].length : 0,
    templates: templates?.customTemplates?.length || 0,
    customExercises: Array.isArray(data[CUSTOM_EXERCISE_KEY]) ? data[CUSTOM_EXERCISE_KEY].length : 0,
    goals: Array.isArray(data[GOALS_KEY]) ? data[GOALS_KEY].length : 0,
    achievements: achievements?.unlocked ? Object.keys(achievements.unlocked).length : 0,
    profile: Boolean(data[USER_PROFILE_KEY] && typeof data[USER_PROFILE_KEY] === "object" && !Array.isArray(data[USER_PROFILE_KEY]) && Object.keys(data[USER_PROFILE_KEY]).length > 0),
    settings: Boolean(data[APP_SETTINGS_KEY] && typeof data[APP_SETTINGS_KEY] === "object" && !Array.isArray(data[APP_SETTINGS_KEY]) && Object.keys(data[APP_SETTINGS_KEY]).length > 0),
  };
}

function formatBackupFileTimestamp(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${pad(date.getHours())}-${pad(date.getMinutes())}`;
}

function formatBackupDateTime(value) {
  const date = new Date(value);

  if (!Number.isFinite(date.getTime())) {
    return "ยังไม่เคย export";
  }

  return `${formatThaiDate(date.toISOString().slice(0, 10))} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function updateBackupStatus(message) {
  const status = getElement("backupStatusMessage");

  if (status) {
    status.textContent = message;
  }
}

function refreshAfterBackupChange() {
  initializeHomeDashboard();
  renderWeightHistory();
  renderBodyMeasurements();
  renderGoals();
  renderBackupSectionSummary();
}

function getTodayDisplayDate() {
  return formatDisplayDate(getTodayDateValue());
}

function parseDisplayDate(dateValue) {
  if (!dateValue) {
    return null;
  }

  const trimmedDate = String(dateValue).trim();

  if (isValidDateValue(trimmedDate)) {
    return trimmedDate;
  }

  const dateParts = trimmedDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!dateParts) {
    return null;
  }

  const [, firstPartText, secondPartText, yearText] = dateParts;
  let day = Number(firstPartText);
  let month = Number(secondPartText);
  const year = Number(yearText);

  if (month > 12 && day <= 12) {
    day = Number(secondPartText);
    month = Number(firstPartText);
  }

  const parsedDate = new Date(year, month - 1, day);

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getDate() !== day
  ) {
    return null;
  }

  return `${yearText}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatDisplayDate(dateValue) {
  const normalizedDate = parseDisplayDate(dateValue);

  if (!normalizedDate) {
    return "";
  }

  const [year, month, day] = normalizedDate.split("-");
  return `${day}/${month}/${year}`;
}

function getDateTime(dateValue) {
  const normalizedDate = parseDisplayDate(dateValue);
  return normalizedDate ? new Date(`${normalizedDate}T00:00:00`).getTime() : 0;
}

function isValidDateValue(dateValue) {
  const dateParts = String(dateValue).match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!dateParts) {
    return false;
  }

  const [, yearText, monthText, dayText] = dateParts;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const parsedDate = new Date(year, month - 1, day);

  return (
    parsedDate.getFullYear() === year &&
    parsedDate.getMonth() === month - 1 &&
    parsedDate.getDate() === day
  );
}

function initializeWorkoutTracker() {
  const workoutForm = getElement("workoutForm");
  const exerciseList = getElement("workoutExerciseList");
  const addExerciseButton = getElement("addExerciseButton");

  if (!workoutForm || !exerciseList || !addExerciseButton) {
    return;
  }

  getElement("workoutDate").value = getTodayDateValue();
  addExerciseButton.addEventListener("click", () => addWorkoutExerciseRow());
  exerciseList.addEventListener("click", handleWorkoutExerciseListClick);
  exerciseList.addEventListener("change", handleWorkoutExerciseListChange);
  workoutForm.addEventListener("submit", handleWorkoutSubmit);
  getElement("workoutName").addEventListener("change", toggleCustomWorkoutName);
  initializeWeeklyWorkoutGoal();
  initializeExerciseDatabase();
  initializeWorkoutTemplates();
  addWorkoutExerciseRow();
  renderWorkoutHistory();
  renderProgressDashboard();
}

function initializeWeeklyWorkoutGoal() {
  const weeklyGoalSelect = getElement("weeklyWorkoutGoal");

  if (!weeklyGoalSelect) {
    return;
  }

  weeklyGoalSelect.value = String(getWeeklyWorkoutGoal());
  weeklyGoalSelect.addEventListener("change", () => {
    saveWeeklyWorkoutGoal(Number(weeklyGoalSelect.value));
    renderProgressDashboard();
  });
}

function initializeExerciseDatabase() {
  const exerciseDatabaseList = getElement("exerciseDatabaseList");
  const customExerciseForm = getElement("customExerciseForm");
  const exerciseSearch = getElement("exerciseSearch");
  const filterIds = ["exerciseMuscleFilter", "exerciseEquipmentFilter", "exerciseCategoryFilter"];
  const cancelCustomExerciseButton = getElement("cancelCustomExerciseEditButton");
  const resetExerciseSearchButton = getElement("resetExerciseSearchButton");

  if (!exerciseDatabaseList || !customExerciseForm) {
    return;
  }

  populateExerciseFilters();
  exerciseDatabaseList.addEventListener("click", handleExerciseDatabaseClick);
  customExerciseForm.addEventListener("submit", handleCustomExerciseSubmit);
  exerciseSearch?.addEventListener("input", renderExerciseDatabase);
  filterIds.forEach((filterId) => getElement(filterId)?.addEventListener("change", renderExerciseDatabase));
  cancelCustomExerciseButton?.addEventListener("click", resetCustomExerciseForm);
  resetExerciseSearchButton?.addEventListener("click", resetExerciseSearchAndFilters);
  renderExerciseDatabase();
}

function populateExerciseFilters() {
  populateFilterOptions("exerciseMuscleFilter", getUniqueExerciseFieldValues("muscleGroup"));
  populateFilterOptions("exerciseEquipmentFilter", getUniqueExerciseFieldValues("equipment"));
  populateFilterOptions("exerciseCategoryFilter", getUniqueExerciseFieldValues("category"));
}

function populateFilterOptions(filterId, values) {
  const filter = getElement(filterId);

  if (!filter) {
    return;
  }

  const currentValue = filter.value;
  filter.innerHTML = '<option value="">All</option>' + values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
  filter.value = values.includes(currentValue) ? currentValue : "";
}

function getUniqueExerciseFieldValues(fieldName) {
  return Array.from(new Set(getAllExercises().map((exercise) => exercise[fieldName]).filter(Boolean))).sort();
}

function handleExerciseDatabaseClick(event) {
  const actionButton = event.target.closest("[data-exercise-action]");

  if (!actionButton) {
    return;
  }

  const exerciseId = actionButton.dataset.exerciseId;
  const exercise = getAllExercises().find((item) => item.id === exerciseId);

  if (!exercise) {
    return;
  }

  const action = actionButton.dataset.exerciseAction;

  if (action === "add-workout") {
    addExerciseToWorkout(exercise.name);
  } else if (action === "add-template") {
    addTemplateExerciseRow(exercise.name);
    updateTemplateStatus(`Added ${exercise.name} to template editor.`);
  } else if (action === "edit") {
    loadCustomExerciseIntoEditor(exercise);
  } else if (action === "delete") {
    deleteCustomExercise(exercise);
  }
}

function renderExerciseDatabase() {
  const exerciseDatabaseList = getElement("exerciseDatabaseList");

  if (!exerciseDatabaseList) {
    return;
  }

  if (!hasActiveExerciseSearch()) {
    exerciseDatabaseList.innerHTML = '<p class="empty-state">พิมพ์ชื่อท่าออกกำลังกาย หรือเลือกตัวกรอง เพื่อค้นหาท่า</p>';
    return;
  }

  const exercises = filterExercises(getAllExercises());

  if (exercises.length === 0) {
    exerciseDatabaseList.innerHTML = '<p class="empty-state">No exercises found.</p>';
    return;
  }

  exerciseDatabaseList.innerHTML = exercises.map(createExerciseDatabaseCard).join("");
}

function hasActiveExerciseSearch() {
  return Boolean(
    (getElement("exerciseSearch")?.value || "").trim() ||
    getElement("exerciseMuscleFilter")?.value ||
    getElement("exerciseEquipmentFilter")?.value ||
    getElement("exerciseCategoryFilter")?.value
  );
}

function resetExerciseSearchAndFilters() {
  const exerciseSearch = getElement("exerciseSearch");

  if (exerciseSearch) {
    exerciseSearch.value = "";
  }

  ["exerciseMuscleFilter", "exerciseEquipmentFilter", "exerciseCategoryFilter"].forEach((filterId) => {
    const filter = getElement(filterId);

    if (filter) {
      filter.value = "";
    }
  });

  renderExerciseDatabase();
}

function filterExercises(exercises) {
  const searchText = (getElement("exerciseSearch")?.value || "").trim().toLowerCase();
  const muscleGroup = getElement("exerciseMuscleFilter")?.value || "";
  const equipment = getElement("exerciseEquipmentFilter")?.value || "";
  const category = getElement("exerciseCategoryFilter")?.value || "";

  return exercises.filter((exercise) => {
    const matchesSearch = !searchText || exercise.name.toLowerCase().includes(searchText);
    const matchesMuscle = !muscleGroup || exercise.muscleGroup === muscleGroup;
    const matchesEquipment = !equipment || exercise.equipment === equipment;
    const matchesCategory = !category || exercise.category === category;

    return matchesSearch && matchesMuscle && matchesEquipment && matchesCategory;
  });
}

function createExerciseDatabaseCard(exercise) {
  const customActions = exercise.isBuiltIn
    ? ""
    : `
      <button class="secondary-button compact-button" type="button" data-exercise-action="edit" data-exercise-id="${escapeHtml(exercise.id)}">Edit</button>
      <button class="danger-button compact-button" type="button" data-exercise-action="delete" data-exercise-id="${escapeHtml(exercise.id)}">Delete</button>
    `;

  return `
    <article class="exercise-database-card">
      <div class="exercise-database-header">
        <div>
          <span>${exercise.isBuiltIn ? "Built-in" : "Custom"}</span>
          <h3>${escapeHtml(exercise.name)}</h3>
        </div>
        <strong>${escapeHtml(exercise.difficulty)}</strong>
      </div>
      <dl class="exercise-meta-grid">
        <div><dt>Main</dt><dd>${escapeHtml(exercise.muscleGroup)}</dd></div>
        <div><dt>Secondary</dt><dd>${escapeHtml(exercise.secondaryMuscles.join(", ") || "-")}</dd></div>
        <div><dt>Equipment</dt><dd>${escapeHtml(exercise.equipment)}</dd></div>
        <div><dt>Category</dt><dd>${escapeHtml(exercise.category)}</dd></div>
      </dl>
      <p>${escapeHtml(exercise.notes)}</p>
      <div class="exercise-database-actions">
        <button type="button" data-exercise-action="add-workout" data-exercise-id="${escapeHtml(exercise.id)}">Add to Workout</button>
        <button class="secondary-button compact-button" type="button" data-exercise-action="add-template" data-exercise-id="${escapeHtml(exercise.id)}">Add to Template</button>
        ${customActions}
      </div>
    </article>
  `;
}

function addExerciseToWorkout(exerciseName) {
  addWorkoutExerciseRow({ name: exerciseName });
  updateWorkoutStatus(`Added ${exerciseName} to workout.`);
  scrollToHashTarget("#workoutTrackerSection", false);
}

function handleCustomExerciseSubmit(event) {
  event.preventDefault();

  const exercise = collectCustomExerciseForm();

  if (!exercise) {
    updateExerciseDatabaseStatus(ERROR_MESSAGE);
    return;
  }

  const customExercises = getCustomExercises();
  const editingExerciseId = getElement("editingExerciseId").value;
  const existingExerciseIndex = customExercises.findIndex((item) => item.id === editingExerciseId);
  const savedExercise = {
    ...exercise,
    id: existingExerciseIndex >= 0 ? editingExerciseId : createExerciseId(exercise.name),
    isBuiltIn: false,
  };

  if (existingExerciseIndex >= 0) {
    customExercises[existingExerciseIndex] = savedExercise;
  } else {
    customExercises.push(savedExercise);
  }

  saveCustomExercises(customExercises);
  resetCustomExerciseForm();
  refreshExerciseDependentUi();
  updateExerciseDatabaseStatus(`Saved exercise: ${savedExercise.name}`);
}

function collectCustomExerciseForm() {
  const name = getElement("customExerciseName").value.trim();
  const muscleGroup = getElement("customExerciseMuscle").value.trim();
  const secondaryMuscles = getElement("customExerciseSecondary").value
    .split(",")
    .map((muscle) => muscle.trim())
    .filter(Boolean);
  const equipment = getElement("customExerciseEquipment").value.trim();
  const category = getElement("customExerciseCategory").value.trim();
  const difficulty = getElement("customExerciseDifficulty").value.trim();
  const notes = getElement("customExerciseNotes").value.trim();

  if (!name || !muscleGroup || !equipment || !category || !difficulty || !notes) {
    return null;
  }

  return {
    name,
    muscleGroup,
    secondaryMuscles,
    equipment,
    category,
    difficulty,
    notes,
  };
}

function loadCustomExerciseIntoEditor(exercise) {
  if (exercise.isBuiltIn) {
    updateExerciseDatabaseStatus("Built-in exercises cannot be edited.");
    return;
  }

  getElement("editingExerciseId").value = exercise.id;
  getElement("customExerciseName").value = exercise.name;
  getElement("customExerciseMuscle").value = exercise.muscleGroup;
  getElement("customExerciseSecondary").value = exercise.secondaryMuscles.join(", ");
  getElement("customExerciseEquipment").value = exercise.equipment;
  getElement("customExerciseCategory").value = exercise.category;
  getElement("customExerciseDifficulty").value = exercise.difficulty;
  getElement("customExerciseNotes").value = exercise.notes;
  getElement("customExerciseEditorTitle").textContent = "Edit Custom Exercise";
  updateExerciseDatabaseStatus(`Editing exercise: ${exercise.name}`);
  getElement("customExerciseForm").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function deleteCustomExercise(exercise) {
  if (exercise.isBuiltIn) {
    updateExerciseDatabaseStatus("Built-in exercises cannot be deleted.");
    return;
  }

  saveCustomExercises(getCustomExercises().filter((item) => item.id !== exercise.id));
  refreshExerciseDependentUi();
  updateExerciseDatabaseStatus(`Deleted exercise: ${exercise.name}`);
}

function resetCustomExerciseForm() {
  getElement("customExerciseForm").reset();
  getElement("editingExerciseId").value = "";
  getElement("customExerciseEditorTitle").textContent = "Create Custom Exercise";
}

function refreshExerciseDependentUi() {
  const templateDraft = getTemplateEditorDraft();
  populateExerciseFilters();
  renderExerciseDatabase();
  renderWorkoutTemplates();
  refreshExerciseSelectOptions(".exercise-name-input");
  refreshExerciseSelectOptions(".template-exercise-name-input");
  restoreTemplateEditorDraft(templateDraft);
}

function refreshExerciseSelectOptions(selector) {
  document.querySelectorAll(selector).forEach((select) => {
    const currentValue = select.value;
    select.innerHTML = createExerciseOptionsHtml(currentValue);
    select.value = currentValue && isKnownExerciseName(currentValue) ? currentValue : select.value;
  });
}

function getTemplateEditorDraft() {
  const templateForm = getElement("templateForm");
  const templateExerciseList = getElement("templateExerciseList");

  if (!templateForm || !templateExerciseList) {
    return null;
  }

  return {
    templateName: getElement("templateName")?.value || "",
    editingTemplateId: getElement("editingTemplateId")?.value || "",
    editorTitle: getElement("templateEditorTitle")?.textContent || "Create Custom Template",
    status: getElement("templateStatus")?.textContent || "",
    exercises: getTemplateExerciseDraftRows(),
  };
}

function getTemplateExerciseDraftRows() {
  return Array.from(document.querySelectorAll(".template-exercise-row")).map((row) => {
    const selectedName = row.querySelector(".template-exercise-name-input")?.value || "";
    const customName = row.querySelector(".template-custom-exercise-input")?.value.trim() || "";

    return selectedName === "Other" ? customName : selectedName;
  });
}

function restoreTemplateEditorDraft(draft) {
  const templateExerciseList = getElement("templateExerciseList");

  if (!draft || !templateExerciseList) {
    return;
  }

  getElement("templateName").value = draft.templateName;
  getElement("editingTemplateId").value = draft.editingTemplateId;
  getElement("templateEditorTitle").textContent = draft.editorTitle;
  templateExerciseList.innerHTML = "";

  if (draft.exercises.length > 0) {
    draft.exercises.forEach((exerciseName) => addTemplateExerciseRow(exerciseName || ""));
  } else {
    addTemplateExerciseRow();
  }

  if (draft.status) {
    updateTemplateStatus(draft.status);
  }
}

function updateExerciseDatabaseStatus(message) {
  const status = getElement("exerciseDatabaseStatus");

  if (status) {
    status.textContent = message;
  }
}

function initializeWorkoutTemplates() {
  const templateList = getElement("workoutTemplateList");
  const templateForm = getElement("templateForm");
  const templateExerciseList = getElement("templateExerciseList");
  const addTemplateExerciseButton = getElement("addTemplateExerciseButton");
  const cancelTemplateEditButton = getElement("cancelTemplateEditButton");

  if (!templateList || !templateForm || !templateExerciseList || !addTemplateExerciseButton) {
    return;
  }

  templateList.addEventListener("click", handleTemplateListClick);
  templateForm.addEventListener("submit", handleTemplateFormSubmit);
  templateExerciseList.addEventListener("click", handleTemplateExerciseListClick);
  templateExerciseList.addEventListener("change", handleTemplateExerciseListChange);
  addTemplateExerciseButton.addEventListener("click", () => addTemplateExerciseRow());
  cancelTemplateEditButton?.addEventListener("click", resetTemplateForm);

  addTemplateExerciseRow();
  renderWorkoutTemplates();
}

function handleTemplateListClick(event) {
  const actionButton = event.target.closest("[data-template-action]");

  if (!actionButton) {
    return;
  }

  const templateId = actionButton.dataset.templateId;
  const action = actionButton.dataset.templateAction;
  const template = getWorkoutTemplates().find((item) => item.id === templateId);

  if (!template) {
    return;
  }

  if (action === "start") {
    startWorkoutFromTemplate(template);
  } else if (action === "favorite") {
    toggleTemplateFavorite(template.id);
  } else if (action === "edit") {
    loadTemplateIntoEditor(template);
  } else if (action === "duplicate") {
    duplicateWorkoutTemplate(template);
  } else if (action === "delete") {
    deleteWorkoutTemplate(template);
  }
}

function handleTemplateFormSubmit(event) {
  event.preventDefault();

  const templateName = getElement("templateName").value.trim();
  const exercises = collectTemplateExercises();

  if (!templateName || exercises.length === 0) {
    updateTemplateStatus(ERROR_MESSAGE);
    return;
  }

  const templateStore = getWorkoutTemplateStore();
  const editingTemplateId = getElement("editingTemplateId").value;
  const existingTemplateIndex = templateStore.customTemplates.findIndex((template) => template.id === editingTemplateId);
  const template = {
    id: existingTemplateIndex >= 0 ? editingTemplateId : createTemplateId(),
    name: templateName,
    exercises,
    updatedAt: new Date().toISOString(),
  };

  if (existingTemplateIndex >= 0) {
    templateStore.customTemplates[existingTemplateIndex] = template;
  } else {
    templateStore.customTemplates.push(template);
  }

  saveWorkoutTemplateStore(templateStore);
  resetTemplateForm();
  renderWorkoutTemplates();
  updateTemplateStatus(`Saved template: ${templateName}`);
}

function handleTemplateExerciseListClick(event) {
  const button = event.target.closest("[data-template-exercise-action]");

  if (!button) {
    return;
  }

  const row = button.closest(".template-exercise-row");
  const action = button.dataset.templateExerciseAction;

  if (action === "remove") {
    removeTemplateExerciseRow(row);
  } else if (action === "up") {
    moveTemplateExerciseRow(row, "up");
  } else if (action === "down") {
    moveTemplateExerciseRow(row, "down");
  }
}

function handleTemplateExerciseListChange(event) {
  const exerciseSelect = event.target.closest(".template-exercise-name-input");

  if (!exerciseSelect) {
    return;
  }

  const currentRow = exerciseSelect.closest(".template-exercise-row");
  const customExerciseInput = currentRow.querySelector(".template-custom-exercise-input");
  const customExerciseField = customExerciseInput.closest("label");
  const shouldShowCustomInput = exerciseSelect.value === "Other";

  customExerciseField.classList.toggle("is-hidden", !shouldShowCustomInput);
  customExerciseInput.required = shouldShowCustomInput;

  if (!shouldShowCustomInput) {
    customExerciseInput.value = "";
  }
}

function renderWorkoutTemplates() {
  const templateList = getElement("workoutTemplateList");

  if (!templateList) {
    return;
  }

  templateList.innerHTML = getWorkoutTemplates().map(createWorkoutTemplateCard).join("");
}

function createWorkoutTemplateCard(template) {
  const favoriteLabel = template.favorite ? "Unfavorite" : "Favorite";
  const favoriteSymbol = template.favorite ? "★" : "☆";
  const typeLabel = template.builtIn ? "Built-in" : "Custom";
  const deleteButton = template.builtIn
    ? ""
    : `<button class="danger-button compact-button" type="button" data-template-action="delete" data-template-id="${escapeHtml(template.id)}">Delete</button>`;

  return `
    <article class="template-card ${template.favorite ? "is-favorite" : ""}">
      <div class="template-card-header">
        <div>
          <span>${typeLabel}</span>
          <h3>${escapeHtml(template.name)}</h3>
        </div>
        <button class="icon-button" type="button" aria-label="${favoriteLabel} ${escapeHtml(template.name)}" data-template-action="favorite" data-template-id="${escapeHtml(template.id)}">${favoriteSymbol}</button>
      </div>
      <ul class="template-exercise-preview">
        ${template.exercises.map((exercise) => `<li>${escapeHtml(exercise)}</li>`).join("")}
      </ul>
      <div class="template-actions">
        <button type="button" data-template-action="start" data-template-id="${escapeHtml(template.id)}">Start Workout</button>
        <button class="secondary-button compact-button" type="button" data-template-action="edit" data-template-id="${escapeHtml(template.id)}">Edit</button>
        <button class="secondary-button compact-button" type="button" data-template-action="duplicate" data-template-id="${escapeHtml(template.id)}">Duplicate</button>
        ${deleteButton}
      </div>
    </article>
  `;
}

function startWorkoutFromTemplate(template) {
  setWorkoutName(template.name);
  const exerciseList = getElement("workoutExerciseList");
  exerciseList.innerHTML = "";
  template.exercises.forEach((exerciseName) => {
    addWorkoutExerciseRow({ name: exerciseName });
  });
  updateWorkoutStatus(`Loaded template: ${template.name}. Add weight, reps, and sets.`);
  scrollToHashTarget("#workoutTrackerSection", false);
}

function setWorkoutName(workoutName) {
  const workoutNameSelect = getElement("workoutName");
  const customWorkoutName = getElement("customWorkoutName");

  if (WORKOUT_NAME_OPTIONS.includes(workoutName)) {
    workoutNameSelect.value = workoutName;
  } else {
    workoutNameSelect.value = "Other";
    customWorkoutName.value = workoutName;
  }

  toggleCustomWorkoutName();
}

function loadTemplateIntoEditor(template) {
  getElement("templateName").value = template.name;
  getElement("editingTemplateId").value = template.builtIn ? "" : template.id;
  const templateExerciseList = getElement("templateExerciseList");
  templateExerciseList.innerHTML = "";
  template.exercises.forEach((exerciseName) => addTemplateExerciseRow(exerciseName));
  getElement("templateEditorTitle").textContent = template.builtIn ? "Customize Built-in Template" : "Edit Template";
  updateTemplateStatus(template.builtIn ? "Built-in templates save as custom templates when edited." : `Editing template: ${template.name}`);
  getElement("templateForm").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function duplicateWorkoutTemplate(template) {
  const templateStore = getWorkoutTemplateStore();
  const duplicatedTemplate = {
    id: createTemplateId(),
    name: `${template.name} Copy`,
    exercises: [...template.exercises],
    updatedAt: new Date().toISOString(),
  };

  templateStore.customTemplates.push(duplicatedTemplate);
  saveWorkoutTemplateStore(templateStore);
  renderWorkoutTemplates();
  updateTemplateStatus(`Duplicated template: ${template.name}`);
}

function deleteWorkoutTemplate(template) {
  if (template.builtIn) {
    updateTemplateStatus("Built-in templates cannot be deleted.");
    return;
  }

  const templateStore = getWorkoutTemplateStore();
  templateStore.customTemplates = templateStore.customTemplates.filter((item) => item.id !== template.id);
  templateStore.favoriteTemplateIds = templateStore.favoriteTemplateIds.filter((id) => id !== template.id);
  saveWorkoutTemplateStore(templateStore);
  renderWorkoutTemplates();
  updateTemplateStatus(`Deleted template: ${template.name}`);
}

function toggleTemplateFavorite(templateId) {
  const templateStore = getWorkoutTemplateStore();
  const favoriteSet = new Set(templateStore.favoriteTemplateIds);

  if (favoriteSet.has(templateId)) {
    favoriteSet.delete(templateId);
  } else {
    favoriteSet.add(templateId);
  }

  templateStore.favoriteTemplateIds = Array.from(favoriteSet);
  saveWorkoutTemplateStore(templateStore);
  renderWorkoutTemplates();
}

function addTemplateExerciseRow(exerciseName = "") {
  const templateExerciseList = getElement("templateExerciseList");
  const rowId = `template-exercise-${Date.now()}-${templateExerciseList.children.length}`;
  const optionHtml = createExerciseOptionsHtml(exerciseName);
  const isCustomExercise = exerciseName && !isKnownExerciseName(exerciseName);

  templateExerciseList.insertAdjacentHTML(
    "beforeend",
    `
      <div class="template-exercise-row">
        <label>
          Exercise
          <select name="${rowId}-name" class="template-exercise-name-input" required>
            ${optionHtml}
          </select>
        </label>
        <label class="${isCustomExercise ? "" : "is-hidden"}">
          Custom Exercise
          <input type="text" name="${rowId}-custom-name" class="template-custom-exercise-input" autocomplete="off" placeholder="เช่น Hip Thrust" value="${isCustomExercise ? escapeHtml(exerciseName) : ""}" ${isCustomExercise ? "required" : ""}>
        </label>
        <div class="template-row-actions">
          <button class="secondary-button compact-button" type="button" data-template-exercise-action="up">Up</button>
          <button class="secondary-button compact-button" type="button" data-template-exercise-action="down">Down</button>
          <button class="danger-button compact-button" type="button" data-template-exercise-action="remove">Remove</button>
        </div>
      </div>
    `
  );
}

function removeTemplateExerciseRow(row) {
  const templateRows = document.querySelectorAll(".template-exercise-row");

  if (templateRows.length === 1) {
    row.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    row.querySelector("select").value = "";
    return;
  }

  row.remove();
}

function moveTemplateExerciseRow(row, direction) {
  if (direction === "up" && row.previousElementSibling) {
    row.parentElement.insertBefore(row, row.previousElementSibling);
  }

  if (direction === "down" && row.nextElementSibling) {
    row.parentElement.insertBefore(row.nextElementSibling, row);
  }
}

function collectTemplateExercises() {
  return Array.from(document.querySelectorAll(".template-exercise-row"))
    .map((row) => {
      const selectedName = row.querySelector(".template-exercise-name-input").value;
      const customName = row.querySelector(".template-custom-exercise-input").value.trim();
      return selectedName === "Other" ? customName : selectedName;
    })
    .filter(Boolean);
}

function resetTemplateForm() {
  const templateExerciseList = getElement("templateExerciseList");
  getElement("templateForm").reset();
  getElement("editingTemplateId").value = "";
  getElement("templateEditorTitle").textContent = "Create Custom Template";
  templateExerciseList.innerHTML = "";
  addTemplateExerciseRow();
}

function getWorkoutTemplates() {
  const templateStore = getWorkoutTemplateStore();
  const favoriteSet = new Set(templateStore.favoriteTemplateIds);
  const builtInTemplates = BUILT_IN_WORKOUT_TEMPLATES.map((template, index) => ({
    ...template,
    builtIn: true,
    favorite: favoriteSet.has(template.id),
    sortIndex: index,
  }));
  const customTemplates = templateStore.customTemplates.map((template, index) => ({
    ...template,
    builtIn: false,
    favorite: favoriteSet.has(template.id),
    sortIndex: BUILT_IN_WORKOUT_TEMPLATES.length + index,
  }));

  return [...builtInTemplates, ...customTemplates].sort((first, second) => {
    if (first.favorite !== second.favorite) {
      return first.favorite ? -1 : 1;
    }

    return first.sortIndex - second.sortIndex;
  });
}

function getWorkoutTemplateStore() {
  const savedTemplates = localStorage.getItem(WORKOUT_TEMPLATE_KEY);

  try {
    return normalizeWorkoutTemplateStore(savedTemplates ? JSON.parse(savedTemplates) : {});
  } catch {
    localStorage.removeItem(WORKOUT_TEMPLATE_KEY);
    return normalizeWorkoutTemplateStore({});
  }
}

function saveWorkoutTemplateStore(templateStore) {
  localStorage.setItem(WORKOUT_TEMPLATE_KEY, JSON.stringify(normalizeWorkoutTemplateStore(templateStore)));
}

function normalizeWorkoutTemplateStore(templateStore) {
  const rawCustomTemplates = Array.isArray(templateStore)
    ? templateStore
    : Array.isArray(templateStore.customTemplates)
      ? templateStore.customTemplates
      : [];
  const rawFavoriteTemplateIds = Array.isArray(templateStore.favoriteTemplateIds) ? templateStore.favoriteTemplateIds : [];
  const customTemplates = rawCustomTemplates
    .map((template) => {
      const name = String(template.name || "").trim();
      const exercises = Array.isArray(template.exercises)
        ? template.exercises.map((exercise) => String(exercise || "").trim()).filter(Boolean)
        : [];

      if (!name || exercises.length === 0) {
        return null;
      }

      return {
        id: template.id || createTemplateId(),
        name,
        exercises,
        updatedAt: template.updatedAt || new Date().toISOString(),
      };
    })
    .filter(Boolean);

  return {
    customTemplates,
    favoriteTemplateIds: rawFavoriteTemplateIds.map(String),
  };
}

function getAllExercises() {
  const customExercises = getCustomExercises();
  const knownNames = new Set([...BUILT_IN_EXERCISES, ...customExercises].map((exercise) => exercise.name));
  const legacyExercises = getLegacyExerciseNames()
    .filter((exerciseName) => !knownNames.has(exerciseName) && exerciseName !== "Other")
    .map((exerciseName) => createLegacyExercise(exerciseName));

  return [...BUILT_IN_EXERCISES, ...legacyExercises, ...customExercises];
}

function getCustomExercises() {
  const savedExercises = localStorage.getItem(CUSTOM_EXERCISE_KEY);

  try {
    return normalizeCustomExercises(savedExercises ? JSON.parse(savedExercises) : []);
  } catch {
    localStorage.removeItem(CUSTOM_EXERCISE_KEY);
    return [];
  }
}

function saveCustomExercises(exercises) {
  localStorage.setItem(CUSTOM_EXERCISE_KEY, JSON.stringify(normalizeCustomExercises(exercises)));
}

function normalizeCustomExercises(exercises) {
  if (!Array.isArray(exercises)) {
    return [];
  }

  return exercises
    .map((exercise) => {
      const name = String(exercise.name || "").trim();
      const muscleGroup = String(exercise.muscleGroup || "").trim();
      const equipment = String(exercise.equipment || "").trim();
      const category = String(exercise.category || "").trim();
      const difficulty = String(exercise.difficulty || "").trim();
      const notes = String(exercise.notes || "").trim();
      const secondaryMuscles = Array.isArray(exercise.secondaryMuscles)
        ? exercise.secondaryMuscles.map((muscle) => String(muscle || "").trim()).filter(Boolean)
        : String(exercise.secondaryMuscles || "")
          .split(",")
          .map((muscle) => muscle.trim())
          .filter(Boolean);

      if (!name || !muscleGroup || !equipment || !category || !difficulty || !notes) {
        return null;
      }

      return {
        id: exercise.id || createExerciseId(name),
        name,
        muscleGroup,
        secondaryMuscles,
        equipment,
        category,
        difficulty,
        notes,
        createdAt: exercise.createdAt || "",
        updatedAt: exercise.updatedAt || "",
        isBuiltIn: false,
      };
    })
    .filter(Boolean);
}

function getExerciseDropdownGroups() {
  const groups = {};

  getAllExercises().forEach((exercise) => {
    if (!groups[exercise.muscleGroup]) {
      groups[exercise.muscleGroup] = [];
    }

    if (!groups[exercise.muscleGroup].includes(exercise.name)) {
      groups[exercise.muscleGroup].push(exercise.name);
    }
  });

  groups.Other = ["Other"];
  return groups;
}

function getExerciseDropdownNames() {
  return Object.values(getExerciseDropdownGroups()).flat();
}

function getExerciseByName(exerciseName) {
  return getAllExercises().find((exercise) => exercise.name === exerciseName) || null;
}

function getLegacyExerciseNames() {
  const names = new Set(Object.values(EXERCISE_GROUPS).flat());

  getWorkoutHistory().forEach((workout) => {
    workout.exercises.forEach((exercise) => names.add(exercise.name));
  });

  getWorkoutTemplates().forEach((template) => {
    template.exercises.forEach((exerciseName) => names.add(exerciseName));
  });

  return Array.from(names).filter(Boolean);
}

function createBuiltInExercise(id, name, muscleGroup, secondaryMuscles, equipment, category, difficulty, notes) {
  return {
    id,
    name,
    muscleGroup,
    secondaryMuscles,
    equipment,
    category,
    difficulty,
    notes,
    isBuiltIn: true,
  };
}

function createLegacyExercise(exerciseName) {
  return {
    id: `legacy-${createExerciseSlug(exerciseName)}`,
    name: exerciseName,
    muscleGroup: getLegacyExerciseGroup(exerciseName),
    secondaryMuscles: [],
    equipment: "Other",
    category: "Other",
    difficulty: "Beginner",
    notes: "Legacy exercise kept for existing workout history and templates.",
    isBuiltIn: true,
  };
}

function getLegacyExerciseGroup(exerciseName) {
  const matchedGroup = Object.entries(EXERCISE_GROUPS).find(([, exercises]) => exercises.includes(exerciseName));
  return matchedGroup ? matchedGroup[0] : "Other";
}

function toggleCustomWorkoutName() {
  const workoutName = getElement("workoutName");
  const customWorkoutName = getElement("customWorkoutName");
  const customWorkoutNameField = customWorkoutName?.closest("label");

  if (!workoutName || !customWorkoutName || !customWorkoutNameField) {
    return;
  }

  const shouldShowCustomInput = workoutName.value === "Other";
  customWorkoutNameField.classList.toggle("is-hidden", !shouldShowCustomInput);
  customWorkoutName.required = shouldShowCustomInput;

  if (!shouldShowCustomInput) {
    customWorkoutName.value = "";
  }
}

function handleWorkoutExerciseListClick(event) {
  const removeButton = event.target.closest(".remove-exercise-button");

  if (!removeButton) {
    return;
  }

  const exerciseRows = document.querySelectorAll(".workout-exercise-row");
  const currentRow = removeButton.closest(".workout-exercise-row");

  if (exerciseRows.length === 1) {
    currentRow.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    return;
  }

  currentRow.remove();
}

function handleWorkoutExerciseListChange(event) {
  const exerciseSelect = event.target.closest(".exercise-name-input");

  if (!exerciseSelect) {
    return;
  }

  const currentRow = exerciseSelect.closest(".workout-exercise-row");
  const customExerciseInput = currentRow.querySelector(".custom-exercise-input");
  const customExerciseField = customExerciseInput.closest("label");
  const shouldShowCustomInput = exerciseSelect.value === "Other";

  customExerciseField.classList.toggle("is-hidden", !shouldShowCustomInput);
  customExerciseInput.required = shouldShowCustomInput;

  if (!shouldShowCustomInput) {
    customExerciseInput.value = "";
  }
}

function addWorkoutExerciseRow(exercise = {}) {
  const exerciseList = getElement("workoutExerciseList");
  const rowId = `exercise-${Date.now()}-${exerciseList.children.length}`;
  const optionHtml = createExerciseOptionsHtml(exercise.name);
  const isCustomExercise = exercise.name && !isKnownExerciseName(exercise.name);

  exerciseList.insertAdjacentHTML(
    "beforeend",
    `
      <div class="workout-exercise-row" data-exercise-row>
        <label>
          Exercise Name
          <select name="${rowId}-name" class="exercise-name-input" required>
            ${optionHtml}
          </select>
        </label>
        <label class="${isCustomExercise ? "" : "is-hidden"}">
          Custom Exercise Name
          <input type="text" name="${rowId}-custom-name" class="custom-exercise-input" autocomplete="off" placeholder="เช่น Hip Thrust" value="${isCustomExercise ? escapeHtml(exercise.name) : ""}" ${isCustomExercise ? "required" : ""}>
        </label>
        <div class="workout-number-grid">
          <label>
            Weight (kg)
            <input type="number" name="${rowId}-weight" class="exercise-weight-input" min="0" step="0.01" inputmode="decimal" placeholder="40" value="${exercise.weightKg || ""}" required>
          </label>
          <label>
            Reps
            <input type="number" name="${rowId}-reps" class="exercise-reps-input" min="1" step="1" inputmode="numeric" placeholder="8" value="${exercise.reps || ""}" required>
          </label>
          <label>
            Sets
            <input type="number" name="${rowId}-sets" class="exercise-sets-input" min="1" step="1" inputmode="numeric" placeholder="3" value="${exercise.sets || ""}" required>
          </label>
        </div>
        <button class="secondary-button remove-exercise-button" type="button">Remove Exercise</button>
      </div>
    `
  );
}

function createExerciseOptionsHtml(selectedExercise = "") {
  const knownExercise = isKnownExerciseName(selectedExercise) ? selectedExercise : "";
  const shouldSelectOther = selectedExercise && !knownExercise;
  const groupHtml = Object.entries(getExerciseDropdownGroups())
    .map(([groupName, exercises]) => {
      const options = exercises
        .map((exercise) => {
          const selected = exercise === knownExercise || (exercise === "Other" && shouldSelectOther) ? " selected" : "";
          return `<option value="${escapeHtml(exercise)}"${selected}>${escapeHtml(exercise)}</option>`;
        })
        .join("");

      return `<optgroup label="${escapeHtml(groupName)}">${options}</optgroup>`;
    })
    .join("");

  return `<option value="">Select Exercise</option>${groupHtml}`;
}

function isKnownExerciseName(exerciseName) {
  return getExerciseDropdownNames().includes(exerciseName);
}

function handleWorkoutSubmit(event) {
  event.preventDefault();

  const workoutDate = getElement("workoutDate").value;
  const workoutName = getSelectedWorkoutName();
  const exercises = collectWorkoutExercises();

  if (!isValidDateValue(workoutDate) || !workoutName || exercises.length === 0) {
    updateWorkoutStatus(ERROR_MESSAGE);
    return;
  }

  const workout = {
    id: createWorkoutId(),
    date: workoutDate,
    name: workoutName,
    exercises,
    createdAt: new Date().toISOString(),
  };

  const history = sortWorkoutHistory([workout, ...getWorkoutHistory()]);
  saveWorkoutHistory(history);
  resetWorkoutForm();
  renderWorkoutHistory();
  renderProgressDashboard();
  updateWorkoutStatus(`Saved ${workoutName} with ${exercises.length} exercises.`);
  trackAnalyticsEvent("workout_saved", {
    workout_name: workoutName,
    exercise_count: exercises.length,
  });
}

function getSelectedWorkoutName() {
  const selectedName = getElement("workoutName").value;

  if (selectedName === "Other") {
    return getElement("customWorkoutName").value.trim();
  }

  return selectedName;
}

function collectWorkoutExercises() {
  return Array.from(document.querySelectorAll(".workout-exercise-row"))
    .map((row) => {
      const selectedName = row.querySelector(".exercise-name-input").value;
      const customName = row.querySelector(".custom-exercise-input").value.trim();
      const name = selectedName === "Other" ? customName : selectedName;
      const weightKg = parseFloat(row.querySelector(".exercise-weight-input").value);
      const reps = Number(row.querySelector(".exercise-reps-input").value);
      const sets = Number(row.querySelector(".exercise-sets-input").value);

      if (!name || !areValidNumbers(reps, sets) || !Number.isFinite(weightKg) || weightKg < 0) {
        return null;
      }

      return {
        name,
        weightKg,
        reps,
        sets,
      };
    })
    .filter(Boolean);
}

function getWorkoutHistory() {
  const savedHistory = localStorage.getItem(WORKOUT_HISTORY_KEY);

  try {
    return savedHistory ? normalizeWorkoutHistory(JSON.parse(savedHistory)) : [];
  } catch {
    localStorage.removeItem(WORKOUT_HISTORY_KEY);
    return [];
  }
}

function normalizeWorkoutHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return sortWorkoutHistory(
    history
      .map((workout) => {
        const date = parseDisplayDate(workout.date);
        const name = String(workout.name || "").trim();
        const exercises = Array.isArray(workout.exercises) ? workout.exercises : [];

        if (!date || !name || exercises.length === 0) {
          return null;
        }

        return {
          id: workout.id || createWorkoutId(),
          date,
          name,
          exercises: normalizeWorkoutExercises(exercises),
          createdAt: workout.createdAt || `${date}T00:00:00.000Z`,
        };
      })
      .filter((workout) => workout && workout.exercises.length > 0)
  );
}

function normalizeWorkoutExercises(exercises) {
  return exercises
    .map((exercise) => {
      const name = String(exercise.name || "").trim();
      const weightKg = parseFloat(exercise.weightKg);
      const reps = Number(exercise.reps);
      const sets = Number(exercise.sets);

      if (!name || !Number.isFinite(weightKg) || weightKg < 0 || !areValidNumbers(reps, sets)) {
        return null;
      }

      return {
        name,
        weightKg,
        reps,
        sets,
      };
    })
    .filter(Boolean);
}

function saveWorkoutHistory(history) {
  localStorage.setItem(WORKOUT_HISTORY_KEY, JSON.stringify(history));
}

function sortWorkoutHistory(history) {
  return history.sort((first, second) => getDateTime(second.date) - getDateTime(first.date));
}

function renderWorkoutHistory() {
  const historyList = getElement("workoutHistoryList");
  const history = getWorkoutHistory();

  if (!historyList) {
    return;
  }

  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-state">No workouts saved yet.</p>';
    return;
  }

  historyList.innerHTML = history.slice(0, 7).map(createWorkoutHistoryItem).join("");
}

function createWorkoutHistoryItem(workout) {
  const exerciseLabel = workout.exercises.length === 1 ? "exercise" : "exercises";
  const exerciseDetails = workout.exercises
    .map((exercise) => {
      const weightText = exercise.weightKg > 0 ? `${formatWeight(exercise.weightKg)} kg` : "Bodyweight";
      return `
        <li>
          <strong>${escapeHtml(exercise.name)}</strong>
          <span>${weightText} x ${exercise.reps} x ${exercise.sets}</span>
        </li>
      `;
    })
    .join("");

  return `
    <details class="workout-session-card">
      <summary>
        <span>${formatThaiDate(workout.date)}</span>
        <strong>${escapeHtml(workout.name)}</strong>
        <p>${workout.exercises.length} ${exerciseLabel}</p>
      </summary>
      <div class="workout-detail-panel">
        <p><strong>Date</strong> ${formatThaiDate(workout.date)}</p>
        <p><strong>Workout Name</strong> ${escapeHtml(workout.name)}</p>
        <ul class="workout-exercise-details">${exerciseDetails}</ul>
      </div>
    </details>
  `;
}

function renderProgressDashboard() {
  const history = getWorkoutHistory();
  renderWorkoutStats(history);
  renderStrengthAnalyticsDashboard(history);
  renderExerciseProgress(history);
  renderPersonalRecords(history);
  renderWeightTrend();
}

function renderStrengthAnalyticsDashboard(history) {
  const dashboard = getElement("strengthAnalyticsDashboard");

  if (!dashboard) {
    return;
  }

  const analytics = calculateStrengthAnalytics(history);
  const goalPercent = analytics.weeklyGoal === 0 ? 0 : Math.min((analytics.workoutsThisWeek / analytics.weeklyGoal) * 100, 100);

  dashboard.innerHTML = `
    <div class="dashboard-metric">
      <span>Total Workouts</span>
      <strong>${analytics.totalWorkouts} Sessions</strong>
    </div>
    <div class="dashboard-metric">
      <span>Total Volume</span>
      <strong>${formatVolume(analytics.totalVolume)} kg</strong>
    </div>
    <div class="dashboard-metric">
      <span>Current Streak</span>
      <strong>${analytics.currentStreak} Days</strong>
    </div>
    <div class="dashboard-metric">
      <span>Weekly Goal Progress</span>
      <strong>${analytics.workoutsThisWeek} / ${analytics.weeklyGoal} Sessions</strong>
      <p>${formatNumber(goalPercent, 0)}%</p>
    </div>
    <div class="dashboard-metric">
      <span>Most Trained Exercise</span>
      <strong>${escapeHtml(analytics.mostTrainedExercise.name)}</strong>
      <p>${analytics.mostTrainedExercise.count} Sessions</p>
    </div>
    <div class="dashboard-metric">
      <span>Most Trained Muscle Group</span>
      <strong>${escapeHtml(analytics.mostTrainedMuscleGroup.name)}</strong>
      <p>${analytics.mostTrainedMuscleGroup.count} Sessions</p>
    </div>
  `;
}

function renderExerciseProgress(history) {
  const progressList = getElement("exerciseProgressList");

  if (!progressList) {
    return;
  }

  const exerciseProgress = calculateExerciseProgress(history);

  if (exerciseProgress.length === 0) {
    progressList.innerHTML = '<p class="empty-state">No exercise progress yet.</p>';
    return;
  }

  progressList.innerHTML = exerciseProgress.map(createExerciseProgressCard).join("");
}

function createExerciseProgressCard(progress) {
  const changeClass = progress.change >= 0 ? "is-positive" : "is-negative";
  const latestFormula = progress.latest
    ? `${formatWeight(progress.latest.weightKg)} x ${progress.latest.reps} x ${progress.latest.sets} = ${formatVolume(progress.sessionVolume)} kg`
    : "-";

  return `
    <article class="exercise-progress-card">
      <div class="exercise-progress-header">
        <div>
          <span>${escapeHtml(progress.category)}</span>
          <h3>${escapeHtml(progress.name)}</h3>
        </div>
        <strong class="${changeClass}">${formatSignedWeight(progress.change)}</strong>
      </div>
      <div class="exercise-progress-grid">
        <div>
          <span>Latest Weight</span>
          <strong>${formatWeight(progress.latestWeight)} kg</strong>
        </div>
        <div>
          <span>Previous Weight</span>
          <strong>${progress.previousWeight === null ? "-" : `${formatWeight(progress.previousWeight)} kg`}</strong>
        </div>
        <div>
          <span>Best Weight</span>
          <strong>${formatWeight(progress.bestWeight)} kg</strong>
        </div>
        <div>
          <span>Improvement</span>
          <strong class="${changeClass}">${formatSignedPercent(progress.improvementPercent)}</strong>
        </div>
      </div>
      <div class="volume-panel">
        <p><strong>Session Volume</strong> ${latestFormula}</p>
        <p><strong>Weekly Volume</strong> ${formatVolume(progress.weeklyVolume)} kg</p>
        <p><strong>Monthly Volume</strong> ${formatVolume(progress.monthlyVolume)} kg</p>
      </div>
    </article>
  `;
}

function renderWorkoutStats(history) {
  const dashboard = getElement("progressDashboard");

  if (!dashboard) {
    return;
  }

  const totalExercises = history.reduce((total, workout) => total + workout.exercises.length, 0);
  const latestWorkout = history[0]?.name || "ยังไม่มีข้อมูล";

  dashboard.innerHTML = `
    <div class="dashboard-metric">
      <span>Total Workouts</span>
      <strong>${history.length} Sessions</strong>
    </div>
    <div class="dashboard-metric">
      <span>Workouts This Week</span>
      <strong>${countWorkoutsThisWeek(history)} Sessions</strong>
    </div>
    <div class="dashboard-metric">
      <span>Total Exercises Logged</span>
      <strong>${totalExercises} Exercises</strong>
    </div>
    <div class="dashboard-metric">
      <span>Last Workout</span>
      <strong>${escapeHtml(latestWorkout)}</strong>
    </div>
  `;
}

function countWorkoutsThisWeek(history) {
  const startOfWeek = getStartOfWeek();

  return history.filter((workout) => getDateTime(workout.date) >= startOfWeek.getTime()).length;
}

function calculateStrengthAnalytics(history) {
  const totalVolume = history.reduce((total, workout) => total + calculateWorkoutVolume(workout), 0);
  const mostTrainedExercise = getMostTrainedExercise(history);
  const mostTrainedMuscleGroup = getMostTrainedMuscleGroup(history);

  return {
    totalWorkouts: history.length,
    totalVolume,
    currentStreak: calculateWorkoutStreak(history),
    workoutsThisWeek: countWorkoutsThisWeek(history),
    weeklyGoal: getWeeklyWorkoutGoal(),
    mostTrainedExercise,
    mostTrainedMuscleGroup,
  };
}

function calculateExerciseProgress(history) {
  const entriesByExercise = new Map();
  const startOfWeek = getStartOfWeek().getTime();
  const startOfMonth = getStartOfMonth().getTime();

  history.forEach((workout) => {
    workout.exercises.forEach((exercise) => {
      if (exercise.weightKg <= 0) {
        return;
      }

      const entry = {
        ...exercise,
        date: workout.date,
        volume: calculateExerciseVolume(exercise),
      };
      const exerciseEntries = entriesByExercise.get(exercise.name) || [];
      exerciseEntries.push(entry);
      entriesByExercise.set(exercise.name, exerciseEntries);
    });
  });

  return Array.from(entriesByExercise.entries())
    .map(([exerciseName, entries]) => {
      const sortedEntries = entries.sort((first, second) => getDateTime(second.date) - getDateTime(first.date));
      const latest = sortedEntries[0];
      const previous = sortedEntries[1] || null;
      const bestWeight = Math.max(...sortedEntries.map((entry) => entry.weightKg));
      const previousWeight = previous ? previous.weightKg : null;
      const change = previousWeight === null ? 0 : latest.weightKg - previousWeight;
      const improvementPercent = previousWeight ? (change / previousWeight) * 100 : 0;
      const weeklyVolume = sortedEntries
        .filter((entry) => getDateTime(entry.date) >= startOfWeek)
        .reduce((total, entry) => total + entry.volume, 0);
      const monthlyVolume = sortedEntries
        .filter((entry) => getDateTime(entry.date) >= startOfMonth)
        .reduce((total, entry) => total + entry.volume, 0);

      return {
        name: exerciseName,
        category: getExerciseCategory(exerciseName),
        latest,
        latestWeight: latest.weightKg,
        previousWeight,
        bestWeight,
        change,
        improvementPercent,
        sessionVolume: latest.volume,
        weeklyVolume,
        monthlyVolume,
      };
    })
    .sort((first, second) => first.name.localeCompare(second.name));
}

function calculateWorkoutVolume(workout) {
  return workout.exercises.reduce((total, exercise) => total + calculateExerciseVolume(exercise), 0);
}

function calculateExerciseVolume(exercise) {
  return exercise.weightKg * exercise.reps * exercise.sets;
}

function calculateWorkoutStreak(history) {
  const uniqueWorkoutDays = Array.from(new Set(history.map((workout) => workout.date)))
    .sort((first, second) => getDateTime(second) - getDateTime(first));

  if (uniqueWorkoutDays.length === 0) {
    return 0;
  }

  let streak = 1;
  let expectedTime = getDateTime(uniqueWorkoutDays[0]) - 24 * 60 * 60 * 1000;

  for (const date of uniqueWorkoutDays.slice(1)) {
    const dateTime = getDateTime(date);

    if (dateTime !== expectedTime) {
      break;
    }

    streak += 1;
    expectedTime -= 24 * 60 * 60 * 1000;
  }

  return streak;
}

function getMostTrainedExercise(history) {
  const exerciseCounts = new Map();

  history.forEach((workout) => {
    const sessionExercises = new Set(workout.exercises.map((exercise) => exercise.name));
    sessionExercises.forEach((exerciseName) => {
      exerciseCounts.set(exerciseName, (exerciseCounts.get(exerciseName) || 0) + 1);
    });
  });

  return getTopCount(exerciseCounts, "No data");
}

function getMostTrainedMuscleGroup(history) {
  const groupCounts = new Map();

  history.forEach((workout) => {
    const sessionGroups = new Set(workout.exercises.map((exercise) => getExerciseCategory(exercise.name)));
    sessionGroups.forEach((groupName) => {
      groupCounts.set(groupName, (groupCounts.get(groupName) || 0) + 1);
    });
  });

  return getTopCount(groupCounts, "No data");
}

function getTopCount(counts, fallbackName) {
  const sortedCounts = Array.from(counts.entries()).sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0]));
  const [name, count] = sortedCounts[0] || [fallbackName, 0];

  return { name, count };
}

function getExerciseCategory(exerciseName) {
  const databaseExercise = getExerciseByName(exerciseName);

  if (databaseExercise) {
    return databaseExercise.muscleGroup;
  }

  const matchedGroup = Object.entries(EXERCISE_GROUPS).find(([groupName, exercises]) => (
    groupName !== "Other" && exercises.includes(exerciseName)
  ));

  return matchedGroup ? matchedGroup[0] : "Other";
}

function getWeeklyWorkoutGoal() {
  const savedGoal = Number(localStorage.getItem(WEEKLY_WORKOUT_GOAL_KEY));

  return Number.isInteger(savedGoal) && savedGoal >= 1 && savedGoal <= 7 ? savedGoal : 4;
}

function saveWeeklyWorkoutGoal(goal) {
  const normalizedGoal = Number.isInteger(goal) && goal >= 1 && goal <= 7 ? goal : 4;
  localStorage.setItem(WEEKLY_WORKOUT_GOAL_KEY, String(normalizedGoal));
}

function getStartOfWeek(date = new Date()) {
  const startOfWeek = new Date(date);
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(date.getDate() - date.getDay());

  return startOfWeek;
}

function getStartOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function formatVolume(value) {
  return formatNumber(value, value % 1 === 0 ? 0 : 1);
}

function formatSignedWeight(value) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatWeight(value)} kg`;
}

function formatSignedPercent(value) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatNumber(value, 1)}%`;
}

function renderPersonalRecords(history) {
  const personalRecords = getElement("personalRecords");

  if (!personalRecords) {
    return;
  }

  const recordsByExercise = new Map();

  history.forEach((workout) => {
    workout.exercises.forEach((exercise) => {
      if (exercise.weightKg <= 0) {
        return;
      }

      const currentBest = recordsByExercise.get(exercise.name);

      if (!currentBest || exercise.weightKg > currentBest.weightKg) {
        recordsByExercise.set(exercise.name, exercise);
      }
    });
  });

  const records = Array.from(recordsByExercise.entries()).sort((first, second) => first[0].localeCompare(second[0]));

  if (records.length === 0) {
    personalRecords.innerHTML = '<p class="empty-state">No personal records yet.</p>';
    return;
  }

  personalRecords.innerHTML = records
    .map(([exerciseName, record]) => `
      <article class="record-card">
        <strong>${escapeHtml(exerciseName)}</strong>
        <span>Best Weight</span>
        <p>${formatWeight(record.weightKg)} kg</p>
      </article>
    `)
    .join("");
}

function renderWeightTrend() {
  const weightTrend = getElement("weightTrend");

  if (!weightTrend) {
    return;
  }

  const history = getWeightHistory();

  if (history.length === 0) {
    weightTrend.innerHTML = '<p class="empty-state">ยังไม่มีข้อมูลน้ำหนัก</p>';
    return;
  }

  const latestEntry = history[0];
  const latestTime = getDateTime(latestEntry.date);
  const thirtyDaysAgo = latestTime - 30 * 24 * 60 * 60 * 1000;
  const baselineEntry = history.find((entry) => getDateTime(entry.date) <= thirtyDaysAgo) || history[history.length - 1];
  const change = latestEntry.weightKg - baselineEntry.weightKg;
  const changePrefix = change > 0 ? "+" : "";

  weightTrend.innerHTML = `
    <div class="dashboard-metric">
      <span>Current</span>
      <strong>${formatWeight(latestEntry.weightKg)} kg</strong>
    </div>
    <div class="dashboard-metric">
      <span>30 Day Change</span>
      <strong>${changePrefix}${formatWeight(change)} kg</strong>
    </div>
  `;
}

function resetWorkoutForm() {
  getElement("workoutForm").reset();
  getElement("workoutDate").value = getTodayDateValue();
  getElement("customWorkoutName").closest("label").classList.add("is-hidden");
  getElement("customWorkoutName").required = false;
  getElement("workoutExerciseList").innerHTML = "";
  addWorkoutExerciseRow();
}

function updateWorkoutStatus(message) {
  const status = getElement("workoutStatus");

  if (status) {
    status.textContent = message;
  }
}

function createWorkoutId() {
  return `workout-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createTemplateId() {
  return `template-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createExerciseId(exerciseName) {
  const slug = createExerciseSlug(exerciseName);

  return `custom-${slug || "exercise"}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createExerciseSlug(exerciseName) {
  return String(exerciseName || "exercise")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
