import {useAuth0} from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                {/*<CircleUserRound className="text-orange-500"/>*/}
                <img className="w-12 h-12 rounded-full border-2 hover:border-orange-500" src={user?.picture} alt="User Pic"/>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-orange-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button
                        onClick={()=> logout()}
                        className="flex font-bold bg-orange-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;