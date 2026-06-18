// Helper สำหรับเลือก element จาก id ให้โค้ดสั้นและอ่านง่าย
const getElement = (id) => document.getElementById(id);

const themeToggle = getElement("themeToggle");
const themeIcon = getElement("themeIcon");
const themeText = getElement("themeText");

const ERROR_MESSAGE = "กรุณากรอกข้อมูลให้ครบและมากกว่า 0";
const THAI_LOCALE = "th-TH";
const WEIGHT_HISTORY_KEY = "fitcalc-weight-history";
const WORKOUT_HISTORY_KEY = "fitcalc-workout-history";
let weightProgressChart = null;

initializeTheme();
initializeNavbarDropdowns();
initializeSmoothAnchorScrolling();
bindCalculatorForms();
initializeWeightTracker();
initializeWorkoutTracker();

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
  }
}

function getScrollTarget(hash) {
  const targetId = decodeURIComponent(hash.replace("#", ""));
  const target = document.getElementById(targetId);

  return target?.closest(".card") || target;
}

function scrollToHashTarget(hash, shouldUpdateHash) {
  const target = getScrollTarget(hash);

  if (!target) {
    return;
  }

  const navbarHeight = document.querySelector(".site-nav")?.offsetHeight || 0;
  const topOffset = navbarHeight + 18;
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
    return;
  }

  const latest = history[0];
  summary.textContent = `บันทึกแล้ว ${history.length} รายการ | ล่าสุด ${formatWeight(latest.weightKg)} กก.`;
  historyList.innerHTML = history.slice(0, 7).map(createWeightHistoryItem).join("");
  renderWeightProgressChart(history);
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
  workoutForm.addEventListener("submit", handleWorkoutSubmit);
  addWorkoutExerciseRow();
  renderWorkoutHistory();
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

function addWorkoutExerciseRow(exercise = {}) {
  const exerciseList = getElement("workoutExerciseList");
  const rowId = `exercise-${Date.now()}-${exerciseList.children.length}`;

  exerciseList.insertAdjacentHTML(
    "beforeend",
    `
      <div class="workout-exercise-row" data-exercise-row>
        <label>
          Exercise Name
          <input type="text" name="${rowId}-name" class="exercise-name-input" autocomplete="off" placeholder="Bench Press" value="${escapeHtml(exercise.name || "")}" required>
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

function handleWorkoutSubmit(event) {
  event.preventDefault();

  const workoutDate = getElement("workoutDate").value;
  const workoutName = getElement("workoutName").value.trim();
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
  updateWorkoutStatus(`Saved ${workoutName} with ${exercises.length} exercises.`);
  trackAnalyticsEvent("workout_saved", {
    workout_name: workoutName,
    exercise_count: exercises.length,
  });
}

function collectWorkoutExercises() {
  return Array.from(document.querySelectorAll(".workout-exercise-row"))
    .map((row) => {
      const name = row.querySelector(".exercise-name-input").value.trim();
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
          exercises,
          createdAt: workout.createdAt || `${date}T00:00:00.000Z`,
        };
      })
      .filter(Boolean)
  );
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

  return `
    <article class="workout-session-card">
      <span>${formatThaiDate(workout.date)}</span>
      <strong>${escapeHtml(workout.name)}</strong>
      <p>${workout.exercises.length} ${exerciseLabel}</p>
    </article>
  `;
}

function resetWorkoutForm() {
  getElement("workoutForm").reset();
  getElement("workoutDate").value = getTodayDateValue();
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
