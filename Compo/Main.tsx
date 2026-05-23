
import Headercom from './Headercom'
import InputCom from './InputCom'


function HeroSection() {
  return (
    <div className="bg-[url('https://t3.ftcdn.net/jpg/03/79/88/72/360_F_379887242_4VYqK15erU7cVHdeUQNSxq4gZLDP0qRv.jpg')]  bg-center h-screen overflow-hidden">
    
    <Headercom/>

    <div className='flex justify-center items-center h-full'>
        
        <div className='flex flex-col justify-center gap-[30px] items-center bg-blue/80 backdrop-blur-md rounded-[20px] sm:w-[50%] w-[80%] h-[60%]'>
            
            <div className='text-white flex flex-col gap-[10px] justify-center items-center bg-[#161b22] p-[10px] rounded-lg'>
                
                <h1 className='text-green-600 font-mono text-[30px]'>
                    Stop writing "final_final_v2_fix"
                </h1>

                <h2>[ Generate commit messages instantly ]</h2>

            </div>

            <InputCom/>

        </div>
        

    </div>
    

</div>
  )
}

export default HeroSection