# Parentheticals

Parentheticals is a jQuery plugin that allows you to style footnotes inline with the text. A picture will make more sense:

![A view of color-coded inline asides. Green text in an anchor is visually linked to a green footnote, displayed on the side of the primary text.](https://github.com/charliepark/parentheticals/raw/master/assets/dfw-host-screenshot.png)

This text is from David Foster Wallace's 2005 piece in *The Atlantic*, called "[Host](http://www.theatlantic.com/magazine/archive/2005/04/host/3812/?single_page=true)". I tried, with this plugin, to replicate the style from the print version as closely as possible. You can see an example of a whole page (PDF) from that article, [here](https://github.com/charliepark/parentheticals/raw/master/assets/WallaceAtlanticPage5.pdf)):

Here's a screenshot of what it looks like when rendered dynamically with Parentheticals.js:

<img src="https://github.com/charliepark/parentheticals/raw/master/assets/parentheticals_example.png" style="margin:0 auto;" alt="Some of the same text as the earlier example, but rendered with the Parentheticals JavaScript library." />


## Using Parentheticals

As Parentheticals is currently a jQuery plugin, you'll need to reference jQuery. **I'd love to move it off of jQuery as a dependency.** (Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.)

### Basic Principles

Each bit of anchor text has a color-coordinated footnote. To link the two up, we use the HTML5 data attributes of "data-anchor=x" (on the anchor) and "data-footnote=x" (on the footnote). The code in Parentheticals will go through and match up each of the footnotes with its anchor, then position them within the document.

You may also nest asides, when one aside needs to include another aside.

### Your HTML

Using a line of text from earlier in the readme:

* Anchor text should be indicated like this: `<a data-anchor=x>I'd love to move it off of jQuery as a dependency.</a>`
* Footnotes should be indicated like this: `<aside data-footnote=x>Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.</aside>`


### Your CSS

You'll need to add the CSS that lives in [parentheticals.css](https://raw.github.com/charliepark/parentheticals/master/parentheticals.css).


### Your JavaScript

As I mentioned, you'll need to call jQuery first. Then, you'll need to reference [parentheticals.js](https://raw.github.com/charliepark/parentheticals/master/parentheticals.js).

### Want to see an example?

When I get some time, I'll be making a GitHub project page for this, but for now, if you clone this project to your local machine, just open up the file at assets/example.html, and you'll be able to see it. I copied the original sample page from *The Atlantic*.