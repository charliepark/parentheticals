# Parentheticals

Parentheticals is a jQuery plugin that allows you to style footnotes inline with the text. A picture will make more sense:

![A view of color-coded inline asides. Green text in an anchor is visually linked to a green footnote, displayed on the side of the primary text.](https://github.com/charliepark/parentheticals/raw/master/assets/dfw-host-screenshot.png)

This text is from David Foster Wallace's 2005 piece in *The Atlantic*, called "[Host](http://www.theatlantic.com/magazine/archive/2005/04/host/3812/?single_page=true)". I tried, with this plugin, to replicate the style from the print version as closely as possible. You can see an example of a whole page (PDF) from that article, [here](https://github.com/charliepark/parentheticals/raw/master/assets/WallaceAtlanticPage5.pdf)):

## Using Parentheticals

As Parentheticals is currently a jQuery plugin, you'll need to be referencing it. I'd love to move it off of jQuery as a dependency. (Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.)

### Basic Principles

Each bit of anchor text has a color-coordinated footnote. To link the two up, we use the HTML5 data attributes of "data-footnote" (on the anchor) and "data-anchor" (on the footnote). Each has a numeric value. You may also append letters on, in situations where you need to nest your footnotes.

### Your HTML

Using a line from earlier in the readme:

* Anchor text should be indicated like this: `<a data-footnote=0>I'd love to move it off of jQuery as a dependency.</a>`
* Footnotes should be indicated like this: `<aside data-anchor=0>Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.</aside>`


### Your CSS

You'll need to add the CSS that lives in [parentheticals.css](https://raw.github.com/charliepark/parentheticals/master/parentheticals.css).


### Your JavaScript

As I mentioned, you'll need to call jQuery first. Then, you'll need to reference [parentheticals.js](https://raw.github.com/charliepark/parentheticals/master/parentheticals.js).