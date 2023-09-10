import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryStructure = ({label, icon: Icon}) => {
    const [params, setParams] = useSearchParams();
    // const value = params.get('category');
    const navigate = useNavigate()

    const handleCategory = () => {
        let query = {};
        if(params){
            query = queryString.parse(params.toString());
        }
        const newQuery = {
            ...query,
            category: label,
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: newQuery,
        },
        {skipNull: true}
        )
        navigate(url)
    }
    return (
        <div onClick={handleCategory} className="flex flex-col items-center justify-center gap-2 px-3 border-b-2 hover:text-gray-900 border-transparent text-gray-700">
    <Icon size={20} /> 
    <div className="text-sm font-medium">{label}</div>           
        </div>
    );
};

export default CategoryStructure;