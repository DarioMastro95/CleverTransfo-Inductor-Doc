// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Operating-instructions.html"><strong aria-hidden="true">1.</strong> Operating instructions</a></li><li class="chapter-item expanded "><a href="Users.html"><strong aria-hidden="true">2.</strong> Users</a></li><li class="chapter-item expanded "><a href="General-settings.html"><strong aria-hidden="true">3.</strong> General settings</a></li><li class="chapter-item expanded "><a href="Electrical-parameters.html"><strong aria-hidden="true">4.</strong> Electrical parameters</a></li><li class="chapter-item expanded "><a href="Bulging-of-the-windings.html"><strong aria-hidden="true">5.</strong> Bulging of the windings</a></li><li class="chapter-item expanded "><a href="Construction-parameters.html"><strong aria-hidden="true">6.</strong> Construction parameters</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="NO-core.html"><strong aria-hidden="true">6.1.</strong> NO core</a></li><li class="chapter-item expanded "><a href="GO-core.html"><strong aria-hidden="true">6.2.</strong> GO core</a></li><li class="chapter-item expanded "><a href="Printed-lamination-bobbin.html"><strong aria-hidden="true">6.3.</strong> Printed lamination bobbin</a></li><li class="chapter-item expanded "><a href="Generic-elements.html"><strong aria-hidden="true">6.4.</strong> Generic elements</a></li><li class="chapter-item expanded "><a href="Copper-elements.html"><strong aria-hidden="true">6.5.</strong> Copper elements</a></li><li class="chapter-item expanded "><a href="Aluminium-elements.html"><strong aria-hidden="true">6.6.</strong> Aluminium elements</a></li><li class="chapter-item expanded "><a href="UL-elements.html"><strong aria-hidden="true">6.7.</strong> UL elements</a></li></ol></li><li class="chapter-item expanded "><a href="Material-tables.html"><strong aria-hidden="true">7.</strong> Material tables</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Threaded-rods.html"><strong aria-hidden="true">7.1.</strong> Threaded rods</a></li><li class="chapter-item expanded "><a href="Insulating-bushes.html"><strong aria-hidden="true">7.2.</strong> Insulating bushes</a></li><li class="chapter-item expanded "><a href="Lugs.html"><strong aria-hidden="true">7.3.</strong> Lugs</a></li><li class="chapter-item expanded "><a href="Multi-wire-cables.html"><strong aria-hidden="true">7.4.</strong> Multi wire cables</a></li><li class="chapter-item expanded "><a href="Conductors.html"><strong aria-hidden="true">7.5.</strong> Conductors</a></li><li class="chapter-item expanded "><a href="Nuts.html"><strong aria-hidden="true">7.6.</strong> Nuts</a></li><li class="chapter-item expanded "><a href="Steel-ducts.html"><strong aria-hidden="true">7.7.</strong> Steel ducts</a></li><li class="chapter-item expanded "><a href="Spacers-for-bobbins.html"><strong aria-hidden="true">7.8.</strong> Spacers for bobbins</a></li><li class="chapter-item expanded "><a href="Eyebolts.html"><strong aria-hidden="true">7.9.</strong> Eyebolts</a></li><li class="chapter-item expanded "><a href="Sheaths.html"><strong aria-hidden="true">7.10.</strong> Sheaths</a></li><li class="chapter-item expanded "><a href="Insulating-sheets.html"><strong aria-hidden="true">7.11.</strong> Insulating sheets</a></li><li class="chapter-item expanded "><a href="Insulators.html"><strong aria-hidden="true">7.12.</strong> Insulators</a></li><li class="chapter-item expanded "><a href="Magnetic-steel.html"><strong aria-hidden="true">7.13.</strong> Magnetic steel</a></li><li class="chapter-item expanded "><a href="Insulating-slabs.html"><strong aria-hidden="true">7.14.</strong> Insulating slabs</a></li><li class="chapter-item expanded "><a href="Terminal-blocks.html"><strong aria-hidden="true">7.15.</strong> Terminal blocks</a></li><li class="chapter-item expanded "><a href="Terminal-blocks-ST.html"><strong aria-hidden="true">7.16.</strong> Terminal blocks ST</a></li><li class="chapter-item expanded "><a href="Thermo-shrink-ribbons.html"><strong aria-hidden="true">7.17.</strong> Thermo shrink ribbons</a></li><li class="chapter-item expanded "><a href="U-profiles.html"><strong aria-hidden="true">7.18.</strong> U profiles</a></li><li class="chapter-item expanded "><a href="Flat-profiles.html"><strong aria-hidden="true">7.19.</strong> Flat profiles</a></li><li class="chapter-item expanded "><a href="Resins-and-varnishes.html"><strong aria-hidden="true">7.20.</strong> Resins and varnishes</a></li><li class="chapter-item expanded "><a href="Washers.html"><strong aria-hidden="true">7.21.</strong> Washers</a></li><li class="chapter-item expanded "><a href="Bars.html"><strong aria-hidden="true">7.22.</strong> Bars</a></li><li class="chapter-item expanded "><a href="Corner-dog-bones.html"><strong aria-hidden="true">7.23.</strong> Corner dog bones</a></li><li class="chapter-item expanded "><a href="Dog-bones.html"><strong aria-hidden="true">7.24.</strong> Dog bones</a></li><li class="chapter-item expanded "><a href="Insulating-tubes.html"><strong aria-hidden="true">7.25.</strong> Insulating tubes</a></li><li class="chapter-item expanded "><a href="Screws.html"><strong aria-hidden="true">7.26.</strong> Screws</a></li><li class="chapter-item expanded "><a href="Bobbins.html"><strong aria-hidden="true">7.27.</strong> Bobbins</a></li><li class="chapter-item expanded "><a href="UL-bobbins.html"><strong aria-hidden="true">7.28.</strong> UL bobbins</a></li><li class="chapter-item expanded "><a href="Printed-magnetic-steel.html"><strong aria-hidden="true">7.29.</strong> Printed magnetic steel</a></li><li class="chapter-item expanded "><a href="Brackets.html"><strong aria-hidden="true">7.30.</strong> Brackets</a></li></ol></li><li class="chapter-item expanded "><a href="Design-rules.html"><strong aria-hidden="true">8.</strong> Design rules</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Winding-insulation.html"><strong aria-hidden="true">8.1.</strong> Winding insulation</a></li><li class="chapter-item expanded "><a href="Default-insulation.html"><strong aria-hidden="true">8.2.</strong> Default insulation</a></li><li class="chapter-item expanded "><a href="Bar-drilling.html"><strong aria-hidden="true">8.3.</strong> Bar drilling</a></li><li class="chapter-item expanded "><a href="Carpentry-details.html"><strong aria-hidden="true">8.4.</strong> Carpentry details</a></li><li class="chapter-item expanded "><a href="Selecting-output-terminal-type.html"><strong aria-hidden="true">8.5.</strong> Selecting output terminal type</a></li><li class="chapter-item expanded "><a href="Air-gap-composition.html"><strong aria-hidden="true">8.6.</strong> Air gap composition</a></li><li class="chapter-item expanded "><a href="Interlayer-insulation-thick.html"><strong aria-hidden="true">8.7.</strong> Interlayer insulation thick</a></li></ol></li><li class="chapter-item expanded "><a href="Material-costs.html"><strong aria-hidden="true">9.</strong> Material costs</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
