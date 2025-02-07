import {useGetUser, useUpdateUser} from "@/api/UserApi.tsx";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm.tsx";

const UserProfilePage = () =>{
    const { currentUser, isLoading: isGetLoading } = useGetUser();
    const {updateUser, isLoading: isUpdateLoading } = useUpdateUser();

    if(isGetLoading) {
        return <div className="flex flex-col items-center">
            <span>Loading profile...</span>
        </div>
    }

    if(!currentUser){
        return <div className="flex flex-col items-center">
            <h5 className="text-xl font-bold tracking-tight text-orange-600 ">
                Unauthorized!
            </h5>
            <span className="font-bold">Unable to load user profile!</span>
        </div>
    }

    return (
        <div className="space-x-2">
            <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
        </div>
    )
}

export default UserProfilePage;