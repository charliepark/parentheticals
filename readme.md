# Parentheticals

Parentheticals is a jQuery plugin that allows you to style footnotes inline with the text. A picture will make more sense:

![A view of color-coded inline asides. Green text in an anchor is visually linked to a green footnote, displayed on the side of the primary text.](https://github.com/charliepark/parentheticals/raw/master/dfw-host-screenshot.png)

This text is from David Foster Wallace's 2005 piece in *The Atlantic*, called "[Host](http://www.theatlantic.com/magazine/archive/2005/04/host/3812/?single_page=true)". I tried, with this plugin, to replicate that style as closely as possible.

## Using Parentheticals

As Parentheticals is currently a jQuery plugin, you'll need to be referencing it. I'd love to move it off of jQuery as a dependency. (Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.)

### Basic Principles

Each bit of anchor text has a color-coordinated footnote. To link the two up, we use the HTML5 data attributes of "data-footnote" (on the anchor) and "data-anchor" (on the footnote). Each has a numeric value. You may also append letters on, in situations where you need to nest your footnotes.

### Your HTML



### Your CSS

You'll need to add the following


### Your JavaScript

As I mentioned, you'll need to call jQuery.