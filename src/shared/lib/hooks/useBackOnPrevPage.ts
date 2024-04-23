import { useNavigate } from "react-router";

export const useBackOnPrevPage = () => {
    const navigate = useNavigate();

    const backOnPrevPage = () => {
        navigate(-1);
    };

    return { backOnPrevPage };
};