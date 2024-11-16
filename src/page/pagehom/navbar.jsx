import { NavLink } from "react-router-dom";
import 'animate.css';

function Navbar() {
    return (<>

        <div className="w-[100%] h-[15vh] animate__animated animate__fadeInDown bg-none fixed top-0 left-0 right-0 z-10 flex items-center justify-center bg-[#00076e45] bg-blur-sm">

            <div className="w-[100px] flex items-center relative right-[490px] top-6">
                <div className="h-5 border-[1px] mr-2"></div>
                <NavLink to='/Music' className='active:text-[#61C9D3] text-white'><h1 className=" font-serif ">Music</h1></NavLink>
                <div className="h-5 border-[1px] ml-2"></div>
                <NavLink to='/Film' className='active:text-[#61C9D3] text-white'><h1 className=" font-serif ml-2">Film...</h1></NavLink>
                <div className="h-5 border-[1px] ml-2"></div>
            </div>

            <NavLink to='/'><div id="imgnikname"></div></NavLink>

            <div className="w-[80px] h-[80px] cursor-pointer relative left-[500px] flex items-center">
                <svg width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#52cccc" d="M6.5,13.25v-5.5c0.391-0.391,0.609-0.609,1-1h32.75c0.391,0.391,0.609,0.609,1,1v5.5c-0.391,0.391-0.609,0.609-1,1H7.5C7.109,13.859,6.891,13.641,6.5,13.25z" opacity=".15" />
                    <path fill="#52cccc" d="M6.5,40.25v-5.5c0.391-0.391,0.609-0.609,1-1h32.75c0.391,0.391,0.609,0.609,1,1v5.5c-0.391,0.391-0.609,0.609-1,1H7.5C7.109,40.859,6.891,40.641,6.5,40.25z" opacity=".15" />
                    <path fill="#52cccc" d="M6.5,26.75v-5.5c0.391-0.391,0.609-0.609,1-1h32.75c0.391,0.391,0.609,0.609,1,1v5.5c-0.391,0.391-0.609,0.609-1,1H7.5C7.109,27.359,6.891,27.141,6.5,26.75z" opacity=".15" />
                    <path fill="#52cccc" d="M41.5,23.27v-2.123L40.354,20H16l-1-1H6.982L5.25,20.732v3.018l1,1.005v2.099L7.396,28H32l1,1h7.768l1.732-1.732V24.25L41.5,23.27z M6.75,26.646v-5.293L7.604,20.5h32.543L41,21.354v5.293L40.146,27.5H7.604L6.75,26.646z" />
                    <path fill="#52cccc" d="M42.134,6.866l-1-1L40.768,5.5H6.982L5.25,7.232V11l1,1v1.354L7.396,14.5H24.82l1.18,1h13.354l2.146-2.146V10.75l1-1V7.232L42.134,6.866z M41,13.146L40.146,14H7.604L6.75,13.146V7.854L7.604,7h32.543L41,7.854V13.146z" />
                    <path fill="#52cccc" d="M41.5,36v-1.354L40.354,33.5H23.18l-1.18-1H8.396L6.25,34.646v2.604l-1,1v2.518l0.366,0.366l1,1L6.982,42.5h33.786l1.732-1.732V37L41.5,36z M6.75,34.854L7.604,34h32.543L41,34.854v5.293L40.146,41H7.604L6.75,40.146V34.854z" />
                </svg>

            </div>

        </div>

    </>);
}

export default Navbar;