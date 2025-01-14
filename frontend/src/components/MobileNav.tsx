import {useAuth0} from "@auth0/auth0-react";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Menu} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import MobileNavLink from "@/components/MobileNavLink.tsx";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <div className="flex items-center px-3 font-bold gap-2">
                            <img className="w-12 h-12 rounded-full border-2 border-orange-500" src={user?.picture} alt="User Pic"/>
                            {user?.email}
                        </div>
                    ) : (
                        <span> Welcome to Quick Bites</span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLink/>
                    ) : (
                        <Button
                            className="flex-1 font-bold bg-orange-500"
                            onClick={async () => await loginWithRedirect()}
                        >
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;