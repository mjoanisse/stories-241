var protoNavLink;
// ***
function setSelectedLinkClass() {
  var onSection = $('.chh-narrative.on');
  var onSectionId = onSection.attr('data-id');
  protoNavLink.removeClass('on');
  var matchingLink = protoNavLink.filter('[data-get-id="'+onSectionId+'"]');
  matchingLink.addClass('on');
}
function enableMainScroll() {
  $('html, body').removeClass('scroll-none');
}
function disableMainScroll() {
  $('html, body').addClass('scroll-none');
}
function collapseLinksDrawer() {
  $('.links-drawer').removeClass('expanded').addClass('collapsed');
  enableMainScroll();
}
function expandLinksDrawer() {
  $('.links-drawer').removeClass('collapsed').addClass('expanded');
}
$(document).on('keydown', function(e) {
  if (e.key == 'Escape') {
    collapseLinksDrawer();
  }
});
$(document).on('click', function(e) {
  var eventTarget = $(e.target);
  // If "modal" not open, return.
  if ($('.links-drawer.expanded').length < 1) return;
  // Traverse event target ancestors and see if the preview box is present.
  // If it's not, we know the click lies somewhere outside the preview box.
  // In which case = .. we minimize our preview box.
  if (!eventTarget.closest('.links-drawer').length) {
    collapseLinksDrawer();
  }
});
$(function() {
  protoNavLink = $('.proto-nav a');
  setSelectedLinkClass();
  // ***
  protoNavLink.click(function(e) {
    e.preventDefault();
    var dataId = $(this).attr('data-get-id');
    $('.chh-narrative').removeClass('on');
    var selSection = $('[data-id="'+dataId+'"]');
    selSection.addClass('on');
    setSelectedLinkClass();
    $('.links-drawer').removeClass('on');
    selSection.find('.links-drawer').addClass('on');
  });
  $('.lidr__all-button').click(function(e) {
    e.preventDefault;
    expandLinksDrawer();
    disableMainScroll();
  });
});