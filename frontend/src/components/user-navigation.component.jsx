import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";
import { useContext } from "react";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel=()=>{
    const signOutuser=()=>{
        removeFromSession("user");
        setUserAuth({access_token:null})
    }
    const{userAuth:{username},setUserAuth}=useContext(UserContext);
    return(
        <AnimationWrapper 
        transition={{duration:0.2}} className="absolute right-0 z-50"
        >
            <div className="bg-white absolute right-0 border border-grey w-60 duration-200 ">
            <Link to="/editor" className="flex gap-2 link md:hidden pl-8 py-4">
                    <i className="fi fi-rr-file-edit">
                    </i><p>Write</p>
                </Link>
                <Link to={`/user/${username}`} className="link pl-8 py-4 right-10 hidden">
                    Profile
                </Link>
                <Link to="/dashboard/blogs" className="link pl-8 py-4 hidden">
                    Dashboard
                </Link>
                <Link to="/settings/edit-profile" className="link pl-8 hidden py-4">
                    Settings
                </Link>
                <span className="absolute boredr-t border-grey w-[100%]">
                </span>
                <button className="text-left p-4 hover:bg-grey w-full pl-8 py-4" onClick={signOutuser}><h1 className="font-bold text-xl mg-1">Sign Out</h1>
                <p className="text-dark-grey">@{username}</p></button>


            </div>

        </AnimationWrapper>
    )
}
export default UserNavigationPanel;