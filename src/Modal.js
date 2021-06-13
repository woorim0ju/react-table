import React, {useState} from 'react';

const Modal = ({selectedData, handleModal, handleEditSubmit}) => {
  const [edited, setEdited] = useState(selectedData);

  const onEditChange = (e) => {
    setEdited({ //문법
      ...edited,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  }

    return (
        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">고객 정보 수정하기</h3>
        <i class="fas fa-times cursor-pointer" onClick={handleModal}></i>
      </div>
      <form onSubmit={onSubmitEdit}>
      <div class="p-3"> 
           
            <div>ID: {edited.id}</div>
            <div>Name: <input className='border-2 border-gray-100' type='text' name='name' value={edited.name} onChange={onEditChange}/></div>
            <div>Email: <input className='border-2 border-gray-100' type='text' name='email' value={edited.email} onChange={onEditChange}/></div>
            <div>Phone: <input className='border-2 border-gray-100' type='text' name='phone' value={edited.phone} onChange={onEditChange}/></div>
            <div>Website: <input className='border-2 border-gray-100' type='text' name='website' value={edited.website} onChange={onEditChange}/></div>
          
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={handleModal}>취소</button>
        <button type='submit' className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">수정</button>
      </div>
      </form> 
    </div>
  </div>
    );
};

export default Modal;