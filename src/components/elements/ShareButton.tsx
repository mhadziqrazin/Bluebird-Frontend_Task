'use client'

import toast from "react-hot-toast"
import { FaShareFromSquare } from "react-icons/fa6"

export const ShareButton: React.FC = () => {
  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    toast.success('Link copied to clipboard')
  }

  return (
    <button onClick={handleShare}>
      <FaShareFromSquare size={20} />
    </button>
  )
}
