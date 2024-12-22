import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import Card from './Card';
import { Column as ColumnType } from '../types';

interface ColumnProps {
    column: ColumnType;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
    const { setNodeRef, isOver } = useDroppable({ id: column.id });

    const style = {
        padding: '1rem',
        backgroundColor: isOver ? '#e6f7ff' : '#fafafa', // Highlight when over
        border: `2px solid ${isOver ? '#1890ff' : '#ccc'}`, // Accent border when dragging over
        borderRadius: '8px',
        transition: 'all 0.3s ease', // Smooth background and border transition
        boxShadow: isOver ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none', // Subtle shadow on hover
    };

    return (
        <div ref={setNodeRef} style={style}>
            <h3>{column.title}</h3>
            <SortableContext items={[column.id, ...column.cards.map(card => card.id)]}>
                {column.cards.map(card => (
                    <Card key={card.id} card={card} />
                ))}
            </SortableContext>
        </div>
    );
};


export default Column;
