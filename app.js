const exercises = [
  { id: "barbell-bench-press", name: "Barbell Bench Press", group: "Chest", muscles: ["Chest", "Triceps", "Front delts"] },
  { id: "dumbbell-bench-press", name: "Dumbbell Bench Press", group: "Chest", muscles: ["Chest", "Triceps"] },
  { id: "incline-barbell-press", name: "Incline Barbell Press", group: "Chest", muscles: ["Upper chest", "Front delts"] },
  { id: "incline-dumbbell-press", name: "Incline Dumbbell Press", group: "Chest", muscles: ["Upper chest", "Shoulders"] },
  { id: "decline-bench-press", name: "Decline Bench Press", group: "Chest", muscles: ["Lower chest", "Triceps"] },
  { id: "machine-chest-press", name: "Machine Chest Press", group: "Chest", muscles: ["Chest", "Triceps"] },
  { id: "cable-fly", name: "Cable Fly", group: "Chest", muscles: ["Chest"] },
  { id: "pec-deck", name: "Pec Deck", group: "Chest", muscles: ["Chest"] },
  { id: "push-up", name: "Push-Up", group: "Chest", muscles: ["Chest", "Core"] },
  { id: "dip", name: "Dip", group: "Chest", muscles: ["Chest", "Triceps"] },
  { id: "pull-up", name: "Pull-Up", group: "Back", muscles: ["Lats", "Biceps"] },
  { id: "chin-up", name: "Chin-Up", group: "Back", muscles: ["Lats", "Biceps"] },
  { id: "lat-pulldown", name: "Lat Pulldown", group: "Back", muscles: ["Lats", "Biceps"] },
  { id: "single-arm-pulldown", name: "Single-Arm Pulldown", group: "Back", muscles: ["Lats"] },
  { id: "barbell-row", name: "Barbell Row", group: "Back", muscles: ["Mid back", "Lats"] },
  { id: "dumbbell-row", name: "Dumbbell Row", group: "Back", muscles: ["Lats", "Mid back"] },
  { id: "seated-cable-row", name: "Seated Cable Row", group: "Back", muscles: ["Mid back", "Lats"] },
  { id: "chest-supported-row", name: "Chest-Supported Row", group: "Back", muscles: ["Mid back", "Rear delts"] },
  { id: "t-bar-row", name: "T-Bar Row", group: "Back", muscles: ["Mid back", "Lats"] },
  { id: "deadlift", name: "Deadlift", group: "Back", muscles: ["Back", "Hamstrings", "Glutes"] },
  { id: "back-extension", name: "Back Extension", group: "Back", muscles: ["Lower back", "Glutes"] },
  { id: "back-squat", name: "Back Squat", group: "Legs", muscles: ["Quads", "Glutes", "Core"] },
  { id: "front-squat", name: "Front Squat", group: "Legs", muscles: ["Quads", "Core"] },
  { id: "goblet-squat", name: "Goblet Squat", group: "Legs", muscles: ["Quads", "Glutes"] },
  { id: "leg-press", name: "Leg Press", group: "Legs", muscles: ["Quads", "Glutes"] },
  { id: "hack-squat", name: "Hack Squat", group: "Legs", muscles: ["Quads"] },
  { id: "bulgarian-split-squat", name: "Bulgarian Split Squat", group: "Legs", muscles: ["Quads", "Glutes"] },
  { id: "walking-lunge", name: "Walking Lunge", group: "Legs", muscles: ["Quads", "Glutes"] },
  { id: "romanian-deadlift", name: "Romanian Deadlift", group: "Legs", muscles: ["Hamstrings", "Glutes"] },
  { id: "hip-thrust", name: "Hip Thrust", group: "Legs", muscles: ["Glutes"] },
  { id: "leg-extension", name: "Leg Extension", group: "Legs", muscles: ["Quads"] },
  { id: "lying-leg-curl", name: "Lying Leg Curl", group: "Legs", muscles: ["Hamstrings"] },
  { id: "seated-leg-curl", name: "Seated Leg Curl", group: "Legs", muscles: ["Hamstrings"] },
  { id: "standing-calf-raise", name: "Standing Calf Raise", group: "Legs", muscles: ["Calves"] },
  { id: "seated-calf-raise", name: "Seated Calf Raise", group: "Legs", muscles: ["Calves"] },
  { id: "overhead-press", name: "Overhead Press", group: "Shoulders", muscles: ["Shoulders", "Triceps"] },
  { id: "dumbbell-shoulder-press", name: "Dumbbell Shoulder Press", group: "Shoulders", muscles: ["Shoulders", "Triceps"] },
  { id: "arnold-press", name: "Arnold Press", group: "Shoulders", muscles: ["Shoulders"] },
  { id: "lateral-raise", name: "Lateral Raise", group: "Shoulders", muscles: ["Side delts"] },
  { id: "cable-lateral-raise", name: "Cable Lateral Raise", group: "Shoulders", muscles: ["Side delts"] },
  { id: "front-raise", name: "Front Raise", group: "Shoulders", muscles: ["Front delts"] },
  { id: "rear-delt-fly", name: "Rear Delt Fly", group: "Shoulders", muscles: ["Rear delts"] },
  { id: "face-pull", name: "Face Pull", group: "Shoulders", muscles: ["Rear delts", "Upper back"] },
  { id: "barbell-curl", name: "Barbell Curl", group: "Arms", muscles: ["Biceps"] },
  { id: "dumbbell-curl", name: "Dumbbell Curl", group: "Arms", muscles: ["Biceps"] },
  { id: "hammer-curl", name: "Hammer Curl", group: "Arms", muscles: ["Biceps", "Forearms"] },
  { id: "incline-dumbbell-curl", name: "Incline Dumbbell Curl", group: "Arms", muscles: ["Biceps"] },
  { id: "preacher-curl", name: "Preacher Curl", group: "Arms", muscles: ["Biceps"] },
  { id: "cable-curl", name: "Cable Curl", group: "Arms", muscles: ["Biceps"] },
  { id: "triceps-pushdown", name: "Triceps Pushdown", group: "Arms", muscles: ["Triceps"] },
  { id: "overhead-triceps-extension", name: "Overhead Triceps Extension", group: "Arms", muscles: ["Triceps"] },
  { id: "skull-crusher", name: "Skull Crusher", group: "Arms", muscles: ["Triceps"] },
  { id: "close-grip-bench-press", name: "Close-Grip Bench Press", group: "Arms", muscles: ["Triceps", "Chest"] },
  { id: "wrist-curl", name: "Wrist Curl", group: "Arms", muscles: ["Forearms"] },
  { id: "plank", name: "Plank", group: "Core", muscles: ["Abs", "Core stability"] },
  { id: "side-plank", name: "Side Plank", group: "Core", muscles: ["Obliques", "Core stability"] },
  { id: "crunch", name: "Crunch", group: "Core", muscles: ["Abs"] },
  { id: "cable-crunch", name: "Cable Crunch", group: "Core", muscles: ["Abs"] },
  { id: "hanging-knee-raise", name: "Hanging Knee Raise", group: "Core", muscles: ["Abs", "Hip flexors"] },
  { id: "hanging-leg-raise", name: "Hanging Leg Raise", group: "Core", muscles: ["Abs", "Hip flexors"] },
  { id: "russian-twist", name: "Russian Twist", group: "Core", muscles: ["Obliques"] },
  { id: "pallof-press", name: "Pallof Press", group: "Core", muscles: ["Anti-rotation", "Core"] },
  { id: "ab-wheel-rollout", name: "Ab Wheel Rollout", group: "Core", muscles: ["Abs", "Core"] },
  { id: "kettlebell-swing", name: "Kettlebell Swing", group: "Full Body", muscles: ["Glutes", "Hamstrings", "Core"] },
  { id: "clean-and-press", name: "Clean and Press", group: "Full Body", muscles: ["Shoulders", "Legs", "Back"] },
  { id: "thruster", name: "Thruster", group: "Full Body", muscles: ["Quads", "Shoulders", "Core"] },
  { id: "burpee", name: "Burpee", group: "Full Body", muscles: ["Conditioning", "Chest", "Legs"] },
  { id: "farmer-carry", name: "Farmer Carry", group: "Full Body", muscles: ["Grip", "Core", "Traps"] },
  { id: "treadmill-run", name: "Treadmill Run", group: "Cardio", muscles: ["Conditioning"] },
  { id: "stationary-bike", name: "Stationary Bike", group: "Cardio", muscles: ["Conditioning", "Quads"] },
  { id: "rowing-machine", name: "Rowing Machine", group: "Cardio", muscles: ["Conditioning", "Back", "Legs"] }
];

