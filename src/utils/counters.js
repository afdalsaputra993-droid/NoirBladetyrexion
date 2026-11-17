import { CountUp } from "countup.js";

export function initcounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((el) => {
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";

    new CountUp(el, target, {
      duration: 2.5,
      separator: ".",
      prefix: prefix,
      suffix: suffix,
      autoAnimate: true,
      autoAnimateOnce: true
    });
  });
}
  