import RequestForm from '@/components/RequestForm/RequestForm'
import ResponseViewer from '@/components/ResponseTab/ResponseField'
import { Container, Typography } from '@mui/material'
import axios, { AxiosRequestConfig } from 'axios'
import React, { useState } from 'react'


const apinetwork = () => {
    // const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {

    const [response, setResponse] = useState<any>(null);

    const handleSubmit = async (data: any) => {
        try {
            const apiResponse = await axios.get(data.url);
            setResponse(apiResponse);
        } catch (error) {
            console.error('Error:', error);
            setResponse(null);
        }
    };

    // const handleSubmit = async (data: any) => {
    //     try {
    //         const config: AxiosRequestConfig = {
    //             method: data.method || 'GET',
    //             url: data.url,
    //             headers: JSON.parse(data.headers) || '',
    //             params: JSON.parse(data.queryParams) || '',
    //             data: JSON.parse(data.jsonData) || '',
    //         };
    //         const resp = await axios(config)
    //         // setResponse(resp.config.data ? resp : Object.assign({}, resp, {config}));
    //         setResponse(resp.config)
    //         // onSubmit(response.config); // You can pass additional data or manipulate the response here if needed
    //         console.log('resp', resp);

    //     } catch (error) {
    //         setResponse(error);
    //         console.error('Error:', error);
    //     }
    // };
    return (
        <div>
            <Container>
                <RequestForm onSubmit={handleSubmit} />
                <ResponseViewer response={response} />
            </Container>
        </div>
    )
}

export default apinetwork