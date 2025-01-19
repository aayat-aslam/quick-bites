import {useAuth0} from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import {useMutation} from "react-query";
type CreateUserRequest = {
    auth0Id: string;
    email: string;
    picture?: string;
};

export const useCreateUser = ()=> {

    const { getAccessTokenSilently } = useAuth0();

    const createUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });

        if(!response.ok){
            throw new Error("Failed to create user");
        }
    };

    const {
        mutateAsync: createUser,
        isLoading,
        isError,
        isSuccess
    } = useMutation(createUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    };
};


type updateUserType = {
    name: string,
    addressLine1: string,
    city: string,
    country: string
}

export const useUpdateUser = () =>{

    const { getAccessTokenSilently } = useAuth0();
    const updateUserRequest = async (formData : updateUserType) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/user`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "Application/json"
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            throw new Error("Failed to update user");
        }
    }

    const {
        mutateAsync: updateUser,
        isLoading,
    } = useMutation(updateUserRequest);

    return { updateUser, isLoading }
}


