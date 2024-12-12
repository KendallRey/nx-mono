import NxWelcome from './nx-welcome';
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';

import { ComponentProps, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Draggable } from '../components/Draggable';
import { Droppable } from '../components/Droppable';


export function App() {

  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );
  
  function handleDragEnd(event: any) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <div>
      <NxWelcome title="showcase" />
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
        ))}
      </DndContext>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
