var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

tweeter();

setInterval(tweeter, 60*60*1000);

function tweeter() {

fact = ["Asriel's name is a combination of his parents' names (Asgore and Toriel).",
        "Asriel Dreemurr's name is an anagram of Serial Murderer.",
        "Asriel's front-facing overworld sprite is slightly asymmetrical, such as with a single pixel placement on his head. However, his back-facing sprite has a symmetrical head.",
        "Omega Flowey's red and green eyes are the exact same shades of red and green that are used as default color choices in MS Paint.",
        "Omega Flowey's metal tubes around his TV head are shaped to resemble flower petals.",
        "Omega Flowey's TV head actually has two antennas coming out of the top, but they go off-screen in game. Ripping the game's assets allows you to clearly see them in full.",
        "Flowey's petals and stem use the exact same yellow and green colors as Asriel's striped shirt.",
        "Asriel's winged boss form is shaped to somewhat resemble the Delta Rune.",
        "The blue outline on Asriel's overworld sprite prevents his black pants from blending in with the background.",
        "Asriel Dreemurr is the best Undertale character.",
        "The color code for the green on Asriel's shirt is 9BFD71.",
        "The color code for the yellow on Asriel's shirt is FFF200.",
        "The color code for Asriel's blue outline is 283197.",
        "Upon ripping the game's assets, it can be seen that one of Asriel's talking sprites has an error where a few pixels are a dark reddish-brown (color code: 3D120E) instead of black.",
        "\"Everytime someone calls final-boss Asriel hot an angel gets its wings.\" - Toby Fox, quote taken from the Undertale Art Book.",
        "Asriel's last name is Dreemurr. It's NOT Dreemur, Dremurr, Dremmur, Dreemuur, or anything like that. It's \"D-R-E-E-M-U-R-R\". Learn how to spell.",
        "Asriel's boss form is very handsome.",
        "Asriel and his parents do not have visible tails, despite common depictions in fan art.",
        "Flowey does not appear to have any leaves, despite common depictions in fan art.",
        "Asriel Dreemurr is very cute and deserves lots of love and respect.",
        "Asriel and Chara are siblings so please don't ship them together, it's gross. I don't care that Chara was adopted, it's still gross. (Frisk could also be considered Asriel's sibling since you can choose to live with his mom, Toriel, at the end of the game. So stop shipping them!)",
        "Asriel has a noticeably slimmer body type than both of his parents. This is true for both his child and adult forms.",
        "Flowey is physically unable to feel love because he lacks a SOUL.",
        "If the player decides to backtrack, they might catch a glimpse of Flowey stalking them before he retreats back into the ground.",
        "Flowey's face appears to be white, but in his overworld sprite, some of the pixels around his face are actually a very pale cream (color code: FEFFDF). This is easier to see if you view the ripped sprite assets.",
        "When Asriel first transforms into his boss form (while his name is appearing on the screen), part of the outline around his waist is strangely missing. This is fixed once the battle begins, along with a few other subtle changes.",
        "Asriel's boss form does not have a true official color scheme since it does not appear in the overworld. However, it is assumed that his robes are the same color as his mother's.",
        "If you draw fetish art of Asriel or Flowey, then you are a disgusting and terrible person and I will block you from following this account.",
        "Flowey's voice clip (\"Hmm, that's a wonderful idea!\") is edited audio from an old McDonald's commercial from the 1960s. Omega Flowey's cries are also taken from this commercial.",
        "Asriel Dreemurr's boss form is also known as the Absolute GOD of Hyperdeath.",
        "The name \"Omega Flowey\" is an unofficial name coined by fans to refer to Flowey's boss form. He is not called by an official name in-game, although the files refer to him as \"Photoshop Flowey\" and the code calls him \"Flowey X\".",
        "The color-changing sprite used inside the wings of Asriel's final form depicts buildings resembling those found in Fourside from Earthbound.",
        "During the flashback cutscene, Asriel's silhouette seems to depict him with horns, despite the fact that he does not have any horns as a child. The horns are no longer present for the rest of the scenes during this flashback sequence.",
        "Flowey has exactly six petals. No more, no less.",
        "Asriel's shirt in the flashback cutscene is different from the shirt he wears otherwise; it only has 1 stripe, while his normal shirt has multiple."];

var tweet = fact[Math.floor((Math.random() * fact.length))];

console.log(tweet);
    
  T.post('statuses/update', { status: tweet }, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      console.log(response);
    }
  }
}