*** Homework 5 ***

Two projects this week, both in end of class folder. memory game and image search.

1. Memory game, my own art and best score
I swapped the cards for my own four images, sunrise, night sky, ocean wave and mountain peak. They are svg files in src/assets. Only had to change the imports and the cardImages array in Grid.jsx, nothing else broke so I guess its not too hard coded.

Best score shows under the turn counter. It says "none yet" before you win any game, then it shows the lowest turns you won with. If you beat it, it updates. New Game does not reset it because shuffleCards only resets turns and won, it never touches bestScore.
The check lives in its own useEffect in Grid. It watches won and turns. When won turns true it compares turns with the old best and keeps whichever is lower. I used the updater form setBestScore(prevBest => ...) so it always compare with the real latest value.

2. Image search, credit the photographer
Under every photo it says "Photo by" and the photographer name. The name is a link to their Unsplash profile using user.name and user.links.html from the photo object, I found them by console logging one image. The link opens in new tab with target="_blank" and rel="noreferrer".
Also added a heading above results that says Photos of "whatever you searched", so the page tells you what its showing. There is also a message if a search comes back with zero photos.

3. Search on load
The page searches "mountains" when it first load so it is not empty. I did it with useEffect and an empty array [] so it runs one time when App mounts.
I checked the network tab. In dev it shows 2 requests on load, which scared me at first, but that is just StrictMode running effects twice in development. It is not a loop and it does not keep going.

4. Questions

Which dependency array did each effect use and why?
Default search in App.jsx: [] , I only want it once when the page opens, not every render.
Win check in Grid.jsx: [cards] , because cards is the thing that changes when a pair get matched, so thats when it should check if everything is matched. cards.length > 0 is there so it does not say you won on the empty board before you press New Game.
Best score in Grid.jsx: [won, turns] , it needs to know the game was won and how many turns it took.
Match check in Grid.jsx: [choiceOne, choiceTwo] , from class, runs after either choice changes.

What would happen if I put images in the dependency array of the search on load effect?
It would be a infinite loop. The effect searches, the search calls setImages, images is a new array so the effect thinks it changed and runs again, that searches again and sets images again, and on and on. Even if the results are the same it is a new array every time so it never stops. With the 50 per hour limit it would burn the whole hour in like a few seconds.

Extra
Did not do the localStorage best score, six pairs, skeleton or debounce. Maybe the debounce one later it sounds cool.
.env.local is not on github, checked.
