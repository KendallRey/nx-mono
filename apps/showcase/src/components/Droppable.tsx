import React, { ComponentProps } from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props: ComponentProps<'div'>) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id ?? '',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}