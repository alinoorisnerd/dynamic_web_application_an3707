# Park-In

**Park every deadline a day early, and finish with room to spare.**

Park-In is a task list for students who always end up finishing things the
night they are due. Every task has an estimate in hours and a due date, and
the app shows each deadline **one day earlier** than the real one. The real
date is still what gets stored, but the date you see is the one you plan
around. The header splits your open work into **Short** tasks (1 hour or less)
and **Long** tasks (more than 1 hour), so you can tell at a glance whether you
have time for a quick win or need to block out an evening.

## User story

> As a student who keeps finishing assignments at the last minute, I want to
> record how many hours each task will take and when it is really due, so that
> I see every deadline a day early and know which tasks I can knock out quickly
> and which need real time set aside.

The fields come out of the story:

- **`hours`**: a **number** input, because the story is about a quantity, and
  the Short and Long counts need a number to compare against 1.
- **`dueDate`**: a **date** input, because the app has to do date arithmetic on
  it (shift it back one day) and a free-text date can't support that.

## How to run it

You need two terminals, both in this folder:

```bash
npm install

# terminal 1: the fake REST API on http://localhost:3001
npm run server

# terminal 2: the app
npm run dev
```

The data lives in [`database/db.json`](database/db.json). To see the welcome
screen again, stop the server, set `"name"` back to `""` in that file, and
start the server again.

## How it is built

```
midterm/
├── database/db.json       json-server data: profile + tasks
├── api.js                 every axios call to json-server
├── reducers/tasks.js      useReducer: the task list, loading, error
├── context/user.jsx       UserContext: the name
├── context/tasks.jsx      TasksContext: dispatches to the reducer
├── hooks/                 useUserContext, useTasksContext
├── pages/
│   ├── WelcomePage.jsx    "What should we call you?"
│   └── TasksPage.jsx      picks loading / error / empty / caught up / list
├── components/            Header, CountCard, TaskList, TaskItem, TaskForm,
│                          TaskCreate, Field, EmptyState, AddButton, ...
└── utils/tasks.js         hours format, shift date back a day, short/long
```

- **First visit.** `App` runs a `useEffect` that asks the server for the saved
  name (`GET /profile`). If there isn't one, it shows `WelcomePage`. Submitting
  that page saves the name with `PUT /profile`, and the name goes into
  `UserContext`.
- **The list.** `TasksPage` runs a `useEffect` that fetches the tasks. The list
  is held by `useReducer` with the actions `FETCH_START`, `FETCH_SUCCESS`,
  `FETCH_ERROR`, `ADD_TASK`, `REPLACE_TASK` and `REMOVE_TASK`. The reducer
  never changes state directly. It always returns a new object.
- **Editing.** Tap a task's title, its hours, or its date, and that row turns
  into the edit form with the tapped field already focused. Saving sends the
  **whole** task with `PUT`. Ticking the checkbox sends only `{done}` with
  `PATCH`. The trash icon deletes the task.
- **The counts.** They are worked out from the list on every render and never
  stored, so they can't drift out of sync. Finished tasks aren't counted.
- **Filtering by the new field.** The Short and Long cards are toggle buttons.
  Tap Short to see only tasks of 1 hour or less, tap Long to see only tasks
  over 1 hour, and tap the active card again (or "Show all") to go back to
  everything.

## Props or Context, and why

I used **Context for two things only: who the user is and the task list.**
The name is needed by the header on every screen and is set by a completely
different page, so passing it down as props would have meant threading it
through components that don't use it. The task list is read by the header for
the counts, by the list, and by every row's edit, toggle and delete actions,
which is the same reason the class's V3 todo list moved it into a Provider.
Everything else stays local, as **props or `useState`**. Whether the New task
form is open belongs to `TasksPage`. So does the Short/Long filter: `TasksPage`
needs it to pick which tasks to show, and it passes `filter` and
`onFilterChange` down to `Header` as props, because those two are the only
components that care about it. Which field a row is editing belongs to
that `TaskItem`. What you have typed so far belongs to `TaskForm`. Nobody else
needs any of it, and putting it in Context would make every consumer re-render
when you type a letter.

