Kevin Lam, A15941616

home: https://boisterous-fairy-048952.netlify.app/index.html

note: I'm not sure how much it matters, but I think I fixed the blog parts that were broken from hw4.it was one line of code I forgot making add break, though I did find an error with my eventListeners as well. I probably can't get points back, but I figured I might as well mention it? 

To be more specific, I didn't account for the case when initially loading the page, where posts did not exist in localStorage; I thought I had tried it in incognito to get rid of the localStorage, but I guess I didn't; in order to fix it, I simply pushed the 3 default posts to localStorage immediately after creating them. 

For the event listners, I realized I kept attaching them to the dialog buttons, so it ended up having, for example, three different deelte functions even after the deletes had been completed; in order to fix that, I added {once:true} as the third argument to addEventListener to make sure the functions only ever executed the one time, since they're redadded every time to dialog reopens and is repopulated with information. unfortunate.

note: hw5 parts can be accessed through the musings pages.