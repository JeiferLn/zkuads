import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SignupForm from './SignupForm'
import SignupImage from './SignupImage'
import { useTranslations } from 'next-intl'

interface SignupModalProps {
  opened: boolean
  handleClose: () => void
  handleCreate: () => void
}

function SignupModal({opened, handleClose, handleCreate} : SignupModalProps) {
  const FormTranslation = useTranslations('Form.Register')

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  } , [opened]);

  return (
    <AnimatePresence>
      {opened && (
        <div className="w-screen h-screen fixed left-0 top-0 z-20 flex justify-center items-center">
          <div
            className="w-screen h-screen absolute top-0 left-0 bg-black/65 backdrop-blur-lg"
            onClick={handleClose}
          />

          <motion.div
            className="w-[80%] flex justify-center items-center bg-[#021735] pr-10 rounded-2xl z-30 gap-5"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.1 } }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <div className='w-[50%] h-[90vh]'>
              <SignupImage />
            </div>
            <div className='lg:w-2/4 lg:px-5 lg:py-10 relative mt-16 lg:mt-0 overflow-y-auto'>
                <h2 className='text-3xl lg:text-4xl mb-4 mt-4 lg:mt-0 lg:block'>{FormTranslation('Title')}</h2>
                <p className=' lg:block text-sm mb-14 opacity-70'>{FormTranslation('Body')}</p>
                <SignupForm handleClose={handleClose} handleCreate={handleCreate}/>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SignupModal
