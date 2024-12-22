import NxWelcome from './nx-welcome';
import {DndContext, DragEndEvent, UniqueIdentifier, useDraggable, useDroppable} from '@dnd-kit/core';

import { ComponentProps, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Draggable } from '../components/Draggable';
import { Droppable } from '../components/Droppable';
import DragAndDropPage from './pages/drag-and-drop/DragAndDropPage';


export function App() {


  return (
    <div>
      <NxWelcome title="showcase" />
      <div className='flex gap-4'>
      <DragAndDropPage/>
      </div>
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
