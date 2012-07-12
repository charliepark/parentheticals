# Parentheticals

Back in 2005, David Foster Wallace wrote a piece for *The Atlantic*, "[Host](http://www.theatlantic.com/magazine/archive/2005/04/host/3812/?single_page=true)". To include his footnotes in a present-but-non-intrusive way, the typesetters at the magazine used color-coded callouts that visually linked the anchor text with the corresponding footnote. A picture will make more sense. Here's a sample of a PDF version of the original article as it appeared in *The Atlantic*:

![A view of color-coded inline asides. Green text in an anchor is visually linked to a green footnote, displayed on the side of the primary text.](https://github.com/charliepark/parentheticals/raw/master/assets/dfw-host-screenshot.png)

**Parentheticals is a jQuery plugin that mimics the layout approach from DFW's piece.** Here's a screenshot of what it looks like when rendered dynamically with Parentheticals.js:

<img src="https://github.com/charliepark/parentheticals/raw/master/assets/parentheticals_example.png" alt="Some of the same text as the earlier example, but rendered with the Parentheticals JavaScript library." />

You can see an example of a whole page (PDF) from that article, [here](https://github.com/charliepark/parentheticals/raw/master/assets/WallaceAtlanticPage5.pdf)):


## Using Parentheticals

As Parentheticals is currently a jQuery plugin, you'll need to reference jQuery in your project. **I'd love to move it off of jQuery as a dependency.** (Feel free to send a pull request if you're comfortable with JavaScript and are interested in a small project.)

Each bit of anchor text has a color-coordinated footnote. To link the two up, we use the HTML5 data attributes of "data-anchor=x" (on the anchor) and "data-footnote=x" (on the footnote). The code in Parentheticals will go through and match up each of the footnotes with its anchor, then positions each footnote within the document, so that it's close to its corresponding anchor.

### Your HTML

Using a line of text from the screenshots above:

* Anchor text should be indicated like this: `<a data-anchor=x>on which most syndicated and large-market political talk radio is modeled</a>`
* Footnotes should be indicated like this: `<aside data-footnote=x><p>PURELY INFORMATIVE  It&rsquo;s true that there are, ...</p></aside>`


### Your CSS

You'll need to add the CSS that lives in [parentheticals.css](https://raw.github.com/charliepark/parentheticals/master/parentheticals.css).

You can also add in whatever custom CSS you like (say, to make the asides' text size even smaller, or to change the colors used, or whatever.)

### Your JavaScript

As I mentioned, you'll need to call jQuery first. Then, you'll need to reference [parentheticals.js](https://raw.github.com/charliepark/parentheticals/master/parentheticals.js).

### Want to see an example?

When I get some time, I'll make a GitHub project page for this, but for now, if you clone this project to your local machine, just open up the file at assets/example.html, and you'll be able to see it. I copied the original sample page from *The Atlantic*.

### Nesting Asides

You may also nest asides, when one aside needs to include another aside. Sometimes, when nesting complicated asides, you might want to manually assign specific numbers to the anchors and footnotes. In the file at assets/example.html, note the aside with data-footnote=0, and how it contains an anchor: data-anchor=0a. Later on, there's a secondary footnote, data-footnote=0a, which corresponds with the 0a anchor.

I know that's a little confusing. Generally, if you just keep your data-anchors and your data-footnotes in the order they should show up in in your document, you'll be all set.

In case you want to see what I mean with the "data-anchor=0a" thing I was talking about, here's some sample code, taken from the example document:

    <p>Which all sounds great, except of course &ldquo;explaining&rdquo; the news really means editorializing, infusing the actual events of the day with the host&rsquo;s own opinions. And here is where the real controversy starts, because these opinions are, as just one person&rsquo;s opinions, exempt from strict journalistic standards of truthfulness, probity, etc., and yet they are often delivered by the talk-radio host not as opinions but as revealed truths, truths intentionally ignored or suppressed by a &ldquo;mainstream press&rdquo; that&rsquo;s &ldquo;biased&rdquo; in favor of liberal interests. This is, at any rate, the rhetorical template for Rush Limbaugh&rsquo;s program, <a data-anchor=0>on which most syndicated and large-market political talk radio is modeled</a>, from ABC&rsquo;s Sean Hannity and Talk Radio Network&rsquo;s Laura Ingraham to G. G. Liddy, Rusty Humphries, Michael Medved, <a data-anchor=1>Mike Gallagher, Neal Boortz,</a> Dennis Prager, and, in many respects, <a data-anchor=2>Mr. John Ziegler.</a></p>
    <aside data-footnote=0><p>PURELY INFORMATIVE  It&rsquo;s true that there are, in some large markets and even syndication, a few political talk-radio hosts who identify as moderate or liberal. The best known of these are probably Ed Schultz, Thom Hartmann, and Doug Stephan. But only a few—and only <a data-anchor=0a>Stephan</a> has anything close to a national audience. And the tribulations of Franken et al.&rsquo;s Air America venture are well known. The point is that it is neither inaccurate nor unfair to say that today&rsquo;s political talk radio is, in general, overwhelmingly conservative.</p><aside data-footnote=0a><p>(whose show is really only semi-political)</p></aside></aside>
    <aside data-footnote=1><p>Quick sample intros: Mike Gallagher, a regular Fox News contributor whose program is syndicated by Salem Radio Network, has an upcoming book called <em>Surrounded by Idiots: Fighting Liberal Lunacy in America</em>. Neal Boortz, who&rsquo;s carried by Cox Radio Syndication and JRN, bills himself as &ldquo;High Priest of the Church of the Painful Truth,&rdquo; and his recent ads in trade publications feature the quotation &ldquo;How can we take airport security seriously until ethnic proﬁling is not only permitted, but <em>encouraged</em>?&rdquo;</p></aside>
    <aside data-footnote=2><p>Mr. Z. identiﬁes himself as a Libertarian, though he&rsquo;s not a registered member of the Libertarian Party, because he feels they &ldquo;can&rsquo;t get their act together,&rdquo; which he does not seem to intend as a witticism.</p></aside>
    