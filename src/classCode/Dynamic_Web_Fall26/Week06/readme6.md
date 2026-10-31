*** Homework 6 ***

Work is in end of class, todo list V2.

1. Done toggle
Every todo has a done property now. New todos get done: false when they are created in api.js. Each row has a checkbox, and when its checked the title get a line through and goes grey. It saves to the server so after a refresh it is still checked, I tested it couple times.
Old todos in db.json that had no done at all just show unchecked, I used todo.done || false so the checkbox dont get undefined.

PUT or PATCH?
For the toggle I used PATCH and only send {done}. PATCH merges so the title and everything else stays.
For editing the title I use PUT but I send the whole todo with the new title, because PUT replaces the whole record. If you only send the title with PUT you lose done and anything else on it. learned that one the hard way.

2. Filter
Three buttons above the list, All, Active and Done. The one you picked is dark blue so you can tell which one is on. They only show when there is at least one todo. If a filter has nothing in it, it says "No done todos" or "No active todos".
The filter state lives in App, not in TodoFilter. App is the one that needs it to decide which todos to pass down to TodoList, and TodoFilter needs it to show which button is active. So it goes in the parent of both and TodoFilter get filter and onChange as props.

3. Questions

Why does the GET live in a useEffect with [] and not just in the component body?
If you call it in the body it run on every render. The fetch calls setTodos, setTodos causes a render, the render fetches again, and it never stops. With [] it only runs once when App first shows up.

In deleteTodoById, what happens if setTodos goes above the await?
The row would disappear right away before the server even answered. If the server is down the user sees the todo gone and thinks it worked, but it was never deleted. Then they refresh and it comes back, so the screen was lying to them. The way I have it, it waits for the server first, so if the request fails the todo stays on screen and the screen tells the truth.

Did the filter need a request?
No. All the todos are already in state, so filtering is just .filter() on data I already have. It is worked out every render as visibleTodos. Nothing changes on the server, its just which ones I choose to show.

Extra
Did the count of whats left. It says how many things left to do under the list, and it says "thing" when its 1. It is calculated at render with todos.filter(...).length, not stored in state.
Did not do sort, search or optimistic delete.
db.json is committed like you asked.
