---

title: "Exploring Fantasy Premier League Data with Shiny"
layout: post
author: "Matt Purtill"
date: "05/11/2020"
output:
   md_document:
      preserve_yaml: TRUE
always_allow_html: true

---

This R Shiny app gives a view of top performing Fantasy Premier League
players based on their points and cost. At the core of the game is the
optimisation of points scored while remaining within a budget. To help
determine ‘value’ picks, lines show combinations of equal points scored
by cost.

Filters allow the user to select for players of specific position and
maximum cost. A filter on popularity (specifically the percentage that
have a player picked) allows the user to find undiscovered
‘differential’ picks.

The visualisation is based off of a static data file to avoid too many
API requests using the
[fplscrapR](https://wiscostret.github.io/fplscrapR/) package. Because of
this, the data presented may be out of date.

Source code can be found on
[GitHub](https://github.com/purtill/soccer/tree/master/fpl.player.chart)
here.

<iframe width="800" height="1000" scrolling="no" frameborder="no" src="https://purtill.shinyapps.io/fpl_player_chart/">
</iframe>
