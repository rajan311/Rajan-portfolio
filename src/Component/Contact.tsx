import react from 'react';
function Contact() {
  return (
    <>
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Contact Me</h1>
     
     <div className='flex flex-col items-center mt-10'>
     
        <a 
        href="https://www.linkedin.com/in/rajan-vishwakarma-695174280/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block text-center"
      >
        linkedin
      </a>
      <br/>

              <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=se.rajanvishwakarma@mail.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block text-center"
      >
        Gamil
      </a>

     

     </div>
     <div className='flex flex-col items-center mt-10'>
      <input type="text" placeholder='Enter your name' className='border border-gray-300 p-2 rounded mt-5 w-full max-w-md' />
      <input type="text" placeholder='Enterprise/Company Name' className='border border-gray-300 p-2 rounded mt-5 w-full max-w-md' />
      <input type="massege" placeholder='Massege' className='border border-gray-300 p-2 rounded mt-5 w-full max-w-md' />
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>Submit</button>

     </div>
    </div>
    </>
  );
}
export default Contact;