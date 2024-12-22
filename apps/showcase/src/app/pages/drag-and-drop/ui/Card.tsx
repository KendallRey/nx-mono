import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from '../types';

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: card.id,
    });

    const style = {
        // transform: CSS.Transform.toString(transform),
        transform: transform ? `translate3d(${transform?.x}px, ${transform?.y}px, 0) scaleX(1) scaleY(1)` : undefined,
        transition,
        padding: '0.5rem',
        margin: '0.5rem 0',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'grab',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {card.title}
        </div>
    );
};


export default Card;