const dayNames = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };
const days = Object.keys(dayNames);
const storeKey = "lift-log-pwa-v2";
const oldStoreKey = "lift-log-prototype";

const starterPlan = {
  id: "starter-push-pull-legs",
  name: "Starter Push Pull Legs",
  days: {
    Mon: [
      { exerciseId: "barbell-bench-press", sets: 4, reps: 8 },
      { exerciseId: "incline-dumbbell-press", sets: 3, reps: 10 },
      { exerciseId: "triceps-pushdown", sets: 3, reps: 12 }
    ],
    Tue: [
      { exerciseId: "lat-pulldown", sets: 4, reps: 10 },
      { exerciseId: "barbell-row", sets: 3, reps: 8 },
      { exerciseId: "dumbbell-curl", sets: 3, reps: 12 }
    ],
    Wed: [],
    Thu: [
      { exerciseId: "back-squat", sets: 4, reps: 6 },
      { exerciseId: "romanian-deadlift", sets: 3, reps: 8 },
      { exerciseId: "leg-extension", sets: 3, reps: 12 }
    ],
    Fri: [
      { exerciseId: "overhead-press", sets: 4, reps: 8 },
      { exerciseId: "lateral-raise", sets: 3, reps: 15 },
      { exerciseId: "face-pull", sets: 3, reps: 15 }
    ],
    Sat: [],
    Sun: []
  }
};

