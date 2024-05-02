import { useQuery } from "react-query";

import { getUser } from "@/shared/api/getUser";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useAuth } from "@/shared/model/store/auth";

export const useUserQuery = () => {
    const { getCookie } = useCookie();
    const { setUser } = useAuth();

    return useQuery({
        queryFn: () => getUser(getCookie("access_token") as string),
        queryKey: ["userDetails", "get"],
        onSuccess: (data) => {
            setUser(data.data);
        },
    });
};