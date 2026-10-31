*** Homework 4 ***

My work is in end of class B folder.

1. Adding my component to the library
My component from last week is the Tabs, so I put Tabs.jsx in components and TabsPage.jsx in pages. The page is about raising chickens with three tabs, Coop, Feed and Eggs. dont ask why, I just think chickens are funny.
Added a Route for /tabs in App.jsx and a Link for it in NavBar.jsx under Modal. Tabs had a box with border and shadow so I wrapped it in Panel instead of writing the classes again, the Dropdown use Panel too.
Clicked through all five pages in the nav (Buttons, Accordion, Dropdown, Modal, Tabs) and they all work with no page reload. That part felt good.

2. Escape key
Both the Dropdown and the Modal close when you press Escape now. Its a keydown listener on document inside a useEffect, and it checks if event.key is 'Escape'.

The Dropdown calls setIsOpen(false) because the dropdown owns its own isOpen state, nobody outside cares if its open.
The Modal calls onClose instead because the Modal dont own any state. The page that opens it (ModalPage) is the one holding if it is showing or not, so the modal can only ask the parent to close it. Where the state lives is who gets to change it.

3. Questions

Which useEffect form did I use and why?
Dropdown: I used [] . The handler only uses setIsOpen and that never changes, so adding the listener one time when it mounts is enough.
Modal: I used [onClose] . The handler calls onClose which is a prop from the parent, so if the parent ever gives a new function the effect runs again and the listener uses the new one, not a old stale one.
I did not use the no array version because that runs after every render and would add a listener every time.

What does my cleanup function remove?
In both it removes the keydown listener with document.removeEventListener. Without it every time the dropdown or modal mounts again you get one more listener and they pile up, so pressing Escape once would fire alot of times.
The Modal also have another effect that already removes the overflow hidden class from the body when it closes so the page can scroll again.

Extra stuff
Did not do the 404 page or the NavLink highlight this week. maybe later.
