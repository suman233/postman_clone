// import React from 'react';
// import { useForm } from 'react-hook-form';

// interface RequestFormProps {
//   onSubmit: (data: any) => void;
// }

// const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {
//   const { register, handleSubmit } = useForm();

//   return (
//     <Container>
//       <Typography sx={{ my: 5 }}>Fetch Your API Response</Typography>
//       <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
//         <FormControl fullWidth>
//           <InputLabel id="requestMethod">HTTP Method</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={age}
//             label="Age"
//             onChange={handleChange}
//           >
//           <input type="text" {...register('url', { required: true })} />
//             <MenuItem value={10}>Post</MenuItem>
//             <MenuItem >Get</MenuItem>
//             <MenuItem value={30}>Put</MenuItem>
//             <MenuItem value={30}>Delete</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           URL:
//           <select>

//           </select>
// <input type="text" {...register('url', { required: true })} />
//         </label>
//         <button type="submit">Send Request</button>
//       </form>
//     </Container >
//   );
// };

// export default RequestForm;

import React from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios, { AxiosRequestConfig } from 'axios';

// interface RequestFormProps {
//   onSubmit: (config: AxiosRequestConfig) => void;
// }
interface RequestFormProps {
  onSubmit: (data: any) => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <Typography sx={{ my: 5 }}>Fetch Your API Response</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Method:
          {/* <select {...register('method')}> */}
          <select {...register('url')}>
            <option value="">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PUT">DELETE</option>
            {/* Add other HTTP methods as needed */}
          </select>
        </label>
        <label>
          URL:
          <input type="text" {...register('url', { required: true })} />
        </label>
        <button type="submit">Send Request</button>
        
        <div style={{ display: 'flex' }}>
          <label>
            Headers (JSON):
            <textarea {...register('headers')} />
          </label>
          <label>
            Query Parameters (JSON):
            <textarea {...register('queryParams')} />
          </label>
          <label>
            JSON Data:
            <textarea {...register('jsonData')} />
          </label>
        </div>

      </form>
    </Container>
  );
};

export default RequestForm;
