import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Mytable from './Mytable';


const Heading = () => {

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h3 className="text-lg font-bold text-gray-900">LeaderBoards</h3>
        
      </div>

      <div className="mt-4 mb-4">
          <hr className="border-gray-300" />
        </div>
     
        <div className="flex justify-center">
        <h3 className="text-lg font-bold text-gray-900">Basic Backtest</h3>
        
      </div>

        <div>
            <Mytable/>
        </div>

    </div>
  );
};

export default Heading;
