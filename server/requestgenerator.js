import axios from "axios";



export default async function Process(url,type,token,queryparam,body){

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const Parameters = {data:body,query:queryparam}

    switch (type) {
        case 'POST':
            return axios.post( 
                url,
                Parameters,
                config
            );
        case 'GET':
            return axios.get( 
                url,
                Parameters,
                config
            );
        
        default:
            break;
    }

    axios.post( 
      url,
      Parameters,
      config
    ).then(console.log).catch(console.log);

};