// @fixme Let's fix this so we can import straight CSS and get back syntax highlighting
export default `
/* Custom CSS */
div.notion-topbar .toggle-mode { display: none !important; }
div.notion-topbar > div > div:nth-last-child(1) { display: none !important; }
div.notion-topbar > div > div:nth-last-child(2) { display: none !important; }
div.notion-topbar > div > div:nth-child(3) { display: none !important; }
div.notion-topbar > div > div:nth-child(4) { display: none !important; }
div.notion-topbar > div > div:nth-child(5) { display: none !important; }
div.notion-topbar > div > div:nth-child(6) { display: none !important; }
div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
/*div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }*/
.notion-frame > .notion-scroller > .whenContentEditable > *:not(main)
{
  display: none !important;
  opacity: 0 !important;
}

.notion-topbar {
  background: #4a468b !important;
}
.notion-topbar * {
  color: #fff !important;
}

.notion-frame,
.notion-cursor-listener {
  background: #2d2b55 !important;
  color: #fff;
}

body a {
  color: #fad000;
}

.notion-transclusion_container-block,
.notion-callout-block {
  color: #2d2b55
}

[placeholder="Heading 1"],
[placeholder="Heading 2"],
[placeholder="Heading 3"],
[placeholder="Write a caption…"],
.notion-bookmark-block * {
  color: #fff !important;
}

/* todo */
.notion-to_do-block * {
  color: #fff !important;
}
body .notion-reminder, .notion-text-mention-token *,
.notion-bulleted_list-block .pseudoBefore:before {
  color: #ff628c !important;
}
a > .notion-text-mention-token *,
a > .notion-page-mention-token__title,
a.notion-link-token > span {
  color: #fad000 !important;
  font-weight: 900 !important;
  opacity: 1 !important;
}
.notion-to_do-block [style*="text-decoration: line-through"] {
  text-decoration: 2px line-through #ff628c !important;
}



/* Gallery */
.notion-collection-item > a {
  background: #4a468b !important;
}

.notion-collection_view-block div[style*="border-bottom: 2px solid rgb("] {
  border-bottom-color: #fad000 !important;
}

.notion-collection_view-block > div {
  box-shadow: none !important;
}

.notion-collection_view-block *:not([class*=status][class$=Group]):not([class*=status][class$=Group] ~ *) {
  fill: #fff !important;
  color: #fff !important;
}

/* Boards */
.notion-board-view > .notion-collection_view-block > div {
  background: none !important;
  fill: none !important
}

.notion-board-view > .notion-collection_view-block > div:first-child div:first-child {
  background: none !important;
}

/* Calendar */
.notion-calendar-header-days,
.notion-calendar-view > .notion-collection_view-block > div:first-child div:first-child {
  background: #4a468b !important;
}
.notion-calendar-view .notion-calendar-header-days * {
  color: #9effff !important;
  font-weight: bold !important;
}

.notion-calendar-view > .notion-collection_view-block > *,
.notion-collection-view-body .notion-calendar-view .notion-collection_view-block {
  background: none !important;
}
`