let state = loadState();
let activeDay = "Mon";
let activeView = "plan";
let sessionPlanId = state.activeSessionDraft?.planId || state.activePlanId;
let sessionDay = state.activeSessionDraft?.day || "Mon";
let draftSessionName = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function uid() {
  return `plan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function emptyDays() {
  return Object.fromEntries(days.map((day) => [day, []]));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizePlan(plan) {
  return {
    id: plan.id || uid(),
    name: plan.name || "Untitled Plan",
    days: { ...emptyDays(), ...(plan.days || {}) }
  };
}

function normalizeSession(session) {
  return {
    id: session.id || `session-${uid()}`,
    name: session.name || `${session.planName || "Workout"} - ${dayNames[session.day] || "Session"}`,
    planId: session.planId || "",
    planName: session.planName || "Workout",
    day: session.day || "Mon",
    date: session.date || new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
    unit: "kg",
    entries: (session.entries || []).map((entry) => ({
      exerciseId: entry.exerciseId,
      sets: (entry.sets || []).map((set) => ({
        reps: Math.max(1, Number(set.reps || 1)),
        weightKg: Number(set.weightKg ?? set.weight ?? 0)
      }))
    }))
  };
}

function normalizeSessionDraft(draft) {
  if (!draft) return null;
  return {
    planId: draft.planId || "",
    day: draft.day || "Mon",
    name: draft.name || "",
    entries: (draft.entries || []).map((entry) => ({
      exerciseId: entry.exerciseId,
      sets: (entry.sets || []).map((set) => ({
        reps: Math.max(1, Number(set.reps || 1)),
        weightKg: set.weightKg === "" ? "" : Number(set.weightKg || 0)
      }))
    }))
  };
}

function createEmptyPlan(name = "Workout Plan 1") {
  return normalizePlan({ id: uid(), name, days: emptyDays() });
}

function loadState() {
  const stored = localStorage.getItem(storeKey);
  if (stored) {
    const parsed = JSON.parse(stored);
    parsed.plans = parsed.plans.map(normalizePlan);
    parsed.sessions = (parsed.sessions || []).map(normalizeSession);
    parsed.activeSessionDraft = normalizeSessionDraft(parsed.activeSessionDraft);
    return parsed;
  }

  const oldStored = localStorage.getItem(oldStoreKey);
  if (oldStored) {
    const oldState = JSON.parse(oldStored);
    const migratedPlan = normalizePlan({ id: uid(), name: "Migrated Weekly Plan", days: oldState.plans });
    return { plans: [migratedPlan], activePlanId: migratedPlan.id, sessions: (oldState.sessions || []).map(normalizeSession), activeSessionDraft: null };
  }

  return { plans: [clone(starterPlan)], activePlanId: starterPlan.id, sessions: [], activeSessionDraft: null };
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function activePlan() {
  const plan = state.plans.find((item) => item.id === state.activePlanId) || state.plans[0];
  state.activePlanId = plan.id;
  return plan;
}

function sessionPlan() {
  return state.plans.find((plan) => plan.id === sessionPlanId) || activePlan();
}

function getExercise(id) {
  return exercises.find((exercise) => exercise.id === id) || { id, name: "Unknown exercise", group: "Other", muscles: [] };
}

function videoUrl(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} proper form`)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function defaultSessionName(plan = sessionPlan(), day = sessionDay) {
  return `${plan.name} - ${dayNames[day]}`;
}

