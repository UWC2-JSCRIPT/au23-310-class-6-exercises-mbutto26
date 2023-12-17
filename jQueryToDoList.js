/**
 * Toggles "done" class on <li> element
 */
const toggle = function () {
  $(this).toggleClass("done");
  $("ul").on("click", "li", toggle);
};
/**
 * Delete element when delete link clicked
 */

const deleteParent = function () {
  $(this).parent().remove(); // remove element which is being clicked

  $("a.delete").on("click", deleteParent);
};
/**
 * Adds new list item to <ul>
 */

const addListItem = function (e) {
  e.preventDefault();
  const text = $(this).parent().find("input").val();
  $(this).parent().find("input").val("");

  // rest here...
  const $li = $("<li>");
  const $span = $(`<span>${text}</span>`);
  $li.append($span);

  const $deleteBtn = $(`<a class="delete">Delete</a>`);
  $deleteBtn.click(deleteParent);
  $li.append($deleteBtn);

  const $ul = $("ul");
  $ul.append($li);

  // add listener for add
  $(".add-item").click(addListItem);
};
