import * as React from "react";

export function useProjectPreview() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [targetRect, setTargetRect] = React.useState<DOMRect | null>(null);
  const hoverTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const isOverCard = React.useRef(false);
  const isOverPreview = React.useRef(false);

  const checkClose = React.useCallback(() => {
    setTimeout(() => {
      if (!isOverCard.current && !isOverPreview.current) {
        setIsOpen(false);
      }
    }, 80);
  }, []);

  const handleMouseEnterCard = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      isOverCard.current = true;
      const rect = e.currentTarget.getBoundingClientRect();
      setTargetRect(rect);

      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = setTimeout(() => {
        if (isOverCard.current) {
          setIsOpen(true);
        }
      }, 120);
    },
    []
  );

  const handleMouseLeaveCard = React.useCallback(() => {
    isOverCard.current = false;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    checkClose();
  }, [checkClose]);

  const handleMouseEnterPreview = React.useCallback(() => {
    isOverPreview.current = true;
  }, []);

  const handleMouseLeavePreview = React.useCallback(() => {
    isOverPreview.current = false;
    checkClose();
  }, [checkClose]);

  const handleFocus = React.useCallback((e: React.FocusEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTargetRect(rect);
    setIsOpen(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    targetRect,
    handleMouseEnterCard,
    handleMouseLeaveCard,
    handleMouseEnterPreview,
    handleMouseLeavePreview,
    handleFocus,
    handleBlur,
  };
}
