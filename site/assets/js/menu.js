let navIsCollapsible = null;

function navIsVisible() {
  const navElements = document.getElementsByTagName("nav");
  const rect = navElements[0].getBoundingClientRect();
  return rect.bottom > 0;
}

function toggleNavExpanded(e) {
  let navIsNotCollapsed = e.target.getAttribute("aria-expanded") === "true";

  if (!(navIsNotCollapsed && !navIsVisible())) {
    e.target.setAttribute("aria-expanded", !navIsNotCollapsed);
  }

  jumpToTop();
}

function jumpToTop(e) {
  window.scrollTo(0, 0);
}

function handleScrollWhenNavVisible() {
  if (!navIsVisible()) {
    // nav always collapses outside viewport
    document.getElementById("menu-button").setAttribute("aria-expanded", false);

    document.getElementById("jump-button").style.display = "block";

    document.removeEventListener("scroll", handleScrollWhenNavVisible, false);
    document.addEventListener("scroll", handleScrollWhenNavNotVisible, {
      passive: true,
    });
  }
}

function handleScrollWhenNavNotVisible() {
  if (navIsVisible()) {
    document.getElementById("jump-button").style.display = "none";

    document.removeEventListener(
      "scroll",
      handleScrollWhenNavNotVisible,
      false
    );
    document.addEventListener("scroll", handleScrollWhenNavVisible, {
      passive: true,
    });
  }
}

function handleOnResize(e) {
  // force collapse the nav
  document.getElementById("menu-button").setAttribute("aria-expanded", false);

  const navElements = document.getElementsByTagName("nav");
  const rect = navElements[0].getBoundingClientRect();

  // nav needs to be collapsed for this to be true
  if (rect.top === rect.bottom) {
    navIsCollapsible = true;

    // ensure no listeners when sidebar is not active - ie menu at top
    document.removeEventListener(
      "scroll",
      handleScrollWhenNavNotVisible,
      false
    );
    document.removeEventListener("scroll", handleScrollWhenNavVisible, false);

    document.getElementById("jump-button").style.display = "none";
  } else {
    navIsCollapsible = false;

    // only add scroll listeners when sidebar is active
    document.addEventListener("scroll", handleScrollWhenNavVisible, {
      passive: true,
    });
  }
}

function decorateAnchors() {
  // add external link icon to relevant links in main content
  const mainContentNode = document.getElementsByTagName("main")[0];
  const links = mainContentNode.getElementsByTagName("a");
  const externalLinkSvgObject =
    document.getElementById("external-link").contentDocument;
  const externalLinkSvg = externalLinkSvgObject.getElementsByTagName("svg")[0];

  for (let link of links) {
    // only external ones
    if (link.attributes.href.value.startsWith("http")) {
      link.outerHTML += externalLinkSvg.outerHTML;
    }
  }

  // add anchor icon to headings in main content
  const h1Headings = Array.from(mainContentNode.getElementsByTagName("h1"));
  const h2Headings = Array.from(mainContentNode.getElementsByTagName("h2"));
  const h3Headings = Array.from(mainContentNode.getElementsByTagName("h3"));
  let headings = h1Headings.concat(h2Headings, h3Headings);
  const anchorSvgObject = document.getElementById("anchor").contentDocument;
  const anchorSvg = anchorSvgObject.getElementsByTagName("svg")[0];

  for (let heading of headings) {
    heading.innerHTML +=
      "<a href='#" +
      heading.attributes.id.value +
      "' alt='link to this anchor'>" +
      anchorSvg.outerHTML +
      "</a>";
  }
}

window.onresize = handleOnResize;

window.addEventListener("resize", handleOnResize);
window.addEventListener("load", function () {
  handleOnResize();
  decorateAnchors();
});
