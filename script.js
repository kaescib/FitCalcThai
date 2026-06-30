// Helper สำหรับเลือก element จาก id ให้โค้ดสั้นและอ่านง่าย
const getElement = (id) => document.getElementById(id);

const themeToggle = getElement("themeToggle");
const themeIcon = getElement("themeIcon");
const themeText = getElement("themeText");

const ERROR_MESSAGE = "กรุณากรอกข้อมูลให้ครบและมากกว่า 0";
const THAI_LOCALE = "th-TH";
const WEIGHT_HISTORY_KEY = "fitcalc-weight-history";
const WORKOUT_HISTORY_KEY = "fitcalc-workout-history";
const WEEKLY_WORKOUT_GOAL_KEY = "fitcalc-weekly-workout-goal";
const WORKOUT_TEMPLATE_KEY = "fitcalc-workout-templates";
const CUSTOM_EXERCISE_KEY = "fitcalc-custom-exercises";
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
let weightProgressChart = null;

initializeTheme();
initializeNavbarDropdowns();
initializeSmoothAnchorScrolling();
bindCalculatorForms();
initializeHomeDashboard();
initializeWeightTracker();
initializeWorkoutTracker();

function initializeHomeDashboard() {
  if (!getElement("dashboardSummaryCards")) {
    return;
  }

  const dashboardData = getHomeDashboardData();
  renderDashboardBeginnerPanel(dashboardData);
  renderDashboardSummaryCards(dashboardData);
  renderDashboardWeightSummary(dashboardData);
  renderDashboardWorkoutSummary(dashboardData);
  renderDashboardWeeklyGoal(dashboardData);
  renderDashboardLibrarySummary(dashboardData);
  renderDashboardRecentActivity(dashboardData);
}

function getHomeDashboardData() {
  const weightHistory = sortWeightHistory(readDashboardArray(WEIGHT_HISTORY_KEY).map(normalizeDashboardWeightEntry).filter(Boolean));
  const workoutHistory = sortWorkoutHistory(readDashboardArray(WORKOUT_HISTORY_KEY).map(normalizeDashboardWorkoutEntry).filter(Boolean));
  const templateStore = normalizeWorkoutTemplateStore(readDashboardValue(WORKOUT_TEMPLATE_KEY) || {});
  const customExercises = normalizeCustomExercises(readDashboardArray(CUSTOM_EXERCISE_KEY));
  const weeklyGoalRaw = localStorage.getItem(WEEKLY_WORKOUT_GOAL_KEY);
  const weeklyGoal = Number(weeklyGoalRaw);
  const hasWeeklyGoal = weeklyGoalRaw !== null && Number.isInteger(weeklyGoal) && weeklyGoal >= 1 && weeklyGoal <= 7;

  return {
    weightHistory,
    workoutHistory,
    templateStore,
    customExercises,
    weeklyGoal: hasWeeklyGoal ? weeklyGoal : null,
  };
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
    data.workoutHistory.length > 0 ||
    data.templateStore.customTemplates.length > 0 ||
    data.customExercises.length > 0 ||
    data.weeklyGoal !== null;

  panel.classList.toggle("is-hidden", hasAnyData);
}

function renderDashboardSummaryCards(data) {
  const summaryCards = getElement("dashboardSummaryCards");
  const weightSummary = getDashboardWeightSummary(data.weightHistory);
  const workoutSummary = getDashboardWorkoutSummary(data.workoutHistory);
  const weeklyGoal = getDashboardWeeklyGoalSummary(data.workoutHistory, data.weeklyGoal);
  const librarySummary = getDashboardLibrarySummary(data.templateStore, data.customExercises);

  summaryCards.innerHTML = [
    createDashboardSummaryCard("น้ำหนักล่าสุด", weightSummary.latestText, weightSummary.latestSubtext),
    createDashboardSummaryCard("น้ำหนักเฉลี่ย 7 วัน", weightSummary.averageText, weightSummary.trendText),
    createDashboardSummaryCard("การเปลี่ยนแปลงน้ำหนัก", weightSummary.changeText, weightSummary.previousText),
    createDashboardSummaryCard("Workout สัปดาห์นี้", `${workoutSummary.thisWeek} ครั้ง`, `สัปดาห์ก่อน ${workoutSummary.lastWeek} ครั้ง`),
    createDashboardSummaryCard("เป้าหมายรายสัปดาห์", weeklyGoal.progressText, weeklyGoal.statusText),
    createDashboardSummaryCard("Workout ล่าสุด", workoutSummary.lastWorkoutText, workoutSummary.lastWorkoutDateText),
    createDashboardSummaryCard("Templates ทั้งหมด", `${librarySummary.totalTemplates} รายการ`, `${librarySummary.favoriteTemplates} favorite`),
    createDashboardSummaryCard("Exercises ทั้งหมด", `${librarySummary.totalExercises} ท่า`, `${librarySummary.customExercises} custom`),
  ].join("");
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

  if (data.weightHistory.length === 0) {
    panel.innerHTML = '<p class="empty-state">ยังไม่มีข้อมูลน้ำหนัก</p>';
    return;
  }

  panel.innerHTML = `
    <div class="dashboard-mini-grid">
      ${createDashboardMetric("ล่าสุด", summary.latestText)}
      ${createDashboardMetric("ก่อนหน้า", summary.previousValueText)}
      ${createDashboardMetric("เปลี่ยนแปลง", summary.changeText)}
      ${createDashboardMetric("เฉลี่ย 7 วัน", summary.averageText)}
      ${createDashboardMetric("แนวโน้ม", summary.trendText)}
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

  if (data.weeklyGoal === null) {
    panel.innerHTML = '<p class="empty-state">ยังไม่ได้ตั้งเป้าหมายรายสัปดาห์</p>';
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
  const shouldUseDarkMode = savedTheme === "dark";

  document.body.classList.toggle("dark", shouldUseDarkMode);
  updateThemeButton(shouldUseDarkMode);

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    localStorage.setItem("fitcalc-theme", isDarkMode ? "dark" : "light");
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
