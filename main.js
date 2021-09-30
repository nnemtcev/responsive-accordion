const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

const accordion = document.querySelector(".accordion");

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (e) => {
    const currentlyActiveItemHeader = accordion.querySelector(
      ".accordion-item-header.active"
    );

    if (
      currentlyActiveItemHeader &&
      currentlyActiveItemHeader !== accordionItemHeader
    ) {
      currentlyActiveItemHeader.classList.remove("active");
      currentlyActiveItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = `${accordionItemBody.scrollHeight}px`;
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
