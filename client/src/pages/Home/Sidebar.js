import React from 'react'

function Sidebar() {
  return (
    <div className='fixed left-0 bottom-0 px-3 sm:static'>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.linkedin.com/in/raj-roshan-singh" >
             <i class="ri-facebook-circle-fill text-2xl text-gray-800"></i></a>

          <a href="https://accounts.google.com/b/0/AddMailService">
            <i class="ri-mail-line text-2xl text-gray-800"></i></a>

          <a href="https://www.linkedin.com">
            <i class="ri-linkedin-box-fill   text-2xl text-gray-800"></i></a>

          <a href="https://github.com/rajroshann">
             <i class="ri-github-fill  text-2xl  text-gray-800"></i> </a>


          <a href="https://www.instagram.com/accounts/login/">
            <i class="ri-instagram-fill  text-2xl text-gray-800"></i></a>

        </div>
        <div className="w-[1px] h-44 bg-[#6f4dcc] sm:hidden" > </div>

      </div>
    </div>
  )
}

export default Sidebar
