import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
     const [name, setName] = useState(props.name);
     const [role, setRole] = useState(props.role);
     const [img, setImg] = useState(props.img);

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     return (
          <>
               <button onClick={handleShow}  className="block mx-auto m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    + Add Employee
               </button>

               <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
               >
                    <Modal.Header closeButton>
                         <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <form onSubmit={(e) => { 
                                   e.preventDefault(); //e prvent default is used to refresh the page  
                                   
                                   // to set the state to empty string again
                                   setName('');
                                   setRole('');
                                   setImg('');
                                   
                                   props.newEmployee(name, role, img); 
                              }} 
                              id='editModal' 
                              className="w-full max-w-sm">
                              <div className="md:flex md:items-center mb-6">
                                   <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                             Full Name
                                        </label>
                                   </div>
                                   <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder='John Paul' type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>
                                   </div>
                              </div>
                              <div className="md:flex md:items-center mb-6">
                                   <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-role">
                                             Role
                                        </label>
                                   </div>
                                   <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-role" placeholder='Bank Teller' type="text" value={role} onChange={(e)=> setRole(e.target.value)}/>
                                   </div>
                              </div>
                              <div className="md:flex md:items-center mb-6">
                                   <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-role">
                                             Image URL
                                        </label>
                                   </div>
                                   <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="image" placeholder='http://yourlink.com' type="text" value={img} onChange={(e)=> setImg(e.target.value)}/>
                                   </div>
                              </div>
                             
                         </form>
                    </Modal.Body>
                    <Modal.Footer>
                         <button onClick={handleClose} className="bg-slate-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Close
                         </button>
                         <button form='editModal' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                              Add Employee
                         </button>
                    </Modal.Footer>
               </Modal>
          </>
     );
}

export default AddEmployee;