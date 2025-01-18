import {Button} from "@/components/ui/button.tsx";
import {Loader2} from "lucide-react";

const LoadingButton = () => {
    return(
        <Button disabled className="bg-orange-600">
            <Loader2 className="mr-2 w-4 animate-spin"/>
            ...Loading
        </Button>
    )
}
 export default LoadingButton;