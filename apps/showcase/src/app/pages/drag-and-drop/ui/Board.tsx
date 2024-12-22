import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import Column from './Column';
import { Column as ColumnType, Card } from '../types';

const initialData: ColumnType[] = [
    {
        id: 'todo',
        title: 'To Do',
        cards: [
            { id: '1', title: 'Write project documentation' },
            { id: '2', title: 'Fix login page bug' },
            { id: '3', title: 'Create wireframes for new feature' },
            { id: '4', title: 'Plan sprint retrospective' },
        ],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        cards: [
            { id: '5', title: 'Build authentication API' },
            { id: '6', title: 'Design dashboard UI' },
            { id: '7', title: 'Test deployment scripts' },
        ],
    },
    {
        id: 'done',
        title: 'Done',
        cards: [
            { id: '8', title: 'Update team guidelines' },
            { id: '9', title: 'Set up CI/CD pipeline' },
        ],
    },
];

const Board: React.FC = () => {
    const [columns, setColumns] = useState<ColumnType[]>(initialData);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) {
            console.warn('Dropped outside of any valid drop target.');
            return;
        }
    
        const activeColumn = columns.find(col => col.cards.some(card => card.id === active.id));
        if (!activeColumn) {
            console.warn('Active card not found in any column.');
            return;
        }
    
        const targetCard = activeColumn.cards.find(card => card.id === over.id);
        const targetColumn = columns.find(col =>
            col.id === over.id || col.cards.some(card => card.id === over.id)
        );
    
        if (!targetColumn) {
            console.warn('Target column not found.');
            return;
        }
    
        const activeCardIndex = activeColumn.cards.findIndex(card => card.id === active.id);
        const targetCardIndex = targetCard
            ? targetColumn.cards.findIndex(card => card.id === targetCard.id)
            : targetColumn.cards.length; // If over is the column itself, append at the end
    
        if (activeColumn.id === targetColumn.id) {
            // Reordering within the same column
            const reorderedCards = arrayMove(activeColumn.cards, activeCardIndex, targetCardIndex);
            activeColumn.cards = reorderedCards;
        } else {
            // Moving to another column
            const [movedCard] = activeColumn.cards.splice(activeCardIndex, 1);
            targetColumn.cards.splice(targetCardIndex, 0, movedCard);
        }
    
        setColumns([...columns]);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {columns.map(column => (
                    <SortableContext key={column.id} items={column.cards.map(card => card.id)}>
                        <Column column={column} />
                    </SortableContext>
                ))}
            </div>
        </DndContext>
    );
};

export default Board;
