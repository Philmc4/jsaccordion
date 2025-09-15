const accordionHeaders = document.querySelectorAll(".faq-dropdown-header");
const accordionContents = document.querySelectorAll(".faq-dropdown-body");
const faqBtn = document.querySelectorAll(".faq-icon");
const headingColor = document.querySelectorAll(".text-2");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".faq-dropdown-body");
    const icon = accordionItem.querySelector(".faq-icon");
    const heading = accordionItem.querySelector(".text-2");

    accordionContents.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("open");
      }
    });

    faqBtn.forEach((clicker) => {
      if (clicker !== icon) {
        clicker.classList.remove("open");
      }
    });
    headingColor.forEach((color) => {
      if (color !== heading) {
        color.classList.remove("active-header");
      }
    });

    accordionContent.classList.toggle("open");
    icon.classList.toggle("open");
    heading.classList.toggle("active-header");
  });
});
