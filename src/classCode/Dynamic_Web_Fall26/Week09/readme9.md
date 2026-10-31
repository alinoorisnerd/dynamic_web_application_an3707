*** Homework 9 ***

Midterm code due Friday, that was the homework. Its all in src/midterm.

After presenting
Nothing broke in the demo, so no emergency fixes.
Field works in all four places, create form, the request in api.js, the list, and the edit form. Did add, edit, reload again and the value survived.
PUT sends the whole task every time so it does not quietly delete hours or dueDate. Toggle is PATCH with only done.
Old rows in db.json without hours or a date dont show undefined. They say "No estimate" or "No due date" and they are left out of the Short and Long counts.
Both checklists are in the README, the before one unchanged.

Thursdays class
Message next to each field in words.
onBlur and touched, so the message only shows after you leave the field and not on the first letter you type. When you hit submit it marks all of them touched so every error shows at once.
Form does not clear until the save worked, tested with the server off.
disabled={isSubmitting} on the submit button.

Before pushing
Went through it like a user. added, edited, deleted, reloaded. Submitted the form empty and it told me what was missing. Stopped json server and it explained itself with a Try again button. Console had no red.
db.json is committed and node_modules is not.
