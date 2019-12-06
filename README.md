# Michael Scott Memory Game
The Office themed memory game with different levels and click counter

<img src="https://media.giphy.com/media/ui1hpJSyBDWlG/giphy.gif" width="100%">

## Testers
* [Bernhard Stedt](https://github.com/vehx)
* [TBD](https://github.com)

## Code Review

1. Javascript - line 115: Increase readability by putting the condition within a variable called isMatch. “If (isMatch) { do this }” i.e.
2. Javascript - line 46: I’m not 100% sure what this if statement means. Maybe this could also be put into a variable to increase readability.
3. Javascript - line 165: I don’t think you need to write “window.onload” here. “startGame()” by itself should be be invoked on load automatically.
4. Regarding the first 19 lines of your CSS code, it seems like the properties goes for pretty much every possible element (to be honest i haven’t checked). Maybe just write “*” here? Or if you haven’t for a special reason, maybe add a comment to explain why for other developers that might check out your code.
5. In your HTML, you could add some separation between the body tag and the wrapper tag for example, for increased readability. But to be fair this is more of a personal preference kind of thing.
6. Bonus comment: Great theme!! But the gif in your readme is from the movie Crazy, Stupid, Love, not The Office :/
## License

This project is licensed under the MIT License - see the <a href="https://github.com/deinnielle/plain-news/LICENSE">License file</a> for more details
