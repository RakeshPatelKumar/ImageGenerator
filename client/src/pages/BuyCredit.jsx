import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {

  const {user, backendUrl, loadCreditsData, token, setShowLogin} = useContext(AppContext)

  const navigate = useNavigate()

  const initpay = async(order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response)=>{
        try {
          const {data} = await axios.post(backendUrl + '/api/user/verify-razor', response, {headers: {token}})
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    } 
    const rzp = new window.Razorpay(options)
    rzp.open() 
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
      }

      const{data} = await axios.post(backendUrl + '/api/user/pay-razor', {planId}, {headers: {token}})

      if (data.success) {
        initpay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='flex-grow text-center pt-10 mb-10 bg-[#111827] text-[#F9FAFB]'>

        {/* Subscription Header */}
        <button className='mt-20 border border-gray-400 px-8 py-2 rounded-full mb-4 text-[#94A3B8] hover:text-[#F9FAFB] transition-all'>
          Our Subscription
        </button> 
        <h1 className='text-2xl font-bold mb-4 sm:mb-8 text-[#F9FAFB]'>Choose the Subscription</h1>

        {/* Subscription Cards */}
        <div className='flex flex-wrap justify-center gap-4 text-left'>
          {plans.map((item, index)=>(
            <div key={index}
              className='w-56 bg-[#1E293B] drop-shadow-lg border border-[#374151] rounded-lg py-6 px-4 text-[#94A3B8] hover:scale-105 transition-all duration-500'>

              <img src={assets.logo_icon} alt='' width={25} />
              <p className='mt-2 mb-1 font-semibold text-[#F9FAFB] text-sm'>{item.id}</p>
              <p className='text-xs'>{item.desc}</p>
              <p className='mt-3'>
                <span className='text-xl font-medium text-[#F9FAFB]'>₹{item.price}</span> 
                <span className="text-gray-400"> / {item.credits} credits</span>
              </p>

              <button 
                onClick={()=>paymentRazorpay(item.id)} 
                className='w-full bg-[#3B82F6] text-white mt-5 text-xs rounded-full py-2 
                hover:bg-[#2563EB] transition-all duration-300'>
                {user ? 'Purchase' : 'Get Started'}
              </button>

            </div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default BuyCredit
