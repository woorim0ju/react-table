import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err=> console.log(err));
  },[]);

  const handleSave = (data) => {
     if (data.id) {
      setInfo(
        info.map(row => data.id === row.id? {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website} : row)
      )
     }else {
    // setInfo((prev) => {
    //   return [ ...prev, {
    //     id: nextId.current,
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     website: data.website
    //   }]
    // });

    setInfo(info => info.concat(
      {id: nextId.current,
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website}
    ))
    nextId.current += 1;
     }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website
    };
    setSelected(selectedData);
  };

  const handleModal = () => {
    setModalOn(!modalOn);
  }

  const handleEditSubmit = (item) => {
    handleSave(item);
    handleModal();

  }

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 목록</div>
      <table className="table-auto border-collapse border border-purple-800 text-sm">
        <thead>
          <tr>
            <th className="border border-indigo-600 px-2">Id.</th>
            <th className="w-1/5 border border-indigo-600 px-2">Name</th>
            <th className="w-1/4 border border-indigo-600 px-2">Email</th>
            <th className="w-1/5 border border-indigo-600 px-2">Phone No.</th>
            <th className="border border-indigo-600 px-2">Website</th>
            <th className="border border-indigo-600 px-2">Edit</th>
            <th className="border border-indigo-600 px-2">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
      </table>
      <Post onSaveData={handleSave}/>
      {modalOn && <Modal selectedData={selected} handleModal={handleModal} handleEditSubmit={handleEditSubmit}/>}
    </div>
  );
};

export default Board;
