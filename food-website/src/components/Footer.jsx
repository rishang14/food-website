import {FaGithubSquare,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
  <div className="max-w-[1520px] m-auto  px-4 py-2 bg-[#24262b]">
    <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
            <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, debitis. Lorem, ipsum dolor. Lorem ipsum dolor sit.</p> 
            <div className=" flex justify-start gap-2 md:w-[75%] my-6">
                <a href="https://github.com/rishang14" target="_blank"><FaGithubSquare size={30}/></a>
                <a href="https://www.linkedin.com/in/rishang-kumar-40ab37272/" target="_blank"><FaLinkedin size={30}/></a>
            </div>
        </div> 
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6> 
            <ul>
                <li className="py-2 text-sm">Up</li>
                <li className="py-2 text-sm">New Delhi</li>
                <li className="py-2 text-sm">Banglore</li>
                <li className="py-2 text-sm">Mumbai</li>
            </ul>
            </div>
            <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6> 
            <ul>
                <li className="py-2 text-sm">Uttrakhand</li>
                <li className="py-2 text-sm">Delhi (Ncr)</li>
                <li className="py-2 text-sm">Bengal</li>
                <li className="py-2 text-sm">Pune</li>
            </ul>
            </div>
            <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6> 
            <ul>
                <li className="py-2 text-sm">Chennai</li>
                <li className="py-2 text-sm">Patna</li>
                <li className="py-2 text-sm">Kolkata</li>
                <li className="py-2 text-sm">Madhya pradesh</li>
            </ul>
            </div>
            </div>
    </div>
  </div>
  )
};

export default Footer;
