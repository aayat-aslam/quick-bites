import {useAuth0} from "@auth0/auth0-react";
import {useMutation, useQuery} from "react-query";
import {toast} from "sonner";
import {User} from "@/types.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error("Failed to fetch user");
        }

        return response.json();
    }

    const {
        data: currentUser,
        isLoading,
        error,
    } = useQuery("fetchCurrentUser", getUserRequest);

    if(error){
        toast.error(error.toString());
    }

    return { currentUser, isLoading };
};

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
        isSuccess,
        isError,
        error,
        reset
    } = useMutation(updateUserRequest);

    if(isSuccess){
        toast.success("User profile updated!");
    }

    if(isError){
        // @ts-ignore
        toast.error(error.toString());
        reset();
    }

    return { updateUser, isLoading }
}


