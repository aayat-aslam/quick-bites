import {useGetUser, useUpdateUser} from "@/api/UserApi.tsx";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm.tsx";

const UserProfilePage = () =>{
    const { currentUser, isLoading: isGetLoading } = useGetUser();
    const {updateUser, isLoading: isUpdateLoading } = useUpdateUser();

    if(isGetLoading) {
        return <span>Loading...</span>;
    }

    if(!currentUser){
        return <span>Unable to load user profile</span>
    }

    return(
        <div className="space-x-2">
            <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
        </div>
    )
}

export default UserProfilePage;