import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">AstraUI</h1>
      <p className="py-6">A simple , installation free ,copy paste UI components library for tailwind css JSX components.</p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-accent" onClick={()=>document.getElementById('my_modal_1').showModal()}>Explore</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Development</h3>
    <p className="py-4">This Project is under Development</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Okay</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    
  </div>
  
</div>

</>
  )
}

export default Hero
