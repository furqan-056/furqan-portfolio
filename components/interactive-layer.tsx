"use client";
import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function InteractiveLayer() {
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 981px) and (min-height: 650px) and (pointer: fine)");
    const shell = document.querySelector<HTMLElement>(".work-scroll-shell");
    const sticky = document.querySelector<HTMLElement>(".work-sticky");
    const viewport = document.querySelector<HTMLElement>(".work-viewport");
    const track = document.querySelector<HTMLElement>(".project-list");
    const railProgress = document.querySelector<HTMLElement>(".work-progress span");
    const portrait = document.querySelector<HTMLElement>(".portrait-stage");
    const hero = document.querySelector<HTMLElement>(".hero");
    const wordHeading = document.querySelector<HTMLElement>("[data-word-reveal]");
    const words = Array.from(wordHeading?.querySelectorAll("span") ?? []);
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".section-heading, .timeline-item, .project, .github-card, .education-section, .contact-section, .about-studio > div > p"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-header nav a"));
    let frame = 0;
    let distance = 0;
    let horizontal = false;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.visible = "true";
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.hash === `#${entry.target.id}`;
          link.dataset.active = String(active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -60%", threshold: 0 });
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) navObserver.observe(section);
    });

    // Batch geometry reads before writes; scrolling never triggers React renders.
    const render = () => {
      frame = 0;
      const height = window.innerHeight;
      const scrollable = document.documentElement.scrollHeight - height;
      const shellTop = shell?.getBoundingClientRect().top ?? 0;
      const wordTop = wordHeading?.getBoundingClientRect().top ?? height;
      const heroHeight = hero?.offsetHeight ?? height;
      const rail = horizontal ? clamp((40 - shellTop) / Math.max(distance, 1)) : 0;
      const text = clamp((height * 0.85 - wordTop) / (height * 0.48));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${scrollable > 0 ? clamp(window.scrollY / scrollable) : 0})`;
      if (track) track.style.transform = horizontal ? `translate3d(${-rail * distance}px,0,0)` : "";
      if (railProgress) railProgress.style.transform = `scaleX(${rail})`;
      if (portrait) portrait.style.transform = motion.matches ? "" : `translate3d(0,${Math.min(window.scrollY, heroHeight) * 0.14}px,0)`;
      words.forEach((word, index) => {
        word.style.opacity = motion.matches ? "1" : String(0.22 + 0.78 * clamp(text * (words.length + 2) - index));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const measure = () => {
      horizontal = desktop.matches && !motion.matches;
      if (shell && track && viewport && sticky) {
        shell.dataset.horizontal = String(horizontal);
        distance = horizontal ? Math.max(0, track.scrollWidth - viewport.clientWidth) : 0;
        shell.style.height = horizontal ? `${distance + sticky.offsetHeight}px` : "";
        if (!horizontal) track.style.transform = "";
      }
      revealObserver.disconnect();
      targets.forEach((target) => {
        const visible = target.getBoundingClientRect().top < window.innerHeight || motion.matches || (horizontal && target.classList.contains("project"));
        target.dataset.motionReveal = "true";
        if (visible) target.dataset.visible = "true";
        else revealObserver.observe(target);
      });
      schedule();
    };
    // Keyboard focus moves directly to offscreen cards, without scroll animation.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-motion-reveal]");
      if (target) target.dataset.visible = "true";
      if (!horizontal || !shell || !track || !event.target.matches(":focus-visible")) return;
      const card = event.target.closest<HTMLElement>(".project");
      if (!card) return;
      window.scrollTo({ top: window.scrollY + shell.getBoundingClientRect().top - 40 + Math.min(card.offsetLeft, distance), behavior: "instant" });
    };
    const resizeObserver = new ResizeObserver(measure);
    if (viewport) resizeObserver.observe(viewport);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    document.addEventListener("focusin", onFocus);
    motion.addEventListener("change", measure);
    desktop.addEventListener("change", measure);
    return () => {
      cancelAnimationFrame(frame);
      revealObserver.disconnect();
      navObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      document.removeEventListener("focusin", onFocus);
      motion.removeEventListener("change", measure);
      desktop.removeEventListener("change", measure);
      targets.forEach((target) => { delete target.dataset.motionReveal; });
      if (shell) { delete shell.dataset.horizontal; shell.style.height = ""; }
      if (track) track.style.transform = "";
      if (portrait) portrait.style.transform = "";
      words.forEach((word) => { word.style.opacity = ""; });
    };
  }, []);
  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
