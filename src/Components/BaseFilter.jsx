import React from 'react';
import './BaseFilter.css';

const BaseFilter = props => {
  return (
    <nav className='filter-nav'>
    <button 
      onClick={() => props.onUpdate('all')} className={props.current === 'all' ? 'active' : ''}
      >all</button>
      <button 
      onClick={() => props.onUpdate('completed')} className={props.current === 'completed' ? 'active' : ''}
      >completed</button>
      <button 
      onClick={() => props.onUpdate('pending')} className={props.current === 'pending' ? 'active' : ''}
      >pending</button>
    </nav>
  );
};

export default BaseFilter;