function buildSessionDraft(plan = sessionPlan(), day = sessionDay) {
  return {
    planId: plan.id,
    day,
    name: defaultSessionName(plan, day),
    entries: plan.days[day].map((item) => ({
      exerciseId: item.exerciseId,
      sets: Array.from({ length: item.sets }, () => ({ reps: item.reps, weightKg: "" }))
    }))
  };
}

function activeSessionDraft(createIfMissing = true) {
  const plan = sessionPlan();
  const existing = state.activeSessionDraft;
  if (!existing || existing.planId !== plan.id || existing.day !== sessionDay) {
    if (!createIfMissing) return buildSessionDraft(plan, sessionDay);
    state.activeSessionDraft = buildSessionDraft(plan, sessionDay);
    saveState();
    return state.activeSessionDraft;
  }

  const previousEntries = existing.entries;
  existing.entries = plan.days[sessionDay].map((item, exerciseIndex) => ({
    exerciseId: item.exerciseId,
    sets: Array.from({ length: item.sets }, (_, setIndex) => ({
      reps: item.reps,
      weightKg: previousEntries[exerciseIndex]?.exerciseId === item.exerciseId
        ? previousEntries[exerciseIndex]?.sets[setIndex]?.weightKg ?? ""
        : ""
    }))
  }));
  return existing;
}

