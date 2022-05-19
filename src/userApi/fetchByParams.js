import { baseUrl } from "../features/baseUrl"


export const fetchByParams = (params)=>{
    const response = fetch(baseUrl + params)
    .then(res => res.json());
  
    const data = response.then();

    return data;
    
}