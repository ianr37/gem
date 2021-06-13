# gem

Prototype Flask web site using Web Services directly.

This is Work in progress so don't rely on anything being immutable.

Why I started this project.
---------------------------

The trigger for this project was that, just after reading Domain Driven Design (Eric Evans, Addison Wesley)
and Clean Architecture (Robert C Martin, Prentice Hall), I came across a bit of a rant (the source for which
I've forgotten) that I understood as "the Domain shouldn't be in the Browser". That set me thinking.

While I agreed with what I thought was the author's underlying premise - don't trust the client - I also realised
they were thinking there was only one domain in an application.

I'd beg to differ, there's at least two: one on the back-end and one of the front-end. The front end's domain
is primarily sending the user's commands to the back-end and presenting the server's "stuff" to the user. I say
"primarily" because we're no longer limited to the old command-response cycle.

I then realised that the same DDD & CA principles could be applied to the front-end code and decided to try it out;
additionally I decided to make it a publically accessible project because there seem to be very few combined front
and back end projects out there.

Onto my personal foibles for this project:

    - I'm intending to minimise the use of NPM packages having got used to the stability, quality and scope of the
      Python standard library. In particular both Vue and React each depend on well over a thousand independent
      packages and I've yet to comprehend how one can have a stable development environment using them out-of-the-box.
      I'd also be reticent to put that much third party code, some possibly of dubious quality, into a customer
      application.

    - Browsers, CSS, HTML and JavaScript have come a long way since Webpack, React, et. al. were first invented
      and as I'm not interested in supporting ancient versions of Internet Explorer I feel free to restrict the
      technology I'm using to ECMAScript 2020 and WebComponents. I happy to use a minimal subset of Webpack as part
      of my build process (though I did briefly consider replacing it with a Python script) but I'm deliberately
      excluding React, Vue, etc from the mix as I can't see they bring anything essential to the party.

    - There will probably be more...

Front-end architecture.
-----------------------

I see an SPA as a Hierarchical Finite State Machine so, following Martin's "Screaming Architecture" principle, I
should make that blatently obvious from the structure of the code. I'd suggest I should make it obvious to the user
that they are working with an FSM, even if they're not aware of the concept they will be used to appliances that
work that way such as central heating controls, coffee vending machines and TVs.






