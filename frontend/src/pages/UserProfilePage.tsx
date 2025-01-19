import { useUpdateUser} from "@/api/UserApi.tsx";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm.tsx";

const UserProfilePage = () =>{
    const {updateUser, isLoading } = useUpdateUser();

    return(
        <div className="space-x-2">
            <UserProfileForm onSave={updateUser} isLoading={isLoading}/>
        </div>
    )
}

export default UserProfilePage;