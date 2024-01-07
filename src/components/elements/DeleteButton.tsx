import { RiDeleteBin5Fill } from 'react-icons/ri'

interface DeleteButtonProps {
  onClick: () => void
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  const handleDelete = (e: any) => {
    e.preventDefault()
    onClick()
  }

  return (
    <button className='text-red-500' onClick={handleDelete} >
      <RiDeleteBin5Fill size={20} />
    </button>
  )
}
