import { AppleClone } from "@/components"

const AppleFlip = () => {
  return (
    <div className="h-[110vh] bg-black scrollbar-hide">
        <AppleClone/>
        <div className='text-white z-50 fixed bottom-36 left-1/2 -translate-x-1/2'>
            <h1 className='font-semibold uppercase'>Scroll to see effect</h1>
            <div className='font-light'>
                <div>The idea is to create scroll interaction with high focus on the product, demo the tech</div>
                <div>Using GSAP</div>
            </div>
        </div>
    </div>
  )
}
export default AppleFlip