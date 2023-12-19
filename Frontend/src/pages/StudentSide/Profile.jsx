import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='container'>
        <div className='pagination-box bg-gray-300 p-4 flex items-center h-9'>  
          <h1 className='font-semibold '>Student</h1>
            <div className="mx-2">&gt;</div>
          <h1 className='font-semibold '>Profile</h1>
        </div>
      
        <div className='name-container pt-4 '>
          <div className='name-box bg-gray-300 h-20 flex items-center px-2  '>
            <div className='profile-icon h-14 w-14 bg-lightBlue-400 rounded-full '></div>
              <div className='justify-between px-2'>
                  <h1 className='font-extrabold px-1'>Beema Beevi M.K</h1>
                    <div className='px-1 pt-1 flex items-center '>
                      <button className='w-20 h-6 bg-slate-500 font-bold text-white  '>Edit</button>
                    </div>
              </div>
          </div>
        </div>

        {/* <div className=''>
        <div className='details-container flex flex-col p-8 '>
          <div className='bg-gray-300 w-1/3 h-96 flex flex-col justify-center items-center '>
            <div className='profile-pic bg-orange-500 w-28 h-36 '></div>
              <div className='flex flex-col items-center pt-2 '>
                <h1 className='email font-semibold '>mariyam@gmail.com</h1>
              <h1 className='reg font-semibold'>Reg No. 191445</h1>
            </div>
          </div>

        <div className=' flex justify-end items-center pt-4'>
          <div className='details bg-gray-300 w-1/3 h-96  '></div>  
        </div> 
        </div>
        </div> */}


<div className='pt-11 flex flex-row  w-full gap-3'>
                
                <div className='mx-8 bg-gray-300 w-1/3 h-96 flex flex-col justify-center items-center '>
                    <div className='profile-pic bg-orange-500 w-28 h-36 '></div>
                    <div className='flex flex-col items-center pt-2 '>
                        <h1 className='email font-semibold '>mariyam@gmail.com</h1>
                        <h1 className='reg font-semibold'>Reg No. 191445</h1>
                    </div>
                </div>

                <div className='mx-8 bg-gray-300 w-2/3 h-96 flex flex-col justify-center items-center '> 
                    <div className='flex flex-col items-center pt-2 '>
                        <h1 className='email font-semibold '>mariyam@gmail.com</h1>
                        <h1 className='reg font-semibold'>Reg No. 191445</h1>
                    </div>
                </div>
              
   </div>

        </div>
    </div>
  )
}

export default Profile
