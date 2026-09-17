import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; caption?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const open = index !== null;
  const current = open ? images[index] : null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, go]);

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col bg-ink/95 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          {/* top bar */}
          <div
            className="flex items-center justify-between px-5 py-4 text-white shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Excella Gallery</p>
            <div className="flex items-center gap-4">
              <span className="text-sm tabular-nums text-white/70">
                {(index ?? 0) + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close viewer"
                className="h-10 w-10 grid place-items-center rounded-full border-white/25 bg-white/10 hover:bg-white/20 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* main image */}
          <div
            className="relative flex-1 flex items-center justify-center px-4 md:px-16 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 h-12 w-12 grid place-items-center rounded-full border-white/25 bg-white/10 hover:bg-white/20 text-white transition shrink-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.caption ?? "Excella School"}
                className="block max-h-[60dvh] md:max-h-[72dvh] max-w-[88vw] md:max-w-[82vw] w-auto h-auto min-h-0 min-w-0 object-contain rounded-xl shadow-elegant"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  if (info.offset.x > 80) go(-1);
                }}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 md:right-6 h-12 w-12 grid place-items-center rounded-full border-white/25 bg-white/10 hover:bg-white/20 text-white transition shrink-0"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* thumbnail strip */}
          <div
            className="flex gap-2 overflow-x-auto px-5 pb-5 pt-1 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onNavigate(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === index
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <img
                  src={img.src}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
