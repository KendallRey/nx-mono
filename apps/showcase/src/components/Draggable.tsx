import { useDraggable } from "@dnd-kit/core";
import { ComponentProps } from "react";

export function Draggable(props: ComponentProps<'button'>) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id ?? '',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}