*** Homework 7 ***

Short week. Game is in end of class, memory game finished. Midterm is in src/midterm.

1. Finishing the game
When every card is matched it says "You cleared the board in X turns!" in green. New Game clears it because shuffleCards sets won back to false.
I also added card === choiceTwo to the guard in handleChoice so you cant click the same card again while it is waiting to flip back. And made the wait 2 seconds on a no match so you actually see the second card.

The three questions

Which piece of state does the win check watch and why?
It watches cards. The only time something can become matched is when setCards gives matched: true to a pair, so cards changing is the exact moment it is worth checking. Watching turns or the choices would be checking at the wrong time.

What stops it declaring a win on a empty board?
cards.length > 0. Before you press New Game cards is an empty array, and .every() on an empty array returns true, so without that check it would say you won right when the page loads. That is a weird javascript thing.

Why could the match comparison not live in handleChoice?
Because state updates are queued until the next render. When I call setChoiceTwo(card) inside handleChoice, choiceTwo is still the old value (null) for the rest of that function. So comparing choiceOne and choiceTwo there would never see the new card. The useEffect with [choiceOne, choiceTwo] runs after the render where they changed, so by then both are really in state and it can compare. I left a comment in handleChoice about it.

2. Midterm, the three things
I wrote these before I opened my editor. All of it is in the README in src/midterm.

What is my app for?
Park In is a task list for students who always finish things the night its due. It shows every deadline a day early and splits your work into short and long tasks.

User story
As a student who keeps finishing assignments at the last minute, I want to record how many hours each task will take and when it is really due, so that I see every deadline a day early and know which tasks I can knock out quickly and which need real time set aside.
From that I got two fields, hours (number) and dueDate (date).

Developer checklist
Its in the midterm README as "Developer checklist (written before  and updated after coding)".

End to end
The fields work in the create form, they save to the server, they show in the list, and they are in the edit form too. The edit form was the one I almost forgot just like you said.

3. If you are behind
Not behind so I did not need this part. The midterm uses context like V3 but the list is in a useReducer.

Extra
Best score I already did in week 5 so I did not add it again here.
