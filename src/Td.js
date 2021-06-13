import React from 'react';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className='border border-indigo-600 px-2 py-1.5'>
            <td className='border border-indigo-600 py-1.5 text-center'>{item.id}</td>
            <td className='border border-indigo-600 px-3 py-1.5'>{item.name}</td>
            <td className='border border-indigo-600 px-3 py-1.5'>{item.email}</td>
            <td className='border border-indigo-600 px-3 py-1.5'>{item.phone}</td>
            <td className='border border-indigo-600 px-3 py-1.5'>{item.website}</td>     
            <td onClick={onEdit} className='border border-indigo-600 py-1.5 text-center text-purple-400 cursor-pointer show-modal'><i class="far fa-edit"></i></td>
            <td onClick={onRemove} className='border border-indigo-600 py-1.5 text-center text-purple-400 cursor-pointer'><i class="far fa-trash-alt"></i></td>
        </tr>
        </>
    )
};

export default Td;