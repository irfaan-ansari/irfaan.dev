import React from "react";
import { TOCItemType } from "fumadocs-core/toc";

export function useToc(toc: TOCItemType[]) {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  React.useEffect(() => {
    if (!toc.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        if (!entry) return;

        const id = entry.target.id;

        const index = toc.findIndex((item) => item.url === `#${id}`);

        if (index === -1) return;

        setActiveIndex(index);
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    toc.forEach((item) => {
      const id = item.url.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  return { activeIndex };
}
