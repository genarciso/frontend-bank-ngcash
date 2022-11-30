import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../services";
import { ICreateUserRequest, ICreateUserResponse } from "../services/user/types";

export function useUsers() {
    const navigate = useNavigate();

    const createUserMutation = useMutation((user: ICreateUserRequest) => {
        return api.user.post(user);
    }, {
        onSuccess: ({data}: { data:ICreateUserResponse }) => {
            console.info(data);
            navigate('/login');
        },
        onError: (
            error: {
                response: { 
                    status: number;
                    data: {
                        message: string;
                    } 
                }
            }
        ) => {
            if (error.response.status >= 400 && error.response.status <= 600) {
                console.error(error.response.data.message);
            }
        }
    });


    const createUser = createUserMutation.mutate


    return { createUserMutation, createUser }
}