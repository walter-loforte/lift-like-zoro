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
  id: "first-workout-plan",
  name: "Workout Plan 1",
  days: emptyDays()
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

function isCardioExercise(exerciseId) {
  return getExercise(exerciseId).group === "Cardio";
}

function isTimedCoreExercise(exerciseId) {
  return exerciseId === "plank" || exerciseId === "side-plank";
}

function normalizePlan(plan) {
  return {
    id: plan.id || uid(),
    name: plan.name || "Untitled Plan",
    days: Object.fromEntries(days.map((day) => [
      day,
      (plan.days?.[day] || []).map((item) => isCardioExercise(item.exerciseId)
        ? { exerciseId: item.exerciseId, durationMinutes: Math.max(1, Number(item.durationMinutes || 20)) }
        : isTimedCoreExercise(item.exerciseId)
          ? {
              exerciseId: item.exerciseId,
              sets: Math.max(1, Number(item.sets || 3)),
              durationSeconds: Math.max(1, Number(item.durationSeconds || 30))
            }
        : { exerciseId: item.exerciseId, sets: Math.max(1, Number(item.sets || 3)), reps: Math.max(1, Number(item.reps || 10)) })
    ]))
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
    notes: session.notes || "",
    entries: (session.entries || []).map((entry) => ({
      exerciseId: entry.exerciseId,
      durationMinutes: isCardioExercise(entry.exerciseId) ? Number(entry.durationMinutes || 0) : undefined,
      sets: (entry.sets || []).map((set) => ({
        reps: Math.max(1, Number(set.reps || 1)),
        durationSeconds: isTimedCoreExercise(entry.exerciseId) ? Number(set.durationSeconds ?? set.reps ?? 0) : undefined,
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
    notes: draft.notes || "",
    entries: (draft.entries || []).map((entry) => ({
      exerciseId: entry.exerciseId,
      durationMinutes: isCardioExercise(entry.exerciseId)
        ? (entry.durationMinutes === "" ? "" : Number(entry.durationMinutes || 0))
        : undefined,
      sets: (entry.sets || []).map((set) => ({
        reps: Math.max(1, Number(set.reps || 1)),
        durationSeconds: isTimedCoreExercise(entry.exerciseId)
          ? (set.durationSeconds === "" ? "" : Number(set.durationSeconds ?? set.reps ?? 0))
          : undefined,
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
    notes: "",
    entries: plan.days[day].map((item) => isCardioExercise(item.exerciseId)
      ? { exerciseId: item.exerciseId, durationMinutes: "" }
      : {
          exerciseId: item.exerciseId,
          sets: Array.from({ length: item.sets }, () => isTimedCoreExercise(item.exerciseId)
            ? { durationSeconds: "" }
            : { reps: item.reps, weightKg: "" })
        })
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
  existing.entries = plan.days[sessionDay].map((item, exerciseIndex) => {
    const previousEntry = previousEntries[exerciseIndex]?.exerciseId === item.exerciseId
      ? previousEntries[exerciseIndex]
      : null;
    if (isCardioExercise(item.exerciseId)) {
      return { exerciseId: item.exerciseId, durationMinutes: previousEntry?.durationMinutes ?? "" };
    }
    return {
      exerciseId: item.exerciseId,
      sets: Array.from({ length: item.sets }, (_, setIndex) => ({
        reps: isTimedCoreExercise(item.exerciseId) ? undefined : item.reps,
        durationSeconds: isTimedCoreExercise(item.exerciseId)
          ? previousEntry?.sets[setIndex]?.durationSeconds ?? ""
          : undefined,
        weightKg: isTimedCoreExercise(item.exerciseId) ? undefined : previousEntry?.sets[setIndex]?.weightKg ?? ""
      }))
    };
  });
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
    const controls = isCardioExercise(item.exerciseId)
      ? `
        <div class="planned-controls cardio-controls">
          <label>Time in minutes <input data-plan-index="${index}" data-field="durationMinutes" type="number" min="1" max="600" value="${item.durationMinutes}"></label>
          <button class="ghost-button remove-button" data-remove-index="${index}">Remove</button>
        </div>
      `
      : isTimedCoreExercise(item.exerciseId)
        ? `
          <div class="planned-controls">
            <label>Sets <input data-plan-index="${index}" data-field="sets" type="number" min="1" max="12" value="${item.sets}"></label>
            <label>Seconds <input data-plan-index="${index}" data-field="durationSeconds" type="number" min="1" max="600" value="${item.durationSeconds}"></label>
            <button class="ghost-button remove-button" data-remove-index="${index}">Remove</button>
          </div>
        `
      : `
        <div class="planned-controls">
          <label>Sets <input data-plan-index="${index}" data-field="sets" type="number" min="1" max="12" value="${item.sets}"></label>
          <label>Reps <input data-plan-index="${index}" data-field="reps" type="number" min="1" max="60" value="${item.reps}"></label>
          <button class="ghost-button remove-button" data-remove-index="${index}">Remove</button>
        </div>
      `;
    return `
      <article class="planned-card">
        <div class="card-main">
          <div>
            <h3>${exercise.name}</h3>
            <p class="meta">${exercise.group} | ${exercise.muscles.join(", ")}</p>
          </div>
          <a class="link-button" href="${videoUrl(exercise.name)}" target="_blank" rel="noreferrer">Video</a>
        </div>
        ${controls}
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
  const isActive = Boolean(state.activeSessionDraft);
  $("#sessionPlanSelect").innerHTML = options;
  $("#sessionPlanSelect").value = sessionPlan().id;
  $("#sessionDaySelect").value = sessionDay;
  const draft = activeSessionDraft(false);
  draftSessionName = draft.name || defaultSessionName();
  $("#liveSessionName").value = draftSessionName;
  $("#sessionNotes").value = draft.notes || "";
  $("#liveSessionName").disabled = !isActive;
  $("#sessionNotes").disabled = !isActive;
  $("#sessionPlanSelect").disabled = isActive;
  $("#sessionDaySelect").disabled = isActive;
  $("#startSession").disabled = isActive || !sessionPlan().days[sessionDay].length;
  $("#finishWorkout").disabled = !isActive;
  $("#sessionHeading").textContent = isActive ? "Active Session" : "Session Setup";
  $("#sessionStatus").textContent = isActive
    ? "Track weights and cardio time, then press Finish."
    : "Choose a plan and training day, then press Start.";
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
    if (isCardioExercise(item.exerciseId)) {
      return `
        <article class="session-card">
          <div class="card-main">
            <div>
              <h3>${exercise.name}</h3>
              <p class="meta">Target: ${item.durationMinutes} minutes</p>
            </div>
            <a class="link-button" href="${videoUrl(exercise.name)}" target="_blank" rel="noreferrer">Video</a>
          </div>
          <label class="cardio-time-field">
            Completed time
            <span>
              <input data-session-cardio="${exerciseIndex}" type="number" min="0" max="600" step="1" placeholder="0" value="${draft.entries[exerciseIndex]?.durationMinutes ?? ""}" ${state.activeSessionDraft ? "" : "disabled"}>
              <strong>minutes</strong>
            </span>
          </label>
        </article>
      `;
    }
    if (isTimedCoreExercise(item.exerciseId)) {
      const timedRows = Array.from({ length: item.sets }, (_, setIndex) => `
        <div class="set-row">
          <span class="set-index">Set ${setIndex + 1}</span>
          <label class="weight-field">
            <input data-session-timed-core="${exerciseIndex}" data-session-set="${setIndex}" type="number" min="0" max="600" step="1" placeholder="0" value="${draft.entries[exerciseIndex]?.sets[setIndex]?.durationSeconds ?? ""}" ${state.activeSessionDraft ? "" : "disabled"}>
            <span>sec</span>
          </label>
          <span class="reps-badge">target ${item.durationSeconds}</span>
        </div>
      `).join("");
      return `
        <article class="session-card">
          <div class="card-main">
            <div>
              <h3>${exercise.name}</h3>
              <p class="meta">${item.sets} sets | ${item.durationSeconds} seconds target</p>
            </div>
            <a class="link-button" href="${videoUrl(exercise.name)}" target="_blank" rel="noreferrer">Video</a>
          </div>
          <div class="set-grid">${timedRows}</div>
        </article>
      `;
    }
    const setRows = Array.from({ length: item.sets }, (_, setIndex) => `
      <div class="set-row">
        <span class="set-index">Set ${setIndex + 1}</span>
        <label class="weight-field">
          <input data-session-exercise="${exerciseIndex}" data-session-set="${setIndex}" type="number" min="0" step="0.5" placeholder="0" value="${draft.entries[exerciseIndex]?.sets[setIndex]?.weightKg ?? ""}" ${state.activeSessionDraft ? "" : "disabled"}>
          <span>kg</span>
        </label>
        <span class="reps-badge">${isTimedCoreExercise(item.exerciseId) ? `${item.durationSeconds} sec` : `${item.reps} reps`}</span>
      </div>
    `).join("");

    return `
      <article class="session-card">
        <div class="card-main">
          <div>
            <h3>${exercise.name}</h3>
            <p class="meta">${item.sets} sets | ${isTimedCoreExercise(item.exerciseId) ? `${item.durationSeconds} seconds` : `${item.reps} reps`}</p>
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
      ${session.notes ? `
        <div class="history-notes">
          <strong>Notes</strong>
          <p>${escapeHtml(session.notes)}</p>
        </div>
      ` : ""}
    </details>
  `).join("") || `<div class="empty-state">No finished sessions yet.</div>`;
}

function renderSavedEntry(entry) {
  const exercise = getExercise(entry.exerciseId);
  const isCardio = isCardioExercise(entry.exerciseId);
  const allowsBodyweight = exercise.group.trim().toLowerCase() === "core";
  const isIncomplete = isCardio
    ? Number(entry.durationMinutes) === 0
    : !allowsBodyweight && entry.sets.some((set) => Number(set.weightKg) === 0);
  const details = isCardio
    ? `<div class="history-set-row"><span>Time</span><span>${entry.durationMinutes} minutes</span><span></span></div>`
    : isTimedCoreExercise(entry.exerciseId)
      ? `<div class="set-grid">${entry.sets.map((set, setIndex) => `
          <div class="history-set-row">
            <span class="set-index">Set ${setIndex + 1}</span>
            <span>${set.durationSeconds} sec</span>
            <span></span>
          </div>
        `).join("")}</div>`
    : `<div class="set-grid">${entry.sets.map((set, setIndex) => `
        <div class="history-set-row">
          <span class="set-index">Set ${setIndex + 1}</span>
          <span>${set.weightKg} kg</span>
          <span class="reps-badge">${isTimedCoreExercise(entry.exerciseId) ? `${set.durationSeconds} sec` : `${set.reps} reps`}</span>
        </div>
      `).join("")}</div>`;

  return `
    <div class="saved-entry ${isIncomplete ? "is-incomplete" : ""}">
      <div class="saved-entry-heading">
        <h3>${escapeHtml(exercise.name)}</h3>
        ${isIncomplete ? '<span class="incomplete-label">Incomplete</span>' : ""}
      </div>
      <p class="meta">${exercise.group} | ${exercise.muscles.join(", ")}</p>
      ${details}
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
  return normalizePlan({ ...parsed.plan, id: uid(), name: parsed.plan.name });
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
    activePlan().days[activeDay].push(isCardioExercise(addButton.dataset.addId)
      ? { exerciseId: addButton.dataset.addId, durationMinutes: 20 }
      : isTimedCoreExercise(addButton.dataset.addId)
        ? { exerciseId: addButton.dataset.addId, sets: 3, durationSeconds: 30 }
      : { exerciseId: addButton.dataset.addId, sets: 3, reps: 10 });
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
  const sessionCardioInput = event.target.closest("[data-session-cardio]");
  const sessionTimedCoreInput = event.target.closest("[data-session-timed-core]");

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

  if (event.target.id === "sessionNotes") {
    activeSessionDraft().notes = event.target.value;
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

  if (sessionCardioInput) {
    const entry = activeSessionDraft().entries[Number(sessionCardioInput.dataset.sessionCardio)];
    if (!entry) return;
    entry.durationMinutes = sessionCardioInput.value === "" ? "" : Number(sessionCardioInput.value);
    saveState();
  }

  if (sessionTimedCoreInput) {
    const set = activeSessionDraft().entries[Number(sessionTimedCoreInput.dataset.sessionTimedCore)]
      ?.sets[Number(sessionTimedCoreInput.dataset.sessionSet)];
    if (!set) return;
    set.durationSeconds = sessionTimedCoreInput.value === "" ? "" : Number(sessionTimedCoreInput.value);
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

$("#startSession").addEventListener("click", () => {
  if (!sessionPlan().days[sessionDay].length || state.activeSessionDraft) return;
  state.activeSessionDraft = buildSessionDraft(sessionPlan(), sessionDay);
  draftSessionName = state.activeSessionDraft.name;
  saveState();
  render();
});

$("#finishWorkout").addEventListener("click", () => {
  if (!state.activeSessionDraft) return;
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

  const entries = draft.entries.map((entry) => isCardioExercise(entry.exerciseId)
    ? {
        exerciseId: entry.exerciseId,
        durationMinutes: Number(entry.durationMinutes || 0),
        sets: []
      }
    : {
        exerciseId: entry.exerciseId,
        sets: entry.sets.map((set) => ({
          reps: set.reps,
          durationSeconds: set.durationSeconds,
          weightKg: isTimedCoreExercise(entry.exerciseId) ? 0 : Number(set.weightKg || 0)
        }))
      });

  if (!entries.length) return;
  state.sessions.push({
    id: `session-${uid()}`,
    name: sessionName,
    planId: plan.id,
    planName: plan.name,
    day: sessionDay,
    date: sessionDate,
    unit: "kg",
    notes: draft.notes || "",
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
