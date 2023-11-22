/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function () {
  const list = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", liClick);
  }
  function liClick() {
    this.classList.toggle("done");
  }

  /**
   * Delete element when delete link clicked
   */

  $(".delete").click(function () {
    $(this).remove(); // remove element which is being clicked
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $("input").val();

    // rest here...
  };

  // add listener for add
  $(document).on("click", "ul", handler);
});