## Future Improvements ##

Add a leaderboard - ranking system to gamify the application. By allowings friends to compete, productivity can be improved as at the end of the tasks get marked done.

An oboarding screen with introduction and person philosophy would be great as well!

## Developer checklist


## 1. The field has to work in all four places

This is the requirement, and it is where the marks are. Go through it as a
checklist, on your own project, with the app running:

- [x] **The create form** — the input exists, has a `label` with `htmlFor`, and
      its `name` matches the key in your state object.
- [x] **The request** — the field is in the body you send from `api.js`. Check
      `db.json` afterwards. If it is not in the file, it was never sent.
- [x] **The list** — the value is visible somewhere. A field that is stored and
      never shown is not a feature.
- [x] **The edit form** — the input is there, the existing value loads into it,
      and the field is included in the update. Remember that **`PUT` replaces
      the whole record and `PATCH` merges** — a `PUT` that is missing your new
      field will quietly delete it.

Then do the one test that catches everything: add an item, edit it, **reload the
page**, and check the value survived. If it did not, the problem is step 2 or 4.

## 2. Make it an app with a purpose

Not a todo list with an extra box. Styling is part of the grade, and so is the
app making sense as a thing a person would use.

- [x] It is clear within five seconds **what this app is for**. A title that is
      not "Todo List", and language that matches the purpose — "Add a recipe",
      not "Add a todo".
- [x] Your new field is **styled like it belongs**, not like it was bolted on.
- [x] The empty state says something useful. "Nothing yet. Add your first
      recipe above." beats a blank page.
- [x] Loading and error states still work. Stop `json-server` and look at the
      app: it should explain itself, not hang.
- [x] It is usable on a narrow window.

## 3. Use Thursday's class on your own form

Everything from Class B applies directly. At minimum:

- [x] **Validation that stops a bad submit** — an empty title should not create
      an item.
- [x] **A message next to the field**, in words, saying what to do. Not just a
      red border.
- [x] **The form does not clear until the save worked.** Check it: stop
      `json-server`, submit, and confirm your typing is still there.

If you have time, add `disabled={isSubmitting}` to the submit button. A
double-click saving two copies is the bug most likely to appear during a live
demo.

## 4. The two checklists

From the brief, and easy to leave until the night before — which is the one
thing that will cost you marks you could have had:

- [x] The **developer checklist** you wrote before you started, unchanged. Do
      not tidy it up.
- [x] A **revised checklist** of what the work actually took. The gap between
      the two is graded, and nobody's lists match. That is the point.

Both in your `README.md`.

## 5. Your five minutes

Practise it **once, out loud, with a timer**. Five minutes is shorter than it
sounds.

- [x] The elevator pitch — what the app is for, in two sentences.
- [x] Your user story, and how the field you added came out of it.
- [x] A live demo. Run it from your own machine with `json-server` already
      going, and have the app in the state you want before you stand up.
- [x] One piece of code you can explain. If you cannot explain it, do not show
      it.
- [ ] The two checklists, and what surprised you.

A slide deck is strongly recommended. Laptops closed while other people
present — participation is 25% of your grade.

## Optional, if the midterm is done

From Tuesday: take the three `useState` calls at the top of your Provider —
`todos`, `isLoading`, `error` — and move them into a reducer with
`FETCH_START` / `FETCH_SUCCESS` / `FETCH_ERROR`. Step 12 of
[ClassA.md](ClassA.md) has the whole thing written out.

**This is not part of the midterm.** Do it on a branch, after the required work
is pushed, and only if it is interesting to you.

---

## Submitting

```bash
git add .
git commit -m "midterm"
git push
```

Check on github.com that `node_modules` is not there, and that your `README.md`
is showing both checklists.
