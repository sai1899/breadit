"use client";

import { useState } from "react";
import { Button } from "./Button";
import { useToast } from "./use-toast";
import { signIn } from "next-auth/react";
import { Icons } from "../Icon";

const UserAuthForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const loginWithGoogle = async () => {
        setIsLoading(true);
        console.log("Attempting to log in");

        try {
            // Handle the sign-in process
            await signIn('google');
            
        }
        catch(error){
            toast({
                variant: "destructive",
                title: "There is a error",
                description: "There is a error login with Google"
              })
            
        }       
        
        finally {
            setIsLoading(false);
        }
    }
    

    // The return type of the component is JSX.Element
    return (
        <div className='flex justify-center'>
            <Button 
                size='sm' 
                className="w-[300px]" 
                onClick={loginWithGoogle}
                isLoading={isLoading}
            >
             {isLoading ? null:<Icons.google className="h-4 w-4 mr-2"/> }   Google
            </Button>
        </div>
    );
};

export default UserAuthForm;