function todayLabel() {
  return new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function setView(view) {
  activeView = view;
  render();
}

function render() {
  renderShell();
  renderPlanControls();
  renderSelectedExercises();
  renderLibrary();
  renderSessionControls();
  renderSession();
  renderShare();
  renderHistory();
}

function renderShell() {
  $("#planTitle").textContent = activePlan().name;
  $("#dayPlanTitle").textContent = dayNames[activeDay];
  $$(".day-pill").forEach((button) => button.classList.toggle("is-active", button.dataset.day === activeDay));
  $$(".tab").forEach((button) => button.classList.toggle("is-active", button.dataset.view === activeView));
  $$(".view").forEach((view) => view.classList.remove("is-active"));
  $(`#${activeView}View`).classList.add("is-active");
}

function renderPlanControls() {
  const options = state.plans.map((plan) => `<option value="${plan.id}">${plan.name}</option>`).join("");
  $("#planNameInput").value = activePlan().name;
  $("#activePlanSelect").innerHTML = options;
  $("#activePlanSelect").value = activePlan().id;
}

function renderSelectedExercises() {
  const list = $("#selectedExercises");
  const planItems = activePlan().days[activeDay];
  if (!planItems.length) {
    list.innerHTML = `<div class="empty-state">No exercises planned yet. Add from the library below.</div>`;
    return;
  }

  list.innerHTML = planItems.map((item, index) => {
    const exercise = getExercise(item.exerciseId);
    return `
      <article class="planned-card">
        <div class="card-main">
          <div>
            <h3>${exercise.name}</h3>
            <p class="meta">${exercise.group} | ${exercise.muscles.join(", ")}</p>
          </div>
          <a class="link-button" href="${videoUrl(exercise.name)}" target="_blank" rel="noreferrer">Video</a>
        </div>
        <div class="planned-controls">
          <label>Sets <input data-plan-index="${index}" data-field="sets" type="number" min="1" max="12" value="${item.sets}"></label>
          <label>Reps <input data-plan-index="${index}" data-field="reps" type="number" min="1" max="60" value="${item.reps}"></label>
          <button class="ghost-button remove-button" data-remove-index="${index}">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderLibrary() {
  const group = $("#groupFilter").value || "All";
  const query = $("#exerciseSearch").value.trim().toLowerCase();
  const planIds = new Set(activePlan().days[activeDay].map((item) => item.exerciseId));
  const visibleExercises = exercises.filter((exercise) => {
    const groupMatch = group === "All" || exercise.group === group;
    const queryText = `${exercise.name} ${exercise.group} ${exercise.muscles.join(" ")}`.toLowerCase();
    return groupMatch && queryText.includes(query);
  });

  $("#exerciseLibrary").innerHTML = visibleExercises.map((exercise) => `
    <article class="exercise-card">
      <div class="card-main">
        <div>
          <h3>${exercise.name}</h3>
          <p class="meta">${exercise.group}</p>
        </div>
        <button class="ghost-button" data-add-id="${exercise.id}" ${planIds.has(exercise.id) ? "disabled" : ""}>
          ${planIds.has(exercise.id) ? "Added" : "Add"}
        </button>
      </div>
      <div class="chip-row">
        ${exercise.muscles.map((muscle) => `<span class="chip">${muscle}</span>`).join("")}
      </div>
    </article>
  `).join("") || `<div class="empty-state">No exercises match that filter.</div>`;
}

function renderSessionControls() {
  const options = state.plans.map((plan) => `<option value="${plan.id}">${plan.name}</option>`).join("");
  $("#sessionPlanSelect").innerHTML = options;
  $("#sessionPlanSelect").value = sessionPlan().id;
  $("#sessionDaySelect").value = sessionDay;
  const draft = activeSessionDraft(false);
  draftSessionName = draft.name || defaultSessionName();
  $("#liveSessionName").value = draftSessionName;
}

function renderSession() {
  const plan = sessionPlan();
  const planItems = plan.days[sessionDay];
  const draft = activeSessionDraft(false);
  if (!planItems.length) {
    $("#sessionExercises").innerHTML = `<div class="empty-state">${plan.name} has no exercises for ${dayNames[sessionDay]}.</div>`;
    return;
  }

  $("#sessionExercises").innerHTML = planItems.map((item, exerciseIndex) => {
    const exercise = getExercise(item.exerciseId);
    const setRows = Array.from({ length: item.sets }, (_, setIndex) => `
      <div class="set-row">
        <span class="set-index">Set ${setIndex + 1}</span>
        <label class="weight-field">
          <input data-session-exercise="${exerciseIndex}" data-session-set="${setIndex}" type="number" min="0" step="0.5" placeholder="0" value="${draft.entries[exerciseIndex]?.sets[setIndex]?.weightKg ?? ""}">
          <span>kg</span>
        </label>
        <span class="reps-badge">${item.reps} reps</span>
      </div>
    `).join("");

    return `
      <article class="session-card">
        <div class="card-main">
          <div>
            <h3>${exercise.name}</h3>
            <p class="meta">${item.sets} sets | ${item.reps} reps</p>
          </div>
          <a class="link-button" href="${videoUrl(exercise.name)}" target="_blank" rel="noreferrer">Video</a>
        </div>
        <div class="set-grid">${setRows}</div>
      </article>
    `;
  }).join("");
}

function renderShare() {
  const options = state.plans.map((plan) => `<option value="${plan.id}">${plan.name}</option>`).join("");
  $("#sharePlanSelect").innerHTML = options;
  $("#sharePlanSelect").value = activePlan().id;
}

function renderHistory() {
  const history = state.sessions.map((session, index) => ({ session, index })).reverse();
  $("#historyList").innerHTML = history.map(({ session, index }) => `
    <details class="history-card history-details">
      <summary class="history-summary">
        <span>
          <strong>${escapeHtml(session.name)}</strong>
          <small>${escapeHtml(session.planName)} | ${dayNames[session.day]} | ${session.date}</small>
        </span>
        <span class="history-actions">
          <span class="history-count">${session.entries.length} exercises</span>
          <button class="delete-session-button" data-delete-session="${index}" type="button">Delete</button>
        </span>
      </summary>
      <div class="saved-entry-list">
        ${session.entries.map((entry) => renderSavedEntry(entry)).join("")}
      </div>
    </details>
  `).join("") || `<div class="empty-state">No finished sessions yet.</div>`;
}

function renderSavedEntry(entry) {
  const exercise = getExercise(entry.exerciseId);
  const sets = entry.sets.map((set, setIndex) => `
    <div class="history-set-row">
      <span class="set-index">Set ${setIndex + 1}</span>
      <span>${set.weightKg} kg</span>
      <span class="reps-badge">${set.reps} reps</span>
    </div>
  `).join("");

  return `
    <div class="saved-entry">
      <h3>${escapeHtml(exercise.name)}</h3>
      <p class="meta">${exercise.group} | ${exercise.muscles.join(", ")}</p>
      <div class="set-grid">${sets}</div>
    </div>
  `;
}

function setupFilters() {
  const groups = ["All", ...new Set(exercises.map((exercise) => exercise.group))];
  $("#groupFilter").innerHTML = groups.map((group) => `<option value="${group}">${group}</option>`).join("");
}

function exportPlan(plan) {
  return btoa(unescape(encodeURIComponent(JSON.stringify({
    type: "lift-log-plan",
    version: 1,
    plan: { name: plan.name, days: plan.days }
  }))));
}

function importPlanCode(code) {
  const parsed = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
  if (parsed.type !== "lift-log-plan" || !parsed.plan) throw new Error("Invalid plan code");
  return normalizePlan({ ...parsed.plan, id: uid(), name: `${parsed.plan.name} (shared)` });
}

document.addEventListener("click", (event) => {
  const dayButton = event.target.closest(".day-pill");
  const tabButton = event.target.closest(".tab");
  const addButton = event.target.closest("[data-add-id]");
  const removeButton = event.target.closest("[data-remove-index]");
  const deleteSessionButton = event.target.closest("[data-delete-session]");

  if (dayButton) {
    activeDay = dayButton.dataset.day;
    render();
  }

  if (tabButton) setView(tabButton.dataset.view);

  if (addButton && !addButton.disabled) {
    activePlan().days[activeDay].push({ exerciseId: addButton.dataset.addId, sets: 3, reps: 10 });
    saveState();
    render();
  }

  if (removeButton) {
    activePlan().days[activeDay].splice(Number(removeButton.dataset.removeIndex), 1);
    saveState();
    render();
  }

  if (deleteSessionButton) {
    event.preventDefault();
    event.stopPropagation();
    const sessionIndex = Number(deleteSessionButton.dataset.deleteSession);
    const session = state.sessions[sessionIndex];
    if (!session) return;
    if (!confirm(`Delete "${session.name}" from history?`)) return;
    state.sessions.splice(sessionIndex, 1);
    saveState();
    renderHistory();
  }
});

document.addEventListener("input", (event) => {
  const planInput = event.target.closest("[data-plan-index]");
  const sessionWeightInput = event.target.closest("[data-session-exercise]");

  if (planInput) {
    const item = activePlan().days[activeDay][Number(planInput.dataset.planIndex)];
    item[planInput.dataset.field] = Math.max(1, Number(planInput.value || 1));
    saveState();
    renderSession();
  }

  if (event.target.id === "planNameInput") {
    activePlan().name = event.target.value.trim() || "Untitled Plan";
    saveState();
    renderPlanControls();
    renderSessionControls();
    renderShare();
  }

  if (event.target.id === "liveSessionName") {
    draftSessionName = event.target.value;
    activeSessionDraft().name = draftSessionName;
    saveState();
  }

  if (sessionWeightInput) {
    const draft = activeSessionDraft();
    const set = draft.entries[Number(sessionWeightInput.dataset.sessionExercise)]
      ?.sets[Number(sessionWeightInput.dataset.sessionSet)];
    if (!set) return;
    set.weightKg = sessionWeightInput.value === "" ? "" : Number(sessionWeightInput.value);
    saveState();
  }
});

$("#activePlanSelect").addEventListener("change", (event) => {
  state.activePlanId = event.target.value;
  saveState();
  render();
});

$("#sessionPlanSelect").addEventListener("change", (event) => {
  if (state.activeSessionDraft && event.target.value !== state.activeSessionDraft.planId) {
    alert("Finish the active session before switching to another plan.");
    event.target.value = state.activeSessionDraft.planId;
    return;
  }
  sessionPlanId = event.target.value;
  draftSessionName = defaultSessionName();
  render();
});

$("#sessionDaySelect").addEventListener("change", (event) => {
  if (state.activeSessionDraft && event.target.value !== state.activeSessionDraft.day) {
    alert("Finish the active session before switching to another training day.");
    event.target.value = state.activeSessionDraft.day;
    return;
  }
  sessionDay = event.target.value;
  activeDay = event.target.value;
  draftSessionName = defaultSessionName();
  render();
});

$("#sharePlanSelect").addEventListener("change", (event) => {
  const plan = state.plans.find((item) => item.id === event.target.value);
  $("#shareCode").value = plan ? exportPlan(plan) : "";
});

$("#groupFilter").addEventListener("change", renderLibrary);
$("#exerciseSearch").addEventListener("input", renderLibrary);

$("#createPlan").addEventListener("click", () => {
  const planNumber = state.plans.length + 1;
  const plan = normalizePlan({ id: uid(), name: `Workout Plan ${planNumber}`, days: emptyDays() });
  state.plans.push(plan);
  state.activePlanId = plan.id;
  saveState();
  render();
  $("#planNameInput").focus();
  $("#planNameInput").select();
});

$("#duplicatePlan").addEventListener("click", () => {
  const source = activePlan();
  const plan = normalizePlan({ id: uid(), name: `${source.name} Copy`, days: clone(source.days) });
  state.plans.push(plan);
  state.activePlanId = plan.id;
  saveState();
  render();
});

$("#deletePlan").addEventListener("click", () => {
  const plan = activePlan();
  if (state.activeSessionDraft?.planId === plan.id) {
    alert("Finish the active session before deleting its plan.");
    return;
  }
  if (!confirm(`Delete "${plan.name}"? Saved history will stay, but this plan will be removed.`)) return;
  state.plans = state.plans.filter((item) => item.id !== plan.id);

  if (!state.plans.length) {
    const replacementPlan = createEmptyPlan();
    state.plans.push(replacementPlan);
  }

  state.activePlanId = state.plans[0].id;
  if (!state.plans.some((item) => item.id === sessionPlanId)) {
    sessionPlanId = state.activePlanId;
    draftSessionName = defaultSessionName();
  }
  saveState();
  render();
});

$("#openShare").addEventListener("click", () => {
  $("#sharePlanSelect").value = activePlan().id;
  $("#shareCode").value = exportPlan(activePlan());
  setView("share");
});

$("#sharePlan").addEventListener("click", async () => {
  const plan = state.plans.find((item) => item.id === $("#sharePlanSelect").value) || activePlan();
  const code = exportPlan(plan);
  $("#shareCode").value = code;
  if (navigator.share) {
    try {
      await navigator.share({ title: plan.name, text: code });
    } catch {
      $("#shareCode").focus();
    }
  }
});

$("#copyShareCode").addEventListener("click", async () => {
  $("#shareCode").select();
  await navigator.clipboard?.writeText($("#shareCode").value);
});

$("#importPlan").addEventListener("click", () => {
  try {
    const plan = importPlanCode($("#importCode").value);
    state.plans.push(plan);
    state.activePlanId = plan.id;
    $("#importCode").value = "";
    saveState();
    render();
  } catch {
    alert("That plan code could not be imported.");
  }
});

$("#startWorkout").addEventListener("click", () => {
  if (state.activeSessionDraft && (state.activeSessionDraft.planId !== activePlan().id || state.activeSessionDraft.day !== activeDay)) {
    alert("Finish the active session before starting another one.");
    sessionPlanId = state.activeSessionDraft.planId;
    sessionDay = state.activeSessionDraft.day;
    setView("session");
    return;
  }
  sessionPlanId = activePlan().id;
  sessionDay = activeDay;
  const currentDraft = state.activeSessionDraft;
  if (!currentDraft || currentDraft.planId !== sessionPlanId || currentDraft.day !== sessionDay) {
    state.activeSessionDraft = buildSessionDraft(sessionPlan(), sessionDay);
    saveState();
  }
  draftSessionName = state.activeSessionDraft.name;
  setView("session");
});

$("#finishWorkout").addEventListener("click", () => {
  const plan = sessionPlan();
  const planItems = plan.days[sessionDay];
  const draft = activeSessionDraft();
  const sessionName = (draft.name || draftSessionName || defaultSessionName(plan, sessionDay)).trim();
  const sessionDate = todayLabel();
  const duplicateSession = state.sessions.some((session) =>
    session.name === sessionName &&
    session.planId === plan.id &&
    session.day === sessionDay &&
    session.date === sessionDate
  );

  if (duplicateSession) {
    alert("This session has already been finished today.");
    return;
  }

  const entries = draft.entries.map((entry) => ({
    exerciseId: entry.exerciseId,
    sets: entry.sets.map((set) => ({
      reps: set.reps,
      weightKg: Number(set.weightKg || 0)
    }))
  }));

  if (!entries.length) return;
  state.sessions.push({
    id: `session-${uid()}`,
    name: sessionName,
    planId: plan.id,
    planName: plan.name,
    day: sessionDay,
    date: sessionDate,
    unit: "kg",
    entries
  });
  state.activeSessionDraft = null;
  saveState();
  draftSessionName = "";
  setView("history");
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

setupFilters();
render();
