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



/* Gallery */
.notion-page-block.notion-collection-item a div,
.notion-collection_view-block + div {
  background: #4a468b
}

.notion-collection_view-block div[style*="border-bottom: 2px solid rgb("] {
  border-bottom-color: #fad000 !important;
}

.notion-collection_view-block > div {
  box-shadow: none !important;
}

.notion-collection_view-block * {
  fill: #fff !important;
  color: #fff !important;
}